import { YouTube } from "@mui/icons-material";
import React from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div
      style={{
        height: "250px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0079d9",
        marginTop: "50px",
      }}
    >
      <div>
        <h1 style={{ fontSize: "25px" }}>
          تم صنع هذة المنصة بهدف تهيئة الطالب لجميع جوانب الثانوية العامة وما
          بعدها{" "}
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <div>
            <a>
              <FaFacebook
                style={{ fontSize: "30px", color: "white", margin: "10px" }}
              />
              <YouTube
                style={{ fontSize: "30px", color: "red", margin: "10px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
