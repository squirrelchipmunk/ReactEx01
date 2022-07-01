import React from 'react';

const handleWrite = () => {
  //ListPage의 setPost에 object 추가
  let post = { id: 6, title: '제목6' };
};

const WritePage = () => {
  return (
    <div>
      <h1>글쓰기 페이지</h1>
      <hr />
      <form>
        <input type="text" placeholder="제목을 입력하세요" />
        <button type="button" onClick={handleWrite}>
          글쓰기
        </button>
      </form>
    </div>
  );
};

export default WritePage;
