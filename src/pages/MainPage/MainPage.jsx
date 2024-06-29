import { useState } from "react";
import Banner from "../../components/Banner/Banner";
import PostsList from "../../components/PostsList/PostsList";

export default function MainPage() {
  return (
    <>
      <Banner text={"The Blog"} />
      <PostsList />
    </>
  );
}
