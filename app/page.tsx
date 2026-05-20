"use client";
import { useState, useEffect, useRef } from "react";

// ============================================================
// DATA LAYER
// ============================================================

const BREEDS = {
  shiba: {
    id: "shiba", name: "柴犬", emoji: "🐕",
    color: "#E8622A", bgGradient: "from-orange-900 via-orange-700 to-amber-500",
    base: "孤高の美学を持つ、国宝級の自意識。",
    subtypes: {
      philosopher: { name: "哲学柴", tag: "独立心+支配性高", catch: "「なぜ生きるのか」を考えながら飯を食う", desc: "表面上は超クールだが、内側では常に宇宙の真理と対話している。人間関係は厳選主義。選ばれし者だけが心を開く扉の前に立てる。SNSのフォロワーより哲学書の数を誇りにしている。", strengths: ["ブレない軸", "深い洞察力", "無駄な人間関係ゼロ"], weaknesses: ["頑固すぎる", "協調性が宇宙のかなた", "「わかる人だけわかればいい」精神"], love: "恋愛より精神的繋がりを求める。告白は相手にさせる。フラれても「まあいっか」と言える唯一の存在。", compatible: ["チワワ", "秋田犬"] },
      sunny: { name: "陽キャ柴", tag: "社交性+感情性高", catch: "柴犬のくせに、なぜかみんなのセンターにいる", desc: "「柴犬なのに？」と言われるほど社交的。パリピとオタクの両方に愛される奇跡の存在。本当はちょっと繊細なのを陽気さで隠している。", strengths: ["場を盛り上げる天才", "誰とでも仲良くなれる", "切り替えの速さ"], weaknesses: ["実は繊細で傷つきやすい", "一人になると急に落ち込む", "「強がり」が口癖"], love: "好きになったら全力。でも追いかけすぎて引かれる。", compatible: ["ゴールデン", "トイプードル"] },
      emperor: { name: "皇帝柴", tag: "支配性+独立性最高", catch: "誰にも指図されない。それが私のルール。", desc: "生まれながらのカリスマ。「俺についてこい」型のリーダー。命令はしないが、なぜか全員が後をついてくる。組織のトップか、孤高の一匹狼かの二択しかない。", strengths: ["圧倒的カリスマ", "決断力", "ビジョン力"], weaknesses: ["人の話を聞かない", "プライドが高すぎる", "謝れない"], love: "追う恋はしない主義。でも一度決めたら命がけ。", compatible: ["ダックスフンド", "ボーダーコリー"] },
      dark: { name: "闇柴", tag: "衝動性+感情性高", catch: "見た目は柴犬。中身はブラックホール。", desc: "表情に出ない感情の深さが魅力。「大丈夫」と言いながら全然大丈夫じゃない。共感力は異常に高いが、それを活かす場所を間違えると自爆する。夜3時に名言ツイートをする。", strengths: ["深い共感力", "アート的感性", "本物の優しさ"], weaknesses: ["自己破壊衝動", "「どうせ私なんか」思考", "助けを求められない"], love: "片思いの方が楽だと思っている。", compatible: ["ハスキー", "ダルメシアン"] },
    }
  },
  golden: {
    id: "golden", name: "ゴールデン", emoji: "🐾",
    color: "#F5A623", bgGradient: "from-yellow-900 via-yellow-700 to-amber-400",
    base: "全人類に愛されるために生まれてきた天使。",
    subtypes: {
      everyone: { name: "みんなの太陽", tag: "社交性最高", catch: "「好き」が多すぎて人生が楽しい", desc: "人類全員に好かれたい欲求の化身。誰に対しても本気で接する。エネルギーが無限で、友達の友達まで全員仲良くなる。欠点ゼロに見えるが、実は「嫌われること」が一番怖い。", strengths: ["無条件の愛", "場のムード作り", "行動力"], weaknesses: ["断れない", "NO言えなさ選手権優勝", "好かれたい依存"], love: "惜しみない愛情で相手を包む。重いと言われることも。", compatible: ["ラブラドール", "柴犬（陽キャ柴）"] },
      hidden: { name: "隠れ繊細ゴールデン", tag: "感情性高+衝動性低", catch: "笑顔の裏で、めっちゃ傷ついてる", desc: "外面は完璧な「いい人」。でも家に帰ると泣いていることもある。頼まれると断れず、気づいたら自分が一番しんどい状況になっている。", strengths: ["高い共感力", "人の痛みがわかる", "縁の下の力持ち"], weaknesses: ["自己犠牲すぎ", "言いたいことを言えない", "「疲れた」が言えない"], love: "与えることに幸せを感じる。でもいつか限界が来る。", compatible: ["ダックスフンド", "チワワ"] },
      career: { name: "キャリアゴールデン", tag: "支配性+社交性高", catch: "愛されながら頂点に立つ、理想形", desc: "「人気者」と「できる人」を両立する最強タイプ。営業職かYouTuberに向いている。ゴリゴリ動くくせに嫌われない奇跡の存在。", strengths: ["人脈構築", "目標達成力", "愛されパワー"], weaknesses: ["キャパオーバーに気づかない", "競争心を隠している", "負けず嫌いを認めない"], love: "恋愛も仕事も全力。パートナーを巻き込んで成長する。", compatible: ["ボーダーコリー", "ハスキー"] },
      angel: { name: "天然ゴールデン", tag: "衝動性高+独立性低", catch: "悪意ゼロ。存在が奇跡。", desc: "天然すぎて周りを癒す。深く考えないのではなく、考え方が独特すぎて会話が宇宙になる。怒らせると怖いが、まず怒らない。", strengths: ["癒し効果", "純粋さ", "嫉妬しない"], weaknesses: ["空気を読みすぎ or 全く読まない", "ドジ率高い", "言われたことを忘れる"], love: "相手が主導権を持つ恋愛になりがち。流されやすい。", compatible: ["ポメラニアン", "ラブラドール"] },
    }
  },
  husky: {
    id: "husky", name: "ハスキー", emoji: "🐺",
    color: "#6B8DD6", bgGradient: "from-blue-900 via-blue-700 to-indigo-500",
    base: "誰にも縛られない、自由と孤独の詩人。",
    subtypes: {
      wanderer: { name: "永遠の旅人", tag: "独立性最高", catch: "今日も知らない街で知らない人と話している", desc: "定住という概念を持たない魂。「飽きた」「行きたい」「やってみたい」が全ての行動原理。人生をRPGとして生きている。", strengths: ["行動力", "新しいものへの適応力", "自由な発想"], weaknesses: ["持続力ゼロ", "責任から逃げる", "「でも楽しかったから」が最終防衛ライン"], love: "恋愛も旅。同じ旅人か、待てる人だけが一緒にいられる。", compatible: ["秋田犬", "シベリアン"] },
      artist: { name: "アーティストハスキー", tag: "感情性+衝動性高", catch: "傷つくことで作品が生まれる体質", desc: "感情のジェットコースターをそのまま表現に変換できる才能の持ち主。クリエイターかアーティストか詩人。普通の仕事が一番向いていない。", strengths: ["圧倒的な表現力", "感受性の深さ", "一点突破の集中力"], weaknesses: ["感情のコントロール不可", "メンタルの波が激しい", "締め切りという概念がない"], love: "恋愛は作品のインスピレーション源。ミューズを探している。", compatible: ["柴犬（闇柴）", "ダルメシアン"] },
      cool: { name: "クールハスキー", tag: "独立性+支配性高", catch: "「かっこいい」以外の形容詞を受け付けない", desc: "見た目も言動もクールに統一された美的存在。感情を表に出さないが、実は熱い魂を持っている。尊敬する人間にだけ心を開く。", strengths: ["圧倒的な存在感", "ブレないスタンス", "美的センス"], weaknesses: ["本音を言えない", "助けを求められない", "「弱み見せたら負け」思考"], love: "好きになっても1ミリも態度に出さない。全員に勘違いさせる。", compatible: ["秋田犬", "柴犬（皇帝柴）"] },
      chaos: { name: "カオスハスキー", tag: "衝動性最高", catch: "思いつきで生きているが、なぜか上手くいく", desc: "計画という概念が存在しない。思いついたら即行動。失敗してもまた思いつきで解決する。周りは振り回されるが、なぜか憎めない。", strengths: ["超・行動力", "ゼロからイチを生む力", "諦めない（飽きているだけ）"], weaknesses: ["周りへの迷惑計算ゼロ", "同じミスを繰り返す", "「なんとかなる」が口癖（なんとかなる）"], love: "一目惚れ専門。冷めるのも速い。でも本命には超一途。", compatible: ["ゴールデン（キャリア）", "ラブラドール"] },
    }
  },
  poodle: {
    id: "poodle", name: "トイプードル", emoji: "✨",
    color: "#C084FC", bgGradient: "from-purple-900 via-purple-700 to-pink-500",
    base: "可愛さは戦略。頭脳は天才。",
    subtypes: {
      strategist: { name: "戦略プードル", tag: "支配性+社交性高", catch: "可愛く見せながら全部計算してる", desc: "愛らしい外見の裏で3手先を読む知性の持ち主。感情的に見えて実は超論理的。人間関係も戦略的に構築している。", strengths: ["状況判断力", "人心掌握", "計画実行力"], weaknesses: ["計算が透けることがある", "感情を偽ることがある", "本音を言う人が極少数"], love: "恋愛も戦略。でも本命には全て投資する。", compatible: ["ダックスフンド", "ボーダーコリー"] },
      princess: { name: "プリンセスプードル", tag: "感情性+衝動性高", catch: "世界は私を中心に回っていると思っている", desc: "自己肯定感が宇宙規模。「私が一番」という自信は才能。承認欲求は高いが、それを隠さない正直さがある意味清々しい。", strengths: ["圧倒的自信", "人を惹きつける華", "行動力"], weaknesses: ["自己中心的", "気分屋", "批判を受け入れられない"], love: "愛されたい欲求が強い。好きな人には全力でアプローチ。", compatible: ["ゴールデン", "秋田犬"] },
      genius: { name: "天才プードル", tag: "独立性+支配性高", catch: "「頭いいね」と言われることが一番嬉しい", desc: "とにかく知的。本が友達。議論が好き。でも「頭いい」キャラを自分でも気にしている。プライドと実力が比例しているタイプ。", strengths: ["問題解決力", "深い知識", "分析力"], weaknesses: ["説明が長い", "「実はそれ違う」を言いたい", "共感より論理を優先する"], love: "知的な刺激を求める。話が合わない人とは続かない。", compatible: ["ボーダーコリー", "ダックスフンド"] },
      social: { name: "ソーシャルプードル", tag: "社交性最高", catch: "インフルエンサーに一番近い犬種", desc: "人を喜ばせることが生きがい。おしゃれで明るく、SNSのセンスも抜群。ちょっとミーハーだが、それも魅力のうち。", strengths: ["コミュニケーション力", "トレンド感知", "ムードメーカー"], weaknesses: ["流されやすい", "自分の軸がぶれる", "承認依存気味"], love: "相手を喜ばせることが愛情表現。ロマンチストでもある。", compatible: ["ゴールデン（天然）", "柴犬（陽キャ柴）"] },
    }
  },
  border: {
    id: "border", name: "ボーダーコリー", emoji: "🎯",
    color: "#22C55E", bgGradient: "from-green-900 via-green-700 to-emerald-500",
    base: "完璧主義と努力の化身。世界一賢い犬。",
    subtypes: {
      perfectionist: { name: "完璧主義コリー", tag: "支配性+独立性高", catch: "70点は0点と同じ。100点か、やり直し。", desc: "何事も全力。妥協という言葉が辞書にない。他人の「まあいいか」が理解できない。仕事は世界一できるが、肩を抜くことができない。", strengths: ["圧倒的な仕事クオリティ", "達成力", "粘り強さ"], weaknesses: ["完璧主義が人を疲れさせる", "自分にも他人にも厳しすぎ", "休めない体質"], love: "恋愛も全力投球。相手への要求も高くなりがち。", compatible: ["ゴールデン（キャリア）", "ダックスフンド"] },
      leader: { name: "リーダーコリー", tag: "支配性+社交性高", catch: "誰も頼んでいないのに仕切っている", desc: "組織の中でなぜか自然とリーダーになる。指示が的確で、人を動かすのが上手い。ただし「俺じゃないとダメ」感が出てしまうことも。", strengths: ["統率力", "判断の速さ", "チームビルディング"], weaknesses: ["丸投げできない", "信頼して任せられない", "一人で抱え込む"], love: "家族・仲間を守る意識が強い。重厚な愛情表現をする。", compatible: ["柴犬（皇帝柴）", "ゴールデン"] },
      analyzer: { name: "分析コリー", tag: "独立性+衝動性低", catch: "行動前にスプレッドシートを作る", desc: "徹底的に考えてから動く。思考のスピードが速く、話を聞きながら次の一手を考えている。即断即決が苦手で、熟考が必要。", strengths: ["リスク管理", "論理的思考", "正確な計画"], weaknesses: ["考えすぎて動けない", "行動が遅い", "変化への適応が苦手"], love: "相手をよく観察してから動く。慎重すぎて機を逃す。", compatible: ["トイプードル（天才）", "ダックスフンド"] },
      burnout: { name: "燃え尽き寸前コリー", tag: "感情性+衝動性高", catch: "全力で走りすぎて、ちょっと疲れてる", desc: "本来は最強なのに、全力を出しすぎて消耗している。バーンアウト一歩手前を常にキープしている。休み方を知らない。", strengths: ["短距離の爆発力", "責任感", "向上心"], weaknesses: ["自分のケアができない", "限界を言えない", "「もっと頑張れば」が口癖"], love: "恋愛に時間を割く余裕がない。でもパートナーには安らぎを求める。", compatible: ["ゴールデン（隠れ繊細）", "ラブラドール"] },
    }
  },
  dachshund: {
    id: "dachshund", name: "ダックスフンド", emoji: "🌭",
    color: "#D97706", bgGradient: "from-amber-900 via-amber-700 to-yellow-500",
    base: "頑固で愛らしい、マイルールの帝王。",
    subtypes: {
      stubborn: { name: "頑固ダックス", tag: "独立性+支配性高", catch: "一度決めたら神様でも動かせない", desc: "マイルールを死守する。融通が利かないと言われるが、本人には「一貫性がある」にしか聞こえない。批判を受け付けない強靭なプライドを持つ。", strengths: ["意志の強さ", "一貫性", "信念"], weaknesses: ["頑固すぎて損をする", "謝れない", "変化が怖い"], love: "一度好きになったら長い。でも別れを引きずる。", compatible: ["柴犬（哲学柴）", "秋田犬"] },
      loyal: { name: "忠義ダックス", tag: "感情性+社交性高", catch: "あなたのためなら何でもする（本気）", desc: "特定の人間への忠誠心が異常に高い。「推し」ができると全リソースを投入する。友情に命をかける純粋な魂。", strengths: ["深い絆を築く力", "献身性", "義理人情"], weaknesses: ["依存しやすい", "裏切られたときのダメージが大きい", "相手の言いなりになることがある"], love: "一途すぎる。独占欲が強め。でも全力で愛する。", compatible: ["ゴールデン", "ラブラドール"] },
      foodie: { name: "グルメダックス", tag: "衝動性+感情性高", catch: "食が人生。それ以外は余白。", desc: "美食と快楽を追求する哲学を持つ。「今この瞬間を楽しむ」が人生の信条。仕事より食事の方が重要な日がある。", strengths: ["今を楽しむ力", "豊かな感性", "人を喜ばせる趣味"], weaknesses: ["衝動買い・衝動食い", "自制心の欠如", "先延ばし癖"], love: "美味しいものを一緒に食べる人が最高のパートナー。", compatible: ["ポメラニアン", "ゴールデン（天然）"] },
      dramatic: { name: "ドラマチックダックス", tag: "感情性最高", catch: "日常の全てが映画のワンシーン", desc: "感情表現が豊か。喜びも悲しみも10倍にして表現する。普通の出来事を劇的に語る才能がある。周りに笑いと感動を与える存在。", strengths: ["表現力", "共感を呼ぶ力", "エンタメ性"], weaknesses: ["大げさ", "感情的になりすぎる", "小さいことで落ち込む"], love: "恋愛にドラマを求める。記念日や演出に命をかける。", compatible: ["ハスキー（アーティスト）", "ポメラニアン"] },
    }
  },
  chihuahua: {
    id: "chihuahua", name: "チワワ", emoji: "💎",
    color: "#EC4899", bgGradient: "from-pink-900 via-pink-700 to-rose-500",
    base: "小さな体に、宇宙級のプライドを詰め込んだ存在。",
    subtypes: {
      pride: { name: "プライドの塊", tag: "支配性+独立性高", catch: "体は小さい。器は小さい。プライドは無限大。", desc: "体格差を全く気にしない無敵のプライド。大型犬にも物怖じしない。「舐めんな」のオーラ常時全開。", strengths: ["度胸", "自信", "媚びない強さ"], weaknesses: ["プライドが傷つくと最悪", "頑固", "謝るくらいなら死んだ方がマシ（誇張）"], love: "惚れた相手には一途。でも気に入らないと最初から相手にしない。", compatible: ["柴犬（哲学柴）", "秋田犬"] },
      spoiled: { name: "甘えんぼチワワ", tag: "感情性+衝動性高", catch: "構ってくれないと世界が終わる気がする", desc: "愛されることが生命維持装置。かまってちゃんと言われるが、本人は全力で愛を求めている純粋な魂。拗ねるのも愛情表現。", strengths: ["感情の豊かさ", "愛されキャラ", "素直さ"], weaknesses: ["わがまま", "感情の起伏が激しい", "一人が苦手"], love: "全力で愛されたい。愛情確認行動が多め。", compatible: ["ゴールデン（みんなの太陽）", "ラブラドール"] },
      sharp: { name: "毒舌チワワ", tag: "衝動性+支配性高", catch: "思ったことを全部言う。これが私のポリシー。", desc: "フィルターなしで本音を言う。傷つけるつもりはないが結果的に刺さる。でもその正直さを愛してくれる人が必ずいる。", strengths: ["正直さ", "ハッキリした意見", "裏表のなさ"], weaknesses: ["口が悪い", "KY", "「なんで怒ってるの？」の無自覚さ"], love: "好きな人にも毒舌。「ツンデレ」と言えば聞こえはいい。", compatible: ["ボーダーコリー", "ダックスフンド"] },
      hidden_soft: { name: "実は甘党チワワ", tag: "感情性+社交性高", catch: "強がってるけど、優しくされると溶ける", desc: "外面はツンツンしているが、信頼した人には驚くほど甘えてくる。「こんな一面があったの？」と思わせるギャップが武器。", strengths: ["ギャップの魅力", "深い信頼関係", "意外な優しさ"], weaknesses: ["心を開くまでが長い", "プライドが邪魔する", "素直になれない"], love: "一度心を開いたら別人のように甘える。", compatible: ["ゴールデン", "ラブラドール"] },
    }
  },
  labrador: {
    id: "labrador", name: "ラブラドール", emoji: "🌟",
    color: "#FBBF24", bgGradient: "from-yellow-900 via-amber-700 to-yellow-400",
    base: "信頼と安定の象徴。みんなの安全基地。",
    subtypes: {
      anchor: { name: "安全基地ラブ", tag: "感情性+社交性高", catch: "この人がいれば大丈夫、と思わせる存在", desc: "周りの人が自然と頼ってくる安定感の持ち主。感情の波が少なく、誰にでも公平に優しい。「縁の下の力持ち」系最高峰。", strengths: ["揺るぎない安定感", "受容力", "信頼感"], weaknesses: ["自分のことを後回しにする", "Noが言えない", "感情を出せない"], love: "パートナーの支えになることに喜びを感じる。", compatible: ["ハスキー（カオス）", "チワワ（甘えんぼ）"] },
      gentle: { name: "穏やか系ラブ", tag: "感情性+独立性低", catch: "争いが嫌いで、みんな仲良くしてほしい", desc: "平和主義の体現者。誰とも争わず、中立を守る。その分、意見を持たないと思われがちだが、実は深い考えを持っている。", strengths: ["調整力", "穏やかさ", "聞き上手"], weaknesses: ["意見を言わない", "優柔不断", "流されやすい"], love: "相手のペースに合わせる。自分の気持ちを言いにくい。", compatible: ["ゴールデン", "トイプードル（ソーシャル）"] },
      reliable: { name: "頼れるラブ", tag: "社交性+支配性高", catch: "困ったときの〇〇頼みの〇〇は私", desc: "仕事もプライベートも頼りにされることが多い。責任感が強く、任された仕事は必ずやり遂げる。自然とポジションが上がっていく。", strengths: ["責任感", "実行力", "信頼構築"], weaknesses: ["頼られすぎて疲れる", "断り方がわからない", "完璧にやろうとしすぎる"], love: "パートナーを守りたい気持ちが強い。", compatible: ["ボーダーコリー（リーダー）", "柴犬"] },
      playful: { name: "永遠の子犬ラブ", tag: "衝動性+社交性高", catch: "大人になっても「遊ぼ！」が口癖", desc: "大人になれない天真爛漫さが魅力。純粋無垢で悪意ゼロ。一緒にいると楽しい気分になれる。", strengths: ["場の空気を明るくする", "純粋さ", "行動力"], weaknesses: ["空気を読まない", "場をわきまえない", "いつまでも落ち着かない"], love: "恋愛も遊びのような感覚で全力。", compatible: ["ゴールデン（天然）", "ハスキー（カオス）"] },
    }
  },
  pomeranian: {
    id: "pomeranian", name: "ポメラニアン", emoji: "🌸",
    color: "#F97316", bgGradient: "from-orange-900 via-rose-700 to-pink-400",
    base: "生まれながらのスター。存在そのものがコンテンツ。",
    subtypes: {
      star: { name: "アイドルポメ", tag: "社交性+感情性高", catch: "見られることが生きがい。注目されて初めて本領発揮。", desc: "承認欲求をエネルギーに変換できる天才。目立つことが怖くない。むしろ目立つことが本来の姿。コンテンツ力が異常に高い。", strengths: ["存在感", "愛されキャラ", "自己表現力"], weaknesses: ["注目されないと不安", "孤独に弱い", "ナルシシスト傾向"], love: "恋愛もドラマチックに。告白はサプライズ演出付き。", compatible: ["ゴールデン", "ラブラドール（永遠の子犬）"] },
      fashion: { name: "おしゃれポメ", tag: "感情性+支配性高", catch: "見た目に手を抜くのは、生き方に手を抜くのと同じ", desc: "美意識が異常に高い。自分の見せ方を常に意識している。流行の最前線にいる。センスで人を判断することもある。", strengths: ["美的センス", "自己プロデュース力", "トレンド感"], weaknesses: ["外見へのこだわりが強すぎ", "人をジャッジしがち", "コストがかかる"], love: "外見が気になる。でも中身で選ぶ自分もいる。", compatible: ["トイプードル", "ダックスフンド（グルメ）"] },
      energetic: { name: "ハイパーポメ", tag: "衝動性最高", catch: "エネルギーが無限に湧いてくる謎の体質", desc: "常に動いている。静止画が存在しない。テンションが高すぎて周りを疲れさせることもあるが、そのエネルギーが場を動かす。", strengths: ["行動力", "場の活性化", "底なしのポジティブ"], weaknesses: ["落ち着きがない", "集中できない", "睡眠が少ない（でも元気）"], love: "恋愛も全力。相手が引くほどのアプローチをする。", compatible: ["ゴールデン（みんなの太陽）", "ラブラドール"] },
      tsundere: { name: "ツンデレポメ", tag: "独立性+感情性高", catch: "素直になれない体質で生まれてきた", desc: "本当は甘えたいのに素直に言えない。ツンっとするのも愛情表現だと思っている。でも本心では相手のことをずっと考えている。", strengths: ["ギャップの魅力", "深い感情", "独特の可愛さ"], weaknesses: ["伝わらない", "孤独になりがち", "素直になる練習が必要"], love: "好きな人の前だけツンツンが増す。伝わってほしいのに伝わらない。", compatible: ["ラブラドール（安全基地）", "ゴールデン（隠れ繊細）"] },
    }
  },
  akita: {
    id: "akita", name: "秋田犬", emoji: "🏯",
    color: "#DC2626", bgGradient: "from-red-900 via-red-700 to-orange-600",
    base: "静かな威厳と深い忠義。日本が誇る魂の犬種。",
    subtypes: {
      samurai: { name: "サムライ秋田", tag: "支配性+独立性高", catch: "言葉より行動で示す。それが武士道。", desc: "口数は少ないが行動に全てが宿っている。信念のためなら全てを犠牲にできる覚悟を持つ。現代のサムライ。", strengths: ["揺るぎない信念", "行動力", "威厳"], weaknesses: ["言葉で伝えない", "頑固", "変化への抵抗"], love: "告白はしない。でも行動で全て示す。", compatible: ["柴犬（哲学柴）", "ボーダーコリー"] },
      guardian: { name: "守護神秋田", tag: "支配性+感情性高", catch: "大切なものを守るためなら、全てを賭ける", desc: "守りたい人や場所への執着が深い。ファミリー・仲間への愛情は計り知れない。外には強く、内には優しい。", strengths: ["保護欲", "深い愛情", "責任感"], weaknesses: ["過保護になる", "縄張り意識が強い", "外と内で別人"], love: "パートナーと家族を全力で守る。独占欲は強め。", compatible: ["ゴールデン", "ラブラドール"] },
      lone: { name: "孤高秋田", tag: "独立性最高", catch: "群れる必要がない。一人で完結している。", desc: "孤独を恐れない。むしろ一人の時間が最も充実する。人を嫌いなのではなく、一人が好きなだけ。深く理解してくれる人だけを求める。", strengths: ["自立心", "内面の豊かさ", "本質を見る力"], weaknesses: ["孤立する", "助けを求めない", "親しみにくい"], love: "なかなか心を開かない。でも一度開いたら深い。", compatible: ["ハスキー（クール）", "柴犬（皇帝柴）"] },
      noble: { name: "高貴秋田", tag: "感情性+支配性高", catch: "品格とは生き方そのもの", desc: "何をやっても様になる品格がある。言動に一貫した美しさがある。下品なものを本能的に避ける。", strengths: ["品格", "一貫性", "美意識"], weaknesses: ["近寄りがたい", "高すぎるハードル", "融通が利かない"], love: "真剣交際しか考えない。遊びはできない体質。", compatible: ["チワワ（プライドの塊）", "柴犬（皇帝柴）"] },
    }
  },
  dalmatian: {
    id: "dalmatian", name: "ダルメシアン", emoji: "🔵",
    color: "#7C3AED", bgGradient: "from-violet-900 via-purple-700 to-indigo-500",
    base: "個性的で目立つ存在。誰とも被らない独自路線。",
    subtypes: {
      unique: { name: "個性派ダルメシアン", tag: "独立性+衝動性高", catch: "普通が一番嫌い。唯一無二を目指す。", desc: "人と被ることへの強い抵抗を持つ。個性的でいることが自分のアイデンティティ。マイノリティの方が心地よい。", strengths: ["独自性", "クリエイティビティ", "トレンドに流されない"], weaknesses: ["普通が苦手すぎる", "協調を拒む", "共感されにくい"], love: "普通の恋愛より特別な関係を求める。", compatible: ["ハスキー（アーティスト）", "柴犬（闇柴）"] },
      energetic2: { name: "爆走ダルメシアン", tag: "衝動性+社交性高", catch: "止まれないし、止まりたくもない", desc: "エネルギーの塊。常に動き続けている。頭よりも体が先に動く。でもそのエネルギーが周りを巻き込む原動力になる。", strengths: ["行動力", "情熱", "カリスマ的エネルギー"], weaknesses: ["後先を考えない", "体力切れ後の落差", "周りを疲れさせる"], love: "猛アプローチで押し切るタイプ。情熱的。", compatible: ["ラブラドール（永遠の子犬）", "ゴールデン"] },
      mystery: { name: "ミステリアスダルメシアン", tag: "感情性+独立性高", catch: "全部見せない。見せたらつまらない。", desc: "謎めいた雰囲気が武器。全てを語らない奥深さを持つ。人を引きつけるが、近づくほど遠くなる蜃気楼のような存在。", strengths: ["ミステリアスな魅力", "深い内面", "引きつける力"], weaknesses: ["孤独になる", "伝わらない", "誤解されやすい"], love: "惹きつけておいて押しが弱い。相手が迷う。", compatible: ["ハスキー（クール）", "柴犬（闇柴）"] },
      sensitive: { name: "繊細ダルメシアン", tag: "感情性最高", catch: "世界の全てが刺さる、鋭すぎる感受性", desc: "人一倍感受性が高く、全てのことに深く感動し、深く傷つく。芸術家肌で、日常に美しさを見つける天才。でも消耗も激しい。", strengths: ["深い感受性", "芸術的センス", "共感力"], weaknesses: ["傷つきやすい", "感情の消耗が激しい", "繊細さが理解されない"], love: "感情の深さを共有できる相手が理想。", compatible: ["柴犬（闇柴）", "ハスキー（アーティスト）"] },
    }
  },
  siberian: {
    id: "siberian", name: "シベリアンハスキー", emoji: "❄️",
    color: "#0EA5E9", bgGradient: "from-sky-900 via-cyan-800 to-blue-500",
    base: "凍てつく大地を駆ける、自由と野生の化身。",
    subtypes: {
      wild: { name: "野生シベリアン", tag: "独立性+衝動性高", catch: "文明に染まることを拒む魂", desc: "都会の常識よりも自分の本能を信じる。自然の中にいる方が息ができる。型にはまることへの根本的な抵抗がある。", strengths: ["本能力", "直感力", "自然との調和"], weaknesses: ["社会的ルールが苦手", "定住できない", "自由すぎて不安定"], love: "同じ野生を持つ人だけが理解できる恋愛。", compatible: ["ハスキー（永遠の旅人）", "ダルメシアン（個性派）"] },
      team: { name: "チームワーカーシベリアン", tag: "社交性+感情性高", catch: "仲間と一緒なら、どんな吹雪も越えられる", desc: "一人では心細いが、チームに入ると最強になる。仲間への忠誠心と愛情が力の源。良いチームメンバーであることを誇りに思う。", strengths: ["チームへの貢献", "仲間意識", "絆の深さ"], weaknesses: ["一人が苦手", "チームに依存しやすい", "孤立すると機能しない"], love: "パートナーシップを重視。二人三脚の恋愛が理想。", compatible: ["ラブラドール", "ゴールデン"] },
      endurance: { name: "不屈シベリアン", tag: "独立性+支配性高", catch: "どれだけ倒れても、また立ち上がる", desc: "逆境に強い。失敗しても諦めない。凍える環境でも走り続けるスタミナは精神的にも発揮される。", strengths: ["不屈の精神", "持久力", "逆境での強さ"], weaknesses: ["無理しすぎる", "SOS出せない", "限界を認めない"], love: "長期戦の恋愛が得意。じっくり深める。", compatible: ["ボーダーコリー（燃え尽き寸前）", "秋田犬"] },
      dreamer: { name: "ドリーマーシベリアン", tag: "感情性+衝動性高", catch: "見果てぬ地平線を目指して、今日も走る", desc: "大きな夢を持つロマンチスト。理想が高く、現実との折り合いをつけるのが苦手。でもその夢が人を引きつける。", strengths: ["ビジョンの大きさ", "ロマン", "人を鼓舞する力"], weaknesses: ["現実を見ない", "計画が大雑把", "夢で終わることがある"], love: "理想の恋愛を追い求める。現実の相手に幻滅しがち。", compatible: ["ゴールデン（キャリア）", "ポメラニアン"] },
    }
  },
};

