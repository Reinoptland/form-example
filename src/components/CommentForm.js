import { useState } from "react";
import "./CommentForm.css";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function CommentForm() {
  const [succes, setSucces] = useState(null);
  const { register, handleSubmit, errors, reset } = useForm();

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
    console.log("WAT IS ER INGEVULD:", data);
    try {
      const response = await axios.post("http://localhost:8080/comments", {
        name: data.name,
        email: data.email,
        body: data.body,
        postId: parseInt(data.postId),
      });
      setSucces(true);

      console.log("WAT KRIJGEN WE TERUG VAN DE API?", response);
    } catch (error) {
      setSucces(false);
    }
  }

  if (succes) {
    return <h1>Bedankt voor je comment</h1>;
  }

  return (
    <div>
      <h2>COMMENT FORM</h2>
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
        <input type="submit" />
      </form>
    </div>
  );
}
