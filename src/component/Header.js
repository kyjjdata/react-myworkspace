//props : 화면에 표시되는 변수, 함수 매개변수처럼 다른 컴포넌트에서 전달받음
// == properties : 렌더링 결과에 영향을 미치는 자바스크립트객체인데, 함수 매개변수처럼 다른 컴포넌트에서 전달받음

// {속성명1, 속성명2...}
// 자바스크립 객체에서 특정 속성만 사용
// props: {text: "...", label:"...."}

// 자바 내부적으로는 const text = props.text;
// const label = props.label;로 돌아감.

// 부모컴포넌트에서 자식컴포넌트로 속성을 넘김 (props-down)

const Header = ({ text, label }) => {
  // const Header = ({ text }) => {
  return (
    <>
      <h1 style={{ color: "green" }}> {text}</h1>
      <h3 style={{ color: "grey" }}> {label}</h3>
    </>
  );
};
// return <h1 style={{ color: "green" }}> {text}</h1>
export default Header;
