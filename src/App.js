import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigationbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import CreateStudentAccount from "./components/createAccount/CreateStudentAccount";
import FirstGrade from "./components/Classes/FirstGrade";
import SecondGrade from "./components/Classes/SecondGrade";
import CreateAccount from "./components/createAccount/CreateAccount";
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

  useEffect(() => {
    const storedShowSignupPage = localStorage.getItem("showSignupPage");
    const storedStudentsData = localStorage.getItem("studentsData");

    if (storedShowSignupPage !== null) {
      setShowSignupPage(JSON.parse(storedShowSignupPage));
    }

    if (storedStudentsData !== null) {
      setStudentsData(JSON.parse(storedStudentsData));
    }
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

    localStorage.removeItem("showSignupPage");
    localStorage.removeItem("studentsData");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (studentsData.password !== studentsData.confirmPassword) {
      alert("الباسورد ليس متطابق");
    } else {
      if (studentsData.selectedClass === "First") {
        window.location.href = "/firstGrade";
      } else if (studentsData.selectedClass === "Second") {
        window.location.href = "/secondGrade";
      }
      setShowSignupPage(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAppClick = () => {
    if (open) {
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
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/createStudent"
          element={
            <CreateStudentAccount
              studentsData={studentsData}
              setStudentsData={setStudentsData}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/firstGrade" element={<FirstGrade />} />
        <Route path="/secondGrade" element={<SecondGrade />} />
      </Routes>
    </div>
  );
}

export default App;
