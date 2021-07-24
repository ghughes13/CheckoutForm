import React from "react";
import "./style.scss";

export default function AppInput({
  labelText,
  className = "",
  fieldName,
  type,
  placeholder,
  requiredField,
}) {
  requiredField = requiredField || false;

  return (
    <div className={"app-input " + className}>
      <label htmlFor={fieldName}>{labelText}</label>
      <input
        type={type}
        name={fieldName}
        id={fieldName}
        placeholder={placeholder}
        required={requiredField}
      />
    </div>
  );
}
