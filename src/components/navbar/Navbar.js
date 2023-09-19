import React, { useState } from "react";
import { Button } from "../ui";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { FaUser, FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navigationbar({
  showSignupPage,
  name,
  handleClose,
  setOpen,
  open,
  handleReset,
}) {
  const [firstName, setFirstName] = useState(""); // قم بتعريف firstName
  const [secondName, setSecondName] = useState(""); // قم بتعريف secondName

  function showCardClick() {
    setOpen(true);
  }

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{ position: "sticky", top: "0", zIndex: "100" }}
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <h3>Tesla Center Online</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" style={{ justifyContent: "end" }}>
          {showSignupPage ? (
            <div style={{ marginRight: "20px", display: "flex" }}>
              <Button icone={true}>
                <FaBell />
              </Button>
              <Button icone={true} onClick={showCardClick}>
                <FaUser />
              </Button>
            </div>
          ) : (
            <Form className="d-flex">
              <Button variant="outline-success m-2">تسجيل الدخول</Button>
              <Link to="/createAccount">
                <Button variant="outline-success m-2">انشاء حساب</Button>
              </Link>
            </Form>
          )}
        </Navbar.Collapse>
        {open ? (
          <div
            onClick={handleClose}
            className="card"
            style={{
              position: "absolute",
              right: "3%",
              padding: "10px",
              top: "95%",
              marginRight: "10px",
              width: "200px",
              backgroundColor: "#FFF",
              direction: "rtl",
              boxShadow: " 0 0 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div style={{ display: "grid" }}>
              <span
                className="font"
                style={{
                  margin: "10px",
                  fontWeight: "bold",
                  fontSize: "20px",
                  display: "flex",
                }}
              >
                اهلا:<h6 style={{ margin: "5px" }}>{name}</h6>
              </span>
              <span
                className="font profile"
                style={{
                  fontWeight: "bold",
                  margin: " 10px",
                  fontSize: "20px",
                }}
              >
                <Link
                  to="/profile/myprofaile"
                  style={{ textDecoration: "none" }}
                >
                  my profile
                </Link>
              </span>
              <span>
                <h5
                  className="font"
                  style={{ marginLeft: "5px", cursor: "pointer" }}
                  onClick={handleReset}
                >
                  <a>تسجيل الخروج</a>
                </h5>
              </span>
            </div>
          </div>
        ) : null}
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
