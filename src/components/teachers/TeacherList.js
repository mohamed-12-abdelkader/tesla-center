import React from "react";
import { Link, Route } from "react-router-dom";
import TeacherDetail from "./TeacherDetail";
import { teachersData } from "./TeachersData"; // استيراد المصفوفة

function TeachersList() {
  return (
    <div>
      <h2>قائمة المدرسين:</h2>
      <ul>
        {teachersData.map((teacher) => (
          <li key={teacher.id}>
            <Link to={`/teacher/${teacher.id} `}>{teacher.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeachersList;
