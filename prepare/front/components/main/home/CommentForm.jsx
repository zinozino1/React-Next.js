import React, { useCallback, useEffect } from "react";
import { Form, Input, Button } from "antd";
import useInput from "../../../hooks/useInput";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { addCommentRequestAction } from "../../../reducers/post";

const FormWrapper = styled(Form)`
    margin-bottom: 30px;
`;

const CommentForm = ({ post }) => {
    const id = useSelector((state) => state.user.me?.id);
    const { addCommentDone } = useSelector((state) => state.post);

    const dispatch = useDispatch();

    const [commentText, onChangeCommentText, setCommentText] = useInput("");

    const onSubmit = useCallback(
        (e) => {
            console.log(post.id, commentText, id);
            dispatch(
                addCommentRequestAction({
                    content: commentText,
                    postId: post.id,
                    userId: id,
                    id,
                }),
            );
        },
        [commentText],
    );

    useEffect(() => {
        if (addCommentDone) setCommentText("");
    }, [addCommentDone]);

    return (
        <FormWrapper onFinish={onSubmit}>
            <Input.TextArea
                onChange={onChangeCommentText}
                value={commentText}
            ></Input.TextArea>
            <Button type="primary" htmlType="submit" style={{ float: "right" }}>
                등록
            </Button>
        </FormWrapper>
    );
};

CommentForm.propTypes = {
    post: PropTypes.object.isRequired,
};

export default CommentForm;
