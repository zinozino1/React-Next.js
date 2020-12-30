import React, { useState, useCallback, useRef } from "react";
import { Form, Input, Button } from "antd";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import useInput from "../../../hooks/useInput";
import { addPostRequestAction } from "../../../reducers/post";

const FormWrapper = styled(Form)`
    padding: 30px;
`;

const PostForm = () => {
    const { imagePaths } = useSelector((state) => state.post);
    const dispatch = useDispatch();

    const imageInput = useRef();

    const [text, setText] = useState("");
    const onChangeText = (e) => {
        setText(e.target.value);
    };

    const onSubmit = useCallback(() => {
        console.log("submit");
        dispatch(addPostRequestAction());
        setText("");
    }, [dispatch]);

    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]);

    return (
        <FormWrapper onFinish={onSubmit} encType="multipart/form-data">
            <Input.TextArea
                value={text}
                onChange={onChangeText}
                maxLength={140}
                placeholder="어떤 신기한 일이 있었나요?"
            ></Input.TextArea>
            <div>
                <input type="file" multi="true" hidden ref={imageInput} />
                <Button onClick={onClickImageUpload}>이미지 업로드</Button>
                <Button
                    type="primary"
                    htmlType="submit"
                    style={{ float: "right" }}
                >
                    등록
                </Button>
            </div>
            <div>
                {imagePaths.map((v, i) => (
                    <div key={v} style={{ display: "inline-block" }}>
                        <img src={v} style={{ width: "200px" }} alt={v}></img>
                        <div>
                            <Button>제거</Button>
                        </div>
                    </div>
                ))}
            </div>
        </FormWrapper>
    );
};

export default PostForm;
