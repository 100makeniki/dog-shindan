"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { BREEDS } from "../lib/breeds";

// ============================================================
// 質問データ
// ============================================================
const QUESTIONS = [
  {
    id: 1,
    text: "休日の過ごし方は？",
    options: [
      { label: "家でゆっくり過ごす", scores: { shiba: 2, dachshund: 2, akita: 1 } },
      { label: "友達と賑やかに遊ぶ", scores: { golden: 3, pomeranian: 2, labrador: 1 } },
      { label: "一人で知らない場所を探索する", scores: { husky: 3, dalmatian: 2, border: 1 } },
      { label: "新しいスキルや趣味に没頭する", scores: { border: 3, poodle: 2, chihuahua: 1 } },
    ],
    params: ["sociality", "independence"],
  },
  {
    id: 2,
    text: "グループでの自分の役割は？",
    options: [
      { label: "みんなをまとめるリーダー", scores: { border: 3, akita: 2, chihuahua: 1 } },
      { label: "場を和ませるムードメーカー", scores: { golden: 3, pomeranian: 2, corgi: 2 } },
      { label: "陰で支えるサポート役", scores: { labrador: 3, dachshund: 2, shiba: 1 } },
      { label: "マイペースに動く一匹狼", scores: { shiba: 3, husky: 2, dalmatian: 1 } },
    ],
    params: ["dominance", "sociality"],
  },
  {
    id: 3,
    text: "ムカついたとき、どうする？",
    options: [
      { label: "その場でハッキリ言う", scores: { chihuahua: 3, border: 2, husky: 1 } },
      { label: "黙ってしばらく引きずる", scores: { dachshund: 3, shiba: 2, akita: 2 } },
      { label: "すぐ忘れて笑顔に戻る", scores: { golden: 3, pomeranian: 2, labrador: 1 } },
      { label: "一人になって冷静に考える", scores: { border: 2, shiba: 2, poodle: 2 } },
    ],
    params: ["impulse", "emotion"],
  },
  {
    id: 4,
    text: "恋愛で大切にするのは？",
    options: [
      { label: "ドキドキする刺激と冒険", scores: { husky: 3, chihuahua: 2, dalmatian: 2 } },
      { label: "安心できる信頼関係", scores: { labrador: 3, golden: 2, akita: 2 } },
      { label: "一緒に成長できること", scores: { border: 3, poodle: 2, dachshund: 1 } },
      { label: "深く理解し合える関係", scores: { akita: 3, shiba: 2, dachshund: 2 } },
    ],
    params: ["emotion", "independence"],
  },
  {
    id: 5,
    text: "仕事・勉強での自分は？",
    options: [
      { label: "目標が決まると猛烈に集中する", scores: { border: 3, chihuahua: 2, dachshund: 2 } },
      { label: "チームで楽しく進めたい", scores: { golden: 3, labrador: 2, pomeranian: 2 } },
      { label: "自分のペースでコツコツやる", scores: { shiba: 3, dachshund: 2, poodle: 1 } },
      { label: "やりたいことだけに全力で取り組む", scores: { husky: 3, dalmatian: 2, chihuahua: 1 } },
    ],
    params: ["dominance", "impulse"],
  },
  {
    id: 6,
    text: "初対面の人との会話は？",
    options: [
      { label: "自分からどんどん話しかける", scores: { golden: 3, pomeranian: 3, corgi: 2 } },
      { label: "相手が話してくれるのを待つ", scores: { shiba: 3, akita: 2, labrador: 1 } },
      { label: "場を観察してから徐々に慣れる", scores: { poodle: 2, border: 2, dachshund: 2 } },
      { label: "相手を楽しませようと頑張る", scores: { golden: 2, pomeranian: 2, corgi: 2 } },
    ],
    params: ["sociality", "emotion"],
  },
  {
    id: 7,
    text: "ストレスがたまったとき、どうする？",
    options: [
      { label: "誰かに話を聞いてもらう", scores: { golden: 3, poodle: 2, pomeranian: 2 } },
      { label: "一人でいる時間を作って充電する", scores: { shiba: 3, akita: 2, border: 1 } },
      { label: "体を動かして発散する", scores: { husky: 3, chihuahua: 2, corgi: 2 } },
      { label: "没頭できることに逃げ込む", scores: { dachshund: 2, poodle: 2, border: 2 } },
    ],
    params: ["independence", "sociality"],
  },
  {
    id: 8,
    text: "自分の強みは何だと思う？",
    options: [
      { label: "誰とでも仲良くなれること", scores: { golden: 3, labrador: 2, pomeranian: 2 } },
      { label: "一つのことへの圧倒的な集中力", scores: { border: 3, dachshund: 2, shiba: 1 } },
      { label: "自由な発想と創造力", scores: { dalmatian: 3, husky: 2, poodle: 2 } },
      { label: "どんな状況でも揺れない意志の強さ", scores: { akita: 3, shiba: 2, chihuahua: 2 } },
    ],
    params: ["dominance", "independence"],
  },
  {
    id: 9,
    text: "友達から見た自分は？",
    options: [
      { label: "頼れる兄貴・姉御的存在", scores: { labrador: 3, akita: 2, golden: 2 } },
      { label: "いると場が明るくなる存在", scores: { golden: 2, pomeranian: 3, corgi: 2 } },
      { label: "何考えてるかわからない謎めいた存在", scores: { shiba: 3, akita: 2, dachshund: 1 } },
      { label: "面白くて個性的な存在", scores: { dalmatian: 3, husky: 2, chihuahua: 2 } },
    ],
    params: ["sociality", "emotion"],
  },
  {
    id: 10,
    text: "お金の使い方は？",
    options: [
      { label: "経験や体験にガンガン使う", scores: { husky: 3, pomeranian: 2, golden: 1 } },
      { label: "計画的にコツコツ貯める", scores: { border: 2, dachshund: 3, labrador: 2 } },
      { label: "好きなものには惜しまず使う", scores: { poodle: 3, chihuahua: 2, dalmatian: 2 } },
      { label: "必要最低限だけで十分", scores: { shiba: 3, akita: 2, border: 1 } },
    ],
    params: ["impulse", "independence"],
  },
  {
    id: 11,
    text: "友達が落ち込んでいたら？",
    options: [
      { label: "すぐ連絡して話を聞く", scores: { golden: 3, labrador: 3, poodle: 1 } },
      { label: "そっと気にかけながら自分のペースで", scores: { shiba: 2, akita: 2, border: 1 } },
      { label: "元気になれるよう面白いことを提案する", scores: { pomeranian: 3, corgi: 2, husky: 1 } },
      { label: "できる限り解決策を一緒に考える", scores: { border: 3, dachshund: 2, poodle: 2 } },
    ],
    params: ["emotion", "sociality"],
  },
  {
    id: 12,
    text: "夢や将来について考えるとき？",
    options: [
      { label: "壮大な夢を描いてワクワクする", scores: { husky: 3, dalmatian: 2, pomeranian: 2 } },
      { label: "現実的な目標を立てて着実に進む", scores: { border: 3, dachshund: 2, labrador: 2 } },
      { label: "大切な人と幸せでいられればいい", scores: { golden: 3, labrador: 2, akita: 2 } },
      { label: "自分らしくいられることが大事", scores: { shiba: 3, chihuahua: 2, dalmatian: 1 } },
    ],
    params: ["impulse", "dominance"],
  },
  {
    id: 13,
    text: "SNSでの自分は？",
    options: [
      { label: "積極的に発信してフォロワーと交流する", scores: { pomeranian: 3, golden: 2, chihuahua: 2 } },
      { label: "見る専門、投稿はほぼしない", scores: { shiba: 3, akita: 2, dachshund: 1 } },
      { label: "好きなことについては熱く発信する", scores: { dalmatian: 3, border: 2, husky: 2 } },
      { label: "リアルと分けてゆる〜く使う", scores: { labrador: 2, golden: 2, corgi: 2 } },
    ],
    params: ["sociality", "impulse"],
  },
  {
    id: 14,
    text: "「自分」を一言で表すなら？",
    options: [
      { label: "自由人", scores: { husky: 3, dalmatian: 2, chihuahua: 1 } },
      { label: "孤高の存在", scores: { shiba: 3, akita: 3, border: 1 } },
      { label: "みんなの太陽", scores: { golden: 3, pomeranian: 2, labrador: 1 } },
      { label: "縁の下の力持ち", scores: { labrador: 3, dachshund: 2, corgi: 1 } },
    ],
    params: ["independence", "dominance"],
  },
];

