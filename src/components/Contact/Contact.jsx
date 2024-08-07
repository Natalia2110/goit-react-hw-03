import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import css from "./Contact.module.css";

const Contact = ({ data: { name, number, id }, onDelete }) => {
  return (
    <div className={css["contact"]}>
      <div className={css["contact-box"]}>
        <h2 className={css["contact-name"]}>
          <FaUser size="20" className={css["contact-icon"]} />
          {name}
        </h2>
        <p className={css["contact-phone"]}>
          <FaPhoneAlt size="20" className={css["contact-icon"]} /> {number}
        </p>
      </div>
      <button
        type="button"
        className={css.btn}
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
