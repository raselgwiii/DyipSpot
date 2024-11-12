  import React, { useContext } from "react";

<<<<<<< HEAD
    series: [
      {
        name: "Sales",
        data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#3083FF"],
      stroke: {
        lineCap: "round",
        curve: "smooth",
      },
      markers: {
        size: 0,
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#3083FF",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: [
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
=======
  import { Chart } from "react-chartjs-2";
  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
  } from "chart.js";
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

  const createOptions = (uiCtx) => ({
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false,
      axis: "x",
    },
    plugins: {
>>>>>>> 0fe3946b2294da426da0bf5df8cdd7236790e10d
      tooltip: {
        enabled: true,
      },
      legend: false,
    },
    scales: {
      y: {
        grid: {
          drawOnChartArea: false,
          drawBorder: false,
        },
        ticks: {
          color: uiCtx.theme === "light" ? "#929292" : "#fff",
        },
      },
      x: {
        grid: {
          color: uiCtx.theme === "light" ? "#dddfe5" : "#26323f",
          drawBorder: false,
          borderDash: [6],
          border: false,
        },
        ticks: {
          font: {
            family: "PlusJakartaSans-Medium",
            size: "16px",
          },
          color: uiCtx.theme === "light" ? "#929292" : "#fff",
        },
      },
    },
  });

const hardcodedData = [
  { month: "Jan", passengers: 10 },
  { month: "Feb", passengers: 20 },
  { month: "Mar", passengers: 30 },
  { month: "Apr", passengers: 30 },
  { month: "May", passengers: 0 },
  { month: "Jun", passengers: 40 },
  { month: "Jul", passengers: 50 },
  { month: "Aug", passengers: 75 },
  { month: "Sep", passengers: 50 },
  { month: "Oct", passengers: 60 },
  { month: "Nov", passengers: 80 },
  { month: "Dec", passengers: 90 },
];

  const DailyPassenger = () => {
  
    const chartData = {
      labels: hardcodedData.map(({ month }) => month),
      datasets: [
        {
          label: "Passengers",
          backgroundColor: "rgba(48,131,255,0.4)",
          borderColor: "rgb(48,131,255)",
          fill: true,
          data: hardcodedData.map(({ passengers }) => passengers),
          lineTension: 0.4,
        },

      ],
    };

    return <Chart type="line" data={chartData} options={chartData} />;
  };

  export default DailyPassenger;
