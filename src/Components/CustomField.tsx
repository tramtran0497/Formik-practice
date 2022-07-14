import React from 'react';

type CustomFieldProps = {
  type: string;
  placeholder: string;
  label: string;

  field: {
    name: string;
  };
};

const CustomField: React.FunctionComponent<CustomFieldProps> = ({
  type,
  placeholder,
  label,
  field,
}) => {
  const { name } = field;
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type={type} placeholder={placeholder} id={name} {...field} />
    </>
  );
};

export default CustomField;
