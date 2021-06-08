// 텍스트 상자 표현부? 입력창  // 텍스트상자, 입력 버튼

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { TableHead, TableRow, TableCell } from "@material-ui/core";
import { useRef } from "react";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const inputRef = useRef();
  const input1Ref = useRef();
  const input2Ref = useRef();
  //store에 dispatch할 함수를 생성
  const dispatch = useDispatch();

  const add = () => {
    const name = inputRef.current.value;
    const phone = input1Ref.current.value;
    const mail = input2Ref.current.value;
    //ditpatch(action 객체)
    // action객체 = {type:"명령어", payload:메세지객체}
    dispatch({ type: "ADD_CONTACT", payload: { name, phone, mail } });

    inputRef.current.value = "";
    input1Ref.current.value = "";
    input2Ref.current.value = "";
  };

  const handleChange = (event) => {
    // console.log(event);
    if (event.charCode === 13) {
      add();
    }
  };

  return (
    <TableHead>
      <TableRow style={{ display: "flex" }}>
        <TableCell>
          <TextField
            variant="outlined"
            inputRef={inputRef}
            label="이름"
            onKeyPress={handleChange}
            size="small"
            style={{
              width: "90%",
              marginRight: "0.5rem",
            }}
          />
        </TableCell>
        <TableCell>
          <TextField
            variant="outlined"
            inputRef={input1Ref}
            label="전화번호"
            onKeyPress={handleChange}
            size="small"
            style={{
              width: "90%",
              marginRight: "0.5rem",
            }}
          />
        </TableCell>
        <TableCell>
          <TextField
            variant="outlined"
            inputRef={input2Ref}
            label="이메일 주소"
            onKeyPress={handleChange}
            size="small"
            style={{
              width: "90%",
              marginRight: "0.5rem",
            }}
          />
        </TableCell>

        <TableCell>
          <Button
            style={{ width: "10%" }}
            variant="contained"
            color="primary"
            onClick={add}
          >
            입력
          </Button>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default ContactForm;
