import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import UserProfile from "../auth/UserProfile";
import LoginForm from "../auth/LoginForm";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

const SearchWrapper = styled(Input.Search)`
    vertical-align: middle;
`;

const AppLayout = ({ children }) => {
    // 페이지 하단 좌우스크롤이 신경쓰인다면 gutter의 마진을 제거해줘야함. 필요하면 강의 참조

    const { isLoggedIn } = useSelector(({ user }) => ({
        isLoggedIn: user.isLoggedIn,
    }));
    const { mainPosts } = useSelector((state) => state.post);

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile">
                        <a>프로필</a>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchWrapper
                        placeholder="input search text"
                        enterButton
                    ></SearchWrapper>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup">
                        <a>회원가입</a>
                    </Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col
                    xs={24}
                    sm={6}
                    md={6}
                    style={{ border: "1px solid black" }}
                >
                    {isLoggedIn ? (
                        <UserProfile></UserProfile>
                    ) : (
                        <LoginForm></LoginForm>
                    )}
                </Col>
                <Col
                    xs={24}
                    sm={12}
                    md={12}
                    style={{ border: "1px solid black" }}
                >
                    {children}
                </Col>
                <Col
                    xs={24}
                    sm={6}
                    md={6}
                    style={{ border: "1px solid black" }}
                >
                    <a
                        href="https://github.com/zinozino1"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Made by zino
                    </a>
                </Col>
            </Row>
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;
