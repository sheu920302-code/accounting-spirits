# AGENTS.md — 會計精靈圖鑑・專案規則

> 給 AI 協作者（Claude、Codex、Gemini 等）與人類協作者的「員工手冊」。
> **每次開工前先讀完本檔，再讀 `NOTES.md`（目前進度與待辦）。**
> 規則有改變時，同步更新本檔，並在 `NOTES.md` 的「變更紀錄」記一筆。

---

## 1. 這個專案在做什麼

《會計精靈圖鑑》把會計的要素與科目變成住在「海洋王國」的精靈，做成一本可以在瀏覽器翻閱的圖鑑網站。

- **給誰看**：剛學會計的大學生、準備會計師考試的考生。
- **要達成什麼**：看完一隻精靈，就記住一個會計要素的**定義、借貸方向、常見科目和一個考點**。
- **怎麼長大**：依財務報表分「篇」，一篇一篇收錄新的精靈。
  - 第一篇：資產負債表篇（資產、負債、權益）✅
  - 第二篇：損益表篇（收益、費損）✅
  - 第三篇：現金流量表篇（營業、投資、籌資活動）✅
  - 之後：權益變動表篇……

作者：國立臺北大學 會計碩二 許安琪。網站以 GitHub Pages 公開。

---

## 2. 資料夾結構

```
accounting-spirits/            ← repo 根目錄 = 網站根目錄
├── index.html                 ← 首頁：會計恆等式主視覺、篇章列表、各篇精靈卡片
├── spirit.html                ← 精靈詳細頁（共用模板），用網址參數 ?id=<slug> 決定顯示哪一隻
├── AGENTS.md                  ← 本檔（專案規則）
├── NOTES.md                   ← 目前進度、下次從哪開始、待辦、變更紀錄
├── README.md                  ← 給 GitHub 訪客看的簡介
├── .nojekyll                  ← 讓 GitHub Pages 直接提供靜態檔
├── data/
│   ├── chapters.js            ← 篇章資料（唯一來源）
│   └── spirits.js             ← 精靈資料（唯一來源）
├── assets/
│   ├── css/style.css          ← 全站樣式與色票
│   ├── js/app.js              ← 讀取 data/ 並畫出首頁與詳細頁
│   └── spirits/<slug>/        ← 每隻精靈一個資料夾
│       ├── main.webp              主圖（必備）
│       └── <表情>.webp            表情圖 3 張（必備），檔名用英文：happy、rest、thinking…
└── reference/
    └── art-sources/           ← AI 生成的原始大圖，只保存不修改，網頁不直接引用
```

**核心原則：內容和版面分開。**
新增或修改內容，只改 `data/*.js` 和 `assets/spirits/`；`index.html`、`spirit.html`、`app.js`、`style.css` 是共用模板，**不要為了某一隻精靈去改模板**。若真的需要新版面元件，先問使用者，同意後改模板並記錄在 `NOTES.md`。

---

## 3. 新增一隻精靈（標準作業流程）

收到「新增○○精靈」時，照順序做，**不可跳步**：

1. **確認篇章**：這隻精靈屬於哪一篇？篇章不存在就先照第 4 節新增篇章。
2. **先寫內容稿給使用者確認**：在對話中列出第 6 節的所有欄位內容（名字、會計定義、借貸方向、主要科目、考點、三題小考）。使用者說「OK」或「定稿」後才繼續。
3. **準備圖片**：
   - 用第 8 節的「生圖提示詞模板」請使用者生成角色大圖（一張圖含主圖＋3 個表情）。
   - 原始大圖存進 `reference/art-sources/`：整篇一張圖命名為 `<chapter-id>-sheet.png`；一隻一張圖命名為 `<chapter-id>-<element>-sheet.png`（例：`income-statement-revenue-sheet.png`）。
   - 裁切出主圖與 3 張表情圖，轉成 `.webp`，放進 `assets/spirits/<slug>/`。
   - 裁切時去掉圖上 AI 生成的文字與框線，只留角色。
