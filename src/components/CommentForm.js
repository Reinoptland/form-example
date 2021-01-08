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
        <label>Naam</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Comment</label>
        <textarea cols="30" rows="10"></textarea>
        <label>Op welke post wil je reageren</label>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
}
