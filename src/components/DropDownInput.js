import React from "react";
export default function DropDownInput({
  register,
  inputName,
  labelText,
  options,
}) {
  return (
    <>
      <label htmlFor={inputName}>{labelText}</label>
      <select name={inputName} ref={register}>
        {options}
      </select>
    </>
  );
}
