import React from "react";

const PostCard = ({ item }) => {
    return <div>{item.content}</div>;
};

export default React.memo(PostCard);
