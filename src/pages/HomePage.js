import React, { useEffect, useState } from 'react';
import Home from '../components/home/Home';

const HomePage = () => {
  //http 요청 (fetch, jquery ajax, axios:외부 라이브러리 다운)
  const [boards, setBoards] = useState([]);
  const [number, setNumber] = useState(0);
  const [user, setUser] = useState({});

  // 의존하는 상태값이 없으니 최초 1번만 실행
  useEffect(() => {
    // 다운로드 가정
    let data = [
      { id: 1, title: '제목1', content: '내용1' },
      { id: 2, title: '제목2', content: '내용2' },
      { id: 3, title: '제목3', content: '내용3' },
    ];

    setBoards([...boards, ...data]);
    setUser({ id: 1, username: 'gom' });
  }, []);

  // 데이터의 주인
  // 자식에게 props passing
  return (
    <div>
      <Home
        boards={boards}
        id={1}
        setBoards={setBoards}
        number={number}
        setNumber={setNumber}
        user={user}
      />
    </div>
  );
};

export default HomePage;
