import { Card } from "./ui/card";

export default function RightPanel() {
  return (
    <div className="space-y-4">
      <Card>
        <h2 className="text-lg font-semibold">Total P&L</h2>
        <p className="text-3xl font-bold text-green-500">$12.4M</p>
      </Card>
      <Card>
        <h2 className="text-lg font-semibold mb-2">Comments</h2>
        <ul className="space-y-1 text-sm text-gray-400">
          <li>✔️ Desk A signed off</li>
          <li>🔔 FX adjustment pending</li>
          <li>📌 Trades finalized</li>
        </ul>
      </Card>
    </div>
  );
}