// ============================================================
// QUESTIONS
// ============================================================

const QUESTIONS = [
  {
    id: 1, text: "休日の理想の過ごし方は？", emoji: "🌅",
    choices: [
      { text: "家でゆっくり、自分の時間を楽しむ", scores: { shiba: 2, akita: 1 }, params: { independence: 2 } },
      { text: "友達や仲間と思いっきり遊ぶ", scores: { golden: 3, labrador: 2 }, params: { sociality: 3 } },
      { text: "一人で知らない場所を探検する", scores: { husky: 3, siberian: 2 }, params: { independence: 2, impulse: 1 } },
      { text: "家族や大切な人とゆったり過ごす", scores: { labrador: 2, dachshund: 2 }, params: { emotion: 2 } },
    ]
  },
  {
    id: 2, text: "グループの中での自分は？", emoji: "👥",
    choices: [
      { text: "自然とリーダーになっていることが多い", scores: { border: 3, akita: 2 }, params: { dominance: 3 } },
      { text: "みんなを盛り上げるムードメーカー", scores: { golden: 2, pomeranian: 3 }, params: { sociality: 3 } },
      { text: "縁の下の力持ちタイプ", scores: { labrador: 3, dachshund: 1 }, params: { emotion: 2 } },
      { text: "一人でいる方が楽なこともある", scores: { shiba: 3, chihuahua: 1 }, params: { independence: 3 } },
    ]
  },
  {
    id: 3, text: "仕事・勉強での自分のスタイルは？", emoji: "💼",
    choices: [
      { text: "計画を立てて完璧にこなす", scores: { border: 3, poodle: 2 }, params: { dominance: 2 } },
      { text: "直感と勢いで突破する", scores: { husky: 2, dalmatian: 2 }, params: { impulse: 3 } },
      { text: "チームワーク重視で協力して進める", scores: { golden: 2, labrador: 3 }, params: { sociality: 2 } },
      { text: "自分のペースでじっくりと", scores: { shiba: 2, akita: 2 }, params: { independence: 2 } },
    ]
  },
  {
    id: 4, text: "ストレスを感じたとき、どうする？", emoji: "😤",
    choices: [
      { text: "一人で黙って消化する", scores: { shiba: 3, akita: 2 }, params: { independence: 3 } },
      { text: "友達に話して発散する", scores: { golden: 3, pomeranian: 2 }, params: { sociality: 2, emotion: 1 } },
      { text: "身体を動かして発散する", scores: { husky: 2, dalmatian: 2 }, params: { impulse: 2 } },
      { text: "美味しいものを食べて回復する", scores: { dachshund: 3, labrador: 1 }, params: { emotion: 2 } },
    ]
  },
  {
    id: 5, text: "友達との関係性で最も大切にしていることは？", emoji: "💫",
    choices: [
      { text: "少数でも深い絆を持つ関係", scores: { shiba: 2, akita: 3 }, params: { independence: 2 } },
      { text: "広くて浅い、楽しい関係", scores: { golden: 2, pomeranian: 2 }, params: { sociality: 3 } },
      { text: "信頼と義理を大切にする関係", scores: { dachshund: 3, labrador: 2 }, params: { emotion: 2, dominance: 1 } },
      { text: "自由で束縛のない関係", scores: { husky: 3, siberian: 2 }, params: { independence: 2 } },
    ]
  },
  {
    id: 6, text: "好きな人へのアプローチ方法は？", emoji: "💘",
    choices: [
      { text: "気づいたら気づかせる、待ち戦略", scores: { shiba: 3, akita: 2 }, params: { dominance: 2 } },
      { text: "全力でアプローチして押し切る", scores: { golden: 2, pomeranian: 3 }, params: { impulse: 2, sociality: 2 } },
      { text: "まず仲良くなって関係を深めてから", scores: { labrador: 3, dachshund: 2 }, params: { emotion: 2 } },
      { text: "好きになったら即行動。ダメなら次。", scores: { husky: 2, dalmatian: 2 }, params: { impulse: 3 } },
    ]
  },
  {
    id: 7, text: "SNSについて、あなたは？", emoji: "📱",
    choices: [
      { text: "頻繁に投稿。インフルエンサー気質", scores: { pomeranian: 3, poodle: 2 }, params: { sociality: 3, impulse: 1 } },
      { text: "見る専。自分の発信はほとんどしない", scores: { shiba: 2, akita: 2 }, params: { independence: 2 } },
      { text: "気が向いたら投稿する程度", scores: { golden: 2, labrador: 2 }, params: { sociality: 1 } },
      { text: "鍵アカで身内にだけ発信", scores: { chihuahua: 2, dachshund: 2 }, params: { independence: 2, emotion: 1 } },
    ]
  },
  {
    id: 8, text: "決断するとき、どちらに近い？", emoji: "⚡",
    choices: [
      { text: "直感！考えすぎる前に動く", scores: { husky: 3, dalmatian: 2 }, params: { impulse: 3 } },
      { text: "十分考えて、リスクを検討してから", scores: { border: 3, poodle: 2 }, params: { dominance: 2, independence: 1 } },
      { text: "周りの意見を聞いてから決める", scores: { golden: 2, labrador: 3 }, params: { sociality: 2 } },
      { text: "自分の信念に従うのみ", scores: { shiba: 2, akita: 3 }, params: { independence: 3 } },
    ]
  },
  {
    id: 9, text: "自分を表す言葉に近いのは？", emoji: "🪞",
    choices: [
      { text: "クール・独立・孤高", scores: { shiba: 3, akita: 2 }, params: { independence: 3 } },
      { text: "明るい・社交的・エネルギッシュ", scores: { golden: 3, pomeranian: 2 }, params: { sociality: 3 } },
      { text: "賢い・戦略的・分析的", scores: { border: 2, poodle: 3 }, params: { dominance: 2 } },
      { text: "自由・冒険・衝動的", scores: { husky: 3, siberian: 2 }, params: { impulse: 3 } },
    ]
  },
  {
    id: 10, text: "友達から見た自分のイメージは？", emoji: "👀",
    choices: [
      { text: "「頼りになる」「相談したくなる」", scores: { labrador: 3, golden: 2 }, params: { emotion: 2, sociality: 1 } },
      { text: "「かっこいい」「ミステリアス」", scores: { shiba: 2, husky: 2, dalmatian: 1 }, params: { independence: 2 } },
      { text: "「面白い」「個性的」「予測不能」", scores: { dalmatian: 3, husky: 2 }, params: { impulse: 2 } },
      { text: "「可愛い」「癒し系」「守りたくなる」", scores: { pomeranian: 2, chihuahua: 2, dachshund: 1 }, params: { emotion: 2 } },
    ]
  },
  {
    id: 11, text: "やる気が出ないとき、どうする？", emoji: "😴",
    choices: [
      { text: "とにかく動いてみる。考えてもしょうがない", scores: { husky: 2, golden: 2 }, params: { impulse: 2 } },
      { text: "一人でじっくり原因を考える", scores: { shiba: 2, border: 2 }, params: { independence: 2 } },
      { text: "誰かと話して元気をもらう", scores: { golden: 3, pomeranian: 2 }, params: { sociality: 2 } },
      { text: "ご飯食べて寝て回復を待つ", scores: { dachshund: 3, labrador: 2 }, params: { emotion: 1 } },
    ]
  },
  {
    id: 12, text: "あなたにとって「理想の自分」は？", emoji: "✨",
    choices: [
      { text: "誰にも左右されず、自分の道を行く人", scores: { shiba: 3, akita: 2, husky: 1 }, params: { independence: 3 } },
      { text: "みんなに愛されて、場を明るくする人", scores: { golden: 3, pomeranian: 2 }, params: { sociality: 3 } },
      { text: "目標を達成し、結果を出し続ける人", scores: { border: 3, poodle: 2 }, params: { dominance: 2 } },
      { text: "大切な人を守れる、強くて優しい人", scores: { labrador: 2, akita: 2, dachshund: 1 }, params: { emotion: 2, dominance: 1 } },
    ]
  },
  {
    id: 13, text: "怒ったとき、どんな怒り方をする？", emoji: "🔥",
    choices: [
      { text: "黙って距離を置く（無言の圧力）", scores: { shiba: 3, akita: 2 }, params: { independence: 2, dominance: 1 } },
      { text: "その場ですぐ感情的に出る", scores: { chihuahua: 3, dalmatian: 2 }, params: { impulse: 3, emotion: 1 } },
      { text: "論理的に指摘してから怒る", scores: { border: 2, poodle: 2 }, params: { dominance: 2 } },
      { text: "あまり怒らない。すぐ水に流す", scores: { golden: 2, labrador: 3 }, params: { sociality: 2 } },
    ]
  },
  {
    id: 14, text: "最後に。自分の中で一番強い欲は？", emoji: "💭",
    choices: [
      { text: "自由でいたい。縛られたくない", scores: { husky: 3, siberian: 2, shiba: 1 }, params: { independence: 3 } },
      { text: "愛されたい。認められたい", scores: { pomeranian: 3, chihuahua: 2 }, params: { sociality: 2, emotion: 2 } },
      { text: "勝ちたい。一番でいたい", scores: { border: 2, poodle: 2, akita: 1 }, params: { dominance: 3 } },
      { text: "繋がりたい。深く誰かと関わりたい", scores: { dachshund: 3, labrador: 2 }, params: { emotion: 3, sociality: 1 } },
    ]
  },
];

