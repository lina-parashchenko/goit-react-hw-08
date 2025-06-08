import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      await dispatch(deleteContact(id)).unwrap();
      toast.success(`Контакт "${name}" видалено успішно`);
    } catch (error) {
      toast.error("Помилка при видаленні контакту");
    }
  };

  return (
    <div className={css.contactWrap}>
      <div className={css.text}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
