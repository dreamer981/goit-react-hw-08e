import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";
export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.usermenu}>
      <p className={css.username}>Welcome {user.name}</p>
      <button type="button" className={css.button} onClick={() => dispatch(logOut())}>Log Out</button>
    </div>
  );
};
