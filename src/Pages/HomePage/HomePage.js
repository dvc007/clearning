import React, { useEffect, useState } from "react";
import Slider from "../../Component/Slider/Slider";
import { getCourse } from "./../../service/CourseService";
import CourseList from "./CourseList";
import CountNumber from "./CountNumber";
import InforitemContent from "./InforitemContent";
import OutTeam from "./OutTeam";

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
        <InforitemContent />
      </div>
      <div className="bg-red-400">
        <CourseList course={course} />
      </div>
      <div className="bg-slate-300">
        <CountNumber />
      </div>
      <div>
        <OutTeam />
      </div>
    </div>
  );
}
