import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

function FormikForm() {
  const handleSubmit = (values, { resetForm }) => {
    // Simulate API call
    console.log('Submitting:', values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <div>
            <label>Username:</label>
            <Field name="username" />
            <ErrorMessage name="username" component="p" />
          </div>
          <div>
            <label>Email:</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="p" />
          </div>
          <div>
            <label>Password:</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="p" />
          </div>
          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
}

export default formikForm;