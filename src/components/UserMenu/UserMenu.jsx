import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  return (
    <div>
      <p className={css.name}>Welcome, {name}</p>
      <button onClick={() => dispatch(logout())} className={css.button}>
        Logout
      </button>
    </div>
  );
}
