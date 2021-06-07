// 원래 작성했던 기본 구성들?

import { useState, useRef } from "react";

import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

import { list } from "./data";

const ContactContainer = () => {
  const [contact, setContact] = useState(list);

  const input = useRef();
  const input1 = useRef();
  const input2 = useRef();
  const tbody = useRef();

  const handleAdd = () => {
    setContact([
      {
        id: new Date().getTime(),
        name: input.current.value,
        phone: input1.current.value,
        mail: input2.current.value,
      },

      ...contact,
    ]);

    input.current.value = "";
    input1.current.value = "";
    input2.current.value = "";
  };

  const handleChange = (event) => {
    // console.log(event);
    if (event.charCode === 13) {
      handleAdd();
    }
  };

  const handleRemove = (index) => {
    setContact(contact.filter((_, idx) => idx !== index));
  };

  const handleSave = (index) => {
    setContact(
      contact.map((info, idx) => {
        if (idx === index) {
          const tr = tbody.current.children[index];
          const editInput = tr.children[0].querySelector("input");
          const editInput1 = tr.children[1].querySelector("input");
          const editInput2 = tr.children[2].querySelector("input");

          info.name = editInput.value;
          info.phone = editInput1.value;
          info.mail = editInput2.value;
          delete info.isEdit;
        }
        return info;
      })
    );
  };

  return (
    <>
      <ContactForm
        inputRef={input}
        input1Ref={input1}
        input2Ref={input2}
        onAdd={handleAdd}
        onChange={handleChange}
      />
      <ContactList
        contact={contact}
        tbodyRef={tbody}
        onSave={handleSave}
        onRemove={handleRemove}
      />
    </>
  );
};

export default ContactContainer;
