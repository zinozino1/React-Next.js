import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAction } from "../../reducers/user";
import Router from "next/router";

const UserProfile = () => {
    const dispatch = useDispatch();

    const { me } = useSelector((state) => state.user);
    const { logOutLoading } = useSelector((state) => state.user);

    const onLogout = useCallback(() => {
        dispatch(logoutRequestAction());
    }, []);

    const onRedirectProfile = useCallback(() => {
        Router.push("/profile");
    }, []);

    return (
        <Card
            actions={[
                <div key="twit" onClick={onRedirectProfile}>
                    트윗
                    <br /> {me.Posts.length}
                </div>,
                <div key="followings" onClick={onRedirectProfile}>
                    팔로잉
                    <br /> {me.Followings.length}
                </div>,
                <div key="followers" onClick={onRedirectProfile}>
                    팔로워
                    <br /> {me.Followers.length}
                </div>,
            ]}
        >
            <Card.Meta
                title={me.nickname}
                avatar={<Avatar>{me.nickname[0]}</Avatar>}
            ></Card.Meta>

            <Button onClick={onLogout} loading={logOutLoading}>
                로그아웃
            </Button>
        </Card>
    );
};

export default UserProfile;
