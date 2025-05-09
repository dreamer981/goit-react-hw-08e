import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";
import { addContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function ContactsForm() {
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false); 

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be at most 50 characters")
      .required("Required"),
    number: Yup.string()
      .matches(/^[0-9-]+$/, "Only numbers and hyphens are allowed")
      .min(3, "Minimum 3 characters required")
      .max(50, "Maximum 50 characters required")
      .required("Required"),
  });
  
  const handleSubmit = async (values, { resetForm }) => {
    resetForm();
    setIsSubmitting(true); 
    try {
      const newContact = {
        name: values.name,
        number: values.number,
      };
      await dispatch(addContact(newContact)).unwrap(); 
    } catch (error) {
      console.error("Failed to add contact:", error);
    } finally {
      setIsSubmitting(false); 
    }
  };


  return (
    <div className={styles.contactForm}>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" id="name" />
          <ErrorMessage name="name" component="div" className={styles.error} />

          <label htmlFor="number">Number</label>
          <Field type="text" name="number" id="number" />
          <ErrorMessage
            name="number"
            component="div"
            className={styles.error}
          />

          <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Loading..." : "Add contact"} </button>
        </Form>
      </Formik>
    </div>
  );
}
