import React from "react";
import AppLayout from "../components/Layouts/AppLayout";
import PostForm from "../components/main/home/PostForm";
import PostCard from "../components/main/home/PostCard";
import { useDispatch, useSelector } from "react-redux";
import PostCardList from "../components/main/home/PostCardList";

const Home = () => {
    const { isLoggedIn } = useSelector(({ user }) => ({
        isLoggedIn: user.isLoggedIn,
    }));
    const { mainPosts } = useSelector((state) => state.post);

    return (
        <AppLayout>
            {isLoggedIn && <PostForm></PostForm>}

            <PostCardList data={mainPosts}></PostCardList>
        </AppLayout>
    );
};

export default Home;
