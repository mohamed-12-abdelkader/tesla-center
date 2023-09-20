import React, { useState } from "react";
import { Button } from "../ui";
import TextField from "@mui/material/TextField";
import FloatingLabel from "react-bootstrap/FloatingLabel";
const CreateStudentAccount = ({
  studentsData,
  setStudentsData,
  handleSubmit,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentsData({ ...studentsData, [name]: value });
  };

  return (
    <div
      style={{
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "500px",

          borderRadius: "10px",
          boxShadow: " 0 0 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <h2 style={{ margin: "20px 0", textAlign: "center" }}>
          إنشاء حساب جديد
        </h2>
        <form onSubmit={handleSubmit} style={{ width: "90%", margin: "auto" }}>
          {/* حقل الباسورد */}
          <div className="form">
            <TextField
              id="filled-basic"
              label="الاسم ثلاثى"
              variant="filled"
              type="text"
              name="fullName"
              value={studentsData.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form">
            <TextField
              id="filled-basic"
              label="البريد الالكترونى "
              variant="filled"
              type="email"
              name="email"
              value={studentsData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form">
            <TextField
              id="filled-basic"
              label="كلمة المرور"
              variant="filled"
              type={showPassword ? "text" : "password"}
              name="password"
              value={studentsData.password}
              onChange={handleInputChange}
            />
          </div>
          {/* حقل تأكيد كلمة المرور */}
          <div className="form">
            <TextField
              id="filled-basic"
              label="تاكيد كلمة المرور"
              variant="filled"
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={studentsData.confirmPassword}
              onChange={handleInputChange}
            />
          </div>
          {/* حقل رقم الهاتف */}
          <div className="form">
            <TextField
              id="filled-basic"
              label="رقم الهاتف"
              variant="filled"
              type="number"
              name="phoneNumber"
              value={studentsData.phoneNumber}
              onChange={handleInputChange}
              inputMode="numeric"
            />
          </div>
          {/* باقي النموذج */}
          <div className="form">
            <TextField
              id="filled-select-currency"
              select
              label="الصف الدراسى "
              defaultValue="EUR"
              variant="filled"
              name="selectedClass"
              value={studentsData.selectedClass}
              onChange={handleInputChange}
            >
              <option value="First"> الأول الثانوى</option>
              <option value="Second">الثاني الثانوى</option>
              <option value="Third">الثالث الثانوى </option>
            </TextField>
          </div>
          <div style={{ margin: "20px 0" }}>
            <Button block type="submit" onClick={handleSubmit}>
              إنشاء حساب
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateStudentAccount;
