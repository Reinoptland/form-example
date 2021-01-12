import React from "react";

export default function TextAreaInput({
  register,
  inputName,
  labelText,
  cols,
  rows,
}) {
  return (
    <>
      <label htmlFor={inputName}>{labelText}</label>
      <textarea
        name={inputName}
        cols={cols}
        rows={rows}
        ref={register}
      ></textarea>
    </>
  );
}
