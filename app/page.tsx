export default function Home() {
  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#0f172a",
      color: "white",
      fontFamily: "Arial"
    }}>
      <h1 style={{ fontSize: "48px" }}>
        Ember
      </h1>

      <p style={{ marginTop: "10px", color: "#94a3b8" }}>
        AI Study Hub is loading...
      </p>
    </main>
  );
}
