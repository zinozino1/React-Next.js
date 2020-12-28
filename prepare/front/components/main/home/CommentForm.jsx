import React, { useCallback } from "react";
import { Form, Input, Button } from "antd";
import useInput from "../../../hooks/useInput";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const FormWrapper = styled(Form)`
    margin-bottom: 30px;
`;

const CommentForm = ({ post }) => {
    const id = useSelector((state) => state.user.me?.id);

    const [commentText, onChangeCommentText] = useInput("");

    const onSubmit = useCallback(
        (e) => {
            console.log(post.id, commentText);
        },
        [commentText],
    );

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
