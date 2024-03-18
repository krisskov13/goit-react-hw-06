import { Formik, Form, Field } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

export default function ContactForm({ onAdd }) {
  const FeedbackSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Too short")
      .max(50, "To long")
      .required("Required!"),
    number: Yup.string()
      .min(3, "Too short")
      .max(50, "To long")
      .required("Required!"),
  });

  const handleSubmit = (values, { resetForm }) => {
    onAdd({
      id: nanoid(),
      name: values.username,
      number: values.number,
    });
    resetForm();
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={{
        username: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div>
          <label className={css.text} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={css.input}
            type="text"
            name="username"
            id={nameFieldId}
          />
          <ErrorMessage name="username" />
        </div>
        <div>
          <label className={css.text} htmlFor={numberFieldId}>
            Number
          </label>
          <Field
            className={css.input}
            type="tel"
            name="number"
            id={numberFieldId}
          ></Field>
          <ErrorMessage name="number" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
