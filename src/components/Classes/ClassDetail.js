import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import ScrollToTop from "../Scroll/ScrollTop";
import { Button } from "../ui";
import TeacherDetail from "../teachers/TeacherDetail"; // استيراد المكون الجديد

function ClassDetail({ classes, setClasses }) {
  const { classId } = useParams();
  const currentClass = classes.find(
    (item) => item.title.toLowerCase().replace(/\s+/g, "-") === classId
  );

  const [newTeacher, setNewTeacher] = useState({
    name: "",
    img: "",
    subject: "Math",
  });

  const [showForm, setShowForm] = useState(false);
  const [teacherToDelete, setTeacherToDelete] = useState(null);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  if (!currentClass) {
    return <div>الصف غير موجود</div>;
  }

  const { title, teachers } = currentClass;

  const handleInputChange = (e) => {
    setNewTeacher({ ...newTeacher, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setNewTeacher({ ...newTeacher, img: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const isFormValid = () => {
    return newTeacher.name && newTeacher.img && newTeacher.subject;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      const updatedTeachers = {
        ...teachers,
        [newTeacher.subject]: [
          ...teachers[newTeacher.subject],
          {
            id: Math.random(),
            name: newTeacher.name,
            img: newTeacher.img,
          },
        ],
      };

      setClasses((prevClasses) =>
        prevClasses.map((c) =>
          c.title === title ? { ...c, teachers: updatedTeachers } : c
        )
      );

      setNewTeacher({
        name: "",
        img: "",
        subject: "Math",
      });

      setShowForm(false);
    } else {
      alert("يرجى تعبئة جميع حقول النموذج.");
    }
  };

  const handleDeleteTeacher = () => {
    if (teacherToDelete) {
      const { subject, id } = teacherToDelete;

      const updatedTeachers = {
        ...teachers,
        [subject]: teachers[subject].filter((teacher) => teacher.id !== id),
      };

      setClasses((prevClasses) =>
        prevClasses.map((c) =>
          c.title === title ? { ...c, teachers: updatedTeachers } : c
        )
      );

      setTeacherToDelete(null);
    }
  };

  const handleTeacherClick = (teacher) => {
    setSelectedTeacher(teacher);
  };

  return (
    <div className="container">
      {teachers && Object.keys(teachers).length > 0 && (
        <>
          {Object.entries(teachers).map(([subject, subjectTeachers]) => (
            <div key={subject}>
              {subjectTeachers.length > 0 && (
                <>
                  <h3 style={{ direction: "rtl" }}>{subject}:</h3>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      direction: "rtl",
                    }}
                  >
                    {subjectTeachers.map((teacher) => (
                      <Card
                        key={teacher.id}
                        style={{ width: "19rem", margin: "30px" }}
                        onClick={() => handleTeacherClick(teacher)}
                      >
                        <img
                          style={{ height: "350px" }}
                          src={teacher.img}
                          alt={teacher.name}
                        />
                        <Card.Body>
                          <Link to={`/teacher/${subject}-${teacher.id}`}>
                            <Button block variant="primary">
                              {teacher.name}
                            </Button>
                          </Link>

                          <Button
                            block
                            variant="danger"
                            onClick={() =>
                              setTeacherToDelete({ subject, id: teacher.id })
                            }
                          >
                            حذف المدرس
                          </Button>
                        </Card.Body>
                      </Card>
                    ))}
                  </div>
                  <p
                    style={{
                      width: "100%",
                      height: "3px",
                      backgroundColor: "black",
                    }}
                  >
                    {" "}
                  </p>
                </>
              )}
            </div>
          ))}
        </>
      )}

      {selectedTeacher && (
        <TeacherDetail
          teachers={{ [selectedTeacher.subject]: [selectedTeacher] }}
          teacherId={selectedTeacher.id}
        />
      )}

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Button variant="primary" onClick={() => setShowForm(true)}>
          إضافة مدرس
        </Button>
      </div>

      <Modal show={showForm} onHide={() => setShowForm(false)}>
        <Modal.Header closeButton style={{ textAlign: "center" }}>
          <Modal.Title>إضافة مدرس</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="teacherName">
              <Form.Label> اسم المدرس </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter teacher name"
                name="name"
                value={newTeacher.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="teacherImage">
              <Form.Label> صورة المدرس </Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </Form.Group>
            <Form.Group controlId="teacherSubject">
              <Form.Label>المادة </Form.Label>
              <Form.Control
                as="select"
                name="subject"
                value={newTeacher.subject}
                onChange={handleInputChange}
              >
                {Object.keys(teachers).map((subject) => (
                  <option key={subject}>{subject}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <div style={{ textAlign: "center", marginTop: "30px" }}>
              <Button variant="primary" type="submit">
                إضافة مدرس
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={!!teacherToDelete} onHide={() => setTeacherToDelete(null)}>
        <Modal.Header closeButton>
          <Modal.Title>حذف المدرس</Modal.Title>
        </Modal.Header>
        <Modal.Body>هل أنت متأكد من رغبتك في حذف المدرس؟</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setTeacherToDelete(null)}>
            إلغاء
          </Button>
          <Button type="error" variant="danger" onClick={handleDeleteTeacher}>
            حذف المدرس
          </Button>
        </Modal.Footer>
      </Modal>

      <ScrollToTop />
    </div>
  );
}

export default ClassDetail;