// ============================================================
// 診断ロジック
// ============================================================
function calcResult(answers: any[]) {
  const breedScores: Record<string, number> = {};
  const params = { sociality: 0, independence: 0, dominance: 0, emotion: 0, impulse: 0 };

  Object.keys(BREEDS).forEach(b => { breedScores[b] = 0; });

  answers.forEach(ans => {
    if (!ans) return;
    Object.entries(ans.scores as Record<string, number>).forEach(([breed, score]) => {
      breedScores[breed] = (breedScores[breed] || 0) + score;
    });
  });

  QUESTIONS.forEach((q, i) => {
    if (!answers[i]) return;
    q.params.forEach(p => {
      (params as any)[p] += 1;
    });
  });

  const topBreed = Object.entries(breedScores).sort((a, b) => b[1] - a[1])[0][0];
  const breed = BREEDS[topBreed];

  // 派生タイプ判定
  const s = params.sociality;
  const d = params.dominance;
  const e = params.emotion;
  let variantIdx = 0;
  if (s >= 5 && d >= 5) variantIdx = 1;
  else if (e >= 5) variantIdx = 2;
  else if (d >= 5) variantIdx = 3;

  return {
    breed,
    variant: breed.variants[variantIdx] || breed.variants[0],
    params,
    topBreed,
  };
}

