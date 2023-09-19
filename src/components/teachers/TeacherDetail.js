import React from "react";
import { useParams } from "react-router-dom";
import { teachersData } from "./TeachersData"; // استيراد المصفوفة

function TeacherDetail() {
  const { id } = useParams();
  const teacher = teachersData.find((t) => t.id === Number(id));

  if (!teacher) {
    return <div>المدرس غير موجود</div>;
  }

  return (
    <div>
      <h2>{teacher.name}</h2>
      <h3>الفيديوهات:</h3>
      <ul>
        {teacher.videos.map((video, index) => (
          <li key={index}>{video}</li>
        ))}
      </ul>
    </div>
  );
}

export default TeacherDetail;
