"use client";

import { useState } from "react";

type Card = {
  question: string;
  answer: string;
};

export default function Flashcards() {
  const [cards, setCards] = useState<Card[]>([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const addCard = () => {
    if (!question || !answer) return;

    setCards([...cards, { question, answer }]);
    setQuestion("");
    setAnswer("");
  };

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#0f172a",
      color: "white",
      padding: "30px",
      fontFamily: "Arial"
    }}>
      <h1>Flashcards</h1>

      {/* Create card */}
      <div style={{ marginTop: "20px" }}>
        <input
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          style={{ marginRight: "10px", padding: "8px" }}
        />

        <input
          placeholder="Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          style={{ marginRight: "10px", padding: "8px" }}
        />

        <button onClick={addCard} style={{ padding: "8px 12px" }}>
          Add
        </button>
      </div>

      {/* Cards */}
      <div style={{ marginTop: "30px", display: "grid", gap: "15px" }}>
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() =>
              setFlippedIndex(flippedIndex === index ? null : index)
            }
            style={{
              background: "#1e293b",
              padding: "20px",
              borderRadius: "10px",
              cursor: "pointer"
            }}
          >
            {flippedIndex === index ? (
              <p>{card.answer}</p>
            ) : (
              <p>{card.question}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}"use client";

import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#0f172a",
      color: "white",
      padding: "30px",
      fontFamily: "Arial"
    }}>
      <h1>Ember Dashboard</h1>

      <p style={{ color: "#94a3b8" }}>
        Welcome to your study hub.
      </p>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => router.push("/")}
          style={{
            padding: "10px 15px",
            marginRight: "10px",
            cursor: "pointer"
          }}
        >
          Home
        </button>

        <button
          onClick={() => router.push("/login")}
          style={{
            padding: "10px 15px",
            cursor: "pointer"
          }}
        >
          Login
        </button>
      </div>

      <div style={{
        marginTop: "40px",
        padding: "20px",
        backgroundColor: "#1e293b",
        borderRadius: "10px"
      }}>
        <h2>Your Study Tools</h2>
        <ul>
          <li>📄 Flashcards (coming next)</li>
          <li>🧠 AI Study Assistant (coming next)</li>
          <li>📝 Practice Quizzes (coming next)</li>
          <li>📚 Upload Notes (coming next)</li>
        </ul>
      </div>
    </div>
  );
}
