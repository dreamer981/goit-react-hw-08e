import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import styles from "./Contact.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Contact() {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    const contactToDelete = { id }; 
    dispatch(deleteContact(contactToDelete)); 
  };

  return (
    <div className={styles.contactList}>
      {contacts.map((contact) => (
        <div key={contact.id} className={styles.contactItem}>
          <div className={styles.contactDetails}>
            <span className={styles.contactName}>
              <i className="fas fa-user"></i> {contact.name}
            </span>

            <span className={styles.contactNumber}>
              <i className="fas fa-phone-alt"></i> {contact.number}
            </span>
          </div>
          <button
            className={styles.deleteButton}
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}