// ============================================================
// ALGORITHM
// ============================================================

function calcResult(answers: any[]) {
  const breedScores = {};
  const params = { sociality: 0, independence: 0, dominance: 0, emotion: 0, impulse: 0 };

  Object.keys(BREEDS).forEach(b => breedScores[b] = 0);

  answers.forEach(ans => {
    if (!ans) return;
    Object.entries(ans.scores || {}).forEach(([b, v]) => { breedScores[b] = (breedScores[b] || 0) + v; });
    Object.entries(ans.params || {}).forEach(([p, v]) => { params[p] += v; });
  });

  const sorted = Object.entries(breedScores).sort((a, b) => b[1] - a[1]);
  const topBreed = sorted[0][0];
  const breed = BREEDS[topBreed];

  // Determine subtype
  const subtypes = Object.entries(breed.subtypes);
  let subtype = subtypes[0][1];

  const maxParam = Object.entries(params).sort((a, b) => b[1] - a[1])[0][0];
  const secondParam = Object.entries(params).sort((a, b) => b[1] - a[1])[1][0];
  const combined = maxParam + "+" + secondParam;

  // Find best matching subtype
  subtypes.forEach(([key, st]) => {
    const tag = st.tag.toLowerCase();
    if (tag.includes(maxParam) && tag.includes(secondParam)) subtype = st;
    else if (tag.includes(maxParam) && !subtypes.find(s => s[1].tag.toLowerCase().includes(maxParam) && s[1].tag.toLowerCase().includes(secondParam))) subtype = st;
  });

  // Simple index-based fallback
  const paramOrder = ["sociality", "independence", "dominance", "emotion", "impulse"];
  const dominantIdx = paramOrder.indexOf(maxParam) % subtypes.length;
  if (!subtype || subtype === subtypes[0][1]) {
    subtype = subtypes[dominantIdx]?.[1] || subtypes[0][1];
  }

  return { breed, subtype, params, breedScores };
}

