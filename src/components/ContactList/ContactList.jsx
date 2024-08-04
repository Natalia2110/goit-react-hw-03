import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

import React from "react";

const ContactList = ({ contacts }) => {
  return (
    <ul className={css["contacts-list"]}>
      {contacts.map(({ name, number, id }) => {
        return (
          <li key={id} className={css["contacts-item"]}>
            <Contact name={name} number={number} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
