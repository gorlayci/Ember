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
    <div style={{ padding: 20, color: "white", background: "#0f172a", minHeight: "100vh" }}>
      <h1>Flashcards</h1>

      <input
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <input
        placeholder="Answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <button onClick={addCard}>Add</button>

      <div style={{ marginTop: 20 }}>
        {cards.map((card, i) => (
          <div
            key={i}
            onClick={() => setFlippedIndex(flippedIndex === i ? null : i)}
            style={{ margin: 10, padding: 10, background: "#1e293b", cursor: "pointer" }}
          >
            {flippedIndex === i ? card.answer : card.question}
          </div>
        ))}
      </div>
    </div>
  );
}
