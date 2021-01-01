import React, { useState, useCallback, useEffect } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import styled from "styled-components";
import PropTypes from "prop-types";
import useInput from "../../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { loginRequestAction } from "../../reducers/user";
import Router from "next/router";

const ButtonsWrapper = styled.div`
    display: flex;
    padding: 20px;
    justify-content: center;
`;

const LoginFormWrapper = styled(Form)`
    padding: 20px;
`;

const LoginForm = () => {
    const dispatch = useDispatch();
    const [email, onChangeEmail] = useInput("");
    const [password, onChangePassword] = useInput("");

    const logInLoading = useSelector((state) => state.user.logInLoading);
    const logInDone = useSelector((state) => state.user.logInDone);

    const onSubmitForm = useCallback(() => {
        dispatch(loginRequestAction());
    }, [email, password]);

    return (
        <LoginFormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-email">이메일</label>
                <br />
                <Input
                    type="text"
                    name="user-email"
                    value={email}
                    onChange={onChangeEmail}
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
                <Button type="primary" htmlType="submit" loading={logInLoading}>
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
