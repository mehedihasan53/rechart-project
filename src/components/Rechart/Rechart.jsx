import React from "react";
import { FunnelChart, Funnel, Tooltip, LabelList } from "recharts";

// ✅ FunnelChart expects flat data, not nested children.
const data = [
  { name: "React", value: 500 },
  { name: "Vue", value: 300 },
  { name: "Angular", value: 200 },
  { name: "Svelte", value: 150 },
  { name: "Node.js", value: 400 },
  { name: "Django", value: 250 },
  { name: "Laravel", value: 200 },
  { name: "Spring Boot", value: 300 },
  { name: "MongoDB", value: 350 },
  { name: "PostgreSQL", value: 300 },
  { name: "MySQL", value: 250 },
  { name: "SQLite", value: 150 },
];

const Rechart = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <FunnelChart width={730} height={400}>
        <Tooltip />
        <Funnel dataKey="value" data={data} isAnimationActive>
          <LabelList
            position="right"
            fill="#100"
            stroke="green"
            dataKey="name"
          />
        </Funnel>
      </FunnelChart>
    </div>
  );
};

export default Rechart;
