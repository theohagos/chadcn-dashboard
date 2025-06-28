import Sidebar from "./components/Sidebar";
import StatsPanel from "./components/StatsPanel";
import PLOverviewChart from "./components/PLOverviewChart";
import RightPanel from "./components/RightPanel";

function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto space-y-6">
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        <StatsPanel />
        <PLOverviewChart />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-2">{/* Add charts or tables here */}</div>
          <RightPanel />
        </div>
      </main>
    </div>
  );
}

export default App;
