import { Link } from "react-router-dom";
import postImage from "../../assets/post1.png";

export default function Post({ id, title, body }) {
  function getBodyText(text) {
    if (text.length > 245) {
      text = text.slice(0, 245);
      text += "..";
    } else {
      text += " ";
    }
    return text;
  }

  return (
    <li className="post">
      <article className="post-article">
        <div className="post__image">
          <Link className="post__link" to={`/posts/${id}`}>
            <img src={postImage} alt={title} />
          </Link>
        </div>
        <div className="post__descr">
          <div className="post__date">Sunday , 1 Jan 2023</div>
          <Link className="post__link" to={`/posts/${id}`}>
            <h3 className="post__title">
              {id}. {title}
            </h3>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 11L11 1M11 1H1M11 1V11"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
          <p className="post__body">
            {getBodyText(body)}
            <Link className="post__link" to={`/posts/${id}`}>
              read more
            </Link>
          </p>
        </div>
      </article>
    </li>
  );
}
