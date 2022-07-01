import React, { useState } from 'react';
import styled from 'styled-components';

const StyledItemBoxDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 10px;
  height: 100px;
  margin: 20px;
  align-items: center;
`;

const ListPage = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: '제목1' },
    { id: 2, title: '제목2' },
    { id: 3, title: '제목3' },
    { id: 4, title: '제목4' },
    { id: 5, title: '제목5' },
  ]);

  return (
    <div>
      <h1>리스트 페이지</h1>
      <hr />
      {posts.map((post) => (
        <StyledItemBoxDiv>
          <div>
            {post.id}.{post.title}
          </div>
          <div>
            <button>삭제</button>
          </div>
        </StyledItemBoxDiv>
      ))}
    </div>
  );
};

export default ListPage;