4. **寫入資料**：在 `data/spirits.js` 的陣列中新增一筆，欄位依第 6 節規格，`no` 接續最大編號。
5. **更新篇章**：在 `data/chapters.js` 對應篇章的 `spirits` 陣列加入新 slug。
6. **驗收**：照第 10 節的驗收清單逐項檢查。
7. **更新 `NOTES.md`**：寫下做了什麼、還缺什麼。

> 不需要手動改首頁：首頁卡片、篇章進度、上一隻／下一隻的連結，都由 `app.js` 依資料自動產生。

---

## 4. 新增一篇（例如「損益表篇」）

1. 在 `data/chapters.js` 新增或修改一筆：`id`（英文 slug）、`title`、`subtitle`、`statement`（對應報表）、`status`、`spirits`、`teaser`。
2. `status` 只有兩種值：
   - `"coming"`：首頁顯示「即將登場」與問號剪影，用來預告。
   - `"published"`：至少收錄 1 隻精靈後才能改成這個值。
3. 每一篇都要有一句「篇章恆等式」或「核心公式」放在 `formula`，例如：
   - 資產負債表篇：`資產 ＝ 負債 ＋ 權益`
   - 損益表篇：`收益 － 費損 ＝ 本期淨利`
4. 篇章的精靈依序完成第 3 節流程。

---

## 5. 角色設計規則

### 世界觀
- 所有精靈住在「海洋王國」，一起守護企業的財務平衡。
- 每篇的精靈之間要有關係，而且關係要對應會計觀念。例如資產負債表篇的三隻精靈，就是靠「資產＝負債＋權益」維持王國平衡。

### 命名
- **中文名**：兩到三個字的海洋或夢幻意象，加上一個角色稱呼（動物、幻獸或擬人稱呼），共三到四個字。例：海晶鹿、貝綴兔、星籟喵、盈流寶麟、勤耗客。
- **英文 slug**：用英文意譯，全小寫、用連字號，例：`sea-crystal-deer`、`shell-bunny`、`star-chime-cat`。
- **稱號**：「○○精靈」，○○是它代表的會計要素或科目，例：資產精靈。
- 同一篇裡的動物不可重複。

### 屬性
每隻精靈有一個屬性（水、風、光、火、土、冰、花、雷……），屬性只是設定，但要寫一句和會計意義連得上的理由，放在 `attributeReason`。

### 原創性（硬性規定）
- **禁止**使用任何既有作品的角色、名稱、標誌或明顯造型特徵，例如寶可夢、三麗鷗、迪士尼等。
- 生圖提示詞裡**不可**出現既有作品或角色的名字，也不可上傳既有角色的圖片當參考。
- 只要使用者提出的角色像既有 IP，先提醒，改成原創設計後再做。

---

## 6. 資料欄位規格（`data/spirits.js`）

每隻精靈是一個物件，**所有欄位都必填**，缺一不可。唯一例外：現金流量表篇的活動精靈沒有借貸方向，`normalBalance`、`increaseSide`、`decreaseSide` 三個欄位**不填**，詳細頁會自動隱藏借貸區。

| 欄位 | 說明 | 範例 |
|---|---|---|
| `id` | 英文 slug，和圖片資料夾名稱一致 | `"sea-crystal-deer"` |
| `no` | 三位數編號，全站流水號 | `"001"` |
| `chapter` | 所屬篇章 id | `"balance-sheet"` |
| `name` | 中文名 | `"海晶鹿"` |
| `title` | 稱號 | `"資產精靈"` |
| `element` | 類型。會計要素：`asset`（資產）、`liability`（負債）、`equity`（權益）、`revenue`（收益）、`expense`（費損）；現金流量活動：`operating`（營業）、`investing`（投資）、`financing`（籌資） | `"asset"` |
| `attribute` / `attributeReason` | 屬性與理由 | `"水"`／`"資源像海水一樣流動…"` |
| `height` / `weight` | 趣味設定 | `"1.0 m"`／`"28.5 kg"` |
| `catchphrase` | 角色的一句台詞，要藏一個會計觀念 | |
| `intro` | 圖鑑介紹，60～100 字 | |
| `definition` | 正式會計定義，依 IFRS 觀念架構的意思改寫成白話 | |
| `normalBalance` | 正常餘額：`"借方"` 或 `"貸方"` | |
| `increaseSide` / `decreaseSide` | 增加記哪方、減少記哪方 | |
| `accounts` | 主要科目，分 2 組，每組 3～5 個。活動精靈改為「現金流入」、「現金流出」兩組，列常見的收付項目 | `[{group:"流動資產", items:[…]}]` |
| `examTip` | 一個會計師考試常考的觀念或陷阱 | |
| `quizzes` | 三題四選一，依序為三種難度，每題含 `level`、`question`、`options`（4 個）、`answer`（0～3）、`explain` | `[{level:"basic", …}, {level:"advanced", …}, {level:"cpa", …}]` |
| `expressions` | 3 個表情：`[{file:"happy", label:"開心"}]` | |
| `alt` | 主圖的替代文字，描述角色外觀 | |

