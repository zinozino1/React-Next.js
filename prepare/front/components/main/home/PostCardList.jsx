import React from "react";
import PostCard from "./PostCard";

const PostCardList = ({ data }) => {
    return (
        <>
            {data.map((v, i) => (
                <PostCard key={v.id} post={v}></PostCard>
            ))}
        </>
    );
};

export default PostCardList;
