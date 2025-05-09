import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

export const ContactList = () => {

  return (
    <ul className={styles.ContactList}>
      <li>
        <Contact />
      </li>
    </ul>
  );
};
