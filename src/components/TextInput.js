import React from "react";

export default function TextInput(props) {
  console.log(props);
  return (
    <>
      <label className="comment-form__label" htmlFor={props.inputName}>
        {props.labelText}
      </label>
      <input
        className="comment-form__text-input"
        name={props.inputName}
        type="text"
        ref={props.register(props.validationOptions)}
      />
    </>
  );
}
