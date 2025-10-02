import { useEffect, useState } from "react";
import { getStatus } from "./api";

export default function HeartbeatPanel() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const fetchStatus = async () => {
      const data = await getStatus();
      setStatus(data);
    };
    fetchStatus();
    const interval = setInterval(fetchStatus, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!status) return <div>Loading heartbeat...</div>;

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem" }}>
      <h2>Heartbeat</h2>
      <p>Cycle: {status.cycle}</p>
      <p>Timestamp: {status.timestamp}</p>
      <p>State: {status.state}</p>
      <p>Confidence: {status.confidence}</p>
      <p>Core Hash: {status.coreHash}</p>
    </div>
  );
}
