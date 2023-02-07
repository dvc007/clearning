import React, { useEffect, useState } from "react";
import { getCourse } from "./../../../service/CourseService";

export default function ListCourseUserPage() {
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
  return <div>ListCourseUserPage</div>;
}
