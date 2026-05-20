"use client";
import Link from "next/link";

export default function TermsPage() {
  const today = new Date().toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" });
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0f", color: "#f0f0f0", fontFamily: "'Segoe UI', sans-serif" }}>
      <header style={{ borderBottom: "1px solid #222", padding: "16px 24px" }}>
        <Link href="/" style={{ textDecoration: "none", color: "#f0f0f0", fontSize: "20px", fontWeight: "800" }}>🐕 何犬診断</Link>
      </header>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "60px 24px" }}>
        <h1 style={{ fontSize: "32px", fontWeight: "900", marginBottom: "8px" }}>利用規約</h1>
        <p style={{ color: "#666", marginBottom: "40px" }}>最終更新日：{today}</p>

        {[
          { title: "1. 本規約について", body: "本規約は、当サービス「何犬診断」（以下「本サービス」）の利用条件を定めるものです。本サービスを利用した場合、本規約に同意したものとみなします。" },
          { title: "2. サービスの目的", body: "本サービスはエンターテインメント目的の性格診断コンテンツです。診断結果は科学的根拠を持つものではなく、あくまで娯楽としてお楽しみください。" },
          { title: "3. 禁止事項", body: "以下の行為を禁止します。①本サービスのコンテンツの無断複製・転用・商業利用 ②本サービスのシステムへの不正アクセスや妨害行為 ③虚偽の情報を用いた利用 ④その他法令または公序良俗に反する行為" },
          { title: "4. 知的財産権", body: "本サービスのコンテンツ（テキスト、デザイン、ロジック等）に関する知的財産権は当サービス運営者に帰属します。" },
          { title: "5. 免責事項", body: "当サービスは診断結果の正確性・完全性について保証しません。本サービスの利用により生じたいかなる損害についても、当サービスは責任を負いません。" },
          { title: "6. サービスの変更・終了", body: "当サービスは予告なくサービス内容の変更・終了を行う場合があります。それにより生じた損害について責任を負いません。" },
          { title: "7. 規約の変更", body: "当サービスは必要に応じて本規約を変更することがあります。変更後はこのページにて最新版を公開します。" },
        ].map(item => (
          <div key={item.title} style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "17px", fontWeight: "800", color: "#f5a623", marginBottom: "10px" }}>{item.title}</h2>
            <p style={{ color: "#bbb", lineHeight: 1.8, fontSize: "14px" }}>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
