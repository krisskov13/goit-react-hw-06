import { Formik, Form } from "formik";
import SearchBar from "../SearchBar/SearchBar";
import css from "./SearchBox.module.css";

export default function SearchBox({ filter, onFilter }) {
  const handleFilterChange = (event) => {
    onFilter(event.target.value);
  };

  return (
    <Formik>
      <Form className={css.form}>
        <label>Find contacts by name</label>
        <SearchBar filter={filter} handleFilterChange={handleFilterChange} />
      </Form>
    </Formik>
  );
}
