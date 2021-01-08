import "./CommentForm.css";
import { useForm } from "react-hook-form";

export default function CommentForm() {
  const { register, handleSubmit } = useForm();
  //   console.log("WAT KOMT ER UIT USEFORM?", what);
  // name: input -> type text & label
  // email: input -> type email & label
  // body: textarea -> type text & label
  // postId: select -> options & label
  function postComment(data) {
    console.log("WAT IS ER INGEVULD:", data);
  }

  return (
    <div>
      <h2>COMMENT FORM</h2>
      <form onSubmit={handleSubmit(postComment)}>
        <label htmlFor="name">Naam</label>
        <input name="name" type="text" ref={register} />
        <label htmlFor="email">Email</label>
        <input name="email" type="email" ref={register} />
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
