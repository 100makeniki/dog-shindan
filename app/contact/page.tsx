"use client";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0f", color: "#f0f0f0", fontFamily: "'Segoe UI', sans-serif" }}>
      <header style={{ borderBottom: "1px solid #222", padding: "16px 24px" }}>
        <Link href="/" style={{ textDecoration: "none", color: "#f0f0f0", fontSize: "20px", fontWeight: "800" }}>🐕 何犬診断</Link>
      </header>
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "60px 24px" }}>
        <h1 style={{ fontSize: "32px", fontWeight: "900", marginBottom: "8px" }}>お問い合わせ</h1>
        <p style={{ color: "#666", marginBottom: "40px" }}>ご意見・ご要望・不具合のご報告はこちらからどうぞ</p>

        {sent ? (
          <div style={{ textAlign: "center", padding: "60px", background: "#13131a", borderRadius: "16px", border: "1px solid #2ecc7133" }}>
            <p style={{ fontSize: "48px", marginBottom: "16px" }}>✅</p>
            <p style={{ fontSize: "18px", fontWeight: "800", marginBottom: "8px" }}>送信が完了しました</p>
            <p style={{ color: "#888" }}>お問い合わせありがとうございます</p>
          </div>
        ) : (
          <div style={{ background: "#13131a", borderRadius: "16px", padding: "32px", border: "1px solid #222" }}>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#aaa", marginBottom: "8px" }}>お名前</label>
              <input type="text" placeholder="山田太郎" style={{ width: "100%", background: "#0a0a0f", border: "1px solid #333", borderRadius: "8px", padding: "12px 16px", color: "#f0f0f0", fontSize: "14px", boxSizing: "border-box" }} />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#aaa", marginBottom: "8px" }}>メールアドレス</label>
              <input type="email" placeholder="example@email.com" style={{ width: "100%", background: "#0a0a0f", border: "1px solid #333", borderRadius: "8px", padding: "12px 16px", color: "#f0f0f0", fontSize: "14px", boxSizing: "border-box" }} />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#aaa", marginBottom: "8px" }}>お問い合わせ内容</label>
              <textarea rows={5} placeholder="ご意見・ご要望をご記入ください" style={{ width: "100%", background: "#0a0a0f", border: "1px solid #333", borderRadius: "8px", padding: "12px 16px", color: "#f0f0f0", fontSize: "14px", resize: "vertical", boxSizing: "border-box" }} />
            </div>
            <button
              onClick={() => setSent(true)}
              style={{ width: "100%", background: "linear-gradient(135deg, #f5a623, #e74c3c)", color: "#fff", border: "none", borderRadius: "8px", padding: "14px", fontSize: "15px", fontWeight: "800", cursor: "pointer" }}
            >
              送信する
            </button>
            <p style={{ color: "#555", fontSize: "12px", textAlign: "center", marginTop: "12px" }}>
              ※ 現在はデモ送信です。実際の送信機能は順次対応予定です。
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
