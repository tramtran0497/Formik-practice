import { Form, Formik } from 'formik';
import React from 'react';
import './App.css';
import CustomField from './Components/CustomField';

interface FormModel {
  name: string;
}

function App() {
  return (
    <div className="App">
      <Formik<FormModel>
        initialValues={{
          name: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit, handleChange, handleBlur, values }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Name"
                onChange={handleChange}
                onBlur={handleBlur}
                name="name"
                id="name"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default App;
