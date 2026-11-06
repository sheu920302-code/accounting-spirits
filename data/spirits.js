// 精靈資料：唯一來源。欄位規格見 AGENTS.md 第 6 節，會計內容規則見第 7 節。
window.SPIRITS = [
  {
    id: "sea-crystal-deer",
    no: "001",
    chapter: "balance-sheet",
    name: "海晶鹿",
    title: "資產精靈",
    element: "asset",
    attribute: "水",
    attributeReason: "資源像海水一樣在企業裡流動，能轉換成各種價值。",
    height: "1.0 m",
    weight: "28.5 kg",
    catchphrase: "我頭上的珊瑚角，每一枝都是企業控制的資源喔！",
    intro: "代表企業擁有的各種資源。海晶鹿能把海洋中的能量轉化為實際的價值，幫助王國生產、銷售與營運。牠最在意的是：這個東西是不是真的歸企業控制、未來能不能帶來好處。",
    definition: "企業因過去的交易或事項而控制的現時經濟資源；經濟資源是指有潛力產生經濟效益的權利。",
    normalBalance: "借方",
    increaseSide: "借方",
    decreaseSide: "貸方",
    accounts: [
      { group: "流動資產", items: ["現金及約當現金", "應收帳款", "存貨", "預付款項"] },
      { group: "非流動資產", items: ["不動產、廠房及設備", "無形資產", "投資性不動產", "使用權資產"] }
    ],
    examTip: "判斷是不是資產，看的是「企業能否控制」而不是「有沒有法定所有權」。例如承租人依 IFRS 16 認列的使用權資產，企業沒有所有權，但能控制使用，所以是資產。",
    quiz: {
      question: "下列哪一個項目「不是」資產？",
      options: ["預付租金", "應收帳款", "預收貨款", "存貨"],
      answer: 2,
      explain: "預收貨款是先收錢、還沒交貨，企業負有交付商品的義務，屬於負債（合約負債）。最容易選錯的是預付租金：錢已經付出去，但企業取得了未來使用場地的權利，所以是資產。"
    },
    expressions: [
      { file: "happy", label: "開心" },
      { file: "surprised", label: "驚訝" },
      { file: "rest", label: "休息" }
    ],
    alt: "淡藍色的小鹿精靈，頭上長著金色珊瑚般的鹿角，尾巴像透明的魚鰭，脖子戴著珍珠項鍊。"
  },
  {
    id: "shell-bunny",
    no: "002",
    chapter: "balance-sheet",
    name: "貝綴兔",
    title: "負債精靈",
    element: "liability",
    attribute: "風",
    attributeReason: "負債像海風，看不見卻一直推著企業前進，也帶來壓力。",
    height: "0.6 m",
    weight: "9.8 kg",
    catchphrase: "答應別人的事，我都綁在蝴蝶結上，一件都不會忘記！",
    intro: "代表企業需要償還的義務。貝綴兔記性超好，把每一個承諾都繫在身上的蝴蝶結。負債雖然帶來責任與壓力，但也能提供企業營運所需的資源，支持王國成長。",
    definition: "企業因過去的交易或事項，而必須移轉經濟資源的現時義務。",
    normalBalance: "貸方",
    increaseSide: "貸方",
    decreaseSide: "借方",
    accounts: [
      { group: "流動負債", items: ["應付帳款", "短期借款", "合約負債", "應付費用"] },
      { group: "非流動負債", items: ["長期借款", "應付公司債", "租賃負債", "負債準備－非流動"] }
    ],
    examTip: "「現時義務」是關鍵：已經發生、企業無法避免的才算負債。只是預計未來要買東西、還沒簽約也還沒收到貨，不是負債。",
    quiz: {
      question: "公司收到客戶預付的訂金 $10,000，但商品還沒出貨，這筆錢應該記為？",
      options: ["銷貨收入", "合約負債", "應收帳款", "股本"],
      answer: 1,
      explain: "收到錢但還沒履行交貨義務，應認列合約負債（舊稱預收貨款），等出貨後才轉列收入。最常見的錯誤是直接記成收入：依 IFRS 15，收入要在履約義務滿足時才認列。"
    },
    expressions: [
      { file: "happy", label: "開心" },
      { file: "thinking", label: "思考" },
      { file: "cheer", label: "加油" }
    ],
    alt: "粉白色的長耳兔精靈，耳朵上有花朵與貝殼裝飾，胸前繫著粉紅色蝴蝶結。"
  },
  {
    id: "star-chime-cat",
    no: "003",
    chapter: "balance-sheet",
    name: "星籟喵",
    title: "權益精靈",
    element: "equity",
    attribute: "光",
    attributeReason: "權益是扣掉負債後真正屬於股東的部分，像一道照亮企業的光。",
    height: "0.7 m",
    weight: "11.2 kg",
    catchphrase: "把欠別人的都還完，剩下發亮的，才是我們自己的！",
    intro: "代表企業所有者的權益。星籟喵是王國最堅定的後盾，股東投入的資金、企業一年年累積下來的盈餘，都化成牠翅膀上的光，支撐王國持續創造更高的價值。",
    definition: "企業的資產減除所有負債後的剩餘權益。",
    normalBalance: "貸方",
    increaseSide: "貸方",
    decreaseSide: "借方",
    accounts: [
      { group: "投入資本", items: ["普通股股本", "特別股股本", "資本公積"] },
      { group: "累積與其他權益", items: ["保留盈餘", "其他權益", "庫藏股票（減項）"] }
    ],
    examTip: "庫藏股票是權益的減項，正常餘額在借方，不是資產。另外，本期淨利期末會結轉到保留盈餘，所以賺錢會讓權益增加。",
    quiz: {
      question: "公司宣告發放現金股利時（尚未發放），對權益有什麼影響？",
      options: ["股本增加", "保留盈餘減少", "資本公積增加", "權益沒有變動"],
      answer: 1,
      explain: "宣告時借記保留盈餘、貸記應付股利，保留盈餘減少、負債增加，所以權益減少。最容易選錯的是「沒有變動」：很多人以為要等到實際發錢才有影響，但宣告當下義務就成立了。"
    },
    expressions: [
      { file: "happy", label: "開心" },
      { file: "confident", label: "自信" },
      { file: "rest", label: "休息" }
    ],
    alt: "白色的小貓精靈，背上有金色羽翼，額頭戴著新月頭飾，胸前掛著星星墜飾。"
    },
  {
    id: "fortune-stream-qilin",
    no: "004",
    chapter: "income-statement",
    name: "盈流寶麟",
    title: "收益精靈",
    element: "revenue",
    attribute: "花",
    attributeReason: "收益像花一樣，在企業的經營中一朵朵綻放。",
    height: "0.9 m",
    weight: "14.8 kg",
    catchphrase: "錢還沒收到也沒關係，只要做完答應客戶的事，我就能開心收下！",
    intro: "以「價值流入」為能量的繁榮精靈，身上流轉著金光。企業每賣出一件商品、完成一項服務，盈流寶麟就會躍得更高。牠最在意的是：價值是不是真的流進來了，而不是錢有沒有先到手。",
    definition: "使資產增加或負債減少，進而讓權益增加的部分；但股東投入資本造成的增加不算收益。收益包含「收入」與「利益」。",
    normalBalance: "貸方",
    increaseSide: "貸方",
    decreaseSide: "借方",
    accounts: [
      { group: "收入", items: ["銷貨收入", "勞務收入", "利息收入", "租金收入"] },
      { group: "利益", items: ["處分不動產、廠房及設備利益", "外幣兌換利益", "透過損益按公允價值衡量之金融資產評價利益"] }
    ],
    examTip: "依 IFRS 15，收入要在「履約義務滿足」時認列，不是收到現金時。另外，股東增資雖然讓權益增加，但屬於業主投入，不是收益。",
    quiz: {
      question: "下列哪一項會讓公司認列「收益」？",
      options: ["股東現金增資", "收到客戶預付的貨款", "出售舊設備，售價高於帳面金額", "向銀行借款"],
      answer: 2,
      explain: "出售設備的利得屬於利益，是收益的一部分。最容易選錯的是「股東現金增資」：增資讓權益增加，但那是業主投入，不是收益。收到預付貨款是合約負債，向銀行借款是負債。"
    },
    expressions: [
      { file: "harvest", label: "滿足收穫" },
      { file: "leap", label: "成長躍升" },
      { file: "joy", label: "豐收喜悅" }
    ],
    alt: "白色與淡紫色的麒麟精靈，頭上有金色鹿角與水晶吊飾，背上有白色羽翼，胸前繫著紫色蝴蝶結與小鈴鐺，在金幣之間躍起。"
  },
  {
    id: "diligent-cost-keeper",
    no: "005",
    chapter: "income-statement",
    name: "勤耗客",
    title: "費損精靈",
    element: "expense",
    attribute: "土",
    attributeReason: "費損像土壤吸收養分，把投入的資源消耗掉，換來營運的成果。",
    height: "0.8 m",
    weight: "11.6 kg",
    catchphrase: "我背包裡裝的不是浪費，是讓王國運轉的每一份付出！",
    intro: "背著大背包、認真負責的精靈，守護企業日常運作的資源流轉。雖然有時嚴肅，卻默默把投入的資源轉化成營運的能量，也會替王國承受意外的損失，例如減損和災害。",
    definition: "使資產減少或負債增加，進而讓權益減少的部分；但分配給股東（例如發放股利）造成的減少不算費損。費損包含「費用」與「損失」。",
    normalBalance: "借方",
    increaseSide: "借方",
    decreaseSide: "貸方",
    accounts: [
      { group: "費用", items: ["銷貨成本", "薪資費用", "租金費用", "折舊費用"] },
      { group: "損失", items: ["減損損失", "處分不動產、廠房及設備損失", "災害損失", "外幣兌換損失"] }
    ],
    examTip: "費用依應計基礎在發生時認列，不是在付現時。另外，發放現金股利雖然讓權益減少，但那是對股東的分配，不是費損（可以和星籟喵的小考對照）。",
    quiz: {
      question: "12 月份的員工薪資 $50,000 要到隔年 1 月 5 日才發放，12 月底應該怎麼處理？",
      options: ["不用入帳，等發薪時再記費用", "借：薪資費用；貸：應付薪資", "借：預付薪資；貸：現金", "借：保留盈餘；貸：應付薪資"],
      answer: 1,
      explain: "員工在 12 月已經提供服務，費用在 12 月就發生了，要先認列薪資費用和應付薪資。最容易選錯的是「不用入帳」：那是現金基礎，不符合應計基礎。"
    },
    expressions: [
      { file: "focus", label: "專注執行" },
      { file: "toil", label: "辛勤付出" },
      { file: "done", label: "達成運作" }
    ],
    alt: "白色與淡紫色的毛茸茸精靈，頭戴紫水晶頭冠，背著裝滿帳本、紙卷和齒輪的大背包，腳邊有一疊金幣。"
  }
];
