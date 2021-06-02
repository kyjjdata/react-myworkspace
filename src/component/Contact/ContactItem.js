
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