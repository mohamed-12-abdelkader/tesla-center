import React from "react";
import Card from "react-bootstrap/Card";
import { Slide, Zoom } from "react-awesome-reveal";
const SectionFour = () => {
  const AllData = [
    {
      id: Math.random(),
      title: "سهولة الاستخدام",
      discreptin:
        " امكانية استخدام المنصة من خلال جميع الاجهزة الالكترونية من خلال المتصفح",
      img: "design.png",
    },
    {
      id: Math.random(),
      title: "التعدد فى الدروس",
      discreptin: "إمكانية تصميم الدروس بطرق متعددة",
      img: "footer-icon-2.png",
    },
    {
      id: Math.random(),
      title: "واجهة احترافية ",
      discreptin:
        " توفر المنصة واجه احترافية ديناميكية، تتمتع بسهولة الاستخدام للأدمن والمدرس والطالب",
      img: "icon-3.png",
    },
    {
      id: Math.random(),
      title: "الارشيف",
      discreptin: "الاحتفاظ بمحتويات الدروس السابقة والرجوع اليها في أي وقت",
      img: "footer-icon-1.png",
    },
    {
      id: Math.random(),
      title: "التوافق مع المواقع المختلفة ",
      discreptin: "المنصة متوافقة مع العديد من قنوات المباشر ومنها",
      img: "google.png",
    },
    {
      id: Math.random(),
      title: "بنك الاسئلة",
      discreptin:
        " بنك أسئلة لكل مادة مربوط بصوره تلقائية بالكويزات والاختبارات يمكن للمدرس من اعدادها بسهولة كما تدعم الاختيار اليدوي او التلقائي للأسئلة.",
      img: "finger.png",
    },
  ];
  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "black", margin: "30px 0" }}> مميزات المنصة </h1>
        </div>

        <Slide direction="3000">
          <div
            className="container"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            {AllData.map((Data) => {
              return (
                <Card
                  key={Data.id}
                  style={{ width: "18rem", margin: "20px", marginLeft: "50px" }}
                >
                  <Card.Body>
                    <div
                      className="img"
                      style={{
                        margin: "20px 0",
                        textAlign: "center",
                        height: "80px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img src={Data.img} />
                    </div>
                    <Card.Title style={{ textAlign: "center" }}>
                      {Data.title}
                    </Card.Title>

                    <h6 style={{ textAlign: "center" }}>{Data.discreptin}</h6>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </Slide>
      </div>
    </>
  );
};

export default SectionFour;
