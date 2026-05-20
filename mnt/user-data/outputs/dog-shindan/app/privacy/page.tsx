"use client";
import Link from "next/link";

export default function PrivacyPage() {
  const today = new Date().toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" });
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0f", color: "#f0f0f0", fontFamily: "'Segoe UI', sans-serif" }}>
      <header style={{ borderBottom: "1px solid #222", padding: "16px 24px" }}>
        <Link href="/" style={{ textDecoration: "none", color: "#f0f0f0", fontSize: "20px", fontWeight: "800" }}>🐕 何犬診断</Link>
      </header>
      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "60px 24px" }}>
        <h1 style={{ fontSize: "32px", fontWeight: "900", marginBottom: "8px" }}>プライバシーポリシー</h1>
        <p style={{ color: "#666", marginBottom: "40px" }}>最終更新日：{today}</p>

        {[
          { title: "1. 収集する情報について", body: "当サービス（以下「本サービス」）は、診断の回答データをローカルにのみ保存し、サーバーへ送信しません。Google Analyticsを使用してアクセス解析を行う場合があります。これにはCookieを通じたIPアドレス、ブラウザ種別、閲覧ページなどの情報が含まれますが、個人を特定する情報は収集しません。" },
          { title: "2. Cookieについて", body: "本サービスはCookieを使用することがあります。Cookieとはウェブサイトがブラウザに保存する小さなテキストデータで、サービスの利便性向上のために使用します。ブラウザの設定によりCookieを無効にすることができますが、一部の機能が利用できなくなる場合があります。" },
          { title: "3. 広告について", body: "本サービスはGoogle AdSense等の第三者広告サービスを使用する場合があります。これらのサービスはCookieを使用してユーザーの興味に基づく広告を表示することがあります。Google AdSenseのCookieの使用を無効にする方法については、Googleの広告設定ページをご確認ください。" },
          { title: "4. 情報の第三者提供", body: "当サービスは法令に基づく場合を除き、収集した情報を第三者に提供することはありません。" },
          { title: "5. 免責事項", body: "当サービスの診断結果はエンターテインメント目的のものであり、科学的・医学的根拠を持つものではありません。診断結果の正確性・信頼性について当サービスは一切の責任を負いません。" },
          { title: "6. プライバシーポリシーの変更", body: "当サービスは必要に応じてプライバシーポリシーを変更することがあります。変更後はこのページにて最新版を公開します。" },
          { title: "7. お問い合わせ", body: "プライバシーポリシーに関するお問い合わせはお問い合わせページよりご連絡ください。" },
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
