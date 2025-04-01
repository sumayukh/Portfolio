import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <div className={styles?.contact?.container}>
      <motion.div
        className={styles?.contact?.formContainer}
        variants={slideIn("left", "easeIn", 0.2, 1)}
      >
        <p className={styles.sectionSubText}>&nbsp;Hit me up&nbsp;</p>
        <h3 className={styles.sectionHeadText}>Contact&nbsp;</h3>
        <form
          className={styles?.contact?.form}
          onSubmit={(e) => {
            e.preventDefault();
            console.log("meta", import.meta);
            setIsLoading(true);
            emailjs
              .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                  from_name: form.name,
                  to_name: "Sumayukh",
                  from_email: form.email,
                  to_email: "sumayukh.sinha@yahoo.com",
                  message: form.message,
                },
                import.meta.env.VITE_EMAILJS_API_KEY
              )
              .then(() => {
                setIsLoading(false);
                alert(
                  `Thank you for sending the email. I'll get back to you in a jiffy.`
                );
                setForm({
                  name: "",
                  email: "",
                  message: "",
                });
              })
              .catch((error) => {
                setIsLoading(false);
                console.log(error);
                alert(
                  `Oops! Looks like you couldn't get through. You might wanna try again.`
                );
              });
            console.log(e);
          }}
        >
          <label className={styles?.contact?.formLabel}>
            <span className={styles?.contact?.formLabelText}>Name</span>
            <input
              className={styles?.contact?.formInput}
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label className={styles?.contact?.formLabel}>
            <span className={styles?.contact?.formLabelText}>Email</span>
            <input
              className={styles?.contact?.formInput}
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label className={styles?.contact?.formLabel}>
            <span className={styles?.contact?.formLabelText}>Message</span>
            <textarea
              rows={2}
              className={styles?.contact?.formInput}
              name="message"
              value={form.message}
              onChange={handleChange}
            />
          </label>
          <button
            className={styles?.contact?.formSubmitButton}
            style={{
              background: isHovering
                ? "radial-gradient(#1d1836, purple)"
                : "#1d1836",
            }}
            type="submit"
            onMouseOver={() => {
              setIsHovering(true);
            }}
            onMouseLeave={() => {
              setIsHovering(false);
            }}
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        className={styles?.contact?.earthContainer}
        variants={slideIn("right", "tween", 0.2, 1)}
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
