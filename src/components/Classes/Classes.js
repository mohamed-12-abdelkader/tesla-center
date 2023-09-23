import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "../ui";
import { Link } from "react-router-dom";
import { Slide, Zoom } from "react-awesome-reveal";
const Classes = () => {
  const classes = [
    {
      id: Math.random(),
      imgYrl: "cdba77de-c250-44bf-8c05-b60b98d86482.jpeg",
      title: "الصف الاول الثانوى",
      href: "/firstGrade",
    },
    {
      id: Math.random(),
      imgYrl: "82406060-60b1-4023-8a6d-caf9d11bc2ad.jpeg",
      title: " الصف الثانى الثانوى علمى",
      href: "/secondGrade",
    },
    {
      id: Math.random(),
      imgYrl: "1525429f-8a40-4a8b-8d7d-c36accf3f0cf.jpeg",
      title: "الصف الثانى الثانوى ادبى ",
      href: "/secondGradeliterary",
    },
    {
      id: Math.random(),
      imgYrl: "0cae1855-06bc-4d5c-b314-9750dae0bbf0.jpeg",
      title: "الصف الثالث الثانوى ادبى ",
      href: "/thirdGradeLiterary",
    },
    {
      id: Math.random(),
      imgYrl: "5aeab979-0882-4a54-9da8-fa01e735c923.jpeg",
      title: "الصف الثالث الثانوى علوم",
      href: "/thirdGradeScience",
    },
    {
      id: Math.random(),
      imgYrl: "20f6511b-c7b0-42f5-b355-939c95b4a342.jpeg",
      title: "الصف الثالث الثانوى رياضة",
      href: "/thirdGradeMathematics",
    },
  ];
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2 style={{ marginBottom: "40px" }}>الصفوف الدراسية</h2>
      <Slide direction="3000">
        <div
          className="container"
          style={{
            display: "flex",

            flexWrap: "wrap",
            boxShadow: " 0 0 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          {classes.map((classe) => {
            return (
              <Card
                className="classe"
                key={classe.id}
                style={{
                  width: "20rem",
                  margin: "auto",
                  marginTop: "20px",
                  marginBottom: "20px",
                  boxShadow: " 0 0 10px rgba(0, 0, 0, 0.3)",
                }}
              >
                <Card.Img variant="top" src={classe.imgYrl} />
                <Card.Body>
                  <Link to={classe.href}>
                    <Button block variant="primary">
                      {classe.title}
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </Slide>
    </div>
  );
};

export default Classes;
