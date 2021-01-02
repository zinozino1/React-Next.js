import React, { useEffect } from "react";
import AppLayout from "../components/Layouts/AppLayout";
import PostForm from "../components/main/home/PostForm";
import PostCard from "../components/main/home/PostCard";
import { useDispatch, useSelector } from "react-redux";
import PostCardList from "../components/main/home/PostCardList";
import { loadPostsRequestAction } from "../reducers/post";
import { Spin } from "antd";
import styled from "styled-components";

const SpinWrapper = styled.div`
    text-align: center;

    border-radius: 4px;
    margin-bottom: 20px;
    padding: 30px 50px;
    margin: 20px 0;
`;

const Home = () => {
    // request 2번되는 문제 + virtualized 필요

    const dispatch = useDispatch();

    const { me } = useSelector(({ user }) => ({
        me: user.me,
    }));
    const { mainPosts, loadPostsLoading } = useSelector((state) => state.post);

    const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        if (scrollTop + clientHeight >= scrollHeight && !loadPostsLoading) {
            dispatch(loadPostsRequestAction());
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        dispatch(loadPostsRequestAction()); // 첫로딩
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <AppLayout>
            {me && <PostForm></PostForm>}

            <PostCardList data={mainPosts}></PostCardList>
            {loadPostsLoading && (
                <SpinWrapper>
                    <Spin />
                </SpinWrapper>
            )}
        </AppLayout>
    );
};

export default Home;
