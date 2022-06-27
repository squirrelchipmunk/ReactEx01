import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

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
  const [data, setData] = useState(0);
  const [search, setSearch] = useState(0);

  const download = () => {
    //다운로드 받고(통신)
    let downloadData = 5;
    setData(downloadData);
  };

  // 실행 시점
  // 1. App 그림이 최초 그려질 때
  // 2. 상태 변수가 변경될 때 -> 의존하지 않으면 실행되지 않는다. (dependencyList)
  // 3. 의존 리스트 관리 가능
  useEffect(() => {
    console.log('useEffect 실행됨');
    download();
  }, [search]);

  return (
    <div>
      <button
        onClick={() => {
          setSearch(2);
        }}
      >
        검색하기
      </button>
      <h1>데이터 : {data}</h1>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        더하기
      </button>
    </div>
  );
}

export default App;
