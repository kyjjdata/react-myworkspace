// import logo from "./logo.svg";
import "./App.css";

// 컴포넌트간 이동에 사용하는 라이브러리
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//lazy-loading에 사용할 라이브러리(모듈)
//컴포넌트가 처음으로 로딩될 때, 컴포넌트 파일을 서버에서 받아옴
import { Suspense, lazy } from "react";

// import HelloReact from "./components/HelloReact"; //HelloReact.js를 가져오고 Helloreact라는 이름으로 사용
// import Header from "./components/Header";
// import Counter from "./components/Counter";

// import Todo from "./component/Todo";
// import Contact from "./component/Contact";
import Home from "./component/Home";

const Contact = lazy(() => import("./component/Contact"));
const Todo = lazy(() => import("./component/Todo"));

// React 컴포넌트 == 함수, 주로 함수명을 대문자로 시작함(파스칼케이스, HelloReact)
// JSX Element를 반환(return)하는 함수
function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/todo">To-Do</Link>
              </li>
              <li>
                <Link to="/contacts">Contacts</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
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
  );
}

export default App; //export: 내보내기, import: 가져오기
