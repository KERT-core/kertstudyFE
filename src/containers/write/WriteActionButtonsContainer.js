import React, { useEffect } from "react";
import WriteActionButtons from "../../components/write/WriteActionButtons";
import { useSelector, useDispatch } from "react-redux";
import { writePost, updatePost } from "../../modules/write";

const WriteActionButtonsContainer = ({ navigate }) => {
  const dispatch = useDispatch();
  const {
    title,
    body,
    tags,
    post,
    postError,
    originalPostId,
    capacity,
  } = useSelector(
    ({
      write: {
        title,
        body,
        tags,
        post,
        postError,
        originalPostId,
        capacity,
      },
    }) => ({
      title,
      body,
      tags,
      post,
      postError,
      originalPostId,
      capacity,
    })
  );

  const onPublish = () => {
    if (originalPostId) {
      dispatch(
        // originalPostId의 포스트를 새 데이터로 업데이트 시켜줘야 한다.
        updatePost({
          title,
          body,
          tags,
          capacity,
          id: originalPostId,
        })
      );
      return;
    }
    dispatch(
      writePost({
        title,
        body,
        tags,
        capacity,
      })
    );
  };

  const onCancel = () => {
    navigate(-1);
  };

  // 만약 포스트가 등록 되었다면 post가 생성될 것이다
  useEffect(() => {
    if (post) {
      const { _id, user } = post;
      navigate(`/@${user.username}/${_id}`);
    }
    if (postError) {
      console.error(postError);
    }
  }, [navigate, post, postError]);

  return (
    <WriteActionButtons
      onPublish={onPublish}
      onCancel={onCancel}
      isEdit={!!originalPostId}
    />
  );
};

export default WriteActionButtonsContainer;
