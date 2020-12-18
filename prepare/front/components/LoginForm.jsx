import React, { useState, useCallback } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import styled from "styled-components";

const ButtonsWrapper = styled.div`
    display: flex;
    padding: 20px;
    justify-content: center;
`;

const LoginFormWrapper = styled(Form)`
    padding: 20px;
`;

const LoginForm = ({ setIsLoggedIn }) => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    }, []);
    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);
    const onSubmitForm = useCallback(() => {
        console.log(id, password);
        setIsLoggedIn(true);
    }, [id, password]);

    return (
        <LoginFormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input
                    type="text"
                    name="user-id"
                    value={id}
                    onChange={onChangeId}
                ></Input>
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input
                    type="text"
                    name="user-password"
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                ></Input>
            </div>
            <ButtonsWrapper>
                <Button type="primary" htmlType="submit" loading={false}>
                    로그인
                </Button>
                <Link href="/signup">
                    <a>
                        <Button>회원가입</Button>
                    </a>
                </Link>
            </ButtonsWrapper>
        </LoginFormWrapper>
    );
};

export default LoginForm;
