import { useState, useRef } from "react";

import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

const ContactContainer = () => {
  const [contact, setContact] = useState([]);

  const input = useRef();
  const input1 = useRef();
  const input2 = useRef();
  const tr = useRef();
  const tbody = useRef();
  const add = () => {
    setContact([
      {
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

  const remove = (index) => {
    setContact(contact.filter((_, idx) => idx !== index));
  };

  const edit = (index) => {
    setContact(
      contact.map((info, idx) => {
        if (idx === index) {
          info.isEdit = true;
        }
        return info;
      })
    );
  };

  const cancel = (index) => {
    setContact(
      contact.map((info, idx) => {
        if (idx === index) {
          delete info.isEdit;
        }
        return info;
      })
    );
  };

  const save = (index) => {
    setContact(
      contact.map((info, idx) => {
        if (idx === index) {
          const tr = tbody.current.children[index];
          const editInput = tr.querySelector(".myname");
          const editInput1 = tr.querySelector(".phonenumber");
          const editInput2 = tr.querySelector(".e_mail");

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
      <ContactForm inputRef={input} onAdd={add} onChange={change} />
      <ContactForm input1Ref={input1} onAdd={add} onChange={change} />
      <ContactForm input2Ref={input2} onAdd={add} onChange={change} />
      <ContactList
        ContactList={contact}
        trRef={tr}
        onRemove={remove}
        onSave={save}
      />
    </>
  );
};

export default TodoContainer;
