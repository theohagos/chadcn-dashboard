import ReactECharts from "echarts-for-react";
import { Card } from "./ui/card";

export default function PLOverviewChart() {
  const option = {
    tooltip: { trigger: "axis" },
    xAxis: {
      type: "category",
      data: ["JAN", "FEB", "MAR", "APR", "MAY"],
    },
    yAxis: { type: "value" },
    series: [
      {
        data: [1.2, 2.3, 2.1, 3.5, 4.0],
        type: "line",
        lineStyle: { color: "#3b82f6" },
      },
    ],
  };

  return (
    <Card>
      <h2 className="text-lg font-semibold mb-2">P&L Overview</h2>
      <ReactECharts option={option} style={{ height: "300px" }} />
    </Card>
  );
}
