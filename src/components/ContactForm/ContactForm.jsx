import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
// import { useId } from "react";
import css from "./ContactForm.module.css";
import React from "react";

const INITIAL_VALUES = {
  name: "",
  number: "",
};
const nameFieldId = nanoid();
const numberFieldId = nanoid();

const ContactValidationSchems = Yup.object().shape({
  name: Yup.string()
    .required("Ім'я контакту є обов'язковим")
    .min(3, "Ім'я має бути більше 3-х символів")
    .max(50, "Ім'я має бути меньше 50 символів"),
});

const ContactForm = () => {
  const addContact = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <Formik initialValues={INITIAL_VALUES} onSubmit={addContact}>
      <Form className={css.form}>
        <label className={css["form-label"]}>
          <span className={css["form-span"]}>Name</span>
          <Field
            className={css.field}
            type="text"
            name="contactName"
            placeholder="Max Smith"
            id={nameFieldId}
          ></Field>
        </label>
        <label className={css["form-label"]}>
          <span className={css["form-span"]}>Number</span>
          <Field
            className={css.field}
            type="tel"
            name="contactNumber"
            placeholder="+(38)0501234567"
            id={numberFieldId}
          ></Field>
        </label>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
