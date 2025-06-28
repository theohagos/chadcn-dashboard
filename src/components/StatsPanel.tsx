import { Card } from "./ui/card";

export default function StatsPanel() {
  const stats = [
    { label: "Total Books", value: "42" },
    { label: "IHC", value: "28" },
    { label: "Non-IHC", value: "14" },
    { label: "Sign-off %", value: "92%" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map(({ label, value }) => (
        <Card key={label}>
          <div className="text-sm text-gray-400">{label}</div>
          <div className="text-xl font-bold">{value}</div>
        </Card>
      ))}
    </div>
  );
}
