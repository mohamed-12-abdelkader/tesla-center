import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate, Link } from "react-router-dom";
import Navigationbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import CreateStudentAccount from "./components/createAccount/CreateStudentAccount";
import { classes } from "./components/classes/Classes";
import CreateAccount from "./components/createAccount/CreateAccount";
import Footer from "./components/footer/Footer";
import Profail from "./components/my-profail/Profail";
import ClassDetail from "./components/classes/ClassDetail";
import ClassesList from "./components/classes/ClassesList";
import TeacherDetail from "./components/teachers/TeacherDetail";
import Myprofaile from "./components/my-profail/MyProfail";
import Mycourses from "./components/my-profail/MyCourses";
import View from "./components/my-profail/View";
import "./App.css";
import toast from "react-hot-toast";
import ScrollToTop from "./components/Scroll/ScrollTop";

function App() {
  const [classesData, setClassesData] = useState(classes);
  const [showSignupPage, setShowSignupPage] = useState(false);
  const [studentsData, setStudentsData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    selectedClass: "First",
  });
  const [open, setOpen] = useState(false);
  const [openNot, setOpenNot] = useState(false);
  const [isAccountCreated, setIsAccountCreated] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedShowSignupPage = localStorage.getItem("showSignupPage");
    const storedStudentsData = localStorage.getItem("studentsData");

    if (storedShowSignupPage !== null) {
      setShowSignupPage(JSON.parse(storedShowSignupPage));
    }

    if (storedStudentsData !== null) {
      setStudentsData(JSON.parse(storedStudentsData));
      setIsAccountCreated(true);
      setIsUserLoggedIn(true);
    }
  }, []);

  const handleReset = () => {
    setStudentsData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      selectedClass: "الأول",
    });

    setShowSignupPage(false);
    setIsAccountCreated(false);
    setIsUserLoggedIn(false);
    localStorage.removeItem("showSignupPage");
    localStorage.removeItem("studentsData");
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (studentsData.password !== studentsData.confirmPassword) {
      toast.error("الباسورد ليس متطابق");
    } else {
      const classId = studentsData.selectedClass
        .toLowerCase()
        .replace(/\s+/g, "-");
      navigate(`/class/${classId}`);
      setShowSignupPage(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setOpenNot(false);
  };

  const handleAppClick = () => {
    if (open || openNot) {
      handleClose();
    }
  };

  return (
    <div onClick={handleAppClick}>
      <Navigationbar
        showSignupPage={showSignupPage}
        name={studentsData.fullName}
        handleClose={handleClose}
        open={open}
        setOpen={setOpen}
        handleReset={handleReset}
        openNot={openNot}
        setOpenNot={setOpenNot}
      />
      <Routes>
        <Route path="/" element={<Home showSignupPage={showSignupPage} />} />
        <Route
          path="/createStudent"
          element={
            isUserLoggedIn ? (
              <Navigate to="/" />
            ) : (
              <CreateStudentAccount
                studentsData={studentsData}
                setStudentsData={setStudentsData}
                handleSubmit={handleSubmit}
              />
            )
          }
        />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/classes" element={<ClassesList />} />
        <Route
          path="/class/:classId"
          element={
            <ClassDetail classes={classesData} setClasses={setClassesData} />
          }
        />
        <Route
          path="/teacher/:id"
          element={
            <TeacherDetail
              allTeachers={classesData
                .map((classItem) => Object.values(classItem.teachers).flat())
                .flat()}
            />
          }
        />
        <Route path="/profile" element={<Profail />}>
          <Route
            index
            element={
              <Myprofaile
                name={studentsData.fullName}
                email={studentsData.email}
                phoneNumber={studentsData.phoneNumber}
              />
            }
          />
          <Route
            path="myprofaile"
            element={
              <Myprofaile
                name={studentsData.fullName}
                email={studentsData.email}
                phoneNumber={studentsData.phoneNumber}
              />
            }
          />
          <Route path="mycourses" element={<Mycourses />} />
          <Route path="views" element={<View />} />
        </Route>
        <Route path="*" element={<div>404 - الصفحة غير موجودة</div>} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
