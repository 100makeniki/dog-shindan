"use client";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0f", color: "#f0f0f0", fontFamily: "'Segoe UI', sans-serif" }}>
      <header style={{ borderBottom: "1px solid #222", padding: "16px 24px" }}>
        <Link href="/" style={{ textDecoration: "none", color: "#f0f0f0", fontSize: "20px", fontWeight: "800" }}>🐕 何犬診断</Link>
      </header>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "60px 24px" }}>
        <h1 style={{ fontSize: "36px", fontWeight: "900", marginBottom: "24px" }}>何犬診断とは</h1>

        <div style={{ background: "#13131a", borderRadius: "16px", padding: "32px", marginBottom: "24px", border: "1px solid #f5a62333" }}>
          <p style={{ fontSize: "16px", lineHeight: 1.9, color: "#ddd" }}>
            「何犬診断」は、あなたの性格・行動パターンから、あなたが何の犬種に近いかを診断する性格診断サービスです。
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.9, color: "#ddd", marginTop: "16px" }}>
            MBTIのように「自分っぽい」「友達と比較したい」と思わせることを目指して設計されており、12犬種×4派生タイプの合計48タイプから、あなたにぴったりのタイプを判定します。
          </p>
        </div>

        <h2 style={{ fontSize: "20px", fontWeight: "800", marginBottom: "16px", color: "#f5a623" }}>診断の特徴</h2>
        <div style={{ display: "grid", gap: "12px", marginBottom: "40px" }}>
          {[
            { icon: "🧠", title: "スコア加算方式", desc: "各質問の回答が複数の犬種にポイントを加算し、最終的に最も高い犬種が判定されます。" },
            { icon: "🎭", title: "48の派生タイプ", desc: "12犬種それぞれに4つの派生タイプがあり、合計48種類の個性豊かな結果が存在します。" },
            { icon: "📊", title: "5軸パラメーター", desc: "社交性・独立性・支配性・感情性・衝動性の5軸であなたの性格を分析します。" },
            { icon: "🔗", title: "相性診断", desc: "自分と相性の良い犬種・要注意の犬種もわかります。友達と比較してみましょう。" },
          ].map(f => (
            <div key={f.title} style={{ background: "#13131a", borderRadius: "12px", padding: "20px", display: "flex", gap: "16px", border: "1px solid #222" }}>
              <span style={{ fontSize: "28px" }}>{f.icon}</span>
              <div>
                <p style={{ fontWeight: "800", marginBottom: "4px" }}>{f.title}</p>
                <p style={{ color: "#999", fontSize: "14px", margin: 0, lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/" style={{ textDecoration: "none", background: "linear-gradient(135deg, #f5a623, #e74c3c)", color: "#fff", padding: "16px 40px", borderRadius: "50px", fontSize: "16px", fontWeight: "800", display: "inline-block" }}>
            🐕 無料で診断する
          </Link>
        </div>
      </div>
    </div>
  );
}
