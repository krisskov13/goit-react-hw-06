import { Formik, Field } from "formik";
import css from "./SearchBar.module.css";

export default function SearchBar({ filter, handleFilterChange }) {
  return (
    <Formik initialValues={{ contact: filter }}>
      <Field
        className={css.input}
        type="text"
        name="contact"
        value={filter}
        onChange={handleFilterChange}
      />
    </Formik>
  );
}
