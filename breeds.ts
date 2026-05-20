export type BreedVariant = {
  name: string;
  catchcopy: string;
  description: string;
};

export type Breed = {
  id: string;
  name: string;
  emoji: string;
  catchcopy: string;
  description: string;
  personality: string[];
  strengths: string[];
  weaknesses: string[];
  love: string;
  goodMatch: string[];
  badMatch: string[];
  color: string;
  variants: BreedVariant[];
};

export const BREEDS: Record<string, Breed> = {
  shiba: {
    id: "shiba",
    name: "柴犬",
    emoji: "🦊",
    catchcopy: "孤高のプライド、でも実は寂しがり屋",
    description:
      "表面はクールで独立心が強く、他人に媚びることを極度に嫌う。しかし心の奥底には熱い感情を秘めており、本当に信頼した相手には全力で尽くす。自分のペースを乱されることが最も苦手で、グループ行動より単独行動を好む。周囲からは「掴みどころがない」と思われることが多いが、それがまた魅力にもなっている。",
    personality: ["独立心が強い", "プライドが高い", "義理堅い", "マイペース"],
    strengths: ["ブレない芯の強さ", "細部への鋭い観察力", "無駄のない行動力"],
    weaknesses: ["素直に甘えられない", "変化への適応が遅い", "頑固すぎる"],
    love: "追いかけられるのが好き。自分から積極的にはいかないが、相手が諦めないと急に態度が軟化する。束縛は天敵。",
    goodMatch: ["akita", "dachshund"],
    badMatch: ["golden", "pomeranian"],
    color: "#C84B31",
    variants: [
      { name: "哲学柴", catchcopy: "人生とは何かを一人で考え続ける柴犬", description: "常に何かを深く考えており、飲み会より一人の読書を選ぶ。" },
      { name: "陽キャ柴", catchcopy: "外はクールでも内側は激アツ", description: "外見のクールさと裏腹に、好きなことになると目が輝く。" },
      { name: "皇帝柴", catchcopy: "すべては自分中心に回っていると信じている", description: "リーダーシップというより「俺様」感。なぜか周りが従う。" },
      { name: "闇柴", catchcopy: "世界の真実に気づいてしまった柴犬", description: "シニカルで鋭い観察眼の持ち主。毒舌だが言っていることは正しい。" },
    ],
  },
  golden: {
    id: "golden",
    name: "ゴールデンレトリバー",
    emoji: "🌟",
    catchcopy: "全人類に愛されたい天性のアイドル",
    description:
      "誰にでも明るく接し、その場の空気を瞬時に温める天才。悪意というものを持ち合わせておらず、基本的にすべての人を信じてしまう。グループの潤滑油として欠かせない存在で、喧嘩の仲裁も得意。ただし八方美人になりやすく、自分の本音を言えないことも。",
    personality: ["社交的", "優しい", "楽観的", "八方美人"],
    strengths: ["誰とでも仲良くなれる", "場の空気を読む力", "困っている人を放っておけない"],
    weaknesses: ["断れない", "自分の意見を持ちにくい", "傷つきやすいのに隠す"],
    love: "恋愛に全力投球タイプ。付き合ったら尽くしすぎて疲れることも。相手に嫌われることへの恐怖が強い。",
    goodMatch: ["labrador", "poodle"],
    badMatch: ["shiba", "husky"],
    color: "#F5A623",
    variants: [
      { name: "太陽ゴールデン", catchcopy: "その笑顔で全員を救う存在", description: "いるだけで場が明るくなる。本人はそれを意識していない。" },
      { name: "心配性ゴールデン", catchcopy: "みんなのことが心配で眠れない", description: "誰かが悩んでいると自分ごとのように感じてしまう。" },
      { name: "パーティーゴールデン", catchcopy: "週7で予定が入っているのに全部楽しめる", description: "社交性がバグっている。一人になると逆に不安になるタイプ。" },
      { name: "秘密ゴールデン", catchcopy: "笑顔の裏に深い湖を持っている", description: "明るいが実は繊細。誰にも話せない悩みを一人で抱えている。" },
    ],
  },
  husky: {
    id: "husky",
    name: "ハスキー",
    emoji: "❄️",
    catchcopy: "自由と冒険だけが心の栄養",
    description:
      "枠に収まることを本能的に嫌う冒険家。「普通」「常識」「みんなそうしてる」という言葉が最も苦手。未踏の道を自分の足で歩くことに喜びを感じ、たとえ失敗しても後悔しない。エネルギーが有り余っており、じっとしていることが苦手。",
    personality: ["自由奔放", "冒険好き", "エネルギッシュ", "反骨心"],
    strengths: ["どんな環境でも適応できる", "行動力が異常に高い", "発想が型破り"],
    weaknesses: ["継続が苦手", "ルールを守れない", "場の空気を読まない"],
    love: "恋愛も冒険として楽しむタイプ。刺激がなくなると急に冷める。相手には自由を与えてほしい。",
    goodMatch: ["dalmatian", "shiba"],
    badMatch: ["golden", "poodle"],
    color: "#4A90D9",
    variants: [
      { name: "旅人ハスキー", catchcopy: "荷物一つで世界中を走り回る", description: "定住概念がない。でも戻る場所を大事にしているのも事実。" },
      { name: "革命家ハスキー", catchcopy: "現状打破しか頭にない", description: "既存のシステムへの反発心が強い。変えたいという衝動が強い。" },
      { name: "野生ハスキー", catchcopy: "文明より自然が好き", description: "アウトドアとサバイバルが得意。都会に疲れるとふと消える。" },
      { name: "天才ハスキー", catchcopy: "誰も思いつかないことを普通にやる", description: "常識の外から発想するため、突き抜けた成果を出すことがある。" },
    ],
  },
  poodle: {
    id: "poodle",
    name: "トイプードル",
    emoji: "✨",
    catchcopy: "完璧主義者の仮面をかぶった感情の怪物",
    description:
      "頭の回転が速く、常に最適解を求める。外見や評価にこだわり、「どう見られているか」を強く意識する。感情表現が豊かで、喜怒哀楽がダイレクトに出る。一度信頼した相手への依存度が高く、その人のためなら何でもする。",
    personality: ["頭が良い", "感情豊か", "プライドが高い", "依存体質"],
    strengths: ["問題解決能力が高い", "美的センスがある", "コミュ力が高い"],
    weaknesses: ["完璧主義でしんどくなる", "嫉妬心が強い", "傷つくと長引く"],
    love: "恋愛には全力すぎるほど全力。好きな人に構ってもらえないと不安になる。",
    goodMatch: ["golden", "labrador"],
    badMatch: ["husky", "akita"],
    color: "#C471ED",
    variants: [
      { name: "女王プードル", catchcopy: "この世は自分を中心に回っている", description: "カリスマ性があり、なんだかんだ人が集まる。" },
      { name: "勉強プードル", catchcopy: "努力で全てを手に入れようとしている", description: "頭が良くてさらに努力もする。周りからは眩しく見える。" },
      { name: "メンヘラプードル", catchcopy: "愛されていないと死んでしまう（比喩）", description: "感情の起伏が激しく、好きな人への執着が強い。" },
      { name: "クリエイタープードル", catchcopy: "美しいものしか作らない、作れない", description: "アート・音楽・ファッションの感性が突出している。" },
    ],
  },
  border: {
    id: "border",
    name: "ボーダーコリー",
    emoji: "🧠",
    catchcopy: "一番になることしか考えていない",
    description:
      "圧倒的な知能と集中力を持ち、一度目標を決めたら睡眠を削っても達成する。仕事に対する情熱が半端ではなく、中途半端が最も嫌い。完璧な結果を出すことに喜びを感じる。ただし自分と同じ熱量を相手にも求めてしまう傾向がある。",
    personality: ["超集中力", "完璧主義", "野心家", "競争心"],
    strengths: ["どんな分野でも突き抜ける", "論理的思考力", "実行スピードが速い"],
    weaknesses: ["休めない", "他人のペースに苛立つ", "負けを認めない"],
    love: "恋愛でも「攻略」に近い感覚を持つことがある。ライバルがいると燃えるタイプ。",
    goodMatch: ["dachshund", "shiba"],
    badMatch: ["golden", "labrador"],
    color: "#2ECC71",
    variants: [
      { name: "天才ボーダー", catchcopy: "普通の人が10時間かかることを1時間でやる", description: "才能と努力が両立している稀有なタイプ。" },
      { name: "仕事人間ボーダー", catchcopy: "趣味？それは仕事です", description: "仕事への情熱が異常。でも充実しているから幸せそうに見える。" },
      { name: "支配者ボーダー", catchcopy: "全員に指示を出さないと気が済まない", description: "リーダーというよりコントローラー。正しいが息苦しい。" },
      { name: "研究者ボーダー", catchcopy: "一つのことを一生掘り続けられる", description: "専門性が異常に深く、その分野では右に出る者なし。" },
    ],
  },
  dachshund: {
    id: "dachshund",
    name: "ダックスフンド",
    emoji: "🍫",
    catchcopy: "粘り強さと根に持つ力は天下一品",
    description:
      "一度決めたことは絶対に貫く頑固さと、細かいことをよく覚えている記憶力が特徴。外見は温和に見えるが内側は燃えるような闘志を持っている。誰かに馬鹿にされたことは10年経っても覚えている。一方で、大切な人への愛情は本物で深い。",
    personality: ["頑固", "忍耐強い", "記憶力が良い", "情が深い"],
    strengths: ["諦めない精神力", "細部への注意力", "一度決めた約束は守る"],
    weaknesses: ["根に持ちすぎる", "変化を嫌う", "頑固すぎて損をする"],
    love: "一途で粘り強い。振られても諦めない。でも裏切りは絶対に許さない。",
    goodMatch: ["shiba", "border"],
    badMatch: ["husky", "chihuahua"],
    color: "#8B4513",
    variants: [
      { name: "職人ダックス", catchcopy: "一つの道を一生かけて極める", description: "技術や知識への探求心が凄まじく、妥協を知らない。" },
      { name: "復讐ダックス", catchcopy: "いつかを信じてコツコツ積み上げる", description: "昔バカにした人間を気づいたら追い越している。" },
      { name: "甘えんぼダックス", catchcopy: "外はクールでも家では甘えたい", description: "外面と内面のギャップが激しい。素を見せた相手は特別。" },
      { name: "守護神ダックス", catchcopy: "大切な人を守るためなら何でもする", description: "保護欲が強く、仲間のためなら自分が損をしても構わない。" },
    ],
  },
  chihuahua: {
    id: "chihuahua",
    name: "チワワ",
    emoji: "⚡",
    catchcopy: "小さな体に宇宙サイズのプライド",
    description:
      "見た目の小ささとは裏腹に、心の中では誰にも負けないという自信に満ちている。怖いものなしの精神力で、自分より大きな相手にも臆せず立ち向かう。感情の起伏が激しく、好きな人への愛情表現はオーバーなほど豊か。独占欲が強め。",
    personality: ["大胆", "プライドが高い", "独占欲が強い", "感情的"],
    strengths: ["度胸がある", "愛情表現が豊か", "直感力が鋭い"],
    weaknesses: ["短気", "嫉妬深い", "自分の非を認めにくい"],
    love: "独占欲の塊。好きになると全力で執着する。でもその愛は本物。",
    goodMatch: ["pomeranian", "poodle"],
    badMatch: ["dachshund", "akita"],
    color: "#E74C3C",
    variants: [
      { name: "女王チワワ", catchcopy: "この部屋の主は私だという事を忘れるな", description: "カリスマと威圧感を持ち、なぜか従わせてしまう。" },
      { name: "甘えチワワ", catchcopy: "好きな人の隣じゃないと死ぬ", description: "一度心を許した相手にはべったり。可愛いが重い。" },
      { name: "戦士チワワ", catchcopy: "どんな強敵にも突っ込んでいく無謀な勇者", description: "向こう見ずで怖いもの知らず。たまに本当に勝つ。" },
      { name: "天才チワワ", catchcopy: "直感で全てを当ててしまう第六感の持ち主", description: "論理より感覚で生きており、その感覚がよく当たる。" },
    ],
  },
  labrador: {
    id: "labrador",
    name: "ラブラドール",
    emoji: "🌈",
    catchcopy: "誰かの役に立つことが生きがい",
    description:
      "献身的で、他者の幸せのために動くことに本物の喜びを感じる。信頼性が高く、任された仕事は必ず全うする。感情が安定しており、パニックになる場面でも落ち着いて対処できる。自己主張は少ないが、大切な局面での判断力は確かで頼りになる。",
    personality: ["献身的", "安定感がある", "真面目", "自己主張が少ない"],
    strengths: ["信頼性が圧倒的に高い", "どんな環境でも安定している", "気配りが自然にできる"],
    weaknesses: ["自分のことを後回しにしすぎる", "意見を言えない", "疲れているのに休めない"],
    love: "相手を支えることに喜びを感じる。でも自分の気持ちをなかなか伝えられない。",
    goodMatch: ["golden", "poodle"],
    badMatch: ["border", "husky"],
    color: "#F39C12",
    variants: [
      { name: "支え役ラブ", catchcopy: "縁の下の力持ちであり続ける", description: "表に出なくても確実にチームを支えている存在。" },
      { name: "聖人ラブ", catchcopy: "怒った姿を見たことがない", description: "穏やかさが異常。実は強い感情を持っているが出さない。" },
      { name: "心療士ラブ", catchcopy: "話を聞かせてください、全部", description: "傾聴力が天才的で、悩みを話すと軽くなる。" },
      { name: "頑張り屋ラブ", catchcopy: "限界まで頑張ってから倒れるタイプ", description: "責任感が強すぎて、SOSを出すのが極限まで遅れる。" },
    ],
  },
  pomeranian: {
    id: "pomeranian",
    name: "ポメラニアン",
    emoji: "🎀",
    catchcopy: "世界の中心はいつも私",
    description:
      "自己肯定感がデフォルトで高く、自分が愛されていることを疑わない。明るくてエネルギッシュ、その場を盛り上げるエンターテイナー気質。注目されることが大好きで、褒められると何倍にも輝く。少し自己中心的に見えることもあるが、それが可愛いと思われている。",
    personality: ["自己肯定感が高い", "エンターテイナー", "明るい", "少し自己中"],
    strengths: ["どこでもポジティブでいられる", "人を楽しませるのが上手い", "ブランド力がある（存在感）"],
    weaknesses: ["空気を読まないことがある", "飽き性", "深く考えるのが苦手"],
    love: "恋愛でも「私を見て」オーラが強い。一途だが褒め続けてもらわないと不満が出る。",
    goodMatch: ["chihuahua", "golden"],
    badMatch: ["shiba", "dachshund"],
    color: "#FF6B9D",
    variants: [
      { name: "アイドルポメ", catchcopy: "生まれながらのスター、全員のお気に入り", description: "存在自体がエンターテインメント。人を集める力がある。" },
      { name: "SNSポメ", catchcopy: "いいねの数で生きている", description: "承認欲求が高いが、実際に面白いコンテンツを作れる。" },
      { name: "甘えんぼポメ", catchcopy: "かまってもらわないと死んでしまう（本気）", description: "愛情に対する要求量が多い。でも与える量も多い。" },
      { name: "マイペースポメ", catchcopy: "誰が何と言おうと私は私", description: "周りの目を気にしないから、逆にブレなくて強い。" },
    ],
  },
  akita: {
    id: "akita",
    name: "秋田犬",
    emoji: "🏔️",
    catchcopy: "一生に一人、この人と決めたら終わり",
    description:
      "圧倒的な忠義心と一貫性を持つ。一度信頼した相手には命がけで尽くし、裏切りは絶対に許さない。口数は少なく、感情を外に出すことは稀だが、その分行動で愛情を示す。存在感が重厚で、周りを自然と安心させる力がある。",
    personality: ["忠義心が強い", "口数が少ない", "重厚感がある", "感情を隠す"],
    strengths: ["絶対的な信頼感を与える", "芯がブレない", "約束を守る"],
    weaknesses: ["新しい人間関係を作るのが苦手", "感情を言語化できない", "変化への抵抗感が強い"],
    love: "一生に何人かしか心を開かない。でも開いた相手への愛は永遠級。",
    goodMatch: ["shiba", "labrador"],
    badMatch: ["poodle", "chihuahua"],
    color: "#8E44AD",
    variants: [
      { name: "武士秋田", catchcopy: "言葉より行動、行動より沈黙", description: "余計なことを言わず、行動で全てを示す古風な人格。" },
      { name: "守護秋田", catchcopy: "大切な人の前に立ちはだかる壁", description: "守るべき対象が決まると、人格が変わるほど強くなる。" },
      { name: "孤独秋田", catchcopy: "一人でいることに誰より慣れている", description: "孤独を好んでいるわけではないが、受け入れている。" },
      { name: "深愛秋田", catchcopy: "見えないところで誰より深く愛している", description: "表現しないだけで、心の中は愛で溢れている。" },
    ],
  },
  dalmatian: {
    id: "dalmatian",
    name: "ダルメシアン",
    emoji: "🎭",
    catchcopy: "個性という名の爆弾を抱えている",
    description:
      "人と同じことをすることへの強い抵抗感があり、常に「自分だけの何か」を求めている。クリエイティビティが高く、芸術やエンタメの分野で才能を発揮することが多い。エネルギーの波があり、燃えているときとそうでないときの差が激しい。",
    personality: ["個性的", "クリエイティブ", "波がある", "自己表現欲求が高い"],
    strengths: ["唯一無二の発想力", "自己表現が豊か", "一度火がついたときの爆発力"],
    weaknesses: ["気分屋", "コツコツが苦手", "理解されないことがある"],
    love: "相手に自分を「わかってほしい」という欲求が強い。理解し合えた相手とは深く繋がれる。",
    goodMatch: ["husky", "pomeranian"],
    badMatch: ["dachshund", "labrador"],
    color: "#1ABC9C",
    variants: [
      { name: "アーティストダル", catchcopy: "この世界を作品に変える使命がある", description: "すべての体験をクリエイティブのエネルギーに変える。" },
      { name: "ロックスターダル", catchcopy: "目立ちたいんじゃない、本物でいたいだけ", description: "パフォーマンスに魂がある。見る人の心に刺さる。" },
      { name: "変人ダル", catchcopy: "普通って言葉が一番苦手", description: "奇抜な発想と行動で周りを驚かせるが、それが魅力になる。" },
      { name: "天才ダル", catchcopy: "10年後に時代が追いついてくる", description: "先進的すぎて今は理解されないが、絶対に正しい。" },
    ],
  },
  corgi: {
    id: "corgi",
    name: "コーギー",
    emoji: "👑",
    catchcopy: "楽しいことのためなら全力で走る",
    description:
      "好奇心旺盛でフットワークが軽く、楽しそうなことに嗅覚が鋭い。明るくポジティブで誰とでも仲良くなれるが、深く関わるのは本当に気が合う人だけ。見かけによらず意志が強く、やると決めたことはやり遂げる。バランス感覚が良く、場の空気をうまく掴む。",
    personality: ["好奇心旺盛", "フットワーク軽い", "意志が強い", "バランス感覚"],
    strengths: ["何でも楽しめる適応力", "行動が早い", "場を和ませる能力"],
    weaknesses: ["飽き性な一面がある", "広く浅くなりがち", "真剣な場面でも笑いに変えてしまう"],
    love: "恋愛も楽しむ姿勢。重くなりすぎず、一緒にいて楽しい関係を大事にする。",
    goodMatch: ["golden", "pomeranian"],
    badMatch: ["akita", "border"],
    color: "#E67E22",
    variants: [
      { name: "冒険コーギー", catchcopy: "楽しそうな場所に秒で現れる", description: "フットワークが異常に軽く、常に何か新しいことをしている。" },
      { name: "みんなのコーギー", catchcopy: "誰にでも同じ笑顔を向ける太陽", description: "どんな人とも打ち解けられる天才的な親しみやすさ。" },
      { name: "頑固コーギー", catchcopy: "可愛い顔して絶対に折れない", description: "外見は柔らかいが、信念に関しては一歩も引かない。" },
      { name: "王族コーギー", catchcopy: "品と遊び心を同時に持っている", description: "上品さとユーモアのバランスが絶妙。なぜか貫禄がある。" },
    ],
  },
};

export const BREED_IDS = Object.keys(BREEDS);
