import React from "react";
import ScrollToTop from "../Scroll/ScrollTop";
const Mycourses = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "80px",
            width: "500px",
            backgroundColor: "#ccc",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "30px",
          }}
        >
          <h3 className="font">انت لست مشترك فى اى كورسات حاليا </h3>
        </div>
      </div>
      <ScrollToTop />
    </>
  );
};

export default Mycourses;
