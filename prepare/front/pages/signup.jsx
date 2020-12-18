import React from "react";
import AppLayout from "../components/Layouts/AppLayout";
import Head from "next/head";

const SignUp = () => {
    return (
        <>
            <Head>
                {/* _app.js에 title 있지만 여기서 오버라이딩 */}
                <title>회원가입 | jinho</title>
            </Head>
            <AppLayout>
                <div>SignUp</div>
            </AppLayout>
        </>
    );
};

export default SignUp;
