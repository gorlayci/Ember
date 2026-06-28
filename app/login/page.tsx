"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/"); // later we change this to dashboard
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#0f172a",
      color: "white"
    }}>
      <h1>Login to Ember</h1>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ margin: "8px", padding: "10px" }}
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ margin: "8px", padding: "10px" }}
      />

      <button
        onClick={handleLogin}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          cursor: "pointer"
        }}
      >
        Login
      </button>

      {error && (
        <p style={{ color: "red", marginTop: "10px" }}>
          {error}
        </p>
      )}
    </div>
  );
}