---

## 7. 會計內容規則（品質標準）

這是本專案最重要的部分，寫錯會誤導讀者：

1. **用語**：依台灣金管會公告的 IFRS 會計項目用語，例如「不動產、廠房及設備」、「合約負債」、「透過損益按公允價值衡量之金融資產」。不用「固定資產」、「預收收入」這類舊稱，除非註明「舊稱」。
2. **借貸方向**：要和會計恆等式一致。資產、費損的正常餘額在借方；負債、權益、收益在貸方。寫完要自己檢查一次。
   - 損益類一律用 IFRS 正式用語：**收益**（＝收入＋利益）、**費損**（＝費用＋損失），不用「收入／費用」代稱整個要素。
   - 現金流量活動沒有借貸方向，不要硬填；分類依現金流量表的規定（營業、投資、籌資）。
   - 規定允許企業自行選擇分類的項目（例如利息、股利的收付），不要拿來出「唯一答案」的小考題。
3. **定義**：依 IFRS《財務報導之觀念架構》的意思改寫，不可自創定義。
4. **科目歸類**：每個科目只能放在一組。有爭議的（例如預付款項、合約資產）以最常見的分類為準。
5. **考點與小考題**：
   - 每隻精靈固定三題，難度由淺到深：
     - `basic`（🌱 入門）：觀念判斷，例如「哪一個是／不是○○」。
     - `advanced`（🌊 進階）：分錄、認列時點或簡單計算。
     - `cpa`（👑 CPA）：會計師考試程度的計算或陷阱題，數字要能手算驗證。
   - 有計算的題目，寫完要實際算一次（可以用程式驗算），確認答案和每個錯誤選項的來源。
   - 題目要有唯一正確答案；三個錯誤選項要是「常見的誤解」，不是亂湊的。
   - `explain` 要說明正確答案為什麼對，以及最容易選錯的那個選項為什麼錯。
6. **不可捏造**：不寫具體法條條號、公報號碼或統計數字，除非使用者提供來源；不確定的內容寫進 `NOTES.md` 待確認，不要猜。
7. **語氣**：活潑、可愛，但定義和考點要精準。可愛只放在台詞和介紹，不放在定義。

---

## 8. 視覺風格規範

### 整體調性
海洋王國的夢幻粉彩風：淡藍到淡紫的海水漸層、珍珠與貝殼裝飾、柔和光暈、大圓角卡片。

### 色票（定義在 `style.css` 的 `:root`，不可改動數值）
| 用途 | 變數 | 色碼 |
|---|---|---|
| 主文字 | `--ink` | `#33406B` |
| 次文字 | `--ink-soft` | `#6B739A` |
| 背景淡藍 | `--sea-1` | `#EAF6FF` |
| 背景淡紫 | `--sea-2` | `#F4EEFF` |
| 珍珠白 | `--pearl` | `#FFFDF8` |
| 資產（藍） | `--asset` / `--asset-soft` | `#3F7FD0` / `#DDEEFF` |
| 負債（粉） | `--liability` / `--liability-soft` | `#C9548C` / `#FCE3EF` |
| 權益（金） | `--equity` / `--equity-soft` | `#B98A1E` / `#FFF1CC` |
| 收益（綠） | `--revenue` / `--revenue-soft` | `#2E9A78` / `#DDF5EC` |
| 費損（橘） | `--expense` / `--expense-soft` | `#D9733A` / `#FFE7D8` |
| 營業活動（青） | `--operating` / `--operating-soft` | `#1F8FA8` / `#DAF2F7` |
| 投資活動（森綠） | `--investing` / `--investing-soft` | `#4F8A4B` / `#E3F2DF` |
| 籌資活動（紫） | `--financing` / `--financing-soft` | `#7A5BC4` / `#EEE7FA` |

