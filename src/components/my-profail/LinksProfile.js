import { useLocation, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function LinksProfile({ currentLink, setCurrentLink }) {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  const links = [
    {
      id: Math.random(),
      link: "الملف الشخصى",
      path: "/profile/myprofaile",
    },
    {
      id: Math.random(),
      link: "كورساتى",
      path: "/profile/mycourses",
    },
    {
      id: Math.random(),
      link: "تفاصيل المشاهدات",
      path: "/profile/views",
    },
    {
      id: Math.random(),
      link: "نتائج الامتحانات",
      path: "/profile/results",
    },
    {
      id: Math.random(),
      link: "نتائج الواجبات",
      path: "/profile/Assignmentresults",
    },
    {
      id: Math.random(),
      link: "نتائج كويز الامتحانات",
      path: "/profile/resultsvideos",
    },
    // ... العناصر الأخرى
  ];

  useEffect(() => {
    // تحديث اللينك النشط الأولي عند فتح الصفحة
    const initialActiveLink = links.find(
      (link) => link.path === location.pathname
    );
    if (initialActiveLink) {
      setActiveLink(initialActiveLink.path);
      setCurrentLink(initialActiveLink.path); // تحديث اللينك النشط عند فتح الصفحة
    }
  }, [location.pathname, links, setCurrentLink]);

  useEffect(() => {
    // تحديث اللينك النشط عندما يتغير currentLink
    setActiveLink(currentLink);
  }, [currentLink]);

  const handleClick = (link) => {
    // تحديث currentLink عند النقر على اللينك
    setCurrentLink(link.path);
  };

  return (
    <>
      <div className="links-container">
        {links.map((link) => (
          <NavLink key={link.id} to={link.path} activeClassName="active-link">
            <div
              onClick={() => handleClick(link)}
              style={{
                backgroundColor: activeLink === link.path ? "#3b82f6" : "white",
                color: activeLink === link.path ? "white" : "black",
                width: "250px",
              }}
            >
              <h5 className="font">{link.link}</h5>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
}
