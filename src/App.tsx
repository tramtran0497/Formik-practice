import { FastField, Form, Formik } from 'formik';
import React from 'react';
import './App.css';
import CustomField from './Components/CustomField';

interface FormModel {
  name: string;
  email: string;
}

function App() {
  return (
    <div className="App">
      <Formik<FormModel>
        initialValues={{
          name: '',
          email: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit, handleChange, handleBlur, values }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <FastField
                name="email"
                label="Email"
                type="email"
                placeholder="Email..."
                component={CustomField}
              />

              <FastField
                name="name"
                label="Name"
                type="text"
                placeholder="Name..."
                component={CustomField}
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default App;
