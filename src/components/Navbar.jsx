import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants";
import { myLogo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={styles?.navBar?.nav}>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "7xl",
          margin: "0 auto",
        }}
      >
        <div>
          <Link
            to="/Portfolio"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={myLogo}
              alt="myLogo"
              style={{
                width: "9rem",
                height: "9rem",
                objectFit: "contain",
              }}
            />
            <p
              style={{
                color: "#f3f3f3",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
                display: "flex",
              }}
            >
              Sumayukh Sinha&nbsp;
              <span>| Portfolio</span>
            </p>
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <ul
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "40px",
            }}
          >
            {navLinks.map((item) => {
              return (
                <li
                  key={item.id}
                  onClick={() => {
                    setActive(item.id);
                    const section = document
                      .getElementById(item.id)
                      .getBoundingClientRect();
                    window.scrollTo({
                      top: window.scrollY == 0 ? section.y : 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  <Link
                    to={`Portfolio/${item.id}`}
                    style={{
                      color: active === item.id ? "#f3f3f3" : "#aaa6c3",
                      fontSize: "18px",
                      fontWeight: "500",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "#f3f3f3";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color =
                        active === item.id ? "#f3f3f3" : "#aaa6c3"; // Reset the color to its default value
                    }}
                  >
                    {item.title}
                  </Link>
                  <span style={{ color: "#aaa6c3" }}>&nbsp;|&nbsp;</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          style={{
            display: "flex",
            // flex: "1",
            justifyContent: "flex-end",
            "@media (minWidth: 640px)": {
              display: "none",
            },
          }}
        >
          {!toggle && (
            <img
              src={menu}
              alt="menu"
              style={{
                width: "28px",
                height: "28px",
                objectFit: "contain",
                cursor: "pointer",
              }}
              onClick={() => {
                setToggle(!toggle);
              }}
            />
          )}
          {toggle && (
            <div
              style={{
                display: "flex",
                padding: "36px",
                background:
                  "linear-gradient(180deg, black, #050816, #1d1836, black)",
                position: "absolute",
                // top: "60px",
                // right: "0",
                // margin: "4px",
                // marginTop: "2px",
                minWidth: "140px",
                zIndex: "10",
                borderRadius: "20px",
              }}
            >
              <ul
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  gap: "4px",
                  "@media (minWidth: 640px)": {
                    display: "flex",
                  },
                }}
              >
                {navLinks.map((item) => {
                  return (
                    <li
                      key={item.id}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(item.id);
                        const section = document
                          .getElementById(item.id)
                          .getBoundingClientRect();
                        window.scrollTo({
                          top: window.scrollY == 0 ? section.y : 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      <Link
                        style={{
                          color: active === item.id ? "#f3f3f3" : "#aaa6c3",
                          fontFamily: "'Poppins', 'sans-serif",
                          fontSize: "16px",
                          fontWeight: "500",
                          cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = "#f3f3f3";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color =
                            active === item.id ? "#f3f3f3" : "#aaa6c3"; // Reset the color to its default value
                        }}
                        to={`Portfolio/${item.id}`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <img
                src={close}
                alt="menu"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "-16px",
                  marginRight: "-16px",
                  width: "20px",
                  height: "20px",
                  objectFit: "contain",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setToggle(!toggle);
                }}
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
