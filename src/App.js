import logo from './logo.svg';
import './App.css';
import { createRef, useMemo, useRef, useState } from 'react';

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

function App() {
  //useRef(디자인)
  // dom 변경 기능

  const myRef = useRef(null); // 1개만 적용됨

  const [list, setList] = useState([
    { id: 1, name: '길동' },
    { id: 2, name: '꺽정' },
  ]);

  const myRefs = Array.from({ length: list.length }).map(() => createRef()); // 배열로 useRef 만들기

  return (
    <div>
      <button
        onClick={() => {
          myRef.current.style.backgroundColor = 'red';
          myRefs[0].current.style.backgroundColor = 'red';
          myRefs[1].current.style.backgroundColor = 'red';
        }}
      >
        색 변경
      </button>
      <div ref={myRef}> 박스 </div>
      {list.map((user, index) => (
        <h1 ref={myRefs[index]}>{user.name}</h1>
      ))}
    </div>
  );
}

export default App;
