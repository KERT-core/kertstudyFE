import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Responsive from "../common/Responsive";
import { Helmet } from "react-helmet-async";
import Button from "../common/Button";

import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";

const PostViewerBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  display: flex;
  row-gap: 10px;
  flex-direction: column;
  h1 {
    font-size: 2rem;
    text-align: center;
    line-height: 1.5;
    margin: 0;
  }
`;

const SubInfo = styled.div`
  margin-top: 1rem;
  color: ${palette.gray[6]};
  text-align: right;

  // 구분자
  span + span:before {
    color: ${palette.gray[5]};
    padding: 0px 0.25rem;
    content: "\\B7";
  }
`;

const Tags = styled.div`
  margin-top: 0.5rem;
  .tag {
    display: inline-block;
    color: ${palette.cyan[7]};
    text-decoration: none;
    margin-right: 0.5rem;

    &:hover {
      color: ${palette.cyan[4]};
      cursor: pointer;
    }
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

const AttendanceButton = styled(Button)`
  width: 150px;
`;

const HeartItemIcon = styled(FavoriteRoundedIcon)`
  display: inline-block;
`;

const StarItemIcon = styled(StarIcon)`
  display: inline-block;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
`;

const PostViewer = ({
  post,
  loading,
  error,
  actionButtons,
  user,
  onStudyIn,
  onSutdyOut,
}) => {
  if (error) {
    // 백에서 포스트 못 찾으면 404뜨게 해놨음
    if (error.response && error.response.status === 404) {
      return (
        <PostViewerBlock>
          존재하지 않는 포스트입니다
        </PostViewerBlock>
      );
    }
    return <PostViewerBlock>오류 발생!</PostViewerBlock>;
  }

  if (loading || !post) {
    return null;
  }

  const {
    title,
    body,
    publishedDate,
    creator: { username, _id: creatorId },
    tags,
    likeId: { like_user },
    _id: postId,
  } = post;

  if (user) {
    var { _id: userId } = user;
  }

  return (
    <PostViewerBlock>
      <Helmet>
        <title>{title} - STUIK</title>
      </Helmet>
      <PostHead>
        <TitleContainer>
          {user ? (
            creatorId === userId ? (
              <StarItemIcon style={{ color: palette.cyan[6] }} />
            ) : !like_user.includes(userId) ? (
              <HeartItemIcon
                style={{ color: palette.gray[5] }}
              />
            ) : (
              <HeartItemIcon
                style={{ color: palette.cyan[6] }}
              />
            )
          ) : null}
          <h1>{title}</h1>
        </TitleContainer>
        <SubInfo>
          <span>
            <b>{username}</b>
          </span>
          <span>
            {new Date(publishedDate).toLocaleDateString()}
          </span>
        </SubInfo>
        <Tags>
          {tags.map((tag) => (
            <Link className="tag" key={tag} to={`/?tag=${tag}`}>
              #{tag}
            </Link>
          ))}
        </Tags>
        {/* 스터디 참여 버튼 */}
        {user ? (
          creatorId === userId ? (
            <AttendanceButton
              disabled
              onClick={() => alert("스터디 장입니다.")}
            >
              스터디 장
            </AttendanceButton>
          ) : !like_user.includes(userId) ? (
            <AttendanceButton
              cyan
              onClick={() => {
                onStudyIn({ postId, userId });
                alert("변경되었습니다.");
              }}
            >
              스터디 참여
            </AttendanceButton>
          ) : (
            <AttendanceButton
              cyan
              onClick={() => {
                onSutdyOut({ postId, userId });
                alert("변경되었습니다.");
              }}
            >
              스터디 탈퇴
            </AttendanceButton>
          )
        ) : null}
      </PostHead>
      {actionButtons}
      <PostContent
        dangerouslySetInnerHTML={{
          __html: body,
        }}
      />
    </PostViewerBlock>
  );
};

export default PostViewer;
