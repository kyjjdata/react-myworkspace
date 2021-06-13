/* contact 상태를 관리하는 reducer */
/* reducer는 state와 action이라는 매개변수를 받는 함수 */
/* state : 이전 상태 == 이전 state 값 또는 객체*/
/* action: component -> dispatcher로 부터 전달 받은 action 객체*/
/* reducer는 이전 state와 action 객체를 받아서(이용해서) state를 변경 */

const initialState = {
  content: [],
  page: 0,
  size: 10,
  totalElements: 0,
};

// 초기상태가 없으면 initialState를 적용. initialState는 state의 기본 뼈대를 만들 때 사용 또는 테스트 데이터용
const contact = (state = initialState, action) => {
  // action의 type(명령어 종류)에 따라서 state 변경로직을 실행
  // action = {type:'명령어',payload:'메시지'}
  // design pattern 중에서 command pattern을 응용
  switch (action.type) {
    // action = {type: 'ADD_CONTACT', payload: {id:1, memo:'redux 공부'}}

    case "MODIFY_CONTACT_SUCCEEDED": {
      // action = {type: 'SAVE_CONTACT', payload: {id:1, name:"내용"}} // 배열에서 요소변경 -> 배열크기가 변동 안 됨 == 특정 조건에 맞는 요소만 내용 변경 == map
      const newState = { ...state };
      newState.content = state.content.map((contact) =>
        contact.id === action.payload.id ? { ...action.payload } : contact
      );

      return newState;
    }

    case "FETCH_CONTACTLIST_PAGING_SUCCEEDED":
      // 서버에서 받아온 데이터로 state를 변경
      // Spring 백엔드의 Page<Contact> 객체 JSON으로 변환된 것
      // action.payload ==
      //   {
      //     content: [{}, {}, {}, {}],
      //     number: 0,
      //     size: 0,
      //     totalElements: 34,
      //   };
      return {
        content: action.payload.content, //실제 데이터목록
        page: action.payload.number, // 현재 페이지 번호
        size: action.payload.size, //페이지 크기
        totalElements: action.payload.totalElements, // 전체 데이터 개수
      };
    //default 케이스는 기존 상태를 반환
    default:
      return state;
  }
};

export default contact;
