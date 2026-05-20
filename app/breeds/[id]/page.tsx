"use client";
import Link from "next/link";
import { notFound } from "next/navigation";

const BREEDS_DATA: Record<string, any> = {
  shiba: {
    id: "shiba", name: "柴犬", emoji: "🐕", color: "#E8622A",
    catch: "孤高の美学を持つ、日本最強の個人主義者",
    desc: "クールで独立心が強く、自分のルールで生きる。選ばれた人間にだけ心を開く、深みのある性格。表面上は超クールだが、内側では常に深く物事を考えている。SNSのフォロワーより哲学書の数を誇りにしているタイプ。",
    strengths: ["ブレない軸を持つ", "深い洞察力", "無駄な人間関係ゼロ", "高い独立心"],
    weaknesses: ["頑固すぎる", "協調性が低い", "心を開くまでが長い", "「わかる人だけわかればいい」精神"],
    love: "恋愛より精神的繋がりを求める。告白は相手にさせるタイプ。一度好きになったら深く一途だが、それを表に出さない。",
    work: "一人で完結できる仕事が最も輝く。フリーランス・専門職・研究職に向いている。チームではアイデアマン的ポジション。",
    subtypes: [
      { name: "哲学柴", catch: "「なぜ生きるのか」を考えながら飯を食う", desc: "常に宇宙の真理と対話している。人間関係は厳選主義。" },
      { name: "陽キャ柴", catch: "柴犬のくせに、なぜかみんなのセンターにいる", desc: "「柴犬なのに？」と言われるほど社交的。本当はちょっと繊細。" },
      { name: "皇帝柴", catch: "誰にも指図されない。それが私のルール。", desc: "生まれながらのカリスマ。命令はしないが、なぜか全員が後をついてくる。" },
      { name: "闇柴", catch: "見た目は柴犬。中身はブラックホール。", desc: "表情に出ない感情の深さが魅力。夜3時に名言を呟く。" },
    ],
    good: ["chihuahua", "akita", "dachshund"],
    caution: ["pomeranian", "labrador"],
    goodReason: "同じく独立心が高く、干渉しすぎない関係が心地よい。深い絆を静かに築ける。",
    cautionReason: "社交的すぎるタイプや感情表現が豊かすぎるタイプとは、テンポが合わず疲れることも。",
  },
  golden: {
    id: "golden", name: "ゴールデン", emoji: "🌟", color: "#F5A623",
    catch: "みんなに愛される、太陽みたいな存在",
    desc: "誰に対しても本気で接する。エネルギーが無限で、友達の友達まで全員仲良くなる。パリピとオタクの両方に愛される奇跡の存在。本当はちょっと繊細なのを陽気さで隠していることも。",
    strengths: ["無条件の愛", "場のムード作りが天才", "誰とでも仲良くなれる", "行動力"],
    weaknesses: ["断れない", "好かれたい依存", "実は繊細で傷つきやすい", "一人になると急に落ち込む"],
    love: "惜しみない愛情で相手を包む。全力すぎて重いと言われることも。でも本物の愛情の持ち主。",
    work: "人と関わる仕事が最高のパフォーマンスを発揮する。営業・接客・教育・イベント企画に向いている。",
    subtypes: [
      { name: "みんなの太陽", catch: "「好き」が多すぎて人生が楽しい", desc: "人類全員に好かれたい欲求の化身。エネルギーが無限。" },
      { name: "隠れ繊細ゴールデン", catch: "笑顔の裏で、めっちゃ傷ついてる", desc: "外面は完璧な「いい人」。でも家に帰ると泣いていることも。" },
      { name: "キャリアゴールデン", catch: "愛されながら頂点に立つ、理想形", desc: "「人気者」と「できる人」を両立する最強タイプ。" },
      { name: "天然ゴールデン", catch: "悪意ゼロ。存在が奇跡。", desc: "天然すぎて周りを癒す。考え方が独特すぎて会話が宇宙になる。" },
    ],
    good: ["labrador", "shiba", "poodle"],
    caution: ["border", "chihuahua"],
    goodReason: "安定感があり、ゴールデンの全力の愛情をしっかり受け止めてくれる。一緒にいると自然体でいられる。",
    cautionReason: "完璧主義や毒舌タイプとは、テンポやこだわりのズレで摩擦が起きやすい。",
  },
  husky: {
    id: "husky", name: "ハスキー", emoji: "🐺", color: "#6B8DD6",
    catch: "自由を愛し、予測不能な魂の持ち主",
    desc: "定住という概念を持たない魂。「飽きた」「行きたい」「やってみたい」が全ての行動原理。人生をRPGとして生きている。感情のジェットコースターをそのまま表現に変換できる才能の持ち主。",
    strengths: ["行動力", "新しいものへの適応力", "自由な発想", "圧倒的な表現力"],
    weaknesses: ["持続力が低い", "責任から逃げやすい", "同じミスを繰り返す", "「なんとかなる」が口癖"],
    love: "恋愛も旅のようなもの。同じ旅人か、待てる人だけが一緒にいられる。好きになったら全力だが、冷めるのも速い。",
    work: "ルーティンが死ぬほど苦手。クリエイター・旅人・フリーランサー・起業家に向いている。縛られない仕事が正解。",
    subtypes: [
      { name: "永遠の旅人", catch: "今日も知らない街で知らない人と話している", desc: "定住という概念を持たない魂。人生をRPGとして生きている。" },
      { name: "アーティストハスキー", catch: "傷つくことで作品が生まれる体質", desc: "感情のジェットコースターをそのまま表現に変換できる才能。" },
      { name: "クールハスキー", catch: "「かっこいい」以外の形容詞を受け付けない", desc: "見た目も言動もクールに統一された美的存在。" },
      { name: "カオスハスキー", catch: "思いつきで生きているが、なぜか上手くいく", desc: "計画という概念が存在しない。思いついたら即行動。" },
    ],
    good: ["akita", "siberian", "golden"],
    caution: ["border", "dachshund"],
    goodReason: "自由を理解し合える仲間。一緒にいても干渉しすぎず、お互いの世界を尊重できる。",
    cautionReason: "完璧主義・頑固タイプとは、ペースや価値観のズレで衝突しやすい。",
  },
  poodle: {
    id: "poodle", name: "トイプードル", emoji: "✨", color: "#C084FC",
    catch: "可愛く見せながら全部計算してる知性派",
    desc: "愛らしい外見の裏で3手先を読む知性の持ち主。感情的に見えて実は超論理的。可愛く見せながら全部計算してる、高度な知性と戦略性を持つ。",
    strengths: ["状況判断力", "人心掌握", "計画実行力", "分析力"],
    weaknesses: ["計算が透けることがある", "本音を言う人が極少数", "感情を偽ることがある", "説明が長くなる"],
    love: "恋愛も戦略的。でも本命には全てを投資する。知的な刺激を求め、話が合わない人とは続かない。",
    work: "戦略・企画・コンサル・マーケティングに向いている。人の心を読んで動かす仕事で才能が開花。",
    subtypes: [
      { name: "戦略プードル", catch: "可愛く見せながら全部計算してる", desc: "感情的に見えて実は超論理的。3手先を読む。" },
      { name: "プリンセスプードル", catch: "世界は私を中心に回っていると思っている", desc: "自己肯定感が宇宙規模。承認欲求は高いが正直。" },
      { name: "天才プードル", catch: "「頭いいね」と言われることが一番嬉しい", desc: "とにかく知的。議論が好き。プライドと実力が比例。" },
      { name: "ソーシャルプードル", catch: "インフルエンサーに一番近い犬種", desc: "人を喜ばせることが生きがい。SNSのセンスも抜群。" },
    ],
    good: ["dachshund", "border", "shiba"],
    caution: ["husky", "pomeranian"],
    goodReason: "論理性と感情性のバランスが取れた関係。互いの知性を尊重し合える。",
    cautionReason: "計画性のなさや感情優先タイプとは、根本的な価値観のズレが生じやすい。",
  },
  border: {
    id: "border", name: "ボーダーコリー", emoji: "🎯", color: "#22C55E",
    catch: "完璧主義の達成マシン。妥協は負けと同義。",
    desc: "何事も全力。妥協という言葉が辞書にない。組織の中でなぜか自然とリーダーになる。徹底的に考えてから動く分析力と、率いる統率力を兼ね備えた存在。",
    strengths: ["圧倒的な仕事クオリティ", "達成力", "統率力", "分析力"],
    weaknesses: ["完璧主義が人を疲れさせる", "一人で抱え込む", "信頼して任せられない", "休めない体質"],
    love: "恋愛も全力投球。相手への要求も高くなりがち。家族・仲間を守る意識が強い。",
    work: "プロジェクトマネージャー・経営者・医師・弁護士など、高い専門性と責任感が求められる仕事で輝く。",
    subtypes: [
      { name: "完璧主義コリー", catch: "70点は0点と同じ。100点か、やり直し。", desc: "妥協という言葉が辞書にない。自分にも他人にも厳しい。" },
      { name: "リーダーコリー", catch: "誰も頼んでいないのに仕切っている", desc: "組織の中でなぜか自然とリーダーになる。指示が的確。" },
      { name: "分析コリー", catch: "行動前にスプレッドシートを作る", desc: "徹底的に考えてから動く。思考のスピードが速い。" },
      { name: "燃え尽き寸前コリー", catch: "全力で走りすぎて、ちょっと疲れてる", desc: "本来は最強なのに、全力を出しすぎて消耗している。" },
    ],
    good: ["golden", "dachshund", "poodle"],
    caution: ["husky", "dalmatian"],
    goodReason: "ゴールデンの包容力がコリーの完璧主義を和らげ、良いバランスが生まれる。",
    cautionReason: "計画性のない自由人タイプとは、根本的な仕事観・生活観が衝突しやすい。",
  },
  dachshund: {
    id: "dachshund", name: "ダックスフンド", emoji: "🌭", color: "#D97706",
    catch: "一度決めたら曲げない、義理と人情の塊",
    desc: "頑固で一途。特定の人への忠誠心が高く、深い絆を築く。今を楽しむ哲学も持ち合わせる。感情表現が豊かで、喜びも悲しみも全力で表現する。",
    strengths: ["意志の強さ", "深い絆を築く力", "献身性", "今を楽しむ力"],
    weaknesses: ["頑固すぎて損をする", "裏切られたときのダメージが大きい", "衝動買い・衝動食い", "先延ばし癖"],
    love: "一途すぎる。独占欲が強め。でも全力で愛する。一度好きになったら長い。別れを引きずる。",
    work: "長期的な関係構築が必要な仕事が得意。営業・カウンセラー・職人・料理人に向いている。",
    subtypes: [
      { name: "頑固ダックス", catch: "一度決めたら神様でも動かせない", desc: "マイルールを死守する。融通が利かないが一貫性がある。" },
      { name: "忠義ダックス", catch: "あなたのためなら何でもする（本気）", desc: "特定の人間への忠誠心が異常に高い。「推し」に全リソース投入。" },
      { name: "グルメダックス", catch: "食が人生。それ以外は余白。", desc: "美食と快楽を追求する哲学。今この瞬間を楽しむことが信条。" },
      { name: "ドラマチックダックス", catch: "日常の全てが映画のワンシーン", desc: "感情表現が豊か。普通の出来事を劇的に語る才能がある。" },
    ],
    good: ["golden", "labrador", "poodle"],
    caution: ["husky", "border"],
    goodReason: "お互いの深い感情を理解し合える。安定した関係の中で長く続く絆を築ける。",
    cautionReason: "自由すぎるタイプや完璧主義タイプとは、価値観と生活ペースのズレが出やすい。",
  },
  chihuahua: {
    id: "chihuahua", name: "チワワ", emoji: "💎", color: "#EC4899",
    catch: "体は小さい。プライドは無限大。",
    desc: "体格差を全く気にしない無敵のプライド。大型犬にも物怖じしない。強がってるけど信頼した人には驚くほど甘えてくる、複雑な魅力の持ち主。",
    strengths: ["度胸", "自信", "媚びない強さ", "深い信頼関係を築く力"],
    weaknesses: ["プライドが傷つくと最悪", "謝るのが苦手", "感情の起伏が激しい", "素直になれない"],
    love: "惚れた相手には一途。でも気に入らないと最初から相手にしない。一度心を開いたら別人のように甘える。",
    work: "営業・交渉・芸能・独立業に向いている。プライドと強さを武器に、誰も踏み込めない領域を作れる。",
    subtypes: [
      { name: "プライドの塊", catch: "体は小さい。器は小さい。プライドは無限大。", desc: "体格差を全く気にしない無敵のプライド。「舐めんな」オーラ全開。" },
      { name: "甘えんぼチワワ", catch: "構ってくれないと世界が終わる気がする", desc: "愛されることが生命維持装置。全力で愛を求める純粋な魂。" },
      { name: "毒舌チワワ", catch: "思ったことを全部言う。これが私のポリシー。", desc: "フィルターなしで本音を言う。傷つけるつもりはないが刺さる。" },
      { name: "実は甘党チワワ", catch: "強がってるけど、優しくされると溶ける", desc: "外面はツンツン。信頼した人には驚くほど甘えてくる。" },
    ],
    good: ["golden", "labrador", "shiba"],
    caution: ["border", "husky"],
    goodReason: "包容力のあるタイプがチワワのプライドを上手に受け止めてくれる。ギャップを愛してもらえる関係。",
    cautionReason: "完璧主義や自由すぎるタイプとは、価値観と感情のテンポが合わずストレスになりやすい。",
  },
  labrador: {
    id: "labrador", name: "ラブラドール", emoji: "🌈", color: "#FBBF24",
    catch: "この人がいれば大丈夫、と思わせる安定感",
    desc: "周りの人が自然と頼ってくる安定感の持ち主。感情の波が少なく、誰にでも公平に優しい。争いが嫌いで、みんな仲良くしてほしいタイプ。",
    strengths: ["揺るぎない安定感", "受容力", "信頼感", "責任感"],
    weaknesses: ["自分のことを後回しにする", "Noが言えない", "優柔不断", "頼られすぎて疲れる"],
    love: "パートナーの支えになることに喜びを感じる。相手のペースに合わせる。自分の気持ちを言いにくい傾向がある。",
    work: "医療・福祉・教育・カウンセリングなど、人を支える仕事で最も輝く。縁の下の力持ちポジションが得意。",
    subtypes: [
      { name: "安全基地ラブ", catch: "この人がいれば大丈夫、と思わせる存在", desc: "周りの人が自然と頼ってくる安定感。誰にでも公平に優しい。" },
      { name: "穏やか系ラブ", catch: "争いが嫌いで、みんな仲良くしてほしい", desc: "平和主義の体現者。誰とも争わず、中立を守る。" },
      { name: "頼れるラブ", catch: "困ったときの〇〇頼みの〇〇は私", desc: "責任感が強く、任された仕事は必ずやり遂げる。" },
      { name: "永遠の子犬ラブ", catch: "大人になっても「遊ぼ！」が口癖", desc: "大人になれない天真爛漫さが魅力。純粋無垢で悪意ゼロ。" },
    ],
    good: ["husky", "chihuahua", "golden"],
    caution: ["shiba", "akita"],
    goodReason: "ラブラドールの安定感が、感情的なタイプや自由なタイプの支えになる。自然な補完関係が生まれる。",
    cautionReason: "独立心が強く感情を出さないタイプとは、関係の深め方でギャップを感じやすい。",
  },
  akita: {
    id: "akita", name: "秋田犬", emoji: "🏔️", color: "#78716C",
    catch: "忠義と威厳を兼ね備えた、武士の魂",
    desc: "一度信頼した相手には絶対の忠誠を誓う。寡黙で威厳があり、軽々しく感情を見せない。ハチ公のように、深く一途な愛情を持っている。",
    strengths: ["揺るぎない忠誠心", "威厳", "冷静な判断力", "強い意志"],
    weaknesses: ["心を開くのに時間がかかる", "頑固", "感情表現が苦手", "変化が苦手"],
    love: "深く静かに愛する。派手な表現はしないが、その愛は本物で長続きする。裏切られると立ち直るのが難しい。",
    work: "職人・警察・自衛隊・伝統を守る仕事。長期的なコミットメントが求められる専門職で力を発揮。",
    subtypes: [
      { name: "武士秋田", catch: "義を重んじ、道を外れない", desc: "信念に従って生きる。妥協しない硬派な生き方。" },
      { name: "番犬秋田", catch: "大切なものは命がけで守る", desc: "守護本能が強く、家族・仲間への忠誠心が絶対的。" },
      { name: "渋い秋田", catch: "多くを語らず、背中で語る", desc: "寡黙だが存在感がある。一言の重みが違う。" },
      { name: "孤独な秋田", catch: "群れることを良しとしない孤高の存在", desc: "一人の時間を愛する。深く付き合う人間を厳選する。" },
    ],
    good: ["shiba", "siberian", "dachshund"],
    caution: ["pomeranian", "labrador"],
    goodReason: "同じく寡黙で深い絆を重んじるタイプとは、言葉がなくても通じ合える関係を築ける。",
    cautionReason: "賑やかすぎるタイプや距離感が近すぎるタイプとは、ペースが合わずストレスになりやすい。",
  },
  pomeranian: {
    id: "pomeranian", name: "ポメラニアン", emoji: "🌸", color: "#F472B6",
    catch: "世界をステージに変える、天性のエンターテイナー",
    desc: "注目を浴びることが生きがい。表現力豊かで、その場にいるだけで空気が変わる。エネルギーが溢れ、常に何かを発信し続ける存在。",
    strengths: ["圧倒的な表現力", "人を惹きつける華", "エネルギーが無限", "ムードメーカー"],
    weaknesses: ["承認依存気味", "自分の軸がぶれやすい", "流されやすい", "注目されないと不安"],
    love: "相手を喜ばせることが愛情表現。常に輝いていたいが、本当は誰かにそのまま愛されたい。",
    work: "芸能・インフルエンサー・MC・イベント企画・接客。人前で輝ける場所が最高の舞台。",
    subtypes: [
      { name: "スター気質", catch: "生まれながらにして主役", desc: "どこにいても中心にいる。存在感が圧倒的。" },
      { name: "かまってポメ", catch: "見てて見てて！わたしを見て！", desc: "常に誰かの反応が欲しい。愛情確認が多め。" },
      { name: "オシャレポメ", catch: "美しくあることへのこだわりは譲れない", desc: "見た目へのこだわりが強い。センスが良い。" },
      { name: "毒舌ポメ", catch: "可愛い顔して、けっこう辛辣なことを言う", desc: "愛嬌があるから許される毒舌の持ち主。" },
    ],
    good: ["golden", "labrador", "poodle"],
    caution: ["shiba", "akita"],
    goodReason: "受け入れてくれる包容力のあるタイプとは、存在を肯定し合える関係になれる。",
    cautionReason: "クールで独立心の強いタイプには、エネルギーが重たく感じられることがある。",
  },
  dalmatian: {
    id: "dalmatian", name: "ダルメシアン", emoji: "🎲", color: "#64748B",
    catch: "個性の塊。唯一無二の存在感を放つ異端児",
    desc: "どこにいても目立つ存在感。ルールより自分のスタイルを優先する、真の個人主義者。予測不能な言動が周りを驚かせ続ける。",
    strengths: ["唯一無二の個性", "カリスマ性", "ゼロからイチを生む力", "自由な発想"],
    weaknesses: ["ルールを守るのが苦手", "空気を読まない", "周りへの迷惑計算が甘い", "計画性がない"],
    love: "恋愛も個性的。型にはまらない付き合い方を好む。相手の個性を尊重し、束縛しない。",
    work: "アーティスト・デザイナー・起業家・クリエイター。常識の外側で勝負できる人材。",
    subtypes: [
      { name: "アーティスト気質", catch: "自分の世界観を表現することが生きること", desc: "独自の美学と世界観を持つ。理解されなくてもいい。" },
      { name: "反骨精神の塊", catch: "「普通」という言葉が一番嫌い", desc: "常識やルールへの反発心が原動力。反骨精神で動く。" },
      { name: "自由人", catch: "明日のことは明日考える主義", desc: "今この瞬間を最優先。計画という概念がない。" },
      { name: "カリスマ", catch: "何もしていないのになぜか人がついてくる", desc: "生まれながらのオーラがある。本能的なリーダー。" },
    ],
    good: ["husky", "dachshund", "golden"],
    caution: ["border", "poodle"],
    goodReason: "自由と個性を理解し合えるタイプとは、互いを縛らず刺激し合える良い関係になれる。",
    cautionReason: "計画性・完璧主義タイプとは、根本的な生き方の価値観が衝突しやすい。",
  },
  siberian: {
    id: "siberian", name: "シベリアン", emoji: "❄️", color: "#38BDF8",
    catch: "極寒の地で鍛えた、孤高の精神力",
    desc: "どんな逆境でも折れない精神力の持ち主。孤独を恐れず、自分のペースを崩さない。静かだが強く、長距離を走り続ける持久力がある。",
    strengths: ["折れない精神力", "自己管理能力", "孤独への耐性", "長期的な継続力"],
    weaknesses: ["感情表現が少ない", "協力を求めるのが苦手", "頑固", "変化への適応が遅い"],
    love: "深く静かに愛する。感情を表に出さないが、愛情は確かに存在している。長期的な関係を大切にする。",
    work: "研究者・エンジニア・長距離アスリート・山岳ガイドなど、孤独と持久力が必要な仕事で真価を発揮。",
    subtypes: [
      { name: "冒険家", catch: "誰も行かない場所に行きたい", desc: "未知の領域への挑戦が原動力。フロンティア精神旺盛。" },
      { name: "忍耐強いタイプ", catch: "諦めるという選択肢が存在しない", desc: "どんな状況でも折れない。長期戦に最強。" },
      { name: "孤高の存在", catch: "群れなくても強い", desc: "一人でも完結できる強さを持つ。深い自己理解がある。" },
      { name: "静かな強者", catch: "喋らなくても、その強さは伝わる", desc: "言葉より行動で語る。圧倒的な結果を静かに出す。" },
    ],
    good: ["husky", "akita", "labrador"],
    caution: ["poodle", "pomeranian"],
    goodReason: "同じく孤独を理解し、深い絆を重んじるタイプとは自然な信頼関係が生まれる。",
    cautionReason: "賑やかさや社交性を求めるタイプとは、根本的な生活スタイルが合わないことが多い。",
  },
};

