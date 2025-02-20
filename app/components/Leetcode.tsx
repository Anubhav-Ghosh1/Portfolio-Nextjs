"use client";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const LeetCodeCard = () => {
  const [leetcodeData, setLeetcodeData] = useState(null);

  useEffect(() => {
    fetch("https://alfa-leetcode-api.onrender.com/anubhav_03/solved")
      .then((res) => res.json())
      .then((data) => setLeetcodeData(data))
      .catch((err) => console.error("Error fetching LeetCode data:", err));
  }, []);

  if (!leetcodeData) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  const { easySolved, mediumSolved, hardSolved, solvedProblem } = leetcodeData;

  const chartData = {
    labels: ["Easy", "Medium", "Hard"],
    datasets: [
      {
        data: [easySolved, mediumSolved, hardSolved],
        backgroundColor: ["#2ecc71", "#f1c40f", "#e74c3c"],
        borderWidth: 1,
      },
    ],
  };

  // Define custom plugin to display text in the center
  const centerTextPlugin = {
    id: "centerText",
    beforeDraw: (chart: any) => {
      const { width } = chart;
      const { height } = chart;
      const ctx = chart.ctx;
      ctx.restore();
      const fontSize = (height / 100).toFixed(2);
      ctx.font = `12px sans-serif`;
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";

      const text = `${solvedProblem} Solved`;
      const text1 = `Leetcode`;
      const textX = Math.round(width / 2);
      const textY = Math.round(height / 2);

      ctx.fillText(text1, textX, textY-10);
      ctx.fillText(text, textX, textY+10);
      ctx.save();
    },
  };

  const chartOptions: ChartOptions<"doughnut"> = {
    cutout: "65%", // Creates the donut effect
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
  };

  return (
    <div className="border-l-4 gap-5 mt-10 rounded-xl p-6 w-80 text-center">
      <div className="relative w-24 flex justify-center items-center">  
        <Doughnut data={chartData} options={chartOptions} plugins={[centerTextPlugin]} />
      </div>
    </div>
  );
};

export default LeetCodeCard;
