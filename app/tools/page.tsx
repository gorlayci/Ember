"use client";

import { useRouter } from "next/navigation";

export default function ToolsPage() {
  const router = useRouter();

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#0f172a",
      color: "white",
      padding: "30px",
      fontFamily: "Arial"
    }}>
      <h1>Study Tools</h1>

      <p style={{ color: "#94a3b8" }}>
        Everything you need to study smarter.
      </p>

      <div style={{ marginTop: "30px" }}>
        <button onClick={() => router.push("/dashboard")}
          style={{ marginRight: "10px", padding: "10px" }}>
          Back to Dashboard
        </button>
      </div>

      <div style={{ marginTop: "30px", display: "grid", gap: "15px" }}>

        <div style={{ background: "#1e293b", padding: "15px", borderRadius: "10px" }}>
          <h2>📇 Flashcards</h2>
          <p>Turn notes into quick memory cards (coming next)</p>
        </div>

        <div style={{ background: "#1e293b", padding: "15px", borderRadius: "10px" }}>
          <h2>📝 Quizzes</h2>
          <p>Practice multiple choice + fill in the blank</p>
        </div>

        <div style={{ background: "#1e293b", padding: "15px", borderRadius: "10px" }}>
          <h2>🧠 AI Study Helper</h2>
          <p>Ask questions based only on your notes</p>
        </div>

        <div style={{ background: "#1e293b", padding: "15px", borderRadius: "10px" }}>
          <h2>📄 Notes Organizer</h2>
          <p>Upload and sort your class materials</p>
        </div>

      </div>
    </div>
  );
}
