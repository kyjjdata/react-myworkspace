// tr을 표현하는부분  연락처 저장한 리스트 1건마다// 투두리스트 내의 부분을 아이템으로 분리함.
// 에디트. 캔슬, 삭제 여기서 제어?

// item 안에 리무브, 에딧, 세이브, 캔슬 있음

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { TableCell, TableRow } from "@material-ui/core";

import { useState } from "react";
import { useHistory } from "react-router";

const ContactItem = ({ index, info, onRemove, onSave }) => {
  const [isEdit, setIsEdit] = useState(info.isEdit);
  const history = useHistory();

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
        >
          {info.mail}
        </TableCell>
      )}
      {!isEdit && (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            setIsEdit(true);
          }}
        >
          수정
        </Button>
      )}
      {isEdit && (
        <TableCell>
          <TextField
            type="text"
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
            defaultValue={""}
            label="이메일 주소"
            style={{ width: "100%" }}
          ></TextField>
        </TableCell>
      )}
      {isEdit && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            onSave(index);
            setIsEdit(false);
          }}
        >
          저장
        </Button>
      )}
      {isEdit && (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            setIsEdit(false);
          }}
        >
          취소
        </Button>
      )}
      <Button
        variant="contained"
        color="default"
        onClick={() => {
          onRemove(index);
        }}
      >
        삭제
      </Button>
    </TableRow>
  );
};

export default ContactItem;
