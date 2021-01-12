import { useState } from "react";
import "./CommentForm.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import FormError from "./FormError";

export default function CommentForm() {
  const [status, setStatus] = useState("idle");
  const { register, handleSubmit, errors } = useForm();

  async function postComment(data) {
    setStatus("submitting");
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/comments",
        {
          name: data.name,
          email: data.email,
          body: data.body,
          postId: parseInt(data.postId),
        }
      );
      setStatus("success");

      console.log("WAT KRIJGEN WE TERUG VAN DE API?", response);
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <div>
      <h2>COMMENT FORM</h2>
      {status === "success" && <h3>Bedankt voor je comment!</h3>}
      {["idle", "submitting", "error"].includes(status) && (
        <form onSubmit={handleSubmit(postComment)}>
          <label htmlFor="name">Naam</label>
          <input
            name="name"
            type="text"
            ref={register({
              required: true,
              minLength: 3,
              pattern: /^[a-zA-Z ]*$/,
            })}
          />
          <FormError
            condition={errors.name?.type === "required"}
            message={"Vul aub uw naam in"}
          />
          <FormError
            condition={errors.name?.type === "minLength"}
            message={"Uw naam moet ten minste 3 karakters zijn"}
          />
          <FormError
            condition={errors.name?.type === "pattern"}
            message={
              "Gebruik alstublieft a tot z en spaties, geen speciale tekens"
            }
          />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            ref={register({
              validate: (value) => value.includes("@"),
            })}
          />
          <FormError
            condition={errors.email?.type === "validate"}
            message={"Je moet een @ in je email adress hebben sufferd"}
          />
          <label htmlFor="body">Comment</label>
          <textarea name="body" cols="30" rows="10" ref={register}></textarea>
          <label htmlFor="postId">Op welke post wil je reageren</label>
          <select name="postId" ref={register}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          {status === "error" && (
            <h3>Oh jee, er ging iets mis, probeer het nog eens</h3>
          )}
          <input type="submit" disabled={status === "submitting"} />
        </form>
      )}
    </div>
  );
}
