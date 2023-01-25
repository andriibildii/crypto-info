import React from 'react';
import { Col, Row, Typography } from 'antd';
import { LineChart } from './LineChart';

export const Chart = ({ coinHistory, currentPrice, coinName }) => {
    const coinPrice = [];
    const coinTimestamp = [];
    const coinTimestampBeforeConvert = [];

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory?.data?.history[i].price);
        coinTimestampBeforeConvert.push(
            coinHistory?.data?.history[i].timestamp,
        );
        coinTimestamp.push(
            new Date(
                coinHistory.data.history[i].timestamp,
            ).toLocaleDateString(),
        );
    }

    return (
        <>
            <Row className="chart-header">
                <Typography.Title level={2} className="chart-title">
                    {coinName} Price Chart{' '}
                </Typography.Title>
                <Col className="price-container">
                    <Typography.Title level={5} className="price-change">
                        Change: {coinHistory?.data?.change}%
                    </Typography.Title>
                    <Typography.Title level={5} className="current-price">
                        Current {coinName} Price: $ {currentPrice}
                    </Typography.Title>
                </Col>
            </Row>
            <LineChart coinTimestamp={coinTimestamp} coinPrice={coinPrice} />
        </>
    );
};
