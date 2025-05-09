// import css from "./Navigation.module.css";
// import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "../../redux/auth/selectors";

// const Navigation = () => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   return (
//     <nav className={css.navigation}>
//       <NavLink to="/" className={css.link}>
//         Home
//       </NavLink>
//       {isLoggedIn && (
//         <NavLink to="/contacts" className={css.link}>
//           Contacts
//         </NavLink>
//       )}
//     </nav>
//   );
// };
// export default Navigation;

import { NavLink } from "react-router-dom";
import styles from './Navigation.module.css';
import clsx from 'clsx';

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(styles.link, isActive && styles.active);
  };

  return (
    <nav>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
    </nav>
  );
};

export default Navigation;