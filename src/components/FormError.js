import React from "react";

export default function FormError(props) {
  return <>{props.condition && <p>{props.message}</p>}</>;
}
