import { useEffect, useMemo, useState } from "react";
import Button from "../../UI/Button/Button";
import DropMessage from "../../UI/DropMessage/DropMessage";
import Post from "../Post/Post";
import PostsControl from "../PostsControl/PostsControl";
import { usePosts } from "../../utils/usePost";
import PostService from "../../API/PostService";
import { PostSkeleton } from "../PostSkeleton/PostSkeleton";
import { getPagesCount } from "../../utils/pages";
import { usePagination } from "../../utils/usePagination";

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const [dropMessage, setDropMessage] = useState(false);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [isPostLoading, setIsPostLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [limitPosts, setLimitPosts] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  let pagesArray = usePagination(totalPages);

  //   const [fetchPosts, isPostLoading, postError] = useFetching( async () => {
  //     const posts = await PostService.getAll();
  //     setPosts(posts);
  //   });

  async function fetchPosts() {
    const resp = await PostService.getAll(limitPosts, page);
    setPosts(resp.data);
    const totalCount = resp.headers["x-total-count"];
    setTotalPages(getPagesCount(totalCount, limitPosts));
  }

  useEffect(() => {
    fetchPosts();
    setTimeout(() => {
      setIsPostLoading(false);
    }, 2000);
  }, [page]);

  return (
    <div className="posts">
      <div className="container posts__container">
        <div className="posts__chapter">
          <h3 className="posts__title">Recent Posts: </h3>
          <Button onClick={() => setDropMessage(true)}>Settings</Button>
        </div>

        <ul className="posts__list list-reset">
          {isPostLoading ? (
            <>
              <PostSkeleton /> <PostSkeleton /> <PostSkeleton />
            </>
          ) : sortedAndSearchedPosts.length ? (
            sortedAndSearchedPosts.map((post) => (
              <Post key={post.id} {...post} />
            ))
          ) : (
            <div className="posts__not-found">Not Found</div>
          )}
        </ul>
        <div className="posts__pagination pagination">
          {isPostLoading ? (
            <></>
          ) : (
            <>
              {page === 1 ? (
                <div className="pagination__empty"></div>
              ) : (
                <button
                  onClick={() => setPage(page - 1)}
                  className="pagination__arrow"
                >
                  Previous
                </button>
              )}
              <ul className="pagination__list list-reset">
                {pagesArray.map((p) => (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={
                      p === page ? "pagination__btn active" : "pagination__btn"
                    }
                  >
                    {p}
                  </button>
                ))}
              </ul>
              {page === totalPages ? (
                <div className="pagination__empty"></div>
              ) : (
                <button
                  onClick={() => setPage(page + 1)}
                  className="pagination__arrow"
                >
                  Next
                </button>
              )}
            </>
          )}
        </div>
      </div>
      <DropMessage
        closeDropMessage={() => setDropMessage(false)}
        open={dropMessage}
      >
        <PostsControl filter={filter} setFilter={setFilter} />
      </DropMessage>
    </div>
  );
}
