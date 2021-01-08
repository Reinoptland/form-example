import { useState } from "react";
import "./CommentForm.css";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function CommentForm() {
  const [status, setStatus] = useState("idle");
  const { register, handleSubmit, errors } = useForm();

  console.log("errors", errors);
  //   console.log("WAT KOMT ER UIT USEFORM?", what);
  // name: input -> type text & label
  // email: input -> type email & label
  // body: textarea -> type text & label
  // postId: select -> options & label

  // Submit handler
  // Toegang tot de data die de gebruiker heeft ingevuld

  // axios.post('/login', {
  //   firstName: 'Finn',
  //   lastName: 'Williams'
  // });
  async function postComment(data) {
    // console.log("WAT IS ER INGEVULD:", data);
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
          {errors.name?.type === "required" && <p>Vul aub uw naam in</p>}
          {errors.name?.type === "minLength" && (
            <p>Uw naam moet ten minste 3 karakters zijn</p>
          )}
          {errors.name?.type === "pattern" && (
            <p>Gebruik alstublieft a tot z en spaties, geen speciale tekens</p>
          )}
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            ref={register({
              validate: (value) => value.includes("@"),
            })}
          />
          {errors.email?.type === "validate" && (
            <p>Je moet een @ in je email adress hebben sufferd</p>
          )}
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
