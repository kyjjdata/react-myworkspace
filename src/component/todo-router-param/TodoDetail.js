import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { list } from "./data";

const TodoDetail = () => {
  // const{매개변수명1, 매개변수명2 ...} = useParams();
  // todo/:id -> /todo/1
  // id = 1
  const { id } = useParams();
  //useParams로 오는 변수는 무조건 문자열임. 숫자로 인식하지 않는다.
  const history = useHistory(); //코드를 이용하여 경로 이동을 제어할수있음

  // === (stric equal)로 비교하려면 타입을 맞춰야함 -> useParam 매개변수를 숫자로 변환
  const todo = list.filter((todo) => todo.id === parseFloat(todo.id))[0];

  return (
    <>
      <h1>Hello: {id}</h1>
      {/* filter 함수는 항상 배열로 나옴, 1건이라도 [{}, 2건 [{},{}]] */}
      <p>{todo.memo}</p>
      <div>
        <button
          onClick={() => {
            history.push("/todo"); // 경로마다 기록을 다 남겨야할때

            //history.goBack(-1); //goBack(-뒤로갈단계)

            // history.replace("/todo"); //replace("덮어씌울경로") -> 현재 경로를 새로운 경로로 씌워 띄움
          }}
        >
          목록
        </button>
      </div>
    </>
  );
};
export default TodoDetail;
