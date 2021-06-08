/* contact 상태를 관리하는 reducer */
/* reducer는 state와 action이라는 매개변수를 받는 함수 */
/* state : 이전 상태 == 이전 state 값 또는 객체*/
/* action: component -> dispatcher로 부터 전달 받은 action 객체*/
/* reducer는 이전 state와 action 객체를 받아서(이용해서) state를 변경 */

const initialState = [];

// 초기상태가 없으면 initialState를 적용. initialState는 state의 기본 뼈대를 만들 때 사용 또는 테스트 데이터용
const contact = (state = initialState, action) => {
  // action의 type(명령어 종류)에 따라서 state 변경로직을 실행
  // action = {type:'명령어',payload:'메시지'}
  // design pattern 중에서 command pattern을 응용
  switch (action.type) {
    // action = {type: 'ADD_CONTACT', payload: {id:1, memo:'redux 공부'}}
    case "ADD_CONTACT_SUCCEEDED":
      // action.type에 따라서 state 변경하여 return
      // return 변동된 state;

      //...: spread operator(나열 연산자)
      // array일 때는 element들을 나열 / object일 때는 prop들을 나열.
      //{...object} : object literal, ES2018
      // 기존 객체에서 새로운 객체를 카피하여 생성

      // ex) let student = {name:'hong', age:35}
      // let newStudent = {name:student.name, age:student.age};
      // let newStudent2 = {...student}; <최근에 사용하는 방식>
      return [{ ...action.payload }, ...state];

    case "REMOVE_CONTACT_SUCCEEDED":
      // action ={type:'REMOVE_CONTACT', payload:1}
      // 배열에서 요소삭제 -> 배열크기가 변동됨 == 특정 조건에 맞지 않는 요소만 리턴됨 == filter
      return state.filter((contact) => contact.id !== action.payload);

    case "MODIFY_CONTACT_SUCCEEDED":
      // 배열에서 요소변경 -> 배열크기가 변동 안 됨 == 특정 조건에 맞는 요소만 내용 변경 == map
      // action = {type: 'SAVE_CONTACT', payload: {id:1, name:"내용"}}
      return state.map((contact) =>
        contact.id === action.payload.id ? { ...action.payload } : contact
      );

    case "FETCH_CONTACTLIST_SUCCEEDED":
      return [...action.payload];
    //default 케이스는 기존 상태를 반환
    default:
      return state;
  }
};

export default contact;