每個類型（會計要素或現金流量活動）固定一個顏色，讀者看顏色就知道是哪一類。新增類型時，要先經使用者同意，再同時加入 `style.css` 的色票、`app.js` 的類型名稱，以及本表。

### 字體（Google Fonts）
- 標題：`Noto Serif TC`（像繪本封面的襯線字）
- 內文、標籤：`Noto Sans TC`
- 中文一律全形標點。

### 圖片規格
- 主圖約 300～400 px 寬、表情圖約 300 px 寬，格式 `.webp`。
- 一隻精靈固定 1 張主圖加 3 張表情圖。
- 每張圖都要有 `alt` 文字。

### 生圖提示詞模板
新增精靈時，把 `{ }` 換掉後交給使用者生成，**同一篇的精靈要一起生成在同一張圖上**，畫風才會一致：

```
Soft pastel anime-style fantasy illustration, an encyclopedia page with {數量} original
cute spirit creatures living in an underwater ocean kingdom with coral, pearls and
bubbles. Each creature: {動物} with {顏色} colors and {裝飾，例如 coral antlers / shell
ornaments / small wings}, big sparkling eyes, fluffy, gentle glow.
Below each creature, a row of 3 small chibi expressions: {表情1}, {表情2}, {表情3}.
Light blue and lavender background, white and gold pearl frames, dreamy and cute.
All characters are original designs. No text.
```

> 最後的 `No text` 很重要：文字由網頁負責，圖上的字一律不用。

---

## 9. 命名慣例

- 所有出現在網址裡的檔名、資料夾名：英文小寫、連字號，不用中文和空白。
- 精靈資料夾：`assets/spirits/<slug>/`；表情檔名：`happy.webp`、`rest.webp`、`thinking.webp`……
- 篇章 id：`balance-sheet`、`income-statement`、`cash-flow`、`changes-in-equity`。
- 原始大圖：`reference/art-sources/<chapter-id>-sheet.png`（整篇一張）或 `<chapter-id>-<element>-sheet.png`（一隻一張）。

---

## 10. 驗收清單（每次完成前逐項檢查）

- [ ] 用瀏覽器打開 `index.html` 和每一隻新增精靈的 `spirit.html?id=<slug>`，沒有破圖、沒有 JavaScript 錯誤。
- [ ] 手機寬度（375 px）下沒有橫向捲動，卡片排版正常。
- [ ] `data/spirits.js` 每筆欄位齊全，`id` 和圖片資料夾名稱一致。
- [ ] 借貸方向、科目歸類符合第 7 節規則。
- [ ] 小考題：三種難度齊全（basic、advanced、cpa 各一題），答案編號正確，四個選項沒有重複，計算題已驗算。
- [ ] 首頁的篇章進度（已收錄幾隻）與資料一致。
- [ ] 沒有使用既有 IP 的角色或名稱。
- [ ] `NOTES.md` 已更新。

---

## 11. 部署

- 網站：`https://sheu920302-code.github.io/accounting-spirits/`
- GitHub Pages 來源：`main` 分支根目錄。
- 純靜態網站，不需要建置步驟；外部資源只允許 Google Fonts。
- commit 訊息用中文寫清楚改了什麼，例如「新增 No.004 收入精靈」。

---

## 12. 給 AI 的重點提醒

1. 先讀本檔與 `NOTES.md`，再動手。
2. 內容先給使用者確認，定稿才寫進資料。
3. 只改 `data/` 和 `assets/spirits/`；模板不輕易改。
4. 會計內容寧可不寫，也不要寫錯。
5. 角色必須原創。
6. 收工前跑驗收清單，並更新 `NOTES.md`。
