"use client";
import Link from "next/link";
import { BREEDS } from "../../../lib/breeds";
import { notFound } from "next/navigation";

export default function BreedDetailPage({ params }: { params: { id: string } }) {
  const breed = BREEDS[params.id];
  if (!breed) return notFound();

  const goodMatches = breed.goodMatch.map(id => BREEDS[id]).filter(Boolean);
  const badMatches = breed.badMatch.map(id => BREEDS[id]).filter(Boolean);

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0f", color: "#f0f0f0", fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Header */}
      <header style={{ borderBottom: "1px solid #222", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ textDecoration: "none", color: "#f0f0f0", fontSize: "20px", fontWeight: "800" }}>
          🐕 何犬診断
        </Link>
        <div style={{ display: "flex", gap: "12px" }}>
          <Link href="/breeds" style={{ textDecoration: "none", color: "#888", fontSize: "14px", padding: "8px 16px" }}>← 犬種一覧</Link>
          <Link href="/" style={{ textDecoration: "none", background: "#f5a623", color: "#000", padding: "8px 20px", borderRadius: "50px", fontSize: "14px", fontWeight: "700" }}>
            診断する
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "60px 24px 40px" }}>
        {/* Top color bar */}
        <div style={{ height: "4px", background: `linear-gradient(90deg, ${breed.color}, transparent)`, borderRadius: "4px", marginBottom: "40px" }} />

        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "24px", flexWrap: "wrap" }}>
          <span style={{ fontSize: "72px" }}>{breed.emoji}</span>
          <div>
            <p style={{ color: breed.color, fontSize: "12px", fontWeight: "700", letterSpacing: "3px", margin: "0 0 4px" }}>BREED TYPE</p>
            <h1 style={{ fontSize: "clamp(32px, 6vw, 52px)", fontWeight: "900", margin: "0 0 8px", letterSpacing: "-1px" }}>{breed.name}</h1>
            <p style={{ color: "#aaa", fontSize: "16px", margin: 0 }}>"{breed.catchcopy}"</p>
          </div>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
          {breed.personality.map(p => (
            <span key={p} style={{ background: `${breed.color}22`, color: breed.color, padding: "6px 16px", borderRadius: "50px", fontSize: "13px", fontWeight: "700" }}>
              {p}
            </span>
          ))}
        </div>

        {/* Description */}
        <div style={{ background: "#13131a", border: `1px solid ${breed.color}33`, borderRadius: "16px", padding: "28px", marginBottom: "24px" }}>
          <p style={{ lineHeight: 1.8, fontSize: "15px", color: "#ddd", margin: 0 }}>{breed.description}</p>
        </div>

        {/* Strengths / Weaknesses */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "24px" }}>
          <div style={{ background: "#13131a", border: "1px solid #2ecc7133", borderRadius: "12px", padding: "20px" }}>
            <p style={{ color: "#2ecc71", fontWeight: "800", fontSize: "13px", margin: "0 0 12px" }}>💪 強み</p>
            {breed.strengths.map(s => (
              <p key={s} style={{ color: "#ccc", fontSize: "14px", margin: "0 0 8px", paddingLeft: "12px", borderLeft: "2px solid #2ecc7155" }}>{s}</p>
            ))}
          </div>
          <div style={{ background: "#13131a", border: "1px solid #e74c3c33", borderRadius: "12px", padding: "20px" }}>
            <p style={{ color: "#e74c3c", fontWeight: "800", fontSize: "13px", margin: "0 0 12px" }}>⚠️ 弱み</p>
            {breed.weaknesses.map(w => (
              <p key={w} style={{ color: "#ccc", fontSize: "14px", margin: "0 0 8px", paddingLeft: "12px", borderLeft: "2px solid #e74c3c55" }}>{w}</p>
            ))}
          </div>
        </div>

        {/* Love */}
        <div style={{ background: "#13131a", border: "1px solid #ff6b9d33", borderRadius: "12px", padding: "20px", marginBottom: "24px" }}>
          <p style={{ color: "#ff6b9d", fontWeight: "800", fontSize: "13px", margin: "0 0 8px" }}>💕 恋愛傾向</p>
          <p style={{ color: "#ccc", fontSize: "14px", margin: 0, lineHeight: 1.7 }}>{breed.love}</p>
        </div>

        {/* Good Match */}
        <div style={{ marginBottom: "16px" }}>
          <p style={{ fontWeight: "800", fontSize: "15px", margin: "0 0 12px", color: "#2ecc71" }}>✅ 相性の良い犬種</p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {goodMatches.map(m => (
              <Link key={m.id} href={`/breeds/${m.id}`} target="_blank" style={{ textDecoration: "none" }}>
                <div style={{ background: "#13131a", border: `1px solid ${m.color}55`, borderRadius: "12px", padding: "16px 20px", display: "flex", alignItems: "center", gap: "10px", transition: "all 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = m.color; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = `${m.color}55`; }}
                >
                  <span style={{ fontSize: "28px" }}>{m.emoji}</span>
                  <div>
                    <p style={{ margin: 0, color: "#f0f0f0", fontWeight: "700", fontSize: "14px" }}>{m.name}</p>
                    <p style={{ margin: 0, color: m.color, fontSize: "11px" }}>詳細を見る →</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bad Match */}
        <div style={{ marginBottom: "40px" }}>
          <p style={{ fontWeight: "800", fontSize: "15px", margin: "0 0 12px", color: "#e74c3c" }}>⚡ 相性注意の犬種</p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {badMatches.map(m => (
              <Link key={m.id} href={`/breeds/${m.id}`} target="_blank" style={{ textDecoration: "none" }}>
                <div style={{ background: "#13131a", border: "1px solid #e74c3c33", borderRadius: "12px", padding: "16px 20px", display: "flex", alignItems: "center", gap: "10px", transition: "all 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#e74c3c"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#e74c3c33"; }}
                >
                  <span style={{ fontSize: "28px" }}>{m.emoji}</span>
                  <div>
                    <p style={{ margin: 0, color: "#f0f0f0", fontWeight: "700", fontSize: "14px" }}>{m.name}</p>
                    <p style={{ margin: 0, color: "#e74c3c", fontSize: "11px" }}>詳細を見る →</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Variants */}
        <div style={{ marginBottom: "60px" }}>
          <p style={{ fontWeight: "900", fontSize: "20px", margin: "0 0 16px" }}>派生タイプ一覧</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "12px" }}>
            {breed.variants.map((v, i) => (
              <div key={v.name} style={{ background: "#13131a", border: `1px solid ${breed.color}33`, borderRadius: "12px", padding: "20px" }}>
                <p style={{ color: breed.color, fontSize: "11px", fontWeight: "700", margin: "0 0 6px" }}>TYPE {i + 1}</p>
                <p style={{ color: "#f0f0f0", fontWeight: "800", fontSize: "16px", margin: "0 0 4px" }}>{v.name}</p>
                <p style={{ color: "#aaa", fontSize: "12px", fontStyle: "italic", margin: "0 0 10px" }}>"{v.catchcopy}"</p>
                <p style={{ color: "#888", fontSize: "13px", margin: 0, lineHeight: 1.6 }}>{v.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", padding: "40px", background: "#13131a", borderRadius: "16px", border: `1px solid ${breed.color}33` }}>
          <p style={{ fontSize: "18px", fontWeight: "800", marginBottom: "8px" }}>自分も{breed.name}か診断してみる？</p>
          <p style={{ color: "#888", marginBottom: "24px" }}>12問の質問に答えるだけ、無料で診断できます</p>
          <Link href="/" style={{ textDecoration: "none", background: `linear-gradient(135deg, ${breed.color}, #e74c3c)`, color: "#fff", padding: "14px 36px", borderRadius: "50px", fontSize: "15px", fontWeight: "800", display: "inline-block" }}>
            🐕 無料で診断する
          </Link>
        </div>
      </div>
    </div>
  );
}
