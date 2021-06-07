// tbody/table 정도. th안에서 어떤부분이 실제로 반복적으로 그려져야 하는지 파악해서 분리/
//  연락처 저장눌렀을때 리스트. 목록영역

import ContactItem from "./ContactItem";
import { TableContainer, Table, TableBody } from "@material-ui/core";

const ContactList = ({ contact, tbodyRef, onRemove, onSave }) => {
  return (
    <TableContainer>
      <Table>
        <TableBody ref={tbodyRef} style={{ height: "40vh", overflowY: "auto" }}>
          {contact.map((info, index) => (
            <ContactItem
              key={index}
              index={index}
              info={info}
              onRemove={onRemove}
              onSave={onSave}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactList;
