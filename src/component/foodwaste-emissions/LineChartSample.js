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
        <XAxis dataKey="citySggName" />

        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="dayAverQuantity"
          name="영등포구"
          stroke="#8884d8"
        />
        <Line
          type="monotone"
          dataKey="dayAverCount"
          name="용산구"
          stroke="#66bb6a"
        />
        <Line type="monotone" dataKey="disCount" stroke="#FFB2F5" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartSample;
