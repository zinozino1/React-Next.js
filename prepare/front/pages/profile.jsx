import React, { useEffect } from "react";
import AppLayout from "../components/Layouts/AppLayout";
import Head from "next/head";
import NicknameEditForm from "../components/main/profile/NicknameEditForm";
import FollowList from "../components/main/profile/FollowList";
import { useSelector } from "react-redux";
import Router from "next/router";

const Profile = () => {
    const { me } = useSelector((state) => state.user);

    useEffect(() => {
        if (!me) Router.push("/");
    }, [me]);

    if (!me) return null;

    return (
        <>
            <Head>
                {/* _app.js에 title 있지만 여기서 오버라이딩 */}
                <title>내 프로필 | jinho</title>
            </Head>
            <AppLayout>
                <NicknameEditForm></NicknameEditForm>
                <FollowList
                    header="팔로잉 목록"
                    data={me.Followings}
                ></FollowList>
                <FollowList
                    header="팔로워 목록"
                    data={me.Followers}
                ></FollowList>
            </AppLayout>
        </>
    );
};

export default Profile;
