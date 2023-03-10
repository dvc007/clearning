import React, { useEffect, useState } from "react";
import Slider from "../../Component/Slider/Slider";
import { getCourse } from "./../../service/CourseService";
import CourseList from "./CourseList";
import CountNumber from "./CountNumber";
import InforitemContent from "./InforitemContent";
import OutTeam from "./OutTeam";
import ListBackEnd from "./ListBackEnd";
import ListFrontEnd from "./ListFrontEnd";
import News from "./News";

export default function HomePage() {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    getCourse()
      .then((result) => {
        // console.log(result.data);
        setCourse(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Slider />
      <InforitemContent />
      <CourseList course={course} />
      <ListBackEnd />
      <ListFrontEnd />
      <CountNumber />
      <OutTeam />
      <News />
    </div>
  );
}
