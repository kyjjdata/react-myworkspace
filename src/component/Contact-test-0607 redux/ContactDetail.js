import { useParams } from "react-router-dom";

import { list } from "./data";
import { useHistory } from "react-router";
// 리스트 클릭했을 때 넘어가게 하는 부분.
const ContactDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  console.log("id" + id);
  const info = list.filter((info) => parseFloat(id) === parseFloat(info.id))[0];
  return (
    <>
      <h1> 연락처: {id}</h1>
      <p>
        {"이름 :" + info.name}
        {"전화번호 :" + info.phone}
        {"이메일:" + info.mail}
      </p>
      <div>
        <button
          onClick={() => {
            //history.push("/contacts");
            //goBack(-뒤로갈단계)
            // history.goBack(-1);

            //replace("덮어씌울경로")
            history.replace("/contacts");
          }}
        >
          목록
        </button>
      </div>
    </>
  );
};
export default ContactDetail;
