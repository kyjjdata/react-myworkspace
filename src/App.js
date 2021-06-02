// import logo from "./logo.svg";

// 컴포넌트간 이동에 사용하는 라이브러리
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Suspense, lazy, useState } from "react";

import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
// import { green, purple } from "@meterial-ui/core/colors";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

// Core Components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

//Icons   Menu 이름을 MenuIcon으로 변경해 사용
// https://material-ui.com/components/material-icons/

import {
  Home as HomeIcon,
  PlaylistAddCheck,
  TableChart,
  Menu as MenuIcon,
} from "@material-ui/icons";

import Home from "./component/home/Home";

//라우터에 로딩되는 컴포넌트는 컨테이너 컴포넌트
const Contact = lazy(() => import("./component/Contact"));
const Todo = lazy(() => import("./component/todo/Todo"));

const drawerWidth = "240px";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appbar: {
    // viewport 가로가 1280px 이상일 때 적용
    [theme.breakpoints.up("lg")]: {
      width: `calc(100% - ${drawerWidth})`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
    marginRight: theme.spacing(2), //기본 (spacing(띄어쓰기)이 8px *2)
  },
  toolbar: theme.mixins.toolbar, // 툴바에 대한 기본 스타일
  content: {
    flexGrow: 1, //균등분할 크기의 1배수 만큼
    [theme.breakpoints.up("lg")]: {
      paddingLeft: drawerWidth,
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(3),
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },

  drawer: {
    // [theme.breakpoints.up("lg")]: {
    //   width: drawerWidth,
    //   flexShrink: 0,
    // },
  },
}));

function App() {
  const classes = useStyles(); // css 클래스 목록이 생성됨
  const [mobileOpen, setMobileOpen] = useState(false); //앱서랍 열었다 닫았다 하기

  const theme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: green[600],
      },
      secondary: {
        main: purple[600],
      },
    },
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <div className={classes.toolbar} />
      <List component="nav">
        <Link to="/" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </Link>
        <Link to="/todo" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <PlaylistAddCheck />
            </ListItemIcon>
            <ListItemText>To-Do</ListItemText>
          </ListItem>
        </Link>
        <Link to="/contacts" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <TableChart />
            </ListItemIcon>
            <ListItemText>Contacts</ListItemText>
          </ListItem>
        </Link>
      </List>
    </>
  );
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className={classes.root}>
          <header>
            <AppBar position="fixed" className={classes.appbar}>
              {" "}
              {/* 스크롤을 해도 고정되게 */}
              <Toolbar>
                {/* color="inherit" 부모 요소의 폰트 컬러를 사용함 */}
                <IconButton
                  color="inherit"
                  edge="start"
                  className={classes.menuButton}
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                  <Typography variant="h6" noWrap>
                    MY WORKSPACE
                  </Typography>
                </IconButton>
              </Toolbar>
            </AppBar>

            {/* 앱서랍(Drawer) */}
            {/* 화면이 1280px 이상일 때 숨기는 서랍 */}
            <Hidden lgUp implementation="css">
              <Drawer
                variant="temporary"
                open={mobileOpen}
                classes={{ paper: classes.drawerPaper }}
                onClose={handleDrawerToggle}
              >
                {drawer}
              </Drawer>
            </Hidden>
            {/* 화면이 1280px 미만일 때 숨기는 서랍 */}
            <Hidden mdDown implementation="css">
              <Drawer
                open
                variant="permanent"
                classes={{ paper: classes.drawerPaper }}
              >
                {drawer}
              </Drawer>
            </Hidden>
          </header>
          <main className={classes.content}>
            {/* 상단 toolbar 공간만큼 띄우기 */}
            <div className={classes.toolbar} />
            {/* 컴포넌트가 로딩되는 동안 표시할 내용을 보여주는 컴포넌트 */}
            <Suspense fallback={<div>Loading...</div>}>
              {/* Switch 안쪽 영역 Conponent가 표시됨 */}
              <Switch>
                {/* Switch 안쪽 영역에 로딩할 컴포넌트와 경로를 Route로 작성 */}
                {/* exact 해당 경로와 완전히 일치할 때만 적용됨 */}
                <Route path="/" component={Home} exact></Route>
                <Route path="/todo" component={Todo}></Route>
                <Route path="/contacts" component={Contact}></Route>
              </Switch>
            </Suspense>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App; //export: 내보내기, import: 가져오기

// APP.js에 커멘드 추가
// 커멘트 다시 추가
