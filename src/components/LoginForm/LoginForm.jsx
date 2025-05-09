import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./LoginForm.module.css";
import { logIn } from "../../redux/auth/operations";



export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      await dispatch(logIn(values)).unwrap(); // unwrap() ekleyerek hataları yakalayabiliriz
      resetForm();
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed: " + (error.message || "Unknown error")); // Kullanıcıya hata göster
    } finally {
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Required"),
    password: Yup.string()
      .min(7, "Must be at least 7 characters")
      .required("Password is required"),
  });

  return (
    <>
      <h1 className={css.title}>Login Page</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={css.form} autoComplete="off">
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
              {isSubmitting ? "Loading..." : "Log In"}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};