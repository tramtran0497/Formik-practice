import React, { ChangeEventHandler } from 'react';

type SelectFormProps = {
  type?: string;
  placeholder: string;
  label: string;
  options: string[];
  field: {
    name: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  };
};

const SelectForm: React.FunctionComponent<SelectFormProps> = ({
  type,
  placeholder,
  label,
  field,
  options,
}) => {
  const { name } = field;
  const selectChange: ChangeEventHandler<HTMLSelectElement> = (option) => {
    const selectedValue = option ? option : option;
    field.onChange(selectedValue);
  };
  return (
    <>
      <label htmlFor={name}>{label}</label>

      <select id={name} {...field} onChange={selectChange} placeholder={placeholder}>
        {options.map((option: string) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectForm;
