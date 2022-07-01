// 글쓰기, 글삭제, 글목록

import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import ListPage from './pages/ListPage';
import WritePage from './pages/WritePage';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<ListPage />}></Route>
        <Route path="/write" element={<WritePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
