import React from 'react';
import styled from 'styled-components';

// 확장프로그램 vscode styled componenets 설치\

// 재사용을 위한 컴포넌트 생성
// styled-componenets 장점 : js+css 관리 편함
const HeaderList = styled.div`
  border: 5px solid black;
  height: 300px;
`;

const Header = () => {
  return (
    <HeaderList>
      <ul>
        <li>메뉴1</li>
        <li>메뉴2</li>
      </ul>
    </HeaderList>
  );
};

export default Header;
