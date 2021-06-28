import { useParams } from "react-router-dom";

import { useHistory } from "react-router";
import { useSelector } from "react-redux";
// 리스트 클릭했을 때 넘어가게 하는 부분.
const ContactDetail = () => {
  const { id } = useParams();
  const history = useHistory();

  // console.log("id" + id);
  // const info = list.filter((info) => parseFloat(id) === parseFloat(info.id))[0];
  // const infoList = useSelector((state) => state.contact);
  // const info = infoList.filter((info) => info.id === parseInt(id)[0]);
  const info = useSelector(
    (state) =>
      state.contact.content.filter((info) => info.id === parseInt(id))[0]
  );

  return (
    <>
      <h1> 우리집 음식물 쓰레기 배출내용</h1>
      {"배출월 :" + info.name}
      <p>{"배출량 :" + info.phone}</p>
      <p>{"요금 :" + info.email}</p>
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
