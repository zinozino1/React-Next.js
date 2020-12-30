import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAction } from "../../reducers/user";

const UserProfile = () => {
    const dispatch = useDispatch();

    const { me } = useSelector((state) => state.user);
    const { isLoggingOut } = useSelector((state) => state.user);

    const onLogout = useCallback(() => {
        dispatch(logoutRequestAction());
    }, []);

    return (
        <Card
            actions={[
                <div key="twit">
                    <br /> 트윗
                </div>,
                <div key="followings">
                    <br />
                    팔로잉
                </div>,
                <div key="followers">
                    <br />
                    팔로워
                </div>,
            ]}
        >
            <Card.Meta
                title={me.nickname}
                avatar={<Avatar>{me.nickname[0]}</Avatar>}
            ></Card.Meta>

            <Button onClick={onLogout} loading={isLoggingOut}>
                로그아웃
            </Button>
        </Card>
    );
};

export default UserProfile;
