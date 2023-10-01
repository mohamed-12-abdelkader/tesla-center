import React, { useState } from "react";
import { Button } from "../ui";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { classes } from "../classes/Classes";
import toast from "react-hot-toast";

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
        marginTop: "80px",
      }}
    >
      <div
        style={{
          width: "500px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <h2 style={{ margin: "20px 0", textAlign: "center" }}>
          إنشاء حساب جديد
        </h2>
        <form onSubmit={handleSubmit} style={{ width: "90%", margin: "auto" }}>
          {/* حقل الاسم الثلاثي */}
          <div className="form">
            <TextField
              id="filled-basic"
              label="الاسم الثلاثي"
              variant="filled"
              type="text"
              name="fullName"
              value={studentsData.fullName}
              onChange={handleInputChange}
            />
          </div>
          {/* حقل البريد الإلكتروني */}
          <div className="form">
            <TextField
              id="filled-basic"
              label="البريد الإلكتروني"
              variant="filled"
              type="email"
              name="email"
              value={studentsData.email}
              onChange={handleInputChange}
            />
          </div>
          {/* حقل كلمة المرور */}
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
              label="تأكيد كلمة المرور"
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
              className="input"
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
          {/* حقل الصف الدراسي */}
          <div className="form">
            <TextField
              id="filled-select-currency"
              select
              label="الصف الدراسي"
              defaultValue="First"
              variant="filled"
              name="selectedClass"
              value={studentsData.selectedClass}
              onChange={handleInputChange}
            >
              {classes.map((classe) => (
                <MenuItem key={classe.id} value={classe.title}>
                  {classe.title}
                </MenuItem>
              ))}
            </TextField>
          </div>
          {/* زر إنشاء الحساب */}
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
