import React from "react";
import { Slide, Zoom } from "react-awesome-reveal";
const SectionThre = () => {
  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <div className="row">
        <div className="col-md-12">
          <div
            className="d-flex justify-content-between mt-5"
            style={{ height: "auto" }}
          >
            <div className="flex-fill">
              <div style={{ textAlign: "center" }}>
                <h3>ماذا نقدم للطالب @</h3>
              </div>
              <Slide>
                <h6 style={{ marginTop: "50px" }}>
                  توفر المنصة للطالب تجربة فريدة وسهلة وامنة للتعلم عن بعد، حيث
                  سيتمكن الطالب من اختيار مدرس المادة من بين مجموعة من أفضل
                  المدرسين الأكفاء في جميع المواد الدراسية
                </h6>
                <ul style={{ marginTop: "100px" }}>
                  <li>تجربة أمنة</li>
                  <li>تغطية المناهج الدراسية </li>
                  <li>امتحانات دورية مستمرة </li>
                  <li>جودة عالية فى الشرح مع اكفاء المدرسين </li>
                </ul>
              </Slide>
            </div>
            <Zoom>
              <div className="flex-fill">
                <img src="image-home-3.png" />
              </div>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThre;
