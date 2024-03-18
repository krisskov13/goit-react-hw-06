import css from "./Contact.module.css";

export default function Contact({ data: { name, number, id }, onDelete }) {
  return (
    <div className={css.container}>
      <p>{name}</p>
      <p>{number}</p>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
