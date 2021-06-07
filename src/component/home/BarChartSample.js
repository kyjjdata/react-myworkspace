import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarChartSample = ({ data }) => {
  // const pm10Color = (val) => {
  //   let color = "#329fff";

  //   if (val > 30 && val <= 80) {
  //     color = "#00c73c";
  //   } else if (val > 80 && val <= 150) {
  //     color = "#fd9b5a";
  //   } else if (val > 150) {
  //     color = "#ff5959";
  //   }

  //   return color;
  // };

  // const pm25Color = (val) => {
  //   let color = "#329fff";

  //   if (val > 15 && val <= 35) {
  //     color = "#00c73c";
  //   } else if (val > 35 && val <= 75) {
  //     color = "#fd9b5a";
  //   } else if (val > 75) {
  //     color = "#ff5959";
  //   }

  //   return color;
  // };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        {/* <Xaxis dataKey="name"/> 데이터 객체의 name 속성을 x축에 표시 */}
        <XAxis dataKey="sido" fontSize={"12px"} />
        <YAxis /> {/* Y축의 값 범위 표시*/}
        <Tooltip /> {/* 마우스 오버했을 때 나오는 영역*/}
        <Legend /> {/* 범례, 데이터의 계열을 표시 */}
        <Bar dataKey="pm10" fill="#FAED7D" />
        <Bar dataKey="pm25" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartSample;
