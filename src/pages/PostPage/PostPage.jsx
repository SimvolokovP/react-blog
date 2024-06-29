import { useParams } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import { useEffect, useState } from "react";
import PostService from "../../API/PostService";
import postImage from "../../assets/post1.png";
import { PostPageSkeleton } from "../../components/PostSkeleton/PostPageSkeleton";
import PostComments from "../../components/PostComments/PostComments";

export default function PostPage() {
  const [post, setPost] = useState({});
  const [postIsLoading, setPostIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const params = useParams();

  async function fetchPost(id) {
    const resp = await PostService.getPostById(id);
    const respComments = await PostService.getCommentsOfPostById(id);
    setPost(resp.data[0]);
    setComments(respComments.data);
    console.log(respComments.data);
  }

  useEffect(() => {
    fetchPost(params.id);
    setTimeout(() => {
      setPostIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Banner text={"Blog Page"}></Banner>
      <div className="post-page">
        <div className="container post-page__container">
          {postIsLoading ? (
            <PostPageSkeleton />
          ) : (
            <>
              <img
                className="post-page__image"
                src={postImage}
                alt={post.title}
              />
              <h3 className="post-page__title">{post.title}</h3>
              <p className="post-page__body">{post.body}</p>

              <div className="post-page__comments">
                <div className="post-page__chapter">Comments</div>
                <PostComments comments={comments} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
