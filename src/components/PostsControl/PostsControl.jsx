import Select from "../../UI/Select/Select";
import './PostsControl.css';

export default function PostsControl({ filter, setFilter }) {
  return (
    <div className="posts-control">
      <div>Posts Filter</div>
      <label htmlFor="">
        <span>Sort by params..</span>
        <Select
          value={filter.sort}
          onChange={(val) => setFilter({ ...filter, sort: val })}
          options={[
            { title: "By title", value: "title" },
            { title: "By body", value: "body" },
          ]}
          defaultOption={{ title: "Sort by", value: "" }}
        />
      </label>
      <label htmlFor="">
        <span>Search by title..</span>
        <input placeholder="title"
          value={filter.query}
          onChange={(val) => setFilter({ ...filter, query: val.target.value })}
        ></input>
      </label>
      <button className="posts-control__reset" onClick={() => setFilter({ ...filter, sort: "", query: "" })}>
        Reset all
      </button>
    </div>
  );
}
