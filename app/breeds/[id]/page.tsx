import { BREEDS } from "../../../lib/breeds";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function BreedDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const breed = BREEDS[id];
  if (!breed) notFound();

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0f", color: "#f0f0f0", fontFamily: "'Segoe UI', sans-serif" }}>
      <header style={{ borderBottom: "1px solid #222", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/breeds" style={{ textDecoration: "none", color: "#888", fontSize: "14px" }}>← 犬種図鑑</Link>
        <Link href="/" style={{ textDecoration: "none", background: "#f5a623", color: "#000", padding: "8px 20px", borderRadius: "50px", fontSize: "14px", fontWeight: "700" }}>診断する →</Link>
      </header>

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "40px 24px 80px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div style={{ fontSize: "72px", marginBottom: "16px" }}>{breed.emoji}</div>
          <h1 style={{ fontSize: "36px", fontWeight: "900", margin: "0 0 8px" }}>{breed.name}</h1>
          <p style={{ color: breed.color, fontSize: "16px", fontWeight: "700", margin: "0 0 20px" }}>{breed.catchcopy}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center" }}>
            {breed.personality.map((p: string) => (
              <span key={p} style={{ background: `${breed.color}22`, color: breed.color, padding: "4px 14px", borderRadius: "50px", fontSize: "13px", fontWeight: "600" }}>{p}</span>
            ))}
          </div>
        </div>

        <div style={{ background: "#13131a", border: `1px solid ${breed.color}33`, borderRadius: "16px", padding: "28px", marginBottom: "20px" }}>
          <h2 style={{ fontSize: "16px", fontWeight: "800", color: breed.color, marginBottom: "12px" }}>どんな性格？</h2>
          <p style={{ color: "#ccc", lineHeight: 1.8, margin: 0 }}>{breed.description}</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "20px" }}>
          <div style={{ background: "#13131a", border: "1px solid #1a2a1a", borderRadius: "16px", padding: "24px" }}>
            <h2 style={{ fontSize: "14px", fontWeight: "800", color: "#4ade80", marginBottom: "12px" }}>💪 強み</h2>
            {breed.strengths.map((s: string) => <p key={s} style={{ color: "#aaa", fontSize: "13px", margin: "0 0 6px" }}>• {s}</p>)}
          </div>
          <div style={{ background: "#13131a", border: "1px solid #2a1a1a", borderRadius: "16px", padding: "24px" }}>
            <h2 style={{ fontSize: "14px", fontWeight: "800", color: "#f87171", marginBottom: "12px" }}>😅 弱み</h2>
            {breed.weaknesses.map((w: string) => <p key={w} style={{ color: "#aaa", fontSize: "13px", margin: "0 0 6px" }}>• {w}</p>)}
          </div>
        </div>

        <div style={{ background: "#13131a", border: `1px solid ${breed.color}33`, borderRadius: "16px", padding: "28px", marginBottom: "20px" }}>
          <h2 style={{ fontSize: "16px", fontWeight: "800", color: breed.color, marginBottom: "12px" }}>❤️ 恋愛傾向</h2>
          <p style={{ color: "#ccc", lineHeight: 1.8, margin: 0 }}>{breed.love}</p>
        </div>

        <div style={{ background: "#13131a", border: "1px solid #222", borderRadius: "16px", padding: "28px", marginBottom: "20px" }}>
          <h2 style={{ fontSize: "16px", fontWeight: "800", color: "#f0f0f0", marginBottom: "16px" }}>📋 4つの派生タイプ</h2>
          <div style={{ display: "grid", gap: "12px" }}>
            {breed.variants.map((v: { name: string; catchcopy: string; description: string }) => (
              <div key={v.name} style={{ background: "#0a0a0f", borderRadius: "12px", padding: "16px", border: `1px solid ${breed.color}22` }}>
                <p style={{ fontWeight: "800", color: "#fff", margin: "0 0 4px" }}>{v.name}</p>
                <p style={{ color: breed.color, fontSize: "12px", margin: "0 0 8px", fontWeight: "600" }}>{v.catchcopy}</p>
                <p style={{ color: "#888", fontSize: "13px", margin: 0, lineHeight: 1.6 }}>{v.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <Link href="/" style={{ textDecoration: "none", background: `linear-gradient(135deg, ${breed.color}, #e74c3c)`, color: "#fff", padding: "16px 40px", borderRadius: "50px", fontSize: "16px", fontWeight: "800", display: "inline-block" }}>
            🐕 無料で診断する
          </Link>
        </div>
      </div>
    </div>
  );
}
