// 會計精靈圖鑑：依 data/chapters.js 與 data/spirits.js 畫出頁面。
// 新增內容只需要改 data/，不需要改這支程式（見 AGENTS.md 第 2、3 節）。
(function () {
  const CH = window.CHAPTERS || [];
  const SP = window.SPIRITS || [];
  const byId = Object.fromEntries(SP.map(s => [s.id, s]));
  const EL_NAME = { asset: "資產", liability: "負債", equity: "權益", revenue: "收入", expense: "費用" };
  const esc = t => String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const img = (s, f) => `assets/spirits/${s.id}/${f}.webp`;

  function card(s) {
    return `<a class="card el-${s.element}" href="spirit.html?id=${s.id}">
      <div class="art"><img src="${img(s, "main")}" alt="${esc(s.alt)}" loading="lazy"></div>
      <div class="body">
        <div class="meta"><span>No.${s.no}</span><span class="badge">${EL_NAME[s.element]}</span></div>
        <h3>${esc(s.name)}</h3>
        <div class="title">${esc(s.title)}・屬性 ${esc(s.attribute)}</div>
        <p class="say">「${esc(s.catchphrase)}」</p>
        <span class="go">查看圖鑑 →</span>
      </div></a>`;
  }

  function renderHome() {
    const total = SP.length;
    const chapEl = document.getElementById("chapter-list");
    chapEl.innerHTML = CH.map(c => {
      const on = c.status === "published";
      const thumbs = on
        ? c.spirits.map(id => byId[id]).filter(Boolean).map(s => `<img src="${img(s, "main")}" alt="${esc(s.name)}">`).join("")
        : `<span class="q">?</span><span class="q">?</span>`;
      return `<a class="chapter ${on ? "" : "coming"}" href="${on ? "#" + c.id : "#chapters"}">
        <span class="tag ${on ? "on" : "off"}">${on ? `已收錄 ${c.spirits.length} 隻` : "即將登場"}</span>
        <h3>${esc(c.title)}</h3>
        <div class="formula">${esc(c.formula)}</div>
        <p>${esc(c.teaser)}</p>
        <div class="thumbs">${thumbs}</div></a>`;
    }).join("");

    const secEl = document.getElementById("chapter-sections");
    secEl.innerHTML = CH.filter(c => c.status === "published").map(c => `
      <section id="${c.id}">
        <div class="sec-title"><h2>${esc(c.title)}</h2><p>${esc(c.subtitle)}｜${esc(c.formula)}</p></div>
        <div class="grid">${c.spirits.map(id => byId[id]).filter(Boolean).map(card).join("")}</div>
      </section>`).join("");

    const cnt = document.getElementById("count");
    if (cnt) cnt.textContent = total;
  }

  function renderDetail() {
    const id = new URLSearchParams(location.search).get("id");
    const s = byId[id];
    const root = document.getElementById("detail");
    if (!s) {
      root.innerHTML = `<div class="panel"><h2>找不到這隻精靈</h2><p>可能還在海底睡覺。<a href="index.html">回到圖鑑首頁</a></p></div>`;
      return;
    }
    document.title = `No.${s.no} ${s.name}｜會計精靈圖鑑`;
    root.className = `detail el-${s.element}`;
    const chap = CH.find(c => c.id === s.chapter);
    const list = chap ? chap.spirits : SP.map(x => x.id);
    const i = list.indexOf(s.id);
    const prev = byId[list[i - 1]], next = byId[list[i + 1]];

    root.innerHTML = `
      <a class="back" href="index.html#${s.chapter}">← 回到${chap ? esc(chap.title) : "圖鑑"}</a>
      <div class="profile">
        <div class="art"><img src="${img(s, "main")}" alt="${esc(s.alt)}"></div>
        <div>
          <div class="no">No.${s.no}</div>
          <h1>${esc(s.name)}</h1>
          <div class="title">${esc(s.title)}</div>
          <div class="chips">
            <span class="chip">要素 <b>${EL_NAME[s.element]}</b></span>
            <span class="chip">屬性 <b>${esc(s.attribute)}</b></span>
            <span class="chip">身高 ${esc(s.height)}</span>
            <span class="chip">體重 ${esc(s.weight)}</span>
          </div>
          <div class="quote">💬「${esc(s.catchphrase)}」</div>
          <p>${esc(s.intro)}</p>
          <p style="color:var(--ink-soft);font-size:14px">屬性的由來：${esc(s.attributeReason)}</p>
        </div>
      </div>

      <div class="panels">
        <div class="panel">
          <h2>會計定義</h2>
          <p>${esc(s.definition)}</p>
          <div class="dc">
            <div><small>正常餘額</small><strong>${esc(s.normalBalance)}</strong></div>
            <div><small>增加記</small><strong>${esc(s.increaseSide)}</strong></div>
            <div><small>減少記</small><strong>${esc(s.decreaseSide)}</strong></div>
          </div>
        </div>
        <div class="panel acc">
          <h2>主要科目</h2>
          ${s.accounts.map(a => `<h3>${esc(a.group)}</h3><ul>${a.items.map(x => `<li>${esc(x)}</li>`).join("")}</ul>`).join("")}
        </div>
        <div class="panel wide">
          <h2>CPA 考點</h2>
          <div class="tip">📌 ${esc(s.examTip)}</div>
        </div>
        <div class="panel wide quiz">
          <h2>精靈小考</h2>
          <div class="q">${esc(s.quiz.question)}</div>
          <div class="opts">${s.quiz.options.map((o, k) => `<button data-k="${k}">(${"ABCD"[k]}) ${esc(o)}</button>`).join("")}</div>
          <div class="explain" id="explain"></div>
        </div>
        <div class="panel wide">
          <h2>表情集</h2>
          <div class="faces">${s.expressions.map(e => `<figure><img src="${img(s, e.file)}" alt="${esc(s.name)}・${esc(e.label)}" loading="lazy"><figcaption>${esc(e.label)}</figcaption></figure>`).join("")}</div>
        </div>
      </div>

      <div class="pager">
        ${prev ? `<a href="spirit.html?id=${prev.id}">← No.${prev.no} ${esc(prev.name)}</a>` : "<span></span>"}
        ${next ? `<a href="spirit.html?id=${next.id}">No.${next.no} ${esc(next.name)} →</a>` : "<span></span>"}
      </div>`;

    const btns = root.querySelectorAll(".opts button");
    btns.forEach(b => b.addEventListener("click", () => {
      const k = Number(b.dataset.k), ok = k === s.quiz.answer;
      btns.forEach(x => { x.disabled = true; if (Number(x.dataset.k) === s.quiz.answer) x.classList.add("right"); });
      if (!ok) b.classList.add("wrong");
      const ex = document.getElementById("explain");
      ex.innerHTML = `<b>${ok ? "答對了！🎉" : `答案是 (${"ABCD"[s.quiz.answer]})`}</b><br>${esc(s.quiz.explain)}`;
      ex.classList.add("show");
    }));
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("chapter-list")) renderHome();
    if (document.getElementById("detail")) renderDetail();
  });
})();
