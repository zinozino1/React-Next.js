import React from "react";
import PostCard from "./PostCard";
import { useSelector } from "react-redux";

const PostCardList = ({ data }) => {
    const { me } = useSelector((state) => state.user);

    return (
        <>
            {data.map((v, i) => (
                <PostCard key={v.id} post={v}></PostCard>
            ))}
        </>
    );
};

export default PostCardList;
