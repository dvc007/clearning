import React, { useEffect, useState } from "react";
import CourseList from "./../HomePage/CourseList";
import { getCourse } from "./../../service/CourseService";

export default function Courses() {
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
  return (
    <div>
      <h1>Danh sách khóa học phổ biến</h1>
      <CourseList course={course} />
    </div>
  );
}
