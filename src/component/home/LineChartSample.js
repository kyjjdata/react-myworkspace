import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LineChartSample = ({ jungguData }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={jungguData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="dataTime" fontSize={"12px"} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pm10"
          stroke="#FAED7D"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="pm25" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartSample;
