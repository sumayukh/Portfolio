import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { styles } from "../style";
import { slideIn } from "../utils/motion";
import { navLinks } from "../constants";
import { myLogo, menu, close } from "../assets";

const Navbar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={styles?.navBar?.container}>
      <div className={styles?.navBar?.navGridOne}>
        <Link
          to="/Portfolio"
          className="flex justify-between items-center gap-[16px]"
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
          <span className={styles?.navBar?.gridOneSpan}>
            Sumayukh Sinha | Portfolio
          </span>
        </Link>
      </div>

      <div className={styles?.navBar?.navGridTwo}>
        <ul className="flex justify-between items-center">
          {navLinks.map((item) => {
            return (
              <li
                className="flex justify-between items-center gap-4"
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
                <span style={{ color: "#aaa6c3" }}>
                  {item?.id?.toUpperCase()?.includes("ABOUT") ? ` || ` : ` | `}
                </span>
                <Link
                  to={`Portfolio/${item.id}`}
                  className="text-md font-medium cursor-pointer"
                  style={{
                    color: active === item.id ? "#f3f3f3" : "#aaa6c3",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#f3f3f3";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color =
                      active === item.id ? "#f3f3f3" : "#aaa6c3";
                  }}
                >
                  {item.title}
                </Link>
                <span style={{ color: "#aaa6c3" }}>
                  {item?.id?.toUpperCase()?.includes("CONTACT")
                    ? ` || `
                    : ` | `}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={styles?.navBar?.navGridThree}>
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
      </div>
      <AnimatePresence>
        {toggle && (
          <motion.div
            className={styles?.navBar?.navGridFour}
            variants={slideIn("up", "easeInOut", 0.2, 0.6, true)}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <div className="flex flex-end">
              <img
                src={close}
                alt="menu"
                className="cursor-pointer object-contain"
                style={{
                  width: "20px",
                  height: "20px",
                  objectFit: "contain",
                }}
                onClick={() => {
                  setToggle(!toggle);
                }}
              />
            </div>
            {navLinks.map((item) => {
              return (
                <div
                  className="flex justify-center items-center text-md font-medium cursor-pointer h-full"
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
                    navigate(`Portfolio/${item.id}`);
                  }}
                  style={{
                    color: active === item.id ? "#f3f3f3" : "#aaa6c3",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#f3f3f3";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color =
                      active === item.id ? "#f3f3f3" : "#aaa6c3";
                  }}
                >
                  {item.title}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
