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
const LineChartSample = ({ data }) => {
  console.log("--linechart data--");
  console.log(data);

  return (
    <ResponsiveContainer width="100%" height="70%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="dataTime" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pm10" stroke="#8884d8" />
        <Line type="monotone" dataKey="pm25" stroke="#66bb6a" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartSample;
