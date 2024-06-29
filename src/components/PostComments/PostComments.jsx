export default function PostComments({ comments }) {
  return (
    <ul className="comments list-reset">
      {comments.map((comment) => (
        <li className="comment" key={comment.id}>
          <div className="comment__author">{comment.email}</div>
          <div className="comment__body">{comment.body}</div>
        </li>
      ))}
    </ul>
  );
}
