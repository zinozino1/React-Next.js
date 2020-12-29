import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { PlusOutlined } from "@ant-design/icons";
import ImagesZoom from "./ImagesZoom/index";

const PostImages = ({ images }) => {
    const [showImagesZoom, setShowImagesZoom] = useState(false);
    const onZoom = useCallback(() => {
        setShowImagesZoom(true);
    }, []);
    const onClose = useCallback(() => {
        setShowImagesZoom(false);
    }, []);

    if (images.length === 1) {
        return (
            <>
                <img
                    role="presentation"
                    src={images[0].src}
                    alt={images[0].src}
                    onClick={onZoom}
                    style={{ width: "60%", height: "60%", margin: "auto" }}
                ></img>
                {showImagesZoom && (
                    <ImagesZoom images={images} onClose={onClose}></ImagesZoom>
                )}
            </>
        );
    }

    if (images.length === 2) {
        return (
            <>
                <img
                    style={{ width: "50%" }}
                    role="presentation"
                    src={images[0].src}
                    alt={image[0].src}
                    onClick={onZoom}
                ></img>
                <img
                    style={{ width: "50%" }}
                    role="presentation"
                    src={images[1].src}
                    alt={image[1].src}
                    onClick={onZoom}
                ></img>
                {showImagesZoom && (
                    <ImagesZoom images={images} onClose={onClose}></ImagesZoom>
                )}
            </>
        );
    }

    return (
        <>
            <div>
                <img
                    role="presentation"
                    src={images[0].src}
                    alt={images[0].src}
                    onClick={onZoom}
                    width="50%"
                ></img>
                <div
                    role="presentation"
                    style={{
                        display: "inline-block",
                        width: "50%",
                        textAlign: "center",
                        verticalAlign: "middle",
                    }}
                >
                    <PlusOutlined onClick={onZoom}></PlusOutlined>
                    <br />
                    {images.length - 1}개의 사진 더 보기
                </div>
            </div>
            {showImagesZoom && (
                <ImagesZoom images={images} onClose={onClose}></ImagesZoom>
            )}
        </>
    );
};

PostImages.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
};

export default PostImages;
