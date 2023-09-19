import React from "react";
import { Slide, Zoom } from "react-awesome-reveal";
const SectionTwo = () => {
  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <div className="row">
        <div className="col-md-12">
          <div
            className="d-flex justify-content-between mt-5"
            style={{ height: "auto" }}
          >
            <Slide>
              <div className="flex-fill">
                <img src="teacher-2.png" />
              </div>
            </Slide>

            <div className="flex-fill">
              <div style={{ textAlign: "center" }}>
                <h3>ماذا نقدم للمدرس ؟ @</h3>
              </div>
              <Zoom>
                <ul style={{ marginLeft: "50px", marginTop: "80px" }}>
                  <li>
                    إنشاء مجموعات دراسية جماعية للطلبة والتواصل المباشر معهم
                  </li>
                  <li>
                    الدعم الفني للحصص التعليمية قبل واثناء وبعد الحصة الدراسية.
                  </li>
                  <li>
                    توفر المنصة التدريب للمدرسين مما يطور من مهاراتهم للقيام
                    بعملية التعليم عن بعد.
                  </li>
                  <li>إدارة المنصة من الناحية التقنية وإدارة المحتوى.</li>
                </ul>
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
