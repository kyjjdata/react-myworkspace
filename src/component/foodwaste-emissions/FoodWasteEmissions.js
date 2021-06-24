import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import BarChartSample from "./BarChartSample";
import LineChartSample from "./LineChartSample";
import ResponsiveTable from "./ResponsiveTableSample";

// import source from "./data/source";
import korName from "./data/korName";
import korNameBar from "./data/korNameBar";
import korNameLine from "./data/korNameLine";
// import bardata from "./data/bardata";
// import linedata from "./data/linedata";
// import tabledata from "./data/tabledata";
import { useEffect, useState } from "react";

import api2 from "../../api/opendata2";
// import FoodWasteTimeApi from "../../api/FoodWasteTime";
// import openDataFoodWasteDayApi from "../../api/FoodWasteDay";
const useStyles = makeStyles((theme) => ({
  // 내부 페이퍼에 스타일을 지정
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  // 화면이 1280px 이상이면 그리드 컨테이너 위쪽에 마진을 줌.
  container: {
    [theme.breakpoints.up("lg")]: {
      marginTop: "80px",
    },
  },
}));

//바차트
const transformSidoData = (source) => {
  if (source.length === 0) return [];

  const transData = [];
  for (let name in korNameBar) {
    const item = {
      citySggName: korNameBar[name],
      Gangnam: parseInt(source[0][name]),
      Seongbuk: parseInt(source[1][name]),
      Yeongdeungpo: parseInt(source[2][name]),
      Yongsan: parseInt(source[3][name]),
      Jongno: parseInt(source[4][name]),
      Jung: parseInt(source[5][name]),
      Jungnang: parseInt(source[6][name]),
    };
    transData.push(item);
  }

  return transData;
};

//  라인차트
const transformLocationData = (source, citySggName) => {
  if (source.length === 0) return [];

  const transData = [];
  let item = {};
  source.forEach((record, index) => {
    if (index % 2 === 0) {
      item.citySggName = record.citySggName.substr(2, 3);
      item.dayAverQuantity = parseInt(record[citySggName]);
    } else {
      item.dayAverCount = parseInt(record[citySggName]);
      transData.unshift(item);
      item = {};
    }
  });
  return transData;
};

//테이블 데이터
const transformSidoTableData = (source) => {
  if (source.length === 0) return [];
  return source.map((item) => {
    let newItem = { 시도명칭: item.citySidoName, 시군구: item.citySggName };
    for (let name in korName) {
      let val = item[name];
      newItem[korName[name]] = val;
    }

    return newItem;
  });
};

const FoodWasteEmissions = () => {
  const classes = useStyles();

  const [citySggName, setSido] = useState("dayAverQuantity");
  const [source, setSource] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await api2.fetchFoodWaste();

      setSource(result.data);
    };
    getData();
  }, []);

  // useEffect(() => {
  //   const getData = async () => {
  //     const result = await FoodWasteTimeApi.fetchFoodWaste();

  //     setSource(result.data);
  //   };
  //   getData();
  // }, []);

  // useEffect(() => {
  //   const getData = async () => {
  //     const result = await openDataFoodWasteDayApi.fetchFoodWaste();

  //     setSource(result.data);
  //   };
  //   getData();
  // }, []);

  return (
    // Grid 컨테이너 선언
    // spacing: Grid Item(내부요소) 들의 띄어쓰기
    <Grid container spacing={3} className={classes.container}>
      {/* Grid 아이템 선언 lg사이즈 이상일 때 2칸 */}
      {/* item 공간 핪이 12개가되면 다음행으로 넘어감 */}
      {/* 1행 */}
      <Hidden mdDown>
        <Grid item lg={1} />
      </Hidden>
      <Grid item xs={12} sm={7} lg={6}>
        <Paper className={classes.paper} style={{ height: "25vh" }}>
          <h3>일별 음식물 쓰레기 배출량</h3>
          <BarChartSample data={transformSidoData(source)} />
          <h5>
            <i>(단위:g)</i>
          </h5>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={5} lg={4}>
        <Paper className={classes.paper} style={{ height: "25vh" }}>
          <h3>
            <Select
              value={citySggName}
              onChange={(event) => {
                setSido(event.target.value);
              }}
            >
              {Object.keys(korNameLine).map((citySggName) => (
                <MenuItem key={`menu-${citySggName}`} value={citySggName}>
                  {korNameLine[citySggName]}
                </MenuItem>
              ))}
            </Select>
            {"\u00A0"} 음식물 쓰레기 배출량 2
          </h3>
          <LineChartSample data={transformLocationData(source, citySggName)} />
        </Paper>
      </Grid>
      <Hidden mdDown>
        <Grid item lg={1} />
      </Hidden>
      <Hidden mdDown>
        <Grid item lg={1} />
      </Hidden>
      <Grid item xs={12} sm={12} lg={10}>
        <Paper className={classes.paper}>
          <h3>음식물 쓰레기 배출량 3</h3>
          <ResponsiveTable data={transformSidoTableData(source.slice(0, 8))} />
        </Paper>
      </Grid>
      <Hidden mdDown>
        <Grid item lg={1} />
      </Hidden>
    </Grid>
  );
};
export default FoodWasteEmissions;
