import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  readPost,
  unloadPost,
  joinPost,
} from "../../modules/post";
import PostViewer from "../../components/post/PostViewer";
import { useParams } from "react-router-dom";
import PostActionButtons from "../../components/post/PostActionButtons";
import { setOriginalPost } from "../../modules/write";
import { useNavigate } from "react-router-dom";
import { removePost } from "../../lib/api/posts";

const PostViewerContainer = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { post, error, loading, user } = useSelector(
    ({ post: { post, error }, loading, user: { user } }) => ({
      post,
      error,
      loading: loading["post/READ_POST"],
      user,
    })
  );

  // 우선 랜더링 될 떄 포스트를 가져와야 한다.
  useEffect(() => {
    dispatch(readPost(postId));
    // 언마운트 될 때는 리덕스에서 포스트 데이터를 없애야 한다.
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  // 해당 post의 id와 현재 접속해 있는 user의 id가 같다면 수정/삭제 버튼을 보여줘야 한다.
  const ownPost = (user && user._id) === (post && post.user._id);

  const onEdit = () => {
    dispatch(setOriginalPost(post));
    navigate("/write");
  };

  const onRemove = async () => {
    try {
      await removePost(postId);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  const onStudyIn = async ({ postId, userId }) => {
    dispatch(joinPost({ postId, userId }));
  };

  const onSutdyOut = async ({ postId, userId }) => {
    dispatch(joinPost({ postId, userId }));
  };

  return (
    <PostViewer
      post={post}
      loading={loading}
      error={error}
      actionButtons={
        ownPost && (
          <PostActionButtons
            onEdit={onEdit}
            onRemove={onRemove}
          />
        )
      }
      user={user}
      onStudyIn={onStudyIn}
      onSutdyOut={onSutdyOut}
    />
  );
};

export default PostViewerContainer;
