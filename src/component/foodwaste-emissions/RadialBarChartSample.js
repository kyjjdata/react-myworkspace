import {
  RadialBarChart,
  ResponsiveContainer,
  PolarAngleAxis,
  PolarRadiusAxis,
  PolarGrid,
  Legend,
  Tooltip,
  RadialBar,
  Customized,
  Cell,
  BarChart,
  Bar,
} from "recharts";
const RadialBarChartSample = ({ data }) => {
  console.log("--RadialBarChartSample data--");
  console.log(data);

  return (
    <ResponsiveContainer width="100%" height="70%">
      <RadialBarChart
        innerRadius="30%"
        outerRadius="100%"
        data={data}
        startAngle={180}
        endAngle={0}
      >
        <Legend iconSize={10} />
        <RadialBar
          minAngle={15}
          label={{ fill: "#D88800", position: "insideStart" }}
          background
          clockWise={true}
          dataKey="Gangnam"
          name="강남구"
          fill="#D88800"
        >
          <Cell key="disCount" fill="#D88800" name="강남구"></Cell>
        </RadialBar>
        <RadialBar
          minAngle={15}
          label={{ fill: "#ABF200", position: "insideStart" }}
          background
          clockWise={true}
          dataKey="Seongbuk"
          name="성북구 "
          fill="#ABF200"
        >
          <Cell key="disCount" fill="#ABF200" name="성북구"></Cell>
        </RadialBar>
        <RadialBar
          minAngle={15}
          label={{ fill: "#47C83E", position: "insideStart" }}
          background
          clockWise={true}
          dataKey="Yeongdeungpo"
          name="영등포구 "
          fill="#47C83E"
        >
          <Cell key="disCount" fill="#47C83E" name="영등포구 "></Cell>
        </RadialBar>
        <RadialBar
          minAngle={15}
          label={{ fill: "#4374D9", position: "insideStart" }}
          background
          clockWise={true}
          dataKey="Yongsan"
          name="용산구 "
          fill="#4374D9"
        >
          <Cell key="disCount" fill="#4374D9" name="용산구 "></Cell>
        </RadialBar>
        <RadialBar
          minAngle={15}
          label={{ fill: "#8041D9", position: "insideStart" }}
          background
          clockWise={true}
          dataKey="Jongno"
          name="종로구 "
          fill="#8041D9"
        >
          <Cell key="disCount" fill="#8041D9" name="종로구 "></Cell>
        </RadialBar>
        <RadialBar
          minAngle={15}
          label={{ fill: "#D9418C", position: "insideStart" }}
          background
          clockWise={true}
          dataKey="Jung"
          name="중구 "
          fill="#D9418C"
        >
          <Cell key="disCount" fill="#D9418C" name="중구 "></Cell>
        </RadialBar>
        <RadialBar
          minAngle={15}
          label={{ fill: "#8C8C8C", position: "insideStart" }}
          background
          clockWise={true}
          dataKey="Jungnang"
          name="중랑구"
          fill="#8C8C8C"
        >
          <Cell key="disCount" fill="#8C8C8C" name="중랑구 "></Cell>
        </RadialBar>

        <Tooltip />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default RadialBarChartSample;
