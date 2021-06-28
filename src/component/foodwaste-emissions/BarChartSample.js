import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarChartSample = ({ data }) => {
  console.log("--barchart data--");
  console.log(data);

  return (
    <ResponsiveContainer width="100%" height="70%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        {/* <XAxis dataKey="name" /> 데이터 객체의 name속성을 x축에 */}
        <XAxis dataKey="citySggName" fontSize={"12px"} />
        <YAxis /> {/* Y축의 값 범위 표시 */}
        <Tooltip /> {/* 마우스 오버했을 때 나오는 영역 */}
        <Legend />
        {/* 범례, 데이터의 계열을 표시 */}
        <Bar dataKey="Gangnam" name="강남구 " fill="#D88800">
          {/* 데이터 조건에 따라서 막대의 색상을 바꿈 */}
          <Cell key="disQuantity" fill="#D88800"></Cell>
        </Bar>
        {/* fill="채우는색상16진수" */}
        <Bar dataKey="Seongbuk" name="성북구 " fill="#ABF200">
          <Cell key="disQuantity" fill="#ABF200"></Cell>
        </Bar>
        <Bar dataKey="Yeongdeungpo" name="영등포구" fill="#47C83E">
          <Cell key="disQuantity" fill="#47C83E"></Cell>
        </Bar>
        <Bar dataKey="Yongsan" name="용산구" fill="#4374D9">
          <Cell key="disQuantity" fill="#4374D9"></Cell>
        </Bar>
        <Bar dataKey="Jongno" name="종로구" fill="#8041D9">
          <Cell key="disQuantity" fill="#8041D9"></Cell>
        </Bar>
        <Bar dataKey="Jung" name="중구" fill="#D9418C">
          <Cell key="disQuantity" fill="#D9418C"></Cell>
        </Bar>
        <Bar dataKey="Jungnang" name="중랑구" fill="#8C8C8C">
          <Cell key="disQuantity" fill="#8C8C8C"></Cell>
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartSample;
