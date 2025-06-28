import { Home, BarChart2, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="bg-blue-600 text-white w-16 h-screen flex flex-col justify-between items-center py-6">
      <div className="space-y-8">
        <Home className="w-6 h-6" />
        <BarChart2 className="w-6 h-6" />
      </div>
      <Settings className="w-6 h-6" />
    </aside>
  );
}
