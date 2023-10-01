import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Button } from "../ui";
import { classes } from "./Classes";
import { Slide, Zoom } from "react-awesome-reveal";
const ClassesList = () => {
  return (
    <div>
      <div style={{ textAlign: "center", margin: "50px 0" }}>
        <h2> الصفوف الدراسية </h2>
      </div>

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {classes.map((classItem) => (
          <Slide>
            <Card
              className="classes-card"
              style={{ width: "20rem", margin: "30px" }}
            >
              <Card.Img variant="top" src={classItem.imgYrl} />
              <Card.Body>
                <Link to={`/class/${classItem.title.replace(/\s+/g, "-")}`}>
                  <Button block variant="primary">
                    {classItem.title}
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Slide>
        ))}
      </div>
    </div>
  );
};

export default ClassesList;