const NAME_TO_ID: Record<string, string> = {
  "柴犬": "shiba", "ゴールデン": "golden", "ハスキー": "husky",
  "トイプードル": "poodle", "ボーダーコリー": "border", "ダックスフンド": "dachshund",
  "チワワ": "chihuahua", "ラブラドール": "labrador", "秋田犬": "akita",
  "ポメラニアン": "pomeranian", "ダルメシアン": "dalmatian", "シベリアン": "siberian",
};

export default function BreedDetailPage({ params }: { params: { id: string } }) {
  const breed = BREEDS_DATA[params.id];
  if (!breed) notFound();

  return (
    <div style={{ minHeight: "100vh", background: "#080808", color: "#f0ede6" }}>
      {/* Header */}
      <div style={{
        background: "rgba(255,255,255,0.02)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "16px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <Link href="/breeds" style={{ color: "#f59e0b", textDecoration: "none", fontSize: "14px", fontWeight: 700 }}>
          ← 犬種図鑑
        </Link>
        <Link href="/" style={{ color: "#666", textDecoration: "none", fontSize: "13px" }}>
          診断トップ
        </Link>
      </div>

      {/* Glow */}
      <div style={{ position: "fixed", top: "-10%", left: "50%", transform: "translateX(-50%)", width: "500px", height: "500px", background: `radial-gradient(circle, ${breed.color}15 0%, transparent 70%)`, pointerEvents: "none", zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "500px", margin: "0 auto", padding: "48px 20px 60px" }}>

        {/* Hero */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div style={{ fontSize: "80px", marginBottom: "16px", filter: `drop-shadow(0 0 30px ${breed.color}66)` }}>{breed.emoji}</div>
          <div style={{ fontSize: "11px", letterSpacing: "0.3em", color: breed.color, marginBottom: "10px", fontFamily: "monospace" }}>BREED PROFILE</div>
          <h1 style={{ fontSize: "40px", fontWeight: 900, color: "#fff", marginBottom: "8px", fontFamily: "'Noto Serif JP', serif" }}>{breed.name}</h1>
          <p style={{ fontSize: "15px", color: "#666", lineHeight: 1.6 }}>{breed.catch}</p>
        </div>

        {/* Description */}
        <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "20px", padding: "20px", marginBottom: "14px" }}>
          <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", color: breed.color, marginBottom: "10px", fontFamily: "monospace" }}>PROFILE</div>
          <p style={{ fontSize: "14px", color: "#bbb", lineHeight: 1.8 }}>{breed.desc}</p>
        </div>

        {/* Strengths / Weaknesses */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "14px" }}>
          <div style={{ background: "rgba(34,197,94,0.05)", border: "1px solid rgba(34,197,94,0.15)", borderRadius: "16px", padding: "16px" }}>
            <div style={{ fontSize: "12px", fontWeight: 700, color: "#22c55e", marginBottom: "10px" }}>💪 強み</div>
            {breed.strengths.map((s: string, i: number) => (
              <div key={i} style={{ fontSize: "12px", color: "#bbb", marginBottom: "6px", lineHeight: 1.5 }}>• {s}</div>
            ))}
          </div>
          <div style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.15)", borderRadius: "16px", padding: "16px" }}>
            <div style={{ fontSize: "12px", fontWeight: 700, color: "#ef4444", marginBottom: "10px" }}>😅 弱み</div>
            {breed.weaknesses.map((w: string, i: number) => (
              <div key={i} style={{ fontSize: "12px", color: "#bbb", marginBottom: "6px", lineHeight: 1.5 }}>• {w}</div>
            ))}
          </div>
        </div>

        {/* Love */}
        <div style={{ background: "rgba(236,72,153,0.05)", border: "1px solid rgba(236,72,153,0.15)", borderRadius: "16px", padding: "16px", marginBottom: "14px" }}>
          <div style={{ fontSize: "12px", fontWeight: 700, color: "#ec4899", marginBottom: "8px" }}>💘 恋愛傾向</div>
          <p style={{ fontSize: "13px", color: "#bbb", lineHeight: 1.7 }}>{breed.love}</p>
        </div>

        {/* Work */}
        <div style={{ background: "rgba(245,158,11,0.05)", border: "1px solid rgba(245,158,11,0.15)", borderRadius: "16px", padding: "16px", marginBottom: "14px" }}>
          <div style={{ fontSize: "12px", fontWeight: 700, color: "#f59e0b", marginBottom: "8px" }}>💼 仕事・適職</div>
          <p style={{ fontSize: "13px", color: "#bbb", lineHeight: 1.7 }}>{breed.work}</p>
        </div>

        {/* Subtypes */}
        <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "20px", padding: "20px", marginBottom: "14px" }}>
          <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", color: breed.color, marginBottom: "14px", fontFamily: "monospace" }}>4 SUBTYPES</div>
          <div style={{ display: "grid", gap: "10px" }}>
            {breed.subtypes.map((s: any, i: number) => (
              <div key={i} style={{ background: `${breed.color}08`, border: `1px solid ${breed.color}22`, borderRadius: "12px", padding: "14px 16px" }}>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>{s.name}</div>
                <div style={{ fontSize: "11px", color: breed.color, marginBottom: "6px" }}>「{s.catch}」</div>
                <div style={{ fontSize: "12px", color: "#666" }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Compatibility - Good */}
        <div style={{ background: "rgba(34,197,94,0.05)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: "16px", padding: "16px", marginBottom: "12px" }}>
          <div style={{ fontSize: "12px", fontWeight: 700, color: "#22c55e", marginBottom: "8px" }}>💚 相性の良い犬種</div>
          <p style={{ fontSize: "12px", color: "#666", marginBottom: "12px", lineHeight: 1.6 }}>{breed.goodReason}</p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {breed.good.map((id: string) => {
              const b = BREEDS_DATA[id];
              if (!b) return null;
              return (
                <Link key={id} href={`/breeds/${id}`} target="_blank" style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  padding: "8px 14px", borderRadius: "100px",
                  background: `${b.color}15`, border: `1px solid ${b.color}44`,
                  textDecoration: "none", color: "#fff", fontSize: "13px", fontWeight: 700,
                  transition: "all 0.2s",
                }}>
                  {b.emoji} {b.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Compatibility - Caution */}
        <div style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "16px", padding: "16px", marginBottom: "28px" }}>
          <div style={{ fontSize: "12px", fontWeight: 700, color: "#ef4444", marginBottom: "8px" }}>⚠️ 相性注意の犬種</div>
          <p style={{ fontSize: "12px", color: "#666", marginBottom: "12px", lineHeight: 1.6 }}>{breed.cautionReason}</p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {breed.caution.map((id: string) => {
              const b = BREEDS_DATA[id];
              if (!b) return null;
              return (
                <Link key={id} href={`/breeds/${id}`} target="_blank" style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  padding: "8px 14px", borderRadius: "100px",
                  background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)",
                  textDecoration: "none", color: "#ef4444", fontSize: "13px", fontWeight: 700,
                }}>
                  {b.emoji} {b.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <Link href="/" style={{
            display: "inline-block", padding: "16px 40px", borderRadius: "16px",
            background: "linear-gradient(135deg,#f59e0b,#ef4444)", color: "#000",
            fontWeight: 900, textDecoration: "none", fontSize: "15px",
          }}>
            自分の犬種を診断する 🐾
          </Link>
        </div>
      </div>
    </div>
  );
}
