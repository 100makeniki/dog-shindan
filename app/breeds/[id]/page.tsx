"use client";
import Link from "next/link";

const BREEDS_LIST = [
  {
    id: "shiba",
    name: "柴犬",
    emoji: "🐕",
    color: "#E8622A",
    catch: "孤高の美学を持つ、日本最強の個人主義者",
    desc: "クールで独立心が強く、自分のルールで生きる。選ばれた人間にだけ心を開く、深みのある性格。",
    subtypes: ["哲学柴", "陽キャ柴", "皇帝柴", "闇柴"],
    tags: ["独立性", "個性的", "ミステリアス"],
  },
  {
    id: "golden",
    name: "ゴールデン",
    emoji: "🌟",
    color: "#F5A623",
    catch: "みんなに愛される、太陽みたいな存在",
    desc: "誰に対しても本気で接する。エネルギーが無限で、場を明るくする天才。",
    subtypes: ["みんなの太陽", "隠れ繊細ゴールデン", "キャリアゴールデン", "天然ゴールデン"],
    tags: ["社交的", "明るい", "エネルギッシュ"],
  },
  {
    id: "husky",
    name: "ハスキー",
    emoji: "🐺",
    color: "#6B8DD6",
    catch: "自由を愛し、予測不能な魂の持ち主",
    desc: "定住という概念を持たない自由人。思いついたら即行動。人生をRPGとして生きている。",
    subtypes: ["永遠の旅人", "アーティストハスキー", "クールハスキー", "カオスハスキー"],
    tags: ["自由", "衝動的", "クリエイティブ"],
  },
  {
    id: "poodle",
    name: "トイプードル",
    emoji: "✨",
    color: "#C084FC",
    catch: "可愛く見せながら全部計算してる知性派",
    desc: "愛らしい外見の裏で3手先を読む知性の持ち主。感情的に見えて実は超論理的。",
    subtypes: ["戦略プードル", "プリンセスプードル", "天才プードル", "ソーシャルプードル"],
    tags: ["知性", "戦略的", "個性的"],
  },
  {
    id: "border",
    name: "ボーダーコリー",
    emoji: "🎯",
    color: "#22C55E",
    catch: "完璧主義の達成マシン。妥協は負けと同義。",
    desc: "何事も全力。妥協という言葉が辞書にない。組織の中でなぜか自然とリーダーになる。",
    subtypes: ["完璧主義コリー", "リーダーコリー", "分析コリー", "燃え尽き寸前コリー"],
    tags: ["完璧主義", "リーダー", "分析的"],
  },
  {
    id: "dachshund",
    name: "ダックスフンド",
    emoji: "🌭",
    color: "#D97706",
    catch: "一度決めたら曲げない、義理と人情の塊",
    desc: "頑固で一途。特定の人への忠誠心が高く、深い絆を築く。今を楽しむ哲学も持ち合わせる。",
    subtypes: ["頑固ダックス", "忠義ダックス", "グルメダックス", "ドラマチックダックス"],
    tags: ["一途", "頑固", "情熱的"],
  },
  {
    id: "chihuahua",
    name: "チワワ",
    emoji: "💎",
    color: "#EC4899",
    catch: "体は小さい。プライドは無限大。",
    desc: "体格差を全く気にしない無敵のプライド。強がってるけど実は甘えたい、複雑な魅力の持ち主。",
    subtypes: ["プライドの塊", "甘えんぼチワワ", "毒舌チワワ", "実は甘党チワワ"],
    tags: ["プライド", "強気", "ギャップ萌え"],
  },
  {
    id: "labrador",
    name: "ラブラドール",
    emoji: "🌈",
    color: "#FBBF24",
    catch: "この人がいれば大丈夫、と思わせる安定感",
    desc: "周りの人が自然と頼ってくる安定感の持ち主。誰にでも公平で優しく、平和を愛する。",
    subtypes: ["安全基地ラブ", "穏やか系ラブ", "頼れるラブ", "永遠の子犬ラブ"],
    tags: ["安定", "信頼", "優しさ"],
  },
  {
    id: "akita",
    name: "秋田犬",
    emoji: "🏔️",
    color: "#78716C",
    catch: "忠義と威厳を兼ね備えた、武士の魂",
    desc: "一度信頼した相手には絶対の忠誠を誓う。寡黙で威厳があり、軽々しく感情を見せない。",
    subtypes: ["武士秋田", "番犬秋田", "渋い秋田", "孤独な秋田"],
    tags: ["忠誠心", "威厳", "寡黙"],
  },
  {
    id: "pomeranian",
    name: "ポメラニアン",
    emoji: "🌸",
    color: "#F472B6",
    catch: "世界をステージに変える、天性のエンターテイナー",
    desc: "注目を浴びることが生きがい。表現力豊かで、その場にいるだけで空気が変わる。",
    subtypes: ["スター気質", "かまってポメ", "オシャレポメ", "毒舌ポメ"],
    tags: ["目立ちたがり", "表現力", "エネルギッシュ"],
  },
  {
    id: "dalmatian",
    name: "ダルメシアン",
    emoji: "🎲",
    color: "#64748B",
    catch: "個性の塊。唯一無二の存在感を放つ異端児",
    desc: "どこにいても目立つ存在感。ルールより自分のスタイルを優先する、真の個人主義者。",
    subtypes: ["アーティスト気質", "反骨精神の塊", "自由人", "カリスマ"],
    tags: ["個性的", "自由", "カリスマ"],
  },
  {
    id: "siberian",
    name: "シベリアン",
    emoji: "❄️",
    color: "#38BDF8",
    catch: "極寒の地で鍛えた、孤高の精神力",
    desc: "どんな逆境でも折れない精神力の持ち主。孤独を恐れず、自分のペースを崩さない。",
    subtypes: ["冒険家", "忍耐強いタイプ", "孤高の存在", "静かな強者"],
    tags: ["忍耐", "孤高", "精神力"],
  },
];

