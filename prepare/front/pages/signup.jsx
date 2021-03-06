import React, { useCallback, useState, useEffect } from "react";
import Router from "next/router";
import AppLayout from "../components/Layouts/AppLayout";
import Head from "next/head";
import { Form, Input, Checkbox, Button } from "antd";
import useInput from "../hooks/useInput";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { signUpRequestAction } from "../reducers/user";

const FormWrapper = styled(Form)`
    padding: 20px;
`;

const ErrorMessage = styled.div`
    color: red;
`;

const SubmitButtonWrapper = styled.div`
    margin: 10px;
`;

const SignUp = () => {
    const dispatch = useDispatch();
    const { signUpLoading, signUpDone } = useSelector((state) => state.user);

    const [email, onChangeEmail] = useInput("");
    const [nickname, onChangeNickname] = useInput("");
    const [password, onChangePassword] = useInput("");

    const [passwordCheck, setPasswordCheck] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const onChangePasswordCheck = useCallback(
        (e) => {
            setPasswordCheck(e.target.value); // 여기까진 동일하나
            setPasswordError(e.target.value !== password); // 이게 추가되기 때문에 커스텀 훅 사용 불가
        },
        [password],
    );

    const [term, setTerm] = useState(false);
    const [termError, setTermError] = useState(false);
    const onChangeTerm = useCallback((e) => {
        setTermError(false);
        setTerm(e.target.checked);
    }, []);

    const onSubmit = useCallback(() => {
        if (password !== passwordCheck) {
            alert("비밀번호가 일치하지 않습니다.");
            return setPasswordError(true);
        }
        if (!term) {
            alert("약관에 동의하세요.");
            return setTermError(true);
        }
        dispatch(signUpRequestAction());
        console.log(email, password);
    }, [password, passwordCheck, term]);

    // useEffect(() => {
    //     if (signUpDone) {
    //         // 리디렉션함과 동시에 signUpDone을 다시 false로 만들어줘야함.
    //         Router.push("/");
    //     }
    // }, [signUpDone]);

    return (
        <>
            <Head>
                {/* _app.js에 title 있지만 여기서 오버라이딩 */}
                <title>회원가입 | jinho</title>
            </Head>
            <AppLayout>
                <FormWrapper onFinish={onSubmit}>
                    <div>
                        <label htmlFor="user-email">이메일</label>
                        <br />
                        <Input
                            type="email"
                            name="user-email"
                            value={email}
                            required
                            onChange={onChangeEmail}
                        ></Input>
                    </div>
                    <div>
                        <label htmlFor="user-nickname">닉네임</label>
                        <br />
                        <Input
                            name="user-nickname"
                            value={nickname}
                            required
                            onChange={onChangeNickname}
                        ></Input>
                    </div>
                    <div>
                        <label htmlFor="user-password">비밀번호</label>
                        <br />
                        <Input
                            name="user-password"
                            value={password}
                            required
                            onChange={onChangePassword}
                            type="password"
                        ></Input>
                    </div>
                    <div>
                        <label htmlFor="user-password-check">
                            비밀번호체크
                        </label>
                        <br />
                        <Input
                            name="user-password-check"
                            value={passwordCheck}
                            required
                            onChange={onChangePasswordCheck}
                            type="password"
                        ></Input>
                        {passwordError && (
                            <ErrorMessage>
                                비밀번호가 일치하지 않습니다.
                            </ErrorMessage>
                        )}
                    </div>
                    <div>
                        <Checkbox
                            name="user-term"
                            checked={term}
                            onChange={onChangeTerm}
                        >
                            약관동의
                        </Checkbox>
                        {termError && (
                            <ErrorMessage>
                                약관에 동의하셔야 합니다.
                            </ErrorMessage>
                        )}
                    </div>
                    <SubmitButtonWrapper>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={signUpLoading}
                        >
                            가입하기
                        </Button>
                    </SubmitButtonWrapper>
                </FormWrapper>
            </AppLayout>
        </>
    );
};

export default SignUp;
