import { Container } from "@mui/material";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import AlternateEmailTwoToneIcon from "@mui/icons-material/AlternateEmailTwoTone";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import ScrollToTop from "../Scroll/ScrollTop";
export default function Myprofaile(props) {
  const { name, phoneNumber, email } = props;

  return (
    <>
      <Container style={{ direction: "rtl" }}>
        <div style={{ textAlign: "center" }}>
          <h5 className="font">{name}</h5>
          <p
            style={{
              width: "100%",
              height: "3px",
              backgroundColor: "#ccc",
              margin: "15px 0px",
            }}
          ></p>
          <div>
            <h5 className="font">
              {" "}
              <PhoneIcon style={{ color: "#3b82f6" }} /> {phoneNumber}{" "}
            </h5>
            <h3 className="font">
              {" "}
              <AlternateEmailTwoToneIcon style={{ color: "#3b82f6" }} /> {email}{" "}
            </h3>
          </div>
        </div>
        <hr />
        <div
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              margin: "30px 0px",
            }}
          >
            <h1
              className="font"
              style={{ color: "#3b82f6", fontWeight: "bold" }}
            >
              {" "}
              <StarHalfIcon /> احصائياتك على المنصة <StarHalfIcon />
            </h1>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "40px",
            }}
          >
            <div>
              {" "}
              <h3 className="font"> اجمالى مدة فتح المحاضرات على الموقع </h3>
            </div>
            <div
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "50%",
                border: "solid 5px red",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1 className="font">0</h1>
            </div>
          </div>

          <p
            style={{
              width: "100%",
              height: "3px",
              backgroundColor: "#ccc",
              margin: "15px 0px",
            }}
          ></p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "40px",
            }}
          >
            <div>
              {" "}
              <h3 className="font">
                اجمالى عدد مرات مشاهدة الفيديوهات على الموقع{" "}
              </h3>
            </div>
            <div
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "50%",
                border: "solid 5px #eab308",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1 className="font">0</h1>
            </div>
          </div>

          <p
            style={{
              width: "100%",
              height: "3px",
              backgroundColor: "#ccc",
              margin: "15px 0px",
            }}
          ></p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "40px",
            }}
          >
            <div>
              {" "}
              <h3 className="font"> اجمالى عدد مرات فتح الاختبار </h3>
            </div>
            <div
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "50%",
                border: "solid 5px green",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1 className="font">0</h1>
            </div>
          </div>

          <p
            style={{
              width: "100%",
              height: "3px",
              backgroundColor: "#ccc",
              margin: "15px 0px",
            }}
          ></p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "40px",
            }}
          >
            <div>
              {" "}
              <h3 className="font">اجمالى عدد مرات انهاء الاختبارات </h3>
            </div>
            <div
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "50%",
                border: "solid 5px #a855f7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1 className="font">0</h1>
            </div>
          </div>

          <p
            style={{
              width: "100%",
              height: "3px",
              backgroundColor: "#ccc",
              margin: "15px 0px",
            }}
          ></p>
        </div>
      </Container>
      <ScrollToTop />
    </>
  );
}