// Compatibility data
const COMPAT: Record<string, { good: string[]; caution: string[] }> = {
  shiba:     { good: ["チワワ", "秋田犬", "ダックスフンド"], caution: ["ポメラニアン", "ラブラドール"] },
  golden:    { good: ["ラブラドール", "柴犬", "トイプードル"], caution: ["ボーダーコリー", "チワワ"] },
  husky:     { good: ["秋田犬", "シベリアン", "ゴールデン"], caution: ["ボーダーコリー", "ダックスフンド"] },
  poodle:    { good: ["ダックスフンド", "ボーダーコリー", "柴犬"], caution: ["ハスキー", "ポメラニアン"] },
  border:    { good: ["ゴールデン", "ダックスフンド", "トイプードル"], caution: ["ハスキー", "ダルメシアン"] },
  dachshund: { good: ["ゴールデン", "ラブラドール", "トイプードル"], caution: ["ハスキー", "ボーダーコリー"] },
  chihuahua: { good: ["ゴールデン", "ラブラドール", "柴犬"], caution: ["ボーダーコリー", "ハスキー"] },
  labrador:  { good: ["ハスキー", "チワワ", "ゴールデン"], caution: ["柴犬", "秋田犬"] },
  akita:     { good: ["柴犬", "シベリアン", "ダックスフンド"], caution: ["ポメラニアン", "ラブラドール"] },
  pomeranian:{ good: ["ゴールデン", "ラブラドール", "トイプードル"], caution: ["柴犬", "秋田犬"] },
  dalmatian: { good: ["ハスキー", "ダックスフンド", "ゴールデン"], caution: ["ボーダーコリー", "トイプードル"] },
  siberian:  { good: ["ハスキー", "秋田犬", "ラブラドール"], caution: ["トイプードル", "ポメラニアン"] },
};

export default function BreedsPage() {
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
        <Link href="/" style={{ color: "#f59e0b", textDecoration: "none", fontSize: "14px", fontWeight: 700 }}>
          ← 診断トップ
        </Link>
        <div style={{ fontSize: "12px", color: "#444", letterSpacing: "0.1em" }}>全12犬種図鑑</div>
      </div>

      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "40px 20px 60px" }}>
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "0.3em", color: "#f59e0b", marginBottom: "12px" }}>BREED ENCYCLOPEDIA</div>
          <h1 style={{ fontSize: "32px", fontWeight: 900, color: "#fff", marginBottom: "8px", fontFamily: "'Noto Serif JP', serif" }}>
            犬種図鑑
          </h1>
          <p style={{ fontSize: "14px", color: "#555" }}>全12犬種 × 4派生 = 48タイプを収録</p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          {BREEDS_LIST.map((b) => (
            <Link key={b.id} href={`/breeds/${b.id}`} style={{ textDecoration: "none" }}>
              <div style={{
                background: "rgba(255,255,255,0.03)",
                border: `1px solid ${b.color}33`,
                borderRadius: "20px",
                padding: "20px 16px",
                cursor: "pointer",
                transition: "all 0.2s ease",
                height: "100%",
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.background = `${b.color}10`;
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${b.color}66`;
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.03)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${b.color}33`;
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                }}
              >
                <div style={{ fontSize: "36px", marginBottom: "10px", filter: `drop-shadow(0 0 10px ${b.color}44)` }}>{b.emoji}</div>
                <div style={{ fontSize: "16px", fontWeight: 900, color: "#fff", marginBottom: "4px" }}>{b.name}</div>
                <div style={{ fontSize: "11px", color: b.color, marginBottom: "10px", fontWeight: 700 }}>{b.subtypes.length}タイプ</div>
                <div style={{ fontSize: "11px", color: "#555", lineHeight: 1.6 }}>{b.catch}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "12px" }}>
                  {b.tags.map((t, i) => (
                    <span key={i} style={{
                      fontSize: "10px", padding: "2px 8px", borderRadius: "100px",
                      background: `${b.color}15`, color: b.color, border: `1px solid ${b.color}33`
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Back to quiz */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <Link href="/" style={{
            display: "inline-block",
            padding: "16px 40px",
            borderRadius: "16px",
            background: "linear-gradient(135deg,#f59e0b,#ef4444)",
            color: "#000",
            fontWeight: 900,
            textDecoration: "none",
            fontSize: "15px",
          }}>
            診断してみる 🐾
          </Link>
        </div>
      </div>
    </div>
  );
}
