import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage';
import HomePage from './Pages/HomePage/HomePage';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import Layout from './HOC/Layout';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import CourseByCategory from './Pages/CourseByCategory.js/CourseByCategory.js';
import InfoCourse from './Pages/InfoCourse/InfoCourse';
import SearchCourse from './Pages/SearchCourse/SearchCourse';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/search/:tenKhoaHoc' element={<Layout><SearchCourse /></Layout>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/' element={<Layout><HomePage /></Layout>} />
          <Route path='/detail/:maKhoaHoc' element={<Layout><InfoCourse /></Layout>} />
          <Route path='/khoahoc/:maDanhMuc' element={<Layout><CourseByCategory /></Layout>} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
