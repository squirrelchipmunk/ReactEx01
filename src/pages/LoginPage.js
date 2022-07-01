import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Login from '../components/login/Login';

const LoginPage = () => {
  console.log(useParams().id);

  const navigate = useNavigate();
  // (-1) : 1페이지 뒤로
  // (1) : 1페이지 앞으로
  // ('/') : 주소

  return (
    <div>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <button onClick={() => navigate('/abc')}>홈으로</button>
      <Login />
    </div>
  );
};

export default LoginPage;
