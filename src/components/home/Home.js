import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const StyledDeleteButton = styled.button`
  color: ${(props) => (props.user.username === 'gom' ? 'blue' : 'red')};
`;

// 스타일 확장(상속)
const StyledAddButton = styled(StyledDeleteButton)`
  color: ${(props) => (props.user.username === 'gom' ? 'blue' : 'red')};
  background-color: green;
`;

const Home = (props) => {
  //const boards = props.boards;
  //const id = props.id;

  //구조분할 할당
  const { boards, setBoards, user } = props;

  // setBoards도 부모의 함수이기 때문에 props로 받아야 함
  return (
    <div>
      <Button variant="primary">Primary</Button>
      <StyledAddButton user={user}>더하기</StyledAddButton>
      <StyledDeleteButton user={user} onClick={() => setBoards([])}>
        boards 삭제
      </StyledDeleteButton>
      {boards.map((board) => (
        <h3>
          제목:{board.title} 내용:{board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