// ============================================================
// COMPONENTS
// ============================================================

function ProgressBar({ current, total }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="w-full mb-6">
      <div className="flex justify-between text-xs mb-1" style={{ color: "#888" }}>
        <span>Q{current}/{total}</span>
        <span>{pct}%</span>
      </div>
      <div className="h-1.5 rounded-full" style={{ background: "#222" }}>
        <div className="h-1.5 rounded-full transition-all duration-500" style={{ width: `${pct}%`, background: "linear-gradient(90deg, #f59e0b, #ef4444)" }} />
      </div>
    </div>
  );
}

function ParamBar({ label, value, max = 15 }) {
  const pct = Math.min(100, Math.round((value / max) * 100));
  const colors = {
    社交性: "#f59e0b", 独立性: "#6366f1", 支配性: "#ef4444", 感情性: "#ec4899", 衝動性: "#10b981"
  };
  return (
    <div className="mb-2">
      <div className="flex justify-between text-xs mb-1" style={{ color: "#aaa" }}>
        <span>{label}</span><span>{value}pt</span>
      </div>
      <div className="h-2 rounded-full" style={{ background: "#222" }}>
        <div className="h-2 rounded-full transition-all duration-700" style={{ width: `${pct}%`, background: colors[label] || "#888" }} />
      </div>
    </div>
  );
}

