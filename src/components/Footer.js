import React from 'react';
import styled from 'styled-components';

// 확장프로그램 vscode styled componenets 설치\

// 재사용을 위한 컴포넌트 생성
// styled-componenets 장점 : js+css 관리 편함
const StyleFooterDiv = styled.div`
  border: 5px solid black;
  height: 300px;
`;

const Footer = () => {
  return (
    <StyleFooterDiv>
      <ul>
        <li>오시는길:서울 강남구</li>
        <li>전화번호:0211112222</li>
      </ul>
    </StyleFooterDiv>
  );
};

export default Footer;
