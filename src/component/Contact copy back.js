import { useRef, useState } from "react";

const Contact = () => {
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
      <div>
        <input type="text" placeholder="이름" ref={input} />
        <input type="text" placeholder="전화번호" ref={input1} />
        <input type="text" placeholder="이메일" ref={input2} />
        <button onClick={add}>입력</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>{`이름`}</th>
            <th>{`전화번호`}</th>
            <th>{`이메일`}</th>
          </tr>
        </thead>
        <tbody ref={tbody}>
          {contact.map((info, index) => (
            <tr ref={tr} key={index}>
              <td> {info.name}</td>
              <td>{info.phone}</td>
              <td>{info.mail}</td>

              <button
                onClick={() => {
                  remove(index);
                }}
              >
                삭제
              </button>

              {/* 조회모드일 때 보이기 */}

              {!info.isEdit && (
                <button
                  onClick={() => {
                    edit(index);
                  }}
                >
                  edit
                </button>
              )}

              {/* 수정모드일 때 보이기 */}

              {info.isEdit && (
                <input
                  className="myname"
                  type="text"
                  defaultValue={""}
                  placeholder="이름"
                ></input>
              )}
              {info.isEdit && (
                <input
                  className="phonenumber"
                  type="text"
                  placeholder="전화번호"
                  defaultValue={""}
                ></input>
              )}
              {info.isEdit && (
                <input
                  className="e_mail"
                  type="text"
                  placeholder="이메일"
                  defaultValue={""}
                ></input>
              )}

              {info.isEdit && (
                <button
                  onClick={() => {
                    save(index);
                  }}
                >
                  save
                </button>
              )}
              {info.isEdit && (
                <button
                  onClick={() => {
                    cancel(index);
                  }}
                >
                  cancel
                </button>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Contact;
