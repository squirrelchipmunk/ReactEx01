import React from 'react';

const Home = (props) => {
  //const boards = props.boards;
  //const id = props.id;

  //구조분할 할당
  const { boards, id, setBoards } = props;
  console.log(boards, id);

  // setBoards도 부모의 함수이기 때문에 props로 받아야 함
  return (
    <div>
      <h1>홈페이지</h1>
      <button onClick={() => setBoards([])}>boards 삭제</button>
      {boards.map((board) => (
        <h3>
          제목:{board.title} 내용:{board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
