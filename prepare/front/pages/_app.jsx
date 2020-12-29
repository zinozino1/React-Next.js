import React from "react";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import Head from "next/head";
import wrapper from "../store/configureStore";
import withReduxSaga from "next-redux-saga";

// 페이지별로 공통적인 것 처리

const App = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8"></meta>
                <title>Home</title>
            </Head>
            <Component></Component>
        </>
    );
};

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(withReduxSaga(App));
