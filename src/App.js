import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Sub from './Sub';

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
  console.log('App 실횅');

  const [num, setNum] = useState(5);

  let sample = [
    { id: 1, name: '홍길동' },
    { id: 2, name: '임꺽정' },
    { id: 3, name: '장보고' },
    { id: 4, name: '이순신' },
  ];

  const [users, setUsers] = useState(sample); // 레퍼런스 변경돼야 동작

  const download = () => {
    setUsers([...sample, { id: num, name: '조자룡' }]);
    setNum(num + 1);
  };

  // 렌더링 시점 = 상태값 변경
  return (
    <div>
      <div>
        <button onClick={download}>다운로드</button>
        {users.map((u) => (
          <h1>
            {u.id}, {u.name}
          </h1>
        ))}
      </div>
    </div>
  ); // 여러 줄이면 괄호 필요
}

export default App;
