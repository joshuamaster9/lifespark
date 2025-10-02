import { useEffect, useState } from "react";
import { getLogs } from "./api";

export default function LogViewer() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const data = await getLogs();
      setLogs(data);
    };
    fetchLogs();
    const interval = setInterval(fetchLogs, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{ border: "1px solid #ccc", padding: "1rem", marginTop: "1rem" }}
    >
      <h2>Invocation Logs</h2>
      <pre style={{ maxHeight: "200px", overflowY: "scroll" }}>
        {logs.join("\n")}
      </pre>
    </div>
  );
}
