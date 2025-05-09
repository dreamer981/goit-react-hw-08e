import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";
import { register } from "../../redux/auth/operations";

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const result = await dispatch(register({
        name: values.name,
        email: values.email,
        password: values.password
      })).unwrap();
      
      console.log("Registration success:", result);
      resetForm();
    } catch (error) {
      console.error("Full registration error:", error);
      alert(`Registration failed: ${error.payload || error.message}`);
    } finally {
      setSubmitting(false);
    }
  };
  
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: Yup.string()
      .min(7, "Password must be at least 7 characters")
      .required("Password is required"),
  });

  return (
    <>
      <h1 className={css.title}>Registration Page</h1>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={css.form} autoComplete="off">
            <label>
              Name
              <Field type="text" name="name" className={css.input} />
              <ErrorMessage name="name" component="div" className={css.error} />
            </label>
            <label>
              E-mail
              <Field type="email" name="email" className={css.input} />
              <ErrorMessage name="email" component="div" className={css.error} />
            </label>
            <label>
              Password
              <Field type="password" name="password" className={css.input} />
              <ErrorMessage name="password" component="div" className={css.error} />
            </label>
            <button
              type="submit"
              className={css.button}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Loading..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};