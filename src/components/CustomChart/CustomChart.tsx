import * as React from "react";
import { LineChart, lineElementClasses } from "@mui/x-charts/LineChart";

const uData = [4000, 3000, 2000, 2780, 1890];
// const pData = [2400, 1398, 9800, 3908, 4800];
// const amtData = [2400, 2210, 0, 2000, 2181, 2500, 2100];
const xLabels = ["Jan 17", "Jan 20", "Feb 10", "Feb 27", "May 20"];

export default function CustomChart() {
  return (
    <LineChart
      yAxis={[]}
      width={340}
      height={150}
      series={[
        {
          data: uData,
          label: "uv",
          area: true,
          stack: "total",
          showMark: false,
        },
      ]}
      xAxis={[{ scaleType: "point", data: xLabels }]}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          display: "none",
        },
        [`& .${lineElementClasses.highlighted}`]: {
          display: "none",
        },
      }}
    />
  );
}
