import DropDownInput from "./DropDownInput";
import TextAreaInput from "./TextAreaInput";
import { useState } from "react";
import "./CommentForm.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import FormError from "./FormError";
import TextInput from "./TextInput";

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
          <TextInput
            register={register}
            validationOptions={{
              required: true,
              minLength: 3,
              pattern: /^[a-zA-Z ]*$/,
            }}
            labelText="Naam"
            inputName="name"
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
          <TextInput
            register={register}
            validationOptions={{
              validate: (value) => value.includes("@"),
            }}
            labelText="Email"
            inputName="email"
          />
          <FormError
            condition={errors.email?.type === "validate"}
            message={"Je moet een @ in je email adress hebben sufferd"}
          />
          <TextAreaInput
            register={register}
            inputName="body"
            labelText="Comment"
            cols="30"
            rows="10"
          />
          <DropDownInput
            register={register}
            options={[
              <option key={1}>1</option>,
              <option key={2}>2</option>,
              <option key={3}>3</option>,
            ]}
            inputName={"postId"}
            labelText={"Op welke post wil je comment sturen"}
          />
          {status === "error" && (
            <h3>Oh jee, er ging iets mis, probeer het nog eens</h3>
          )}
          <input type="submit" disabled={status === "submitting"} />
        </form>
      )}
    </div>
  );
}
