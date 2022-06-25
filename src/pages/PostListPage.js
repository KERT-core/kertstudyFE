import React from "react";
import NavBarContainer from "../containers/common/NavBarContainer";
import HeaderContainer from "../containers/common/HeaderContainer";
import PostListContainer from "../containers/post/PostListContainer";
import PaginationContainer from "../containers/posts/PaginationContainer";

const PostListPage = () => {
  return (
    <>
      <NavBarContainer />
      <HeaderContainer />
      <PostListContainer />
      <PaginationContainer />
    </>
  );
};

export default PostListPage;
