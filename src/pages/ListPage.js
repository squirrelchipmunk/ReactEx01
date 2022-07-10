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
  const [no, setNo] = useState(6);
  const [post, setPost] = useState({
    id: no,
    title: '',
    content: '',
  });

  const [posts, setPosts] = useState([
    { id: 1, title: '제목1', content: '내용1' },
    { id: 2, title: '제목2', content: '내용2' },
    { id: 3, title: '제목3', content: '내용3' },
    { id: 4, title: '제목4', content: '내용4' },
    { id: 5, title: '제목5', content: '내용5' },
  ]);

  const handleWrite = (e) => {
    //ListPage의 setPost에 object 추가
    e.preventDefault();
    setPosts([...posts, { ...post, id: no }]);
    setNo(no + 1);
  };

  /*const handleChangeTitle = (e) => {
    console.log(e);
    setPost({ title: e.target.value });
  };

  const handleChangeContent = (e) => {
    console.log(e);
    setPost({ content: e.target.value });
  };*/

  const handleForm = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value }); // computed property name
  };

  return (
    <div>
      <h1>리스트 페이지</h1>
      <form onSubmit={handleWrite}>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          value={post.title}
          onChange={handleForm}
          name="title"
        />
        <input
          type="text"
          placeholder="내용을 입력하세요"
          value={post.content}
          onChange={handleForm}
          name="content"
        />
        <button type="submit">글쓰기</button>
      </form>

      <hr />
      {posts.map((post) => (
        <StyledItemBoxDiv>
          <div>
            {post.id}.{post.title}
          </div>
          <div>{post.content}</div>
          <div>
            <button>삭제</button>
          </div>
        </StyledItemBoxDiv>
      ))}
    </div>
  );
};

export default ListPage;
