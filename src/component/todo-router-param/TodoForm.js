import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";

const TodoForm = ({ onChange }) => {
  const inputRef = useref();
  //store에 dispatch할 함수를 생성
  const dispatch = useDispatch();

  const add = () => {
    const id = new Date().getTime();
    const memo = inputRef.current.value;
    //dispatch(action객체)
    // action객체 = {type:"명령어", payload:메세지객체}

    dispatch({ type: "ADD_TODO", payload: { id, memo } });
  };
  return (
    <div style={{ display: "flex" }}>
      <TextField
        variant="outlined"
        inputRef={inputRef}
        label="할 일 ..."
        onKeyPress={onChange}
        size="small"
        style={{
          width: "90%",
          marginRight: "0.5rem",
        }}
      />
      <Button
        style={{ width: "10%" }}
        variant="contained"
        color="primary"
        onClick={add}
      >
        입력
      </Button>
    </div>
  );
};

export default TodoForm;
