import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getInforCourse } from "../../service/CourseService";
import CourseList from "../HomePage/CourseList";
import { getCourse } from "./../../service/CourseService";

export default function InfoCourse() {
  let params = useParams();
  const [Infocourse, setInfocourse] = useState([]);
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
        setCourse(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let renderCourseList = () => {
    return (
      <div className="container mx-auto  grid grid-cols-3 gap-4 h-full bg-slate-100 -mt-4 max-[767px]:block  ">
        <div className="col-span-2 ">
          <div className="mt-3">
            <h1 className="text-3xl font-bold uppercase">{biDanh}</h1>
            <p>(OFFLINE + ONLINE TƯƠNG TÁC CÓ RECORD)</p>
          </div>
          <div className="my-3">
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
              <h3 className="my-1 font-bold">AI CÓ THỂ THAM GIA ?</h3>
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
              <h3 className="my-1 font-bold">HỌC XONG LÀM VIỆC TẠI ĐÂU ?</h3>
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
            <h2 className="mt-3 font-bold">ĐẦU RA KHÓA HỌC</h2>
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

          <div className="my-3">
            <h2 className="mt-3 font-bold">MỤC 1: GIỚI THIỆU</h2>
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
            <h2 className="mt-3 font-bold">MỤC 2: KIẾN THỨC CĂN BẢN</h2>
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
            <h2 className="mt-3 font-bold">MỤC 3: KIẾN THỨC CHUYÊN SÂU</h2>
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
          <div className="w-full h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/#">
              <img
                className="p-8 rounded-t-lg pt-6 h-96 object-cover"
                src={hinhAnh}
                alt="product"
              />
            </a>
            <div className="p-5 mt-6">
              <a href="/# ">
                <h5 className="text-2xl font-bold  tracking-tight uppercase text-gray-900 dark:text-white">
                  {biDanh}
                </h5>
              </a>

              <a
                href="/#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-6"
              >
                Đăng Ký
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <p className="text-xl mt-6  dark:text-white">
                Ghi danh: 25 học viên{" "}
              </p>
              <p className="text-xl mt-6  dark:text-white">Thời gian: 20 giờ</p>
              <p className="text-xl mt-6  dark:text-white">Bài học: 22</p>
              <p className="text-xl mt-6  dark:text-white">Video: 98</p>
              <p className="text-xl mt-6  dark:text-white">
                Trình độ: Người mới học
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="bg-slate-100 ">{renderCourseList()}</div>
      <div className="my-5 max-[767px]:order-1 ">
        <CourseList course={course} />
      </div>
    </>
  );
}
