import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegistrationSchema = Yup.object().shape({
  username: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').required('Required'),
});

const FormikForm = () => (
  <Formik
    initialValues={{ username: '', email: '', password: '' }}
    validationSchema={RegistrationSchema}
    onSubmit={(values) => {
      console.log('Form submitted', values);
    }}
  >
    {() => (
      <Form>
        <Field name="username" placeholder="Username" />
        <ErrorMessage name="username" component="div" />
        <Field name="email" type="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" />
        <Field name="password" type="password" placeholder="Password" />
        <ErrorMessage name="password" component="div" />
        <button type="submit">Register</button>
      </Form>
    )}
  </Formik>
);

export default FormikForm;