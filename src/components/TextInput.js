import React from "react";

export default function TextInput(props) {
  console.log(props);
  return (
    <>
      <label htmlFor={props.inputName}>{props.labelText}</label>
      <input
        name={props.inputName}
        type="text"
        ref={props.register(props.validationOptions)}
      />
    </>
  );
}
