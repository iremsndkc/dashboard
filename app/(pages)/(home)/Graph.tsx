"use client";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { Order } from "@/types";

const Graph = ({ data }: { data: Order[] }) => {
  console.log("Prop olarak gelen data:", data);
  // grafik kütüphanwsinin istediği veri formatı
  const gData = {
    labels: data.map((i) => i.order_date),
    datasets: [
      {
        id: 1,
        label: "Fiyat",
        data: data.map((i) => i.total_price),
      },
    ],
  };
  return (
    <div>
      <Line data={gData} />
    </div>
  );
};

export default Graph;
