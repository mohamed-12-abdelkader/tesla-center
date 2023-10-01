import React from "react";
import { useParams } from "react-router-dom";

function TeacherDetail({ teachers }) {
  const { id } = useParams();

  const flattenedTeachers = Object.values(teachers).flat();
  const teacher = flattenedTeachers.find((t) => t.id.toString() === id);

  if (!teacher) {
    return <div>المدرس غير موجود</div>;
  }

  const { name, img } = teacher;

  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt={name} />
      {/* يمكنك إضافة مزيد من المعلومات حول المدرس هنا */}
    </div>
  );
}

export default TeacherDetail;
