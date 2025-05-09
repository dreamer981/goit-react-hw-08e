import ContactForm from "../../components/ContactForm/ContactForm";
import {ContactList} from "../../components/ContactList/ContactList";
import SearchBox from "../../components/searchBox/SearchBox";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import css from "./ContactsPage.module.css"

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.contactsPage}>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};
export default ContactsPage;