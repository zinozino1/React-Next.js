import React from "react";
import AppLayout from "../components/Layouts/AppLayout";
import Head from "next/head";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
    const followerList = [
        { nickname: "1asdfasdf" },
        { nickname: "23432" },
        { nickname: "3asdf" },
        { nickname: "1asdf" },
        { nickname: "2asdff" },
        { nickname: "3sadf" },
        { nickname: "sadf1" },
        { nickname: "sadf2" },
        { nickname: "asdf3" },
    ];
    const followingList = [
        { nickname: "asdf1" },
        { nickname: "ssdf2" },
        { nickname: "3" },
        { nickname: "1" },
        { nickname: "2" },
        { nickname: "2138903" },
        { nickname: "1" },
        { nickname: "2" },
        { nickname: "3" },
    ];
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
                    data={followingList}
                ></FollowList>
                <FollowList
                    header="팔로워 목록"
                    data={followerList}
                ></FollowList>
            </AppLayout>
        </>
    );
};

export default Profile;
