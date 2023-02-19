import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import HomePage from "./Pages/HomePage/HomePage";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import Layout from "./HOC/Layout";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import CourseByCategory from "./Pages/CourseByCategory.js/CourseByCategory.js";
import InfoCourse from "./Pages/InfoCourse/InfoCourse";
import SearchCourse from "./Pages/SearchCourse/SearchCourse";
import Courses from "./Pages/Courses/Courses";
import EventLandingPage from "./Pages/EventLandingPage/EventLandingPage";
import "flowbite";
import About from "./Pages/About/About";
import UpdateUser from "./Pages/UpdateUser/UpdateUser";
// import Load from "./Component/Load/Load";
import AdminUserPage from "./Pages/AdminUserPage/AdminUserPage";
import AddUserPage from "./Pages/AdminUserPage/AddUserPage/AddUserPage";
import ListCourseUserPage from "./Pages/AdminUserPage/ListCourseUserPage/ListCourseUserPage";
import UpdateUserPage from "./Pages/AdminUserPage/UpdateUserPage/UpdateUserPage";
import Loading from "./Component/Loading/Loading";
function App() {
  return (
    <>
      <Loading />
      <BrowserRouter>
        <Routes>
          <Route
            path="/search/:tenKhoaHoc"
            element={
              <Layout>
                <SearchCourse />
              </Layout>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/khoahoc"
            element={
              <Layout>
                <Courses />
              </Layout>
            }
          />
          <Route
            path="/event"
            element={
              <Layout>
                <EventLandingPage />
              </Layout>
            }
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route path="/capnhat" element={<UpdateUser />} />

          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/detail/:maKhoaHoc"
            element={
              <Layout>
                <InfoCourse />
              </Layout>
            }
          />
          <Route
            path="/khoahoc/:maDanhMuc"
            element={
              <Layout>
                <CourseByCategory />
              </Layout>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
          {/* admin */}
          <Route path="/admin" element={<AdminUserPage />} />
          <Route path="/admin/list" element={<ListCourseUserPage />} />
          <Route path="/admin/adduser" element={<AddUserPage />} />
          <Route
            path="/admin/updateuser/:taiKhoan"
            element={<UpdateUserPage />}
          />
          {/* <Route path="/admin/delete/:taiKhoan" element={<AdminUserPage />} /> */}
        </Routes>
      </BrowserRouter>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>;
    </>
  );
}

export default App;
