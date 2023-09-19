import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "../ui";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  const Create = [
    {
      id: Math.random(),
      title: "تسجيل حساب الطالب",
      href: "/createStudent",
      imgYrl:
        "kisspng-computer-icons-teacher-pedagogy-education-experien-icon-teacher-5b3713c88c28f4.0737810415303362005741.jpg",
    },
    {
      id: Math.random(),
      title: " تسجيل حساب المدرس ",
      href: "/createTeacher",
      imgYrl: "png-transparent-teacher-teacher-hand-reading-boy.png",
    },
  ];

  return (
    <div
      style={{
        marginTop: "50px",
        height: "80vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {Create.map((cr) => {
          return (
            <Card
              style={{
                width: "18rem",
                margin: "20px",
              }}
              key={cr.id}
            >
              <Card.Body style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <img
                    src={cr.imgYrl}
                    style={{
                      height: "200px",
                      width: "200px",
                      marginBottom: "20px",
                    }}
                  />
                  <Link to={cr.href}>
                    <Button block>{cr.title}</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default CreateAccount;