// ============================================================
// メインコンポーネント
// ============================================================
export default function Home() {
  const [phase, setPhase] = useState<"top" | "quiz" | "loading" | "result">("top");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<any[]>(Array(QUESTIONS.length).fill(null));
  const [result, setResult] = useState<any>(null);
  const [animating, setAnimating] = useState(false);
  const [stars, setStars] = useState<{ x: number; y: number; size: number; opacity: number }[]>([]);

  useEffect(() => {
    const s = Array.from({ length: 60 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.6 + 0.2,
    }));
    setStars(s);
  }, []);

  const handleAnswer = (option: any) => {
    const newAnswers = [...answers];
    newAnswers[currentQ] = option;
    setAnswers(newAnswers);
    setAnimating(true);

    setTimeout(() => {
      if (currentQ < QUESTIONS.length - 1) {
        setCurrentQ(currentQ + 1);
        setAnimating(false);
      } else {
        setPhase("loading");
        setTimeout(() => {
          const r = calcResult(newAnswers);
          setResult(r);
          setPhase("result");
        }, 2200);
      }
    }, 300);
  };

  const reset = () => {
    setPhase("top");
    setCurrentQ(0);
    setAnswers(Array(QUESTIONS.length).fill(null));
    setResult(null);
    setAnimating(false);
  };

  const shareText = result
    ? `私は「${result.variant.name}」タイプでした🐕\n"${result.variant.catchcopy}"\n\n#何犬診断 #${result.breed.name}`
    : "";
  const shareUrl = typeof window !== "undefined" ? window.location.href : "https://sage-belekoy-47389c.netlify.app/";

  const shareX = () => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, "_blank");
  const shareInstagram = () => {
    navigator.clipboard.writeText(shareText + "\n" + shareUrl).then(() => alert("テキストをコピーしました！\nInstagramのキャプションに貼り付けてください📸"));
  };
  const shareFacebook = () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, "_blank");
  const shareLine = () => window.open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`, "_blank");

  const styles = {
    app: {
      minHeight: "100vh",
      background: "#0a0a0f",
      color: "#f0f0f0",
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      position: "relative" as const,
      overflow: "hidden",
    },
    starfield: {
      position: "fixed" as const,
      inset: 0,
      pointerEvents: "none" as const,
      zIndex: 0,
    },
    content: {
      position: "relative" as const,
      zIndex: 1,
    },
  };

  // ============================================================
  // TOP PAGE
  // ============================================================
  if (phase === "top") {
    return (
      <div style={styles.app}>
        <div style={styles.starfield}>
          {stars.map((s, i) => (
            <div key={i} style={{ position: "absolute", left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size, borderRadius: "50%", background: "#fff", opacity: s.opacity }} />
          ))}
        </div>
        <div style={styles.content}>
          {/* Nav */}
          <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 24px", borderBottom: "1px solid #1a1a2e" }}>
            <span style={{ fontSize: "20px", fontWeight: "900", letterSpacing: "-0.5px" }}>🐕 何犬診断</span>
            <Link href="/breeds" style={{ textDecoration: "none", color: "#888", fontSize: "14px" }}>犬種一覧</Link>
          </nav>

          {/* Hero */}
          <div style={{ textAlign: "center", padding: "80px 24px 60px", maxWidth: "640px", margin: "0 auto" }}>
            <div style={{ fontSize: "80px", marginBottom: "24px", filter: "drop-shadow(0 0 30px rgba(245,166,35,0.4))" }}>🐕</div>
            <h1 style={{ fontSize: "clamp(36px, 8vw, 64px)", fontWeight: "900", letterSpacing: "-2px", lineHeight: 1.1, margin: "0 0 16px" }}>
              あなたは<br /><span style={{ background: "linear-gradient(135deg, #f5a623, #e74c3c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>何犬</span>？
            </h1>
            <p style={{ color: "#888", fontSize: "16px", marginBottom: "48px", lineHeight: 1.7 }}>
              12の質問に答えるだけで、あなたの性格タイプを判定。<br />12犬種 × 4派生 = <strong style={{ color: "#f5a623" }}>48タイプ</strong>の中からあなたを診断します。
            </p>

            {/* Stats */}
            <div style={{ display: "flex", justifyContent: "center", gap: "32px", marginBottom: "48px", flexWrap: "wrap" }}>
              {[
                { num: "48", label: "タイプ数" },
                { num: "14", label: "質問数" },
                { num: "3分", label: "所要時間" },
                { num: "無料", label: "" },
              ].map(stat => (
                <div key={stat.num} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "24px", fontWeight: "900", color: "#f5a623" }}>{stat.num}</div>
                  {stat.label && <div style={{ color: "#666", fontSize: "12px" }}>{stat.label}</div>}
                </div>
              ))}
            </div>

            <button
              onClick={() => setPhase("quiz")}
              style={{ background: "linear-gradient(135deg, #f5a623, #e74c3c)", color: "#fff", border: "none", borderRadius: "50px", padding: "18px 52px", fontSize: "18px", fontWeight: "900", cursor: "pointer", boxShadow: "0 8px 32px rgba(245,166,35,0.4)", letterSpacing: "-0.3px" }}
            >
              診断スタート 🐾
            </button>
            <p style={{ color: "#555", fontSize: "12px", marginTop: "16px" }}>無料・登録不要</p>
          </div>

          {/* Footer */}
          <footer style={{ borderTop: "1px solid #1a1a2e", padding: "32px 24px", textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap", marginBottom: "16px" }}>
              <Link href="/breeds" style={{ textDecoration: "none", color: "#666", fontSize: "13px" }}>犬種一覧</Link>
              <Link href="/about" style={{ textDecoration: "none", color: "#666", fontSize: "13px" }}>このサイトについて</Link>
              <Link href="/privacy" style={{ textDecoration: "none", color: "#666", fontSize: "13px" }}>プライバシーポリシー</Link>
              <Link href="/terms" style={{ textDecoration: "none", color: "#666", fontSize: "13px" }}>利用規約</Link>
              <Link href="/contact" style={{ textDecoration: "none", color: "#666", fontSize: "13px" }}>お問い合わせ</Link>
            </div>
            <p style={{ color: "#444", fontSize: "12px" }}>© 2026 何犬診断</p>
          </footer>
        </div>
      </div>
    );
  }

  // ============================================================
  // QUIZ PAGE
  // ============================================================
  if (phase === "quiz") {
    const q = QUESTIONS[currentQ];
    const progress = ((currentQ) / QUESTIONS.length) * 100;
    return (
      <div style={styles.app}>
        <div style={styles.starfield}>
          {stars.map((s, i) => (
            <div key={i} style={{ position: "absolute", left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size, borderRadius: "50%", background: "#fff", opacity: s.opacity }} />
          ))}
        </div>
        <div style={{ ...styles.content, maxWidth: "600px", margin: "0 auto", padding: "32px 24px", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
          {/* Progress */}
          <div style={{ marginBottom: "40px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
              <span style={{ color: "#666", fontSize: "13px" }}>Q{currentQ + 1} / {QUESTIONS.length}</span>
              <span style={{ color: "#f5a623", fontSize: "13px", fontWeight: "700" }}>{Math.round(progress)}%</span>
            </div>
            <div style={{ background: "#1a1a2e", borderRadius: "50px", height: "6px", overflow: "hidden" }}>
              <div style={{ width: `${progress}%`, height: "100%", background: "linear-gradient(90deg, #f5a623, #e74c3c)", borderRadius: "50px", transition: "width 0.4s ease" }} />
            </div>
          </div>

          {/* Question */}
          <div style={{ opacity: animating ? 0 : 1, transform: animating ? "translateX(-20px)" : "translateX(0)", transition: "all 0.3s ease", flex: 1 }}>
            <p style={{ color: "#f5a623", fontSize: "12px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>QUESTION</p>
            <h2 style={{ fontSize: "clamp(22px, 5vw, 32px)", fontWeight: "900", letterSpacing: "-0.5px", lineHeight: 1.3, marginBottom: "40px" }}>{q.text}</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt)}
                  style={{
                    background: "#13131a",
                    border: "1px solid #2a2a3e",
                    borderRadius: "12px",
                    padding: "18px 20px",
                    color: "#f0f0f0",
                    fontSize: "15px",
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "#f5a623";
                    (e.currentTarget as HTMLButtonElement).style.background = "#1a1a10";
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "#2a2a3e";
                    (e.currentTarget as HTMLButtonElement).style.background = "#13131a";
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateX(0)";
                  }}
                >
                  <span style={{ background: "#f5a62322", color: "#f5a623", width: "28px", height: "28px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "800", flexShrink: 0 }}>
                    {String.fromCharCode(65 + i)}
                  </span>
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {currentQ > 0 && (
            <button onClick={() => setCurrentQ(currentQ - 1)} style={{ marginTop: "24px", color: "#555", background: "none", border: "none", cursor: "pointer", fontSize: "14px" }}>
              ← 前の質問に戻る
            </button>
          )}
        </div>
      </div>
    );
  }

  // ============================================================
  // LOADING
  // ============================================================
  if (phase === "loading") {
    return (
      <div style={{ ...styles.app, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "64px", animation: "pulse 1s infinite" }}>🐕</div>
          <p style={{ color: "#f5a623", fontWeight: "700", marginTop: "16px" }}>診断中...</p>
          <style>{`@keyframes pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.15)} }`}</style>
        </div>
      </div>
    );
  }

  // ============================================================
  // RESULT PAGE
  // ============================================================
  if (phase === "result" && result) {
    const { breed, variant, params } = result;
    const maxParam = 14;
    const goodMatches = breed.goodMatch.map((id: string) => BREEDS[id]).filter(Boolean);
    const badMatches = breed.badMatch.map((id: string) => BREEDS[id]).filter(Boolean);
    const paramLabels = [
      { key: "sociality", label: "社交性" },
      { key: "independence", label: "独立性" },
      { key: "dominance", label: "支配性" },
      { key: "emotion", label: "感情性" },
      { key: "impulse", label: "衝動性" },
    ];

    return (
      <div style={styles.app}>
        <div style={styles.starfield}>
          {stars.map((s, i) => (
            <div key={i} style={{ position: "absolute", left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size, borderRadius: "50%", background: "#fff", opacity: s.opacity }} />
          ))}
        </div>
        <div style={{ ...styles.content, maxWidth: "640px", margin: "0 auto", padding: "32px 24px 80px" }}>
          {/* Result Header */}
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <p style={{ color: "#f5a623", fontSize: "12px", fontWeight: "700", letterSpacing: "3px", marginBottom: "8px" }}>RESULT</p>
            <div style={{ fontSize: "80px", marginBottom: "16px", filter: `drop-shadow(0 0 20px ${breed.color}66)` }}>{breed.emoji}</div>
            <h1 style={{ fontSize: "clamp(28px, 7vw, 48px)", fontWeight: "900", letterSpacing: "-1px", margin: "0 0 8px" }}>{variant.name}</h1>
            <p style={{ color: breed.color, fontSize: "16px", fontWeight: "700", margin: "0 0 16px" }}>〜 {variant.catchcopy} 〜</p>
            <div style={{ display: "inline-block", background: `${breed.color}22`, border: `1px solid ${breed.color}55`, borderRadius: "50px", padding: "6px 20px" }}>
              <span style={{ color: breed.color, fontWeight: "800", fontSize: "14px" }}>{breed.name}</span>
            </div>
          </div>

          {/* Description */}
          <div style={{ background: "#13131a", border: `1px solid ${breed.color}33`, borderRadius: "16px", padding: "24px", marginBottom: "20px" }}>
            <p style={{ color: "#ddd", lineHeight: 1.8, fontSize: "14px", margin: "0 0 12px" }}>{breed.description}</p>
            <p style={{ color: "#aaa", lineHeight: 1.7, fontSize: "13px", margin: 0, fontStyle: "italic" }}>{variant.description}</p>
          </div>

          {/* Params */}
          <div style={{ background: "#13131a", border: "1px solid #222", borderRadius: "16px", padding: "24px", marginBottom: "20px" }}>
            <p style={{ fontWeight: "800", fontSize: "14px", marginBottom: "16px", color: "#888" }}>パラメーター</p>
            {paramLabels.map(({ key, label }) => (
              <div key={key} style={{ marginBottom: "10px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                  <span style={{ fontSize: "12px", color: "#aaa" }}>{label}</span>
                  <span style={{ fontSize: "12px", color: breed.color, fontWeight: "700" }}>{(params as any)[key]}</span>
                </div>
                <div style={{ background: "#0a0a0f", borderRadius: "50px", height: "6px", overflow: "hidden" }}>
                  <div style={{ width: `${((params as any)[key] / maxParam) * 100}%`, height: "100%", background: breed.color, borderRadius: "50px", transition: "width 1s ease" }} />
                </div>
              </div>
            ))}
          </div>

          {/* Strengths / Weaknesses */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "20px" }}>
            <div style={{ background: "#13131a", border: "1px solid #2ecc7122", borderRadius: "12px", padding: "16px" }}>
              <p style={{ color: "#2ecc71", fontWeight: "800", fontSize: "12px", marginBottom: "8px" }}>💪 強み</p>
              {breed.strengths.map((s: string) => <p key={s} style={{ color: "#ccc", fontSize: "12px", margin: "0 0 6px", lineHeight: 1.5 }}>{s}</p>)}
            </div>
            <div style={{ background: "#13131a", border: "1px solid #e74c3c22", borderRadius: "12px", padding: "16px" }}>
              <p style={{ color: "#e74c3c", fontWeight: "800", fontSize: "12px", marginBottom: "8px" }}>⚠️ 弱み</p>
              {breed.weaknesses.map((w: string) => <p key={w} style={{ color: "#ccc", fontSize: "12px", margin: "0 0 6px", lineHeight: 1.5 }}>{w}</p>)}
            </div>
          </div>

          {/* Love */}
          <div style={{ background: "#13131a", border: "1px solid #ff6b9d22", borderRadius: "12px", padding: "16px", marginBottom: "20px" }}>
            <p style={{ color: "#ff6b9d", fontWeight: "800", fontSize: "12px", marginBottom: "6px" }}>💕 恋愛傾向</p>
            <p style={{ color: "#ccc", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>{breed.love}</p>
          </div>

          {/* Good Match */}
          <div style={{ marginBottom: "16px" }}>
            <p style={{ fontWeight: "800", fontSize: "14px", marginBottom: "10px", color: "#2ecc71" }}>✅ 相性の良い犬種</p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {goodMatches.map((m: any) => (
                <Link key={m.id} href={`/breeds/${m.id}`} target="_blank" style={{ textDecoration: "none" }}>
                  <div style={{ background: "#13131a", border: `1px solid ${m.color}44`, borderRadius: "10px", padding: "12px 16px", display: "flex", alignItems: "center", gap: "8px", transition: "all 0.2s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = m.color; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = `${m.color}44`; }}
                  >
                    <span style={{ fontSize: "22px" }}>{m.emoji}</span>
                    <span style={{ color: "#f0f0f0", fontSize: "13px", fontWeight: "700" }}>{m.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Bad Match */}
          <div style={{ marginBottom: "32px" }}>
            <p style={{ fontWeight: "800", fontSize: "14px", marginBottom: "10px", color: "#e74c3c" }}>⚡ 相性注意の犬種</p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {badMatches.map((m: any) => (
                <Link key={m.id} href={`/breeds/${m.id}`} target="_blank" style={{ textDecoration: "none" }}>
                  <div style={{ background: "#13131a", border: "1px solid #e74c3c33", borderRadius: "10px", padding: "12px 16px", display: "flex", alignItems: "center", gap: "8px", transition: "all 0.2s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#e74c3c"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#e74c3c33"; }}
                  >
                    <span style={{ fontSize: "22px" }}>{m.emoji}</span>
                    <span style={{ color: "#f0f0f0", fontSize: "13px", fontWeight: "700" }}>{m.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* SNS Share */}
          <div style={{ background: "#13131a", border: "1px solid #333", borderRadius: "16px", padding: "24px", marginBottom: "24px", textAlign: "center" }}>
            <p style={{ fontWeight: "900", fontSize: "16px", marginBottom: "6px" }}>結果をシェアする</p>
            <p style={{ color: "#888", fontSize: "13px", marginBottom: "20px" }}>友達の診断結果と比べてみよう！</p>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
              <button onClick={shareX} style={{ background: "#000", border: "1px solid #333", color: "#fff", borderRadius: "8px", padding: "10px 20px", cursor: "pointer", fontSize: "13px", fontWeight: "700", display: "flex", alignItems: "center", gap: "6px" }}>
                𝕏 Xでシェア
              </button>
              <button onClick={shareInstagram} style={{ background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)", border: "none", color: "#fff", borderRadius: "8px", padding: "10px 20px", cursor: "pointer", fontSize: "13px", fontWeight: "700", display: "flex", alignItems: "center", gap: "6px" }}>
                📷 Instagramにコピー
              </button>
              <button onClick={shareFacebook} style={{ background: "#1877f2", border: "none", color: "#fff", borderRadius: "8px", padding: "10px 20px", cursor: "pointer", fontSize: "13px", fontWeight: "700", display: "flex", alignItems: "center", gap: "6px" }}>
                fb Facebook
              </button>
              <button onClick={shareLine} style={{ background: "#06c755", border: "none", color: "#fff", borderRadius: "8px", padding: "10px 20px", cursor: "pointer", fontSize: "13px", fontWeight: "700", display: "flex", alignItems: "center", gap: "6px" }}>
                LINE
              </button>
            </div>
          </div>

          {/* Actions */}
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginBottom: "40px" }}>
            <button onClick={reset} style={{ background: "#1a1a2e", border: "1px solid #333", color: "#f0f0f0", borderRadius: "50px", padding: "12px 28px", cursor: "pointer", fontSize: "14px", fontWeight: "700" }}>
              🔄 もう一度診断する
            </button>
            <Link href="/breeds" style={{ textDecoration: "none", background: "#f5a62322", border: `1px solid #f5a62355`, color: "#f5a623", borderRadius: "50px", padding: "12px 28px", fontSize: "14px", fontWeight: "700" }}>
              🐕 全犬種を見る
            </Link>
          </div>

          {/* Footer */}
          <div style={{ borderTop: "1px solid #1a1a2e", paddingTop: "24px", textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", marginBottom: "12px" }}>
              <Link href="/about" style={{ textDecoration: "none", color: "#555", fontSize: "12px" }}>About</Link>
              <Link href="/privacy" style={{ textDecoration: "none", color: "#555", fontSize: "12px" }}>プライバシーポリシー</Link>
              <Link href="/terms" style={{ textDecoration: "none", color: "#555", fontSize: "12px" }}>利用規約</Link>
              <Link href="/contact" style={{ textDecoration: "none", color: "#555", fontSize: "12px" }}>お問い合わせ</Link>
            </div>
            <p style={{ color: "#333", fontSize: "11px" }}>© 2026 何犬診断</p>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
