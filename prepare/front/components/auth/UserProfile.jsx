import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../reducers/user";

const UserProfile = () => {
    const dispatch = useDispatch();
    const onLogout = useCallback(() => {
        dispatch(logoutAction());
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
            <Card.Meta title="Zino" avatar={<Avatar>ZINO</Avatar>}></Card.Meta>
            <Button onClick={onLogout}>로그아웃</Button>
        </Card>
    );
};

export default UserProfile;
