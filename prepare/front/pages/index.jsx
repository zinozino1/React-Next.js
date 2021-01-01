import React from "react";
import AppLayout from "../components/Layouts/AppLayout";
import PostForm from "../components/main/home/PostForm";
import PostCard from "../components/main/home/PostCard";
import { useDispatch, useSelector } from "react-redux";
import PostCardList from "../components/main/home/PostCardList";

const Home = () => {
    const { me } = useSelector(({ user }) => ({
        me: user.me,
    }));
    const { mainPosts } = useSelector((state) => state.post);

    return (
        <AppLayout>
            {me && <PostForm></PostForm>}

            <PostCardList data={mainPosts}></PostCardList>
        </AppLayout>
    );
};

export default Home;
