//  React 框架核心包
// ReactDOM： 专门做渲染相关的包

import React, {Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// 根组件
// import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
const Home = lazy(() => import('./home/home'));
const About = lazy(() => import('./App'));

const App = () => (
    <>
        <div>
            <a href="/">首页</a>
            <a href="/About" style={{marginLeft: '20px'}}>About</a>
        </div>
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Suspense>
        </Router>
    </>
);


root.render(
    // 严格模式需要去掉
    // useEffect的执行时机（会执行两次）
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
