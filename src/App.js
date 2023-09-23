import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Navigationbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import CreateStudentAccount from "./components/createAccount/CreateStudentAccount";
import FirstGrade from "./components/Classes/FirstGrade";
import SecondGrade from "./components/Classes/SecondGradeSciences";
import CreateAccount from "./components/createAccount/CreateAccount";
import Footer from "./components/footer/Footer";
import Profail from "./components/my-profail/Profail";
import SecondGradeliterary from "./components/Classes/SecondGradeliterary";
import ThirdGradeLiterary from "./components/Classes/ThirdGradeLiterary";
import ThirdGradeScience from "./components/Classes/ThirdGradeScience";
import ThirdGradeMathematics from "./components/Classes/ThirdGradeMathematics";
import Myprofaile from "./components/my-profail/MyProfail";
import Mycourses from "./components/my-profail/MyCourses";
import View from "./components/my-profail/View";
import "./App.css";
import ScrollToTop from "./components/Scroll/ScrollTop";

function App() {
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
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); // تم تعريف حالة تسجيل الدخول هنا
  const navigate = useNavigate();

  useEffect(() => {
    const storedShowSignupPage = localStorage.getItem("showSignupPage");
    const storedStudentsData = localStorage.getItem("studentsData");

    if (storedShowSignupPage !== null) {
      setShowSignupPage(JSON.parse(storedShowSignupPage));
    }

    if (storedStudentsData !== null) {
      setStudentsData(JSON.parse(storedStudentsData));
    }

    // إعداد حالة إنشاء الحساب بناءً على وجود البيانات في localStorage
    setIsAccountCreated(!!storedStudentsData);
  }, []);

  useEffect(() => {
    localStorage.setItem("showSignupPage", JSON.stringify(showSignupPage));
    localStorage.setItem("studentsData", JSON.stringify(studentsData));
  }, [showSignupPage, studentsData]);

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
    setIsUserLoggedIn(false); // إعادة تعيين حالة تسجيل الدخول إلى false
    localStorage.removeItem("showSignupPage");
    localStorage.removeItem("studentsData");
    // إعادة توجيه المستخدم إلى الصفحة الرئيسية بعد الإعادة
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (studentsData.password !== studentsData.confirmPassword) {
      alert("الباسورد ليس متطابق");
    } else {
      if (studentsData.selectedClass === "First") {
        navigate("/firstGrade");
      } else if (studentsData.selectedClass === "Second") {
        navigate("/secondGrade");
      } else if (studentsData.selectedClass === "Second-literay") {
        navigate("/secondGradeliterary");
      } else if (studentsData.selectedClass === "Third-literay") {
        navigate("/thirdGradeLiterary");
      } else if (studentsData.selectedClass === "Third-sciencee") {
        navigate("/thirdGradeScience");
      } else if (studentsData.selectedClass === "Third-math") {
        navigate("/thirdGradeMathematics");
      }
      setShowSignupPage(true);
      setIsAccountCreated(true);
      setIsUserLoggedIn(true); // تم تعيين حالة تسجيل الدخول إلى true بعد تسجيل الحساب
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
              // المستخدم قام بتسجيل الدخول
              <Navigate to="/" /> // إذا تم إنشاء الحساب بنجاح، قم بتوجيه المستخدم إلى الصفحة الرئيسية
            ) : (
              // المستخدم لم يقم بتسجيل الدخول
              <CreateStudentAccount
                studentsData={studentsData}
                setStudentsData={setStudentsData}
                handleSubmit={handleSubmit}
              />
            )
          }
        />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/firstGrade" element={<FirstGrade />} />
        <Route path="/secondGrade" element={<SecondGrade />} />
        <Route path="/secondGradeliterary" element={<SecondGradeliterary />} />
        <Route path="/thirdGradeLiterary" element={<ThirdGradeLiterary />} />
        <Route
          path="/thirdGradeMathematics"
          element={<ThirdGradeMathematics />}
        />
        <Route path="/thirdGradeScience" element={<ThirdGradeScience />} />

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
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
