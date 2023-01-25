import { Layout, Space, Typography } from 'antd';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Cryptocurrencies } from './components/Cryptocurrencies';
import { CryptoDetails } from './components/CryptoDetails';
import { Exchanges } from './components/Exchanges';
import { HomePage } from './components/HomePage';
import { News } from './components/News';
import { Navbar } from './components/Navbar';

function App() {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Routes>
                            <Route exact path="/" element={<HomePage />} />
                            <Route path="exchanges" element={<Exchanges />} />
                            <Route
                                path="cryptocurrencies"
                                element={<Cryptocurrencies />}
                            />
                            <Route
                                path="crypto/:coinId"
                                element={<CryptoDetails />}
                            />
                            <Route path="news" element={<News />} />
                        </Routes>
                    </div>
                </Layout>
                <div className="footer">
                    <Typography.Title
                        level={5}
                        style={{ color: 'white', textAlign: 'center' }}
                    >
                        CryptoInfo <br />
                        All rights reserved
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/exchanges">Exchanges</Link>
                        <Link to="/news">News</Link>
                    </Space>
                </div>
            </div>
        </div>
    );
}

export default App;
