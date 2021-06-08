// tr을 표현하는부분  연락처 저장한 리스트 1건마다// 투두리스트 내의 부분을 아이템으로 분리함.
// 에디트. 캔슬, 삭제 여기서 제어?

// item 안에 리무브, 에딧, 세이브, 캔슬 있음

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { TableCell, TableRow } from "@material-ui/core";

import { useState, useRef } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

const ContactItem = ({ info }) => {
  const [isEdit, setIsEdit] = useState(info.isEdit);
  const history = useHistory();
  const dispatch = useDispatch();
  const inputRef = useRef();
  const input1Ref = useRef();
  const input2Ref = useRef();
  const remove = (id) => {
    dispatch({ type: "REMOVE_CONTACT", payload: id });
  };

  const save = (id) => {
    const name = inputRef.current.value;
    const phone = input1Ref.current.value;
    const mail = input2Ref.current.value;
    dispatch({ type: "MODIFY_CONTACT", payload: { id, name, phone, mail } });
  };

  return (
    <TableRow style={{ display: "flex", width: "100%", overflowY: "auto" }}>
      {!isEdit && (
        <TableCell
          style={{
            cursor: "pointer",
            display: "flex",
            width: "100%",
            overflowY: "auto",
          }}
          onClick={() => {
            history.push(`/contacts/${info.id}`);
          }}
        >
          {info.name}
        </TableCell>
      )}
      {!isEdit && (
        <TableCell
          style={{
            cursor: "pointer",
            display: "flex",
            width: "100%",
            overflowY: "auto",
          }}
          onClick={() => {
            history.push(`/contacts/${info.id}`);
          }}
        >
          {info.phone}
        </TableCell>
      )}
      {!isEdit && (
        <TableCell
          style={{
            cursor: "pointer",
            display: "flex",
            width: "100%",
            overflowY: "auto",
          }}
          onClick={() => {
            history.push(`/contacts/${info.id}`);
          }}
        >
          {info.mail}
        </TableCell>
      )}
      {!isEdit && (
        <TableCell>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              setIsEdit(true);
            }}
          >
            수정
          </Button>
        </TableCell>
      )}
      {isEdit && (
        <TableCell>
          <TextField
            type="text"
            inputRef={inputRef}
            defaultValue={""}
            label="이름"
            style={{ width: "100%" }}
          ></TextField>
        </TableCell>
      )}
      {isEdit && (
        <TableCell>
          <TextField
            type="text"
            inputRef={input1Ref}
            defaultValue={""}
            label="전화번호"
            style={{ width: "100%" }}
          ></TextField>
        </TableCell>
      )}
      {isEdit && (
        <TableCell>
          <TextField
            type="text"
            inputRef={input2Ref}
            defaultValue={""}
            label="이메일 주소"
            style={{ width: "100%" }}
          ></TextField>
        </TableCell>
      )}
      {isEdit && (
        <TableCell>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              save(info.id);
              setIsEdit(false);
            }}
          >
            저장
          </Button>
        </TableCell>
      )}
      {isEdit && (
        <TableCell>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              setIsEdit(false);
            }}
          >
            취소
          </Button>
        </TableCell>
      )}
      <TableCell>
        <Button
          variant="contained"
          color="default"
          onClick={() => {
            remove(info.id);
          }}
        >
          삭제
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default ContactItem;
