import { useState } from "react";
import { sendMessage } from "./api";

export default function SuperNina() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const reply = await sendMessage(input);
    setMessages([
      ...messages,
      { role: "user", text: input },
      { role: "nina", text: reply },
    ]);
    setInput("");
  };

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "1rem", marginTop: "1rem" }}
    >
      <h2>SuperNina Chat</h2>
      <div
        style={{
          maxHeight: "200px",
          overflowY: "scroll",
          marginBottom: "1rem",
        }}
      >
        {messages.map((m, i) => (
          <div key={i} style={{ margin: "0.25rem 0" }}>
            <strong>{m.role}:</strong> {m.text}
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "80%", marginRight: "0.5rem" }}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}
