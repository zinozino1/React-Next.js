import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const PostCardContent = ({ postData }) => {
    return (
        <div>
            {postData.split(/(#[^\s#]+)/).map((v, i) =>
                v.includes("#") ? (
                    <Link href="#" key={i}>
                        <a>{v}</a>
                    </Link>
                ) : (
                    <span key={i}>{v}</span>
                ),
            )}
        </div>
    );
};

PostCardContent.propTypes = {
    postData: PropTypes.string.isRequired,
};

export default PostCardContent;
