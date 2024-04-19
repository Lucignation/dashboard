import { LineChart, lineElementClasses } from "@mui/x-charts/LineChart";

const uData = [4000, 3000, 2000, 2780, 1890];
const xLabels = ["Jan 17", "Jan 20", "Feb 10", "Feb 27", "May 20"];

export default function CustomChart() {
  return (
    <LineChart
      yAxis={[{ scaleType: undefined }]}
      width={380}
      height={200}
      series={[
        {
          data: uData,
          area: true,
          showMark: false,
        },
      ]}
      xAxis={[{ scaleType: "point", data: xLabels }]}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          display: "none",
        },
      }}
    />
  );
}
