import React from "react";
import ScrollToTop from "../Scroll/ScrollTop";
const View = () => {
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
          <h3 className="font"> لا يوجد بيانات</h3>
        </div>
      </div>
      <ScrollToTop />
    </>
  );
};

export default View;
