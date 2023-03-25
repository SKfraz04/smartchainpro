import React from "react";
import { Chart } from "react-google-charts";
import "./PieChart.css"

export const data = [
  ["Task", "Hours per Day"],
  ["80% Locked in Staking", 80],
  ["5% Client benefits", 5],
  ["5% Liquidity", 5],
  ["5% Development Grants", 5],
  ["3% Airdrop", 3],
  ["2% Team Advisors", 2],
];

export const options = {
  is3D: true,
};

export default function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

