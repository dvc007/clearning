import React, { useEffect, useState } from "react";
import Slider from "../../Component/Slider/Slider";
import { getCourse } from "./../../service/CourseService";
import CourseList from "./CourseList";

export default function HomePage() {
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
      <div>
        <Slider />
      </div>
      <div>
        <CourseList course={course} />
      </div>
    </div>
  );
}
