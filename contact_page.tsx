"use client";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0f", color: "#f0f0f0", fontFamily: "'Segoe UI', sans-serif" }}>
      <header style={{ borderBottom: "1px solid #222", padding: "16px 24px" }}>
        <Link href="/" style={{ textDecoration: "none", color: "#f0f0f0", fontSize: "20px", fontWeight: "800" }}>🐕 何犬診断</Link>
      </header>
      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "60px 24px" }}>
        <h1 style={{ fontSize: "32px", fontWeight: "900", marginBottom: "8px" }}>お問い合わせ</h1>
        <p style={{ color: "#666", marginBottom: "32px" }}>ご意見・ご要望・不具合のご報告はこちらからどうぞ</p>
        <div style={{ background: "#13131a", borderRadius: "16px", padding: "8px", border: "1px solid #222", overflow: "hidden" }}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdp6WOlO1RHpGkOif1KAnmYz1TE9QyiwpI6T7W6Us-TOUNuIg/viewform?embedded=true"
            width="100%"
            height="700"
            style={{ border: "none", borderRadius: "12px", display: "block" }}
          >
            読み込んでいます…
          </iframe>
        </div>
      </div>
    </div>
  );
}
