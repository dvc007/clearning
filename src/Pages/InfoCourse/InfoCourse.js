import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getInforCourse } from "../../service/CategoryService";
import CourseList from "../HomePage/CourseList";
import { getCourse } from "./../../service/CourseService";
import { NavLink } from "react-router-dom";

export default function InfoCourse() {
  let params = useParams();
  const [Infocourse, setInfocourse] = useState([]);
  console.log("DATA", Infocourse);
  let { hinhAnh, biDanh } = Infocourse;
  useEffect(() => {
    getInforCourse(params.maKhoaHoc)
      .then((result) => {
        setInfocourse(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.maKhoaHoc]);

  const [course, setCourse] = useState([]);
  useEffect(() => {
    getCourse()
      .then((result) => {
        console.log(result.data);
        setCourse(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let renderCourseList = () => {
    return (
      <div className="grid grid-cols-3 gap-4 h-3/5 bg-slate-700 ">
        <div className="col-span-2 ">
          <div>
            <h1 className="text-3xl">{biDanh}</h1>
            <p>(OFFLINE + ONLINE TƯƠNG TÁC CÓ RECORD)</p>
          </div>
          <div>
            Đã có hơn 6200 bạn đăng kí học và có việc làm thông qua chương trình
            đào tạo Bootcamp Lập trình Front End chuyên nghiệp từ Zero tại
            Elearning. Khóa học 100% thực hành cường độ cao theodự án thực tế và
            kết nối doanh nghiệp hỗ trợ tìm việc ngay sau khi học. Phương pháp
            đào tạo nghề chuẩn đại học Arizona - ASU Mỹ - tập trung tư duy, phân
            tích bài toán giúp cho học viên dễ dàng phát triển từ dev lên
            senior, leader và làm việc tại bất kì môi trường nào.
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div>
              <h3>AI CÓ THỂ THAM GIA ?</h3>
              <div>
                <p className="flex">
                  <span>
                    <svg
                      className="h-5 w-5 text-black"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </span>
                  Mới học lập trình, thiếu định hướng & lộ trình học tập
                </p>
                <p className="flex">
                  <span>
                    <svg
                      className="h-5 w-5 text-black"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </span>
                  Trái ngành học lập trình, chuyển nghề
                </p>
                <p className="flex">
                  <span>
                    <svg
                      className="h-5 w-5 text-black"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </span>
                  Hoàn thành chương trình trung học phổ thông (12/12)
                </p>
                <p className="flex">
                  <span>
                    <svg
                      className="h-5 w-5 text-black"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </span>
                  Yếu tư duy lập trình, mất gốc muốn học để xin việc làm
                </p>
                <p className="flex">
                  <span>
                    <svg
                      className="h-5 w-5 text-black"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </span>
                  Chủ dự án muốn quản lý team dev, startup muốn hiểu rõ việc làm
                  của dev
                </p>
                <p className="flex">
                  <span>
                    <svg
                      className="h-5 w-5 text-black"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </span>
                  Thêm nghề để kiếm thêm thu nhập ngoài giờ
                </p>
              </div>
            </div>
            <div>
              <h3>HỌC XONG LÀM VIỆC TẠI ĐÂU ?</h3>
              <div>
                <p className="flex">
                  <span>
                    <svg
                      className="h-5 w-5 text-black"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </span>
                  Apply vào tất cả công ty tuyển dụng Front End Dev ở vị trí
                  fresher hoặc juinor
                </p>
                <p className="flex">
                  <span>
                    <svg
                      className="h-5 w-5 text-black"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </span>
                  Các công ty outsourcing - gia công phần mềm
                </p>
                <p className="flex">
                  <span>
                    <svg
                      className="h-5 w-5 text-black"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </span>
                  Các công ty startup - khởi nghiệp
                </p>
                <p className="flex">
                  <span>
                    <svg
                      className="h-5 w-5 text-black"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </span>
                  Công ty, tập đoàn trong nước và nước ngoài...
                </p>
                <p className="flex">
                  <span>
                    <svg
                      className="h-5 w-5 text-black"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </span>
                  Có thể apply ngay vào Fresher, Junior với mức lương khởi điểm
                  từ 7tr5 đến 15tr
                </p>
                <p className="flex">
                  <span>
                    <svg
                      className="h-5 w-5 text-black"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </span>
                  Nhận các job freelancer về xây dựng front end cho website
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2>Đầu ra khóa học</h2>
            <div>
              <p className="flex">
                <span>
                  <svg
                    className="h-5 w-5 text-black"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </span>
                Bạn sẽ đạt được kỹ năng của một lập trình Front-End chuyên
                nghiệp
              </p>
              <p className="flex">
                <span>
                  <svg
                    className="h-5 w-5 text-black"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </span>
                Xây dựng và triển khai được các dự án thực tế về React JS, tương
                tác Backend, Servies, Web API, JSON
              </p>
              <p className="flex">
                <span>
                  <svg
                    className="h-5 w-5 text-black"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </span>
                Vừa chuyên nghiệp hóa chuyên môn, vừa thông thạo các kĩ năng mềm
                trong làm việc
              </p>
              <p className="flex">
                <span>
                  <svg
                    className="h-5 w-5 text-black"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </span>
                Được rèn luyện tư duy, logic nền tảng, cốt lõi trong nghề lập
                trình
              </p>
              <p className="flex">
                <span>
                  <svg
                    className="h-5 w-5 text-black"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </span>
                Cấp chứng nhận hoàn thành khóa học sau khi hoàn thành các yều
                cầu của khóa học
              </p>
              <p className="flex">
                <span>
                  <svg
                    className="h-5 w-5 text-black"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </span>
                Hỗ trợ tìm việc trọn đời qua hệ thống tìm việc
              </p>
            </div>
          </div>

          <div>
            <h2>MỤC 1: GIỚI THIỆU</h2>
            <div className="">
              <div>
                <div className="flex justify-between">
                  <div className="icon-right">
                    <p className="flex">
                      <span>
                        <svg
                          className="h-5 w-5 text-black"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {" "}
                          <path stroke="none" d="M0 0h24v24H0z" />{" "}
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                      </span>
                      Hỗ trợ tìm việc trọn đời qua hệ thống tìm việc
                    </p>
                  </div>

                  <div className="icon-left">
                    <span>
                      <svg
                        className="h-5 w-5 text-black"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between">
                  <div className="icon-right">
                    <p className="flex">
                      <span>
                        <svg
                          className="h-5 w-5 text-black"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {" "}
                          <path stroke="none" d="M0 0h24v24H0z" />{" "}
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                      </span>
                      Thiết lập môi trường cho Windows
                    </p>
                  </div>

                  <div className="icon-left">
                    <span>
                      <svg
                        className="h-5 w-5 text-black"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <div className="icon-right">
                    <p className="flex">
                      <span>
                        <svg
                          className="h-5 w-5 text-black"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {" "}
                          <path stroke="none" d="M0 0h24v24H0z" />{" "}
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                      </span>
                      Tạo ứng dụng React - React-Scripts
                    </p>
                  </div>

                  <div className="icon-left">
                    <span>
                      <svg
                        className="h-5 w-5 text-black"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <div className="icon-right">
                    <p className="flex">
                      <span>
                        <svg
                          className="h-5 w-5 text-black"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {" "}
                          <path stroke="none" d="M0 0h24v24H0z" />{" "}
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                      </span>
                      Ghi chú nhanh về dấu ngoặc kép cho string interpolation
                    </p>
                  </div>

                  <div className="icon-left">
                    <span>
                      <svg
                        className="h-5 w-5 text-black"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <h2>MỤC 2: KIẾN THỨC CĂN BẢN</h2>
            <div>
              <div className="flex justify-between">
                <div className="icon-right">
                  <p className="flex">
                    <span>
                      <svg
                        className="h-5 w-5 text-black"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </span>
                    Trang chủ và thành phần thư mục
                  </p>
                </div>

                <div className="icon-left">
                  <span>
                    <svg
                      className="h-5 w-5 text-black"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="icon-right">
                  <p className="flex">
                    <span>
                      <svg
                        className="h-5 w-5 text-black"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </span>
                    Hướng dẫn khóa học + Liên kết Github
                  </p>
                </div>

                <div className="icon-left">
                  <span>
                    <svg
                      className="h-5 w-5 text-black"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="icon-right">
                  <p className="flex">
                    <span>
                      <svg
                        className="h-5 w-5 text-black"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </span>
                    Trang chủ thương mại điện tử + thiết lập SASS
                  </p>
                </div>

                <div className="icon-left">
                  <span>
                    <svg
                      className="h-5 w-5 text-black"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="icon-right">
                  <p className="flex">
                    <span>
                      <svg
                        className="h-5 w-5 text-black"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </span>
                    Tệp CSS và SCSS
                  </p>
                </div>

                <div className="icon-left">
                  <span>
                    <svg
                      className="h-5 w-5 text-black"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="icon-right">
                  <p className="flex">
                    <span>
                      <svg
                        className="h-5 w-5 text-black"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </span>
                    React 17: Cập nhật các gói + Phiên bản React mới nhất
                  </p>
                </div>

                <div className="icon-left">
                  <span>
                    <svg
                      className="h-5 w-5 text-black"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <h2>MỤC 3: KIẾN THỨC CHUYÊN SÂU</h2>
            <div>
              <div className="flex justify-between">
                <div className="icon-right">
                  <p className="flex">
                    <span>
                      <svg
                        className="h-5 w-5 text-black"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </span>
                    connect() and mapStateToProps
                  </p>
                </div>

                <div className="icon-left">
                  <span>
                    <svg
                      className="h-5 w-5 text-black"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="icon-right">
                  <p className="flex">
                    <span>
                      <svg
                        className="h-5 w-5 text-black"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </span>
                    Trạng thái thư mục vào Redux
                  </p>
                </div>

                <div className="icon-left">
                  <span>
                    <svg
                      className="h-5 w-5 text-black"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="icon-right">
                  <p className="flex">
                    <span>
                      <svg
                        className="h-5 w-5 text-black"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </span>
                    Thành phần Tổng quan về Bộ sưu tập
                  </p>
                </div>

                <div className="icon-left">
                  <span>
                    <svg
                      className="h-5 w-5 text-black"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <NavLink to="/#">
              <img
                className="p-8 rounded-t-lg pt-6 h-96 object-cover"
                src={hinhAnh}
                alt="product"
              />
            </NavLink>
            <div className="px-5 pb-5">
              <NavLink to="/#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {biDanh}
                </h5>
              </NavLink>
              <div className="flex items-center mt-2.5 mb-5">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <title>Fifth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  5.0
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  399.000<sup>đ</sup>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="">{renderCourseList()}</div>
      <div>
        <h1 className="py-5">Khóa Học Phổ Biến</h1>
        <CourseList course={course} />
      </div>
    </>
  );
}
