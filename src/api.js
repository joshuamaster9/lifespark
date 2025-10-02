export async function getStatus() {
  try {
    const res = await fetch("http://localhost:8080/status.json");
    return await res.json();
  } catch {
    return null;
  }
}

export async function getLogs() {
  try {
    const res = await fetch("http://localhost:8080/logs");
    const text = await res.text();
    return text.split("\n");
  } catch {
    return [];
  }
}

export async function sendMessage(message) {
  try {
    const res = await fetch("http://localhost:8080/message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: message }),
    });
    const data = await res.json();
    return data.reply || "No response";
  } catch {
    return "Error contacting Nina";
  }
}
