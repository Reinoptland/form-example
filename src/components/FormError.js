import React from "react";

export default function FormError(props) {
  return (
    <>
      {props.condition && (
        <p className="comment-form__error">{props.message}</p>
      )}
    </>
  );
}
