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
function App() {
  return (
    <>
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
        </Routes>
      </BrowserRouter>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>;
    </>
  );
}

export default App;
