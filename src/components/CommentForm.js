import "./CommentForm.css";

export default function CommentForm() {
  // name: input -> type text & label
  // email: input -> type email & label
  // body: textarea -> type text & label
  // postId: select -> options & label

  return (
    <div>
      <h2>COMMENT FORM</h2>
      <form>
        <label htmlFor="voornaam">Naam</label>
        <input name="voornaam" type="text" />
        <label htmlFor="email">Email</label>
        <input name="email" type="email" />
        <label htmlFor="comment">Comment</label>
        <textarea name="comment" cols="30" rows="10"></textarea>
        <label htmlFor="postId">Op welke post wil je reageren</label>
        <select name="postId">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
}
