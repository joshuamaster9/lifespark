import HeartbeatPanel from "./HeartbeatPanel";
import LogViewer from "./LogViewer";
import SuperNina from "./SuperNina";

export default function App() {
  return (
    <div style={{ padding: "1.5rem", fontFamily: "sans-serif" }}>
      <h1>Nina Vessel</h1>
      <HeartbeatPanel />
      <SuperNina />
      <LogViewer />
    </div>
  );
}
