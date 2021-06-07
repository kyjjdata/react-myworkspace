// 텍스트 상자 표현부? 입력창  // 텍스트상자, 입력 버튼

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { TableHead, TableRow, TableCell } from "@material-ui/core";

const ContactForm = ({ inputRef, input1Ref, input2Ref, onChange, onAdd }) => {
  return (
    <TableHead>
      <TableRow style={{ display: "flex" }}>
        <TableCell>
          <TextField
            variant="outlined"
            inputRef={inputRef}
            label="이름"
            onKeyPress={onChange}
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
            onKeyPress={onChange}
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
            onKeyPress={onChange}
            size="small"
            style={{
              width: "90%",
              marginRight: "0.5rem",
            }}
          />
        </TableCell>

        <Button
          style={{ width: "10%" }}
          variant="contained"
          color="primary"
          onClick={onAdd}
        >
          입력
        </Button>
      </TableRow>
    </TableHead>
  );
};

export default ContactForm;
