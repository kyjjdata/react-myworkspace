// tbody/table 정도. th안에서 어떤부분이 실제로 반복적으로 그려져야 하는지 파악해서 분리/
//  연락처 저장눌렀을때 리스트. 목록영역

import ContactItem from "./ContactItem";
import { TableContainer, Table, TableBody } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const ContactList = () => {
  //useSeletor는 redux store의 state를 선택(select)
  //  const 하위state변수 = useSelector((전체state) => 하위state)
  const contact = useSelector((state) => state.contact);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_CONTACTLIST" });
  }, [dispatch]);

  return (
    <TableContainer>
      <Table>
        <TableBody style={{ height: "40vh", overflowY: "auto" }}>
          {contact.map((info) => (
            <ContactItem key={info.id} info={info} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactList;
