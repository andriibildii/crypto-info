import { Col, Row } from 'antd';
import { useGetExchangesQuery } from '../services/cryptoApi';
import Loader from './Loader';

export const Exchanges = () => {
    const { isFetching, isError, error } = useGetExchangesQuery();
    // const exchangesList = data?.data?.exchanges;

    if (isFetching) return <Loader />;

    return (
        <>
            <Row>
                <Col span={6}>Exchanges</Col>
                <Col span={6}>24h Trade Volume</Col>
                <Col span={6}>Markets</Col>
                <Col span={6}>Change</Col>
            </Row>
            <Row>
                {isError && (
                    <Col span={24} className="exchange-error">
                        <Row>{error.data.message}</Row>
                    </Col>
                )}
                {/* {exchangesList.map((exchange) => (
					<Col span={24}>
						<Collapse>
							<Panel
								key={exchange.uuid}
								showArrow={false}
								header={
									<Row key={exchange.uuid}>
										<Col span={6}>
											<Text>
												<strong>{exchange.rank}.</strong>
											</Text>
											<Avatar
												className="exchange-image"
												src={exchange.iconUrl}
											/>
											<Text>
												<strong>{exchange.name}</strong>
											</Text>
										</Col>
										<Col span={6}>${millify(exchange.volume)}</Col>
										<Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
										<Col span={6}>{millify(exchange.marketShare)}%</Col>
									</Row>
								}
							>
								{HTMLReactParser(exchange.description || "")}
							</Panel>
						</Collapse>
					</Col>
				))} */}
            </Row>
        </>
    );
};
