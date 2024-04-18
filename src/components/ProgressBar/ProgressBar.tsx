import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

interface IProgressBar {
  color: string;
  percentage: number;
}

const ProgressBar: React.FC<IProgressBar> = ({ color, percentage }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress
        variant="buffer"
        color="inherit"
        value={percentage}
        sx={{ color: color }}
      />
    </Box>
  );
};

export default ProgressBar;