const PARAM_LABELS = { sociality: "社交性", independence: "独立性", dominance: "支配性", emotion: "感情性", impulse: "衝動性" };

function ResultCard({ result, onRetry }) {
  const { breed, subtype, params } = result;
  const [visible, setVisible] = useState(false);

  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4" style={{ background: "#0a0a0a" }}>
      {/* Header */}
      <div className="text-center mb-6" style={{ opacity: visible ? 1 : 0, transition: "opacity 0.8s" }}>
        <div className="text-5xl mb-2">{breed.emoji}</div>
        <div className="text-xs tracking-widest mb-1" style={{ color: "#666" }}>YOUR TYPE IS</div>
        <div className="text-3xl font-black" style={{ color: breed.color, fontFamily: "'Noto Serif JP', serif" }}>
          {subtype.name}
        </div>
        <div className="text-lg mt-1" style={{ color: "#ccc" }}>{breed.name}</div>
      </div>

      {/* Catch copy */}
      <div className="w-full max-w-sm mb-6 p-4 rounded-2xl text-center" style={{ background: "#111", border: `1px solid ${breed.color}33` }}>
        <div className="text-base font-bold" style={{ color: "#eee", lineHeight: 1.6 }}>
          「{subtype.catch}」
        </div>
      </div>

      {/* Description */}
      <div className="w-full max-w-sm mb-4 p-4 rounded-2xl" style={{ background: "#111" }}>
        <div className="text-xs font-bold mb-2 tracking-widest" style={{ color: breed.color }}>PROFILE</div>
        <p className="text-sm leading-relaxed" style={{ color: "#ccc" }}>{subtype.desc}</p>
      </div>

      {/* Stats */}
      <div className="w-full max-w-sm mb-4 p-4 rounded-2xl" style={{ background: "#111" }}>
        <div className="text-xs font-bold mb-3 tracking-widest" style={{ color: breed.color }}>PARAMETERS</div>
        {Object.entries(params).map(([k, v]) => (
          <ParamBar key={k} label={PARAM_LABELS[k]} value={v} />
        ))}
      </div>

      {/* Strengths & Weaknesses */}
      <div className="w-full max-w-sm mb-4 grid grid-cols-2 gap-3">
        <div className="p-4 rounded-2xl" style={{ background: "#111" }}>
          <div className="text-xs font-bold mb-2" style={{ color: "#22c55e" }}>💪 強み</div>
          {subtype.strengths.map((s, i) => (
            <div key={i} className="text-xs mb-1" style={{ color: "#ccc" }}>• {s}</div>
          ))}
        </div>
        <div className="p-4 rounded-2xl" style={{ background: "#111" }}>
          <div className="text-xs font-bold mb-2" style={{ color: "#ef4444" }}>😅 弱み</div>
          {subtype.weaknesses.map((w, i) => (
            <div key={i} className="text-xs mb-1" style={{ color: "#ccc" }}>• {w}</div>
          ))}
        </div>
      </div>

      {/* Love */}
      <div className="w-full max-w-sm mb-4 p-4 rounded-2xl" style={{ background: "#111" }}>
        <div className="text-xs font-bold mb-2" style={{ color: "#ec4899" }}>💘 恋愛傾向</div>
        <p className="text-sm" style={{ color: "#ccc" }}>{subtype.love}</p>
      </div>

      {/* Compatible */}
      <div className="w-full max-w-sm mb-6 p-4 rounded-2xl" style={{ background: "#111" }}>
        <div className="text-xs font-bold mb-2" style={{ color: "#f59e0b" }}>🐾 相性の良い犬種</div>
        <div className="flex gap-2 flex-wrap">
          {subtype.compatible.map((c, i) => (
            <span key={i} className="text-xs px-3 py-1 rounded-full" style={{ background: "#1a1a1a", color: "#ccc", border: "1px solid #333" }}>{c}</span>
          ))}
        </div>
      </div>

      {/* Share */}
      <div className="w-full max-w-sm mb-4">
        <div className="text-xs text-center mb-3" style={{ color: "#666" }}>— シェアする —</div>
        <div className="flex gap-3">
          <button
            onClick={() => {
              const text = `私は「${subtype.name}（${breed.name}）」でした！\n「${subtype.catch}」\n\n#犬種診断 #あなたは何犬`;
              window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`);
            }}
            className="flex-1 py-3 rounded-xl text-sm font-bold"
            style={{ background: "#000", color: "#fff", border: "1px solid #333" }}
          >𝕏 でシェア</button>
          <button
            onClick={onRetry}
            className="flex-1 py-3 rounded-xl text-sm font-bold"
            style={{ background: "#1a1a1a", color: "#ccc", border: "1px solid #333" }}
          >🔄 もう一度</button>
        </div>
      </div>

      {/* Dog list teaser */}
      <div className="w-full max-w-sm p-4 rounded-2xl text-center" style={{ background: "#0f0f0f", border: "1px solid #1a1a1a" }}>
        <div className="text-xs" style={{ color: "#555" }}>全12犬種 × 4派生 = 48タイプ存在します</div>
        <div className="text-xs mt-1" style={{ color: "#444" }}>友達と比べてみよう 🐾</div>
      </div>
    </div>
  );
}

// ============================================================
// MAIN APP
// ============================================================

export default function App() {
  const [phase, setPhase] = useState("top"); // top | quiz | result
  const [questionIdx, setQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState(null);
  const [animating, setAnimating] = useState(false);

  const q = QUESTIONS[questionIdx];

  const handleStart = () => {
    setPhase("quiz");
    setQuestionIdx(0);
    setAnswers([]);
    setSelected(null);
  };

  const handleChoice = (choice) => {
    if (animating) return;
    setSelected(choice);
  };

  const handleNext = () => {
    if (!selected || animating) return;
    setAnimating(true);
    const newAnswers = [...answers, selected];

    setTimeout(() => {
      if (questionIdx + 1 >= QUESTIONS.length) {
        const r = calcResult(newAnswers);
        setResult(r);
        setPhase("result");
      } else {
        setAnswers(newAnswers);
        setQuestionIdx(questionIdx + 1);
        setSelected(null);
      }
      setAnimating(false);
    }, 300);
  };

  const handleRetry = () => {
    setPhase("top");
    setQuestionIdx(0);
    setAnswers([]);
    setSelected(null);
    setResult(null);
  };

  // TOP SCREEN
  if (phase === "top") return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12" style={{ background: "#0a0a0a" }}>
      <div className="text-center max-w-sm w-full">
        <div className="text-6xl mb-4" style={{ filter: "drop-shadow(0 0 20px rgba(245,158,11,0.5))" }}>🐕</div>
        <div className="text-xs tracking-[0.3em] mb-3" style={{ color: "#f59e0b" }}>PERSONALITY DIAGNOSIS</div>
        <h1 className="text-4xl font-black mb-2 leading-tight" style={{ color: "#fff", fontFamily: "'Noto Serif JP', serif" }}>
          あなたは<br />何犬？
        </h1>
        <p className="text-sm mb-8 leading-relaxed" style={{ color: "#666" }}>
          14問の質問で、あなたの本当の性格を<br />犬種で診断します。
        </p>

        {/* Breed preview */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.values(BREEDS).slice(0, 8).map(b => (
            <span key={b.id} className="text-xs px-2 py-1 rounded-full" style={{ background: "#111", color: "#888", border: "1px solid #1f1f1f" }}>
              {b.emoji} {b.name}
            </span>
          ))}
          <span className="text-xs px-2 py-1 rounded-full" style={{ background: "#111", color: "#555", border: "1px solid #1f1f1f" }}>+4種</span>
        </div>

        <button
          onClick={handleStart}
          className="w-full py-4 rounded-2xl text-lg font-black mb-3"
          style={{ background: "linear-gradient(135deg, #f59e0b, #ef4444)", color: "#000" }}
        >
          診断スタート 🐾
        </button>
        <p className="text-xs" style={{ color: "#444" }}>全14問 · 約3分</p>
      </div>
    </div>
  );

  // RESULT
  if (phase === "result" && result) return <ResultCard result={result} onRetry={handleRetry} />;

  // QUIZ
  return (
    <div className="min-h-screen flex flex-col px-4 py-6" style={{ background: "#0a0a0a" }}>
      <div className="max-w-sm w-full mx-auto flex flex-col flex-1">
        <ProgressBar current={questionIdx + 1} total={QUESTIONS.length} />

        {/* Question */}
        <div
          className="mb-6 flex-shrink-0"
          style={{ opacity: animating ? 0 : 1, transition: "opacity 0.3s" }}
        >
          <div className="text-4xl text-center mb-4">{q.emoji}</div>
          <h2 className="text-xl font-bold text-center leading-snug" style={{ color: "#fff", fontFamily: "'Noto Serif JP', serif" }}>
            {q.text}
          </h2>
        </div>

        {/* Choices */}
        <div className="flex flex-col gap-3 flex-1" style={{ opacity: animating ? 0 : 1, transition: "opacity 0.3s" }}>
          {q.choices.map((c, i) => {
            const isSelected = selected === c;
            return (
              <button
                key={i}
                onClick={() => handleChoice(c)}
                className="w-full text-left px-5 py-4 rounded-2xl text-sm font-medium transition-all duration-200"
                style={{
                  background: isSelected ? "#1a1208" : "#111",
                  color: isSelected ? "#f59e0b" : "#ccc",
                  border: isSelected ? "1px solid #f59e0b" : "1px solid #1f1f1f",
                  transform: isSelected ? "scale(1.01)" : "scale(1)",
                }}
              >
                <span className="mr-2" style={{ color: "#555" }}>{String.fromCharCode(65 + i)}.</span>
                {c.text}
              </button>
            );
          })}
        </div>

        {/* Next button */}
        <button
          onClick={handleNext}
          disabled={!selected}
          className="w-full py-4 rounded-2xl text-sm font-black mt-6"
          style={{
            background: selected ? "linear-gradient(135deg, #f59e0b, #ef4444)" : "#1a1a1a",
            color: selected ? "#000" : "#333",
            transition: "all 0.3s",
          }}
        >
          {questionIdx + 1 >= QUESTIONS.length ? "結果を見る 🐾" : "次の質問へ →"}
        </button>
      </div>
    </div>
  );
}
