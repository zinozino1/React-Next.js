import React, { useState, useCallback } from "react";
import { Card, Popover, Button, Avatar, List, Comment } from "antd";
import {
    RetweetOutlined,
    HeartOutlined,
    MessageOutlined,
    EllipsisOutlined,
    HeartTwoTone,
} from "@ant-design/icons";
import PostImages from "./PostImages";
import CommentForm from "./CommentForm";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import PostCardContent from "./PostCardContent";
import { removePostReqeustAction } from "../../../reducers/post";
import {
    followReqeustAction,
    unFollowReqeustAction,
} from "../../../reducers/user";

const CardWrapper = styled.div`
    margin-bottom: 15px;
`;

const CommentWrapper = styled.div`
    padding: 0 20px;
`;

const PostCard = ({ post }) => {
    const [liked, setLiked] = useState(false);
    const [commentFormOpened, setCommentFormOpened] = useState(false);

    const dispatch = useDispatch();

    const { me } = useSelector((state) => state.user);
    const id = useSelector((state) => state.user.me && state.user.me.id);
    const { removePostLoading } = useSelector((state) => state.post);
    const { followLoading } = useSelector((state) => state.user);
    const onToggleLike = useCallback(() => {
        setLiked(!liked);
    }, [liked]);

    const onToggleComment = useCallback(() => {
        setCommentFormOpened(!commentFormOpened);
    }, [commentFormOpened]);

    const onRemovePost = useCallback(() => {
        dispatch(removePostReqeustAction(post.id));
    }, [post]);

    const isFollowing = () => {
        if (
            me &&
            me.Followings.some((element) => {
                if (element.id === post.User.id) return true;
            })
        ) {
            return true;
        } else return false;
    };

    const onFollow = useCallback(() => {
        dispatch(followReqeustAction(post));
    }, [post]);
    const onUnFollow = useCallback(() => {
        dispatch(unFollowReqeustAction(post));
    }, [post]);

    return (
        <CardWrapper>
            <Card
                cover={
                    <>
                        {post.Images[0] && (
                            <PostImages images={post.Images}></PostImages>
                        )}
                    </>
                }
                extra={
                    me &&
                    me.id !== post.User.id &&
                    (isFollowing() ? (
                        <Button style={{ float: "right" }} onClick={onUnFollow}>
                            언팔로우
                        </Button>
                    ) : (
                        <Button
                            style={{ float: "right" }}
                            onClick={onFollow}
                            loading={followLoading}
                        >
                            팔로우
                        </Button>
                    ))
                }
                actions={[
                    <RetweetOutlined key="retweet" />,
                    liked ? (
                        <HeartTwoTone
                            key="heart"
                            twoToneColor="#eb2f96"
                            onClick={onToggleLike}
                        ></HeartTwoTone>
                    ) : (
                        <HeartOutlined
                            key="heart"
                            onClick={onToggleLike}
                        ></HeartOutlined>
                    ),
                    <MessageOutlined key="comment" onClick={onToggleComment} />,
                    <Popover
                        key="more"
                        content={
                            <Button.Group>
                                {id && post.User.id === id ? (
                                    <>
                                        <Button type="primary">수정</Button>
                                        <Button
                                            type="danger"
                                            onClick={onRemovePost}
                                            loading={removePostLoading}
                                        >
                                            삭제
                                        </Button>
                                    </>
                                ) : (
                                    <Button>신고</Button>
                                )}
                            </Button.Group>
                        }
                    >
                        <EllipsisOutlined></EllipsisOutlined>
                    </Popover>,
                ]}
            >
                <Card.Meta
                    avartar={<Avatar>{post.User.nickname}</Avatar>}
                    description={
                        <PostCardContent
                            postData={post.content}
                        ></PostCardContent>
                    }
                    title={post.User.nickname}
                ></Card.Meta>
            </Card>
            {commentFormOpened && (
                <CommentWrapper>
                    <CommentForm post={post} />
                    <List
                        header={`${post.Comments.length}개의 댓글이 있습니다.`}
                        itemLayout="horizontal"
                        dataSource={post.Comments}
                        renderItem={(item) => (
                            <li>
                                <Comment
                                    author={item.User.nickname}
                                    avatar={
                                        <Avatar>{item.User.nickname[0]}</Avatar>
                                    }
                                    content={item.content}
                                ></Comment>
                            </li>
                        )}
                    ></List>
                </CommentWrapper>
            )}
        </CardWrapper>
    );
};

export default React.memo(PostCard);
