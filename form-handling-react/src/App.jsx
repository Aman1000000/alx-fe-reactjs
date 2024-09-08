import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm';

function App() {
  return (
    <div>
      <h1>Registration Form using Controlled Components</h1>
      <RegistrationForm />
      <h1>Registration Form using Formik</h1>
      <FormikForm />
    </div>
  );
}

export default App;