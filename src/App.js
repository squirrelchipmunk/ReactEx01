import logo from './logo.svg';
import './App.css';
import { useMemo, useState } from 'react';

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
  //useMemo -> 메모라이제이션(기억)

  const [list, setList] = useState([1, 2, 3, 4]);
  const [str, setStr] = useState('합계');

  const getAddResult = () => {
    let sum = 0;
    list.forEach((i) => (sum = sum + i));
    console.log('sum 실행 됨 ', sum);
    return sum;
  };

  // 문자 변경하기 버튼 클릭 시 getAddResult 막는 방법
  const addResult = useMemo(() => getAddResult(), [list]);
  // getAddResult()는 list가 변경될 때만 다시 실행

  return (
    <div>
      <button
        onClick={() => {
          setStr('안녕');
        }}
      >
        문자 변경하기
      </button>

      <button
        onClick={() => {
          setList([...list, 5]);
        }}
      >
        리스트에 값 추가하기
      </button>
      <div>
        {list.map((i) => (
          <h1>{i}</h1>
        ))}
      </div>
      <div>
        {str} : {addResult}
      </div>
    </div>
  );
}

export default App;
