import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

import React from "react";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css["contacts-list"]}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id} className={css["contacts-item"]}>
            <Contact data={contact} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
