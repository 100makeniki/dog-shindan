"use client";
import Link from "next/link";
import { BREEDS } from "../../lib/breeds";

export default function BreedsPage() {
  const breeds = Object.values(BREEDS);

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0f", color: "#f0f0f0", fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Header */}
      <header style={{ borderBottom: "1px solid #222", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ textDecoration: "none", color: "#f0f0f0", fontSize: "20px", fontWeight: "800", letterSpacing: "-0.5px" }}>
          枢 菴慕堪險ｺ譁ｭ
        </Link>
        <Link href="/" style={{ textDecoration: "none", background: "#f5a623", color: "#000", padding: "8px 20px", borderRadius: "50px", fontSize: "14px", fontWeight: "700" }}>
          險ｺ譁ｭ縺吶ｋ 竊・        </Link>
      </header>

      {/* Hero */}
      <div style={{ textAlign: "center", padding: "60px 24px 40px" }}>
        <p style={{ color: "#f5a623", fontSize: "13px", fontWeight: "700", letterSpacing: "3px", marginBottom: "12px" }}>BREED TYPES</p>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: "900", letterSpacing: "-1px", lineHeight: 1.2, margin: "0 0 16px" }}>
          蜈ｨ12迥ｬ遞ｮ蝗ｳ髑・        </h1>
        <p style={{ color: "#888", fontSize: "16px", maxWidth: "480px", margin: "0 auto" }}>
          縺ゅ↑縺溘・縺ｩ縺ｮ迥ｬ遞ｮ・溘◎繧後◇繧後・迥ｬ遞ｮ縺ｫ4縺､縺ｮ豢ｾ逕溘ち繧､繝励∝粋險・8繧ｿ繧､繝励′蟄伜惠縺励∪縺吶・        </p>
      </div>

      {/* Breed Grid */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px 80px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px", alignItems: "stretch" }}>
        {breeds.map((breed) => (
          <Link
            key={breed.id}
            href={`/breeds/${breed.id}`}
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                background: "#13131a",
                height: "100%",
                border: `1px solid ${breed.color}33`,
                borderRadius: "16px",
                padding: "28px",
                transition: "all 0.2s ease",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = breed.color;
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${breed.color}33`;
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              {/* Glow */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: breed.color, borderRadius: "16px 16px 0 0" }} />

              <div style={{ fontSize: "48px", marginBottom: "12px" }}>{breed.emoji}</div>
              <h2 style={{ fontSize: "20px", fontWeight: "800", margin: "0 0 6px", color: "#f0f0f0" }}>{breed.name}</h2>
              <p style={{ color: breed.color, fontSize: "12px", fontWeight: "700", margin: "0 0 12px" }}>{breed.catchcopy}</p>
              <p style={{ color: "#999", fontSize: "13px", lineHeight: 1.6, margin: "0 0 16px" }}>
                {breed.description.slice(0, 60)}...
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                {breed.personality.map(p => (
                  <span key={p} style={{ background: `${breed.color}22`, color: breed.color, padding: "3px 10px", borderRadius: "50px", fontSize: "11px", fontWeight: "600" }}>
                    {p}
                  </span>
                ))}
              </div>

              {/* Variants */}
              <div style={{ borderTop: "1px solid #222", paddingTop: "12px" }}>
                <p style={{ color: "#555", fontSize: "11px", marginBottom: "6px" }}>豢ｾ逕溘ち繧､繝・/p>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {breed.variants.map(v => (
                    <span key={v.name} style={{ color: "#777", fontSize: "11px", background: "#1e1e2a", padding: "2px 8px", borderRadius: "4px" }}>
                      {v.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div style={{ textAlign: "center", padding: "40px 24px 80px", borderTop: "1px solid #222" }}>
        <p style={{ color: "#888", marginBottom: "20px" }}>閾ｪ蛻・′縺ｩ縺ｮ迥ｬ遞ｮ縺区ｰ励↓縺ｪ縺｣縺溘ｉ</p>
        <Link href="/" style={{ textDecoration: "none", background: "linear-gradient(135deg, #f5a623, #e74c3c)", color: "#fff", padding: "16px 40px", borderRadius: "50px", fontSize: "16px", fontWeight: "800", display: "inline-block" }}>
          枢 辟｡譁吶〒險ｺ譁ｭ縺吶ｋ
        </Link>
      </div>
    </div>
  );
}


