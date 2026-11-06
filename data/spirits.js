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
  }
];
