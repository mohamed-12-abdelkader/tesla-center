// TeacherDetail.js
import { useParams, useNavigate } from "react-router-dom";
import ScrollToTop from "../Scroll/ScrollTop";

function TeacherDetail({ allTeachers }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const teacher = allTeachers.find((t) => t.id.toString() === id);

  if (!teacher) {
    // إعادة التوجيه إلى صفحة 404 أو أي صفحة أخرى في حالة عدم وجود المدرس
    navigate("/404");
    return null;
  }

  const { name, img } = teacher;

  return (
    <>
      <div>
        <h2>{name}</h2>
        <img src={img} alt={name} />
        {/* يمكنك إضافة مزيد من المعلومات حول المدرس هنا */}
      </div>
      <ScrollToTop />
    </>
  );
}

export default TeacherDetail;
