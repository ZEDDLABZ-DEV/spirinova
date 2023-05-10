import React from "react";
import {
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
} from "recharts";

const CustomToolTip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black p-4 rounded-md">
        <div className="text-white">{`${label}: ${payload[0].value}`}</div>
      </div>
    );
  }

  return null;
};

const Line = (props) => {
  const { data, width, height, dataKey, xKey, max, min } = props;

  return (
    <AreaChart
      width={width}
      height={height}
      data={data}
      margin={{ top: 30, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#ABBBCF" stopOpacity={1} />
          <stop offset="95%" stopColor="#fff" stopOpacity={1} />
        </linearGradient>
      </defs>
      <XAxis
        axisLine={false}
        tick={{ fill: "#949DA4", fontSize: "12px" }}
        tickLine={false}
        dataKey={xKey}
      />

      <YAxis
        axisLine={false}
        tickLine={false}
        dataKey={dataKey}
        domain={[min, max]}
        tick={{ fill: "#949DA4", fontSize: "12px" }}
        // fill="#949DA4"
      />
      <CartesianGrid horizontal={true} vertical={false} strokeDasharray="1" />
      <Tooltip
        wrapperStyle={{ top: "-30px" }}
        contentStyle={{
          background: "#000",
          color: "#fff",
          borderRadius: "8px",
        }}
        content={<CustomToolTip />}
      />
      <Area
        type="monotone"
        dataKey={dataKey}
        stroke="#01316D"
        fillOpacity={1}
        strokeWidth={3}
        fill="url(#colorUv)"
      />
    </AreaChart>
  );
  // const { data, width, height, xKey, dataKey, min, max } = props;

  // return (
  //   <AreaChart
  //     width={width}
  //     height={height}
  //     data={[
  //       {
  //         name: "Page A",
  //         uv: 4000,
  //         pv: 2400,
  //         amt: 2400,
  //       },
  //       {
  //         name: "Page B",
  //         uv: 3000,
  //         pv: 1398,
  //         amt: 2210,
  //       },
  //     ]}
  //   >
  //     <defs>
  //       <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
  //         <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
  //         <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
  //       </linearGradient>
  //       <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
  //         <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
  //         <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
  //       </linearGradient>
  //     </defs>
  //     <XAxis dataKey={xKey} />
  //     <YAxis domain={[min, max]} />
  //     <CartesianGrid strokeDasharray="3 3" />
  //     <Tooltip />
  //     <Area
  //       type="monotone"
  //       dataKey={dataKey}
  //       stroke="#82ca9d"
  //       fillOpacity={1}
  //       fill="url(#colorPv)"
  //     />
  //   </AreaChart>
  // );
};

export { Line };
