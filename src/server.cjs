// 导入所需模块
const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());

// 创建数据库连接
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'mydb'
});

// 解析请求体中的json数据
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




// 处理登录请求
app.post('/loginUser', (req, res) => {
    // 从请求体中获取用户输入的数据
    const name = req.body.name;
    const password = req.body.password;


    // SQL查询语句，检查用户名和密码是否匹配
    const sqlQuery = "SELECT * FROM users WHERE name = ? AND password = ?";

    // 执行数据库查询
    db.query(sqlQuery, [name, password], (err, results) => {
        
        if (err) {
            return res.status(500).send(err.message); // 发送错误响应
        }
        if (results.length > 0) {
            res.send('success'); // 登录成功
            // const user = results[0]; // 假设只有一个用户匹配，取第一个结果
           
            
             
        } else {
            res.send('failure'); // 登录失败
        }
    });
});
// db.query('SELECT * FROM users');

// app.post('/',function(req,res){
//     res.send('hello world');
// }); 


// 处理注册请求
app.post('/addUser', (req, res) => {
    // 从请求体中获取用户输入的数据
    const name = req.body.name;
    const password = req.body.password;

    // SQL插入语句，将用户信息插入数据库
    const sqlInsert = "INSERT INTO users (name, password) VALUES (?, ?)";

    // 执行数据库插入操作
    db.query(sqlInsert, [name, password], (err, results) => {
        if (err) {
            return res.status(500).send(err.message); // 发送错误响应
        }
        // 注册成功
        res.send('success');
    });
});





// 监听3000端口
app.listen(3000, () => {
    console.log('启动！');
});