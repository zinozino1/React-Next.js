import React from "react";
import { Form, Input } from "antd";
import styled from "styled-components";

const EditFromWrapper = styled(Form)`
    padding: 10px;
`;

const NicknameEditForm = () => {
    return (
        <EditFromWrapper>
            <Input.Search
                addonBefore="닉네임"
                enterButton="수정"
            ></Input.Search>
        </EditFromWrapper>
    );
};

export default NicknameEditForm;
