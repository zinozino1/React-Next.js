import React from "react";
import { List, Button, Card } from "antd";
import { StopTwoTone } from "@ant-design/icons";
import styled from "styled-components";
import PropTypes from "prop-types";

const LoadMoreWrapper = styled.div`
    text-align: center;
    margin: 10px;
`;

const ListItemWrapper = styled(List.Item)`
    margin-top: 20px;
`;

const FollowList = ({ header, data }) => {
    return (
        <List
            header={<div>{header}</div>}
            style={{ marginBottom: 20 }}
            grid={{ gutter: 4, xs: 2 }} // 반응형
            size="small"
            dataSource={data}
            bordered
            loadMore={
                <LoadMoreWrapper>
                    <Button>더보기</Button>
                </LoadMoreWrapper>
            }
            renderItem={(item) => (
                <ListItemWrapper>
                    <Card actions={[<StopTwoTone key="stop"></StopTwoTone>]}>
                        <Card.Meta description={item.nickname}></Card.Meta>
                    </Card>
                </ListItemWrapper>
            )}
        ></List>
    );
};

FollowList.propTypes = {
    header: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
};

export default FollowList;
