import React from 'react';

type CustomFieldProps = {
  name: string;
  type: string;
  placeholder: string;
  label: string;

  value: string;
};

const CustomField: React.FunctionComponent<CustomFieldProps> = ({
  name,
  type,
  placeholder,
  label,
  value,
}) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type={type} placeholder={placeholder} id={name} value={value} />
    </>
  );
};

export default CustomField;
