import logo from './logo.svg';
import './App.css';

// 0. React 엔진 : 데이터 변경 감지해서 ui 그리기
// 1. 실행 -> index.html : (Single Page Application, SPA)
// 2. JSX 문법 : 자바스크립트 코드에 html 문법 사용

// (1). 1개의 dom만 리턴가능
// (2). 변수 선언은 let 혹은 const 하기
// (3). if X, 3항 연산자 O
// (4). 조건부 렌더링 (조건 && 값)
// (5). css 디자인
//    - 내부 (비추)
//    - 외부 파일
//    - 라이브러리(부트스트랩, componenet-styled)

let a = 10; // 변수
const b = 20; // 상수

function App() {
  let c;
  console.log(c); // undefined
  const myStyle = {
    color: 'red',
  };

  return (
    <div>
      <div style={myStyle}>{a === 10 ? '10' : '10이 아님'}</div>
      <div>div 태그 {b === 20 && '20입니다.'}</div>
      <h1 className="myCss">h1 태그</h1>
    </div>
  ); // 여러 줄이면 괄호 필요
}

export default App;
