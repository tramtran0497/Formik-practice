import { FastField, Form, Formik } from 'formik';
import React from 'react';
import './App.css';
import CustomField from './Components/CustomField';
import SelectForm from './Components/SelectForm';

interface FormModel {
  name: string;
  email: string;
  sex: string;
}

function App() {
  const sexOptions = ['Choose your sex', 'female', 'male', 'others'];
  return (
    <div className="App">
      <Formik<FormModel>
        initialValues={{
          name: '',
          email: '',
          sex: '',
        }}
        onSubmit={(values) => {
          console.log('VALUE', values);
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

              <FastField
                name="sex"
                label="Sex"
                type=""
                placeholder="Choose your sex..."
                component={SelectForm}
                options={sexOptions}
              />

              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default App;
