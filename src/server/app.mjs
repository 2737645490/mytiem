// app.js

// const express = require('express');
// const cors = require('cors');
// const routes = require('./routes.cjs');
import express from 'express';
import cors from 'cors';
import routes from './routes.cjs';

const app = express();

// 全局中间件res.send()只能共用
// app.use((req,res,next)=>{
//     console.log('最简单的中间件')
//     next();
//     res.send()
// });


app.use(cors());
// 使用 express.json() 中间件来解析 JSON 请求体
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(3000, () => {
    console.log('启动');
});