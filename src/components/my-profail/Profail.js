import { useState } from "react";
import { Container } from "react-bootstrap";
import LinksProfile from "./LinksProfile";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./LinksProfile.css";
import ScrollToTop from "../Scroll/ScrollTop";
import { Outlet, useLocation } from "react-router-dom";

export default function Profile(firstName, secondName, phoneNumber, email) {
  const location = useLocation();

  const [currentLink, setCurrentLink] = useState(""); // تخزين الفهم الحالي

  return (
    <>
      <Container
        className="conatainer-profile"
        style={{ width: "85%", margin: "80px auto" }}
      >
        <div className=" row">
          <div className="profail-user">
            <h5>الملف الشخصى</h5>
            <AccountCircleIcon className="icone" />
          </div>

          <div className="container-aitem">
            <div className="aitem-1">
              <LinksProfile
                currentLink={currentLink}
                setCurrentLink={setCurrentLink}
              />
            </div>
            <div className="aitem-2">
              <Outlet />
            </div>
          </div>
        </div>
      </Container>
      <ScrollToTop />
    </>
  );
}
