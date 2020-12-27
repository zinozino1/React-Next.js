import React from "react";
import PostCard from "./PostCard";

const PostCardList = ({ data }) => {
    return (
        <>
            {data.map((v, i) => (
                <PostCard key={v.id} item={v}></PostCard>
            ))}
        </>
    );
};

export default PostCardList;
