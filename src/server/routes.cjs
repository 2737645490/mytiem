// routes.js
// 导入路由
const express = require('express');
const db = require('./db.cjs');
//创建路由对象
const router = express.Router();

router.use(express.json());// 添加此行以解析 JSON 数据

router.post('/loginUser', (req, res,next) => {
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
            const user = results[0]; // 获取查询到的第一个用户信息

            // 删除敏感信息，并将完整用户信息返回给前端
            delete user.password; // 从返回数据中删除密码信息
            res.json(user); // 登录成功，返回完整用户信息
            next();
        } else {
            res.send('failure'); // 登录失败
            // res.json(user); 
        }
    });
});

router.post('/addUser', (req, res) => {
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







router.post('/updateUser', (req, res) => {
    // 从请求体中获取用户输入的数据
    const id = req.body.id;
    const name = req.body.name;
    const gender = req.body.gender;
    const address = req.body.address;
    const img=req.body.img;
    // SQL更新语句，根据id更新用户信息
    const sqlUpdate = "UPDATE users SET name = ?, gender = ?, address = ?,img = ? WHERE id = ?";
    // 执行数据库更新操作
    db.query(sqlUpdate, [name, gender, address,img, id], (err, results) => {
        if (err) {
            return res.status(500).send(err.message); // 发送错误响应
        }
        // 更新成功
        res.send('success');
    });
});



router.post('/updatemb', (req, res) => {
    // 从请求体中获取用户输入的数据
    const id = req.body.id;
    const mb = req.body.mb;
    // SQL更新语句，根据id更新用户手机号
    const sqlUpdate = "UPDATE users SET mb = ? WHERE id = ?";
    // 执行数据库更新操作
    db.query(sqlUpdate, [mb, id], (err, results) => {
        if (err) {
            return res.status(500).send(err.message); // 发送错误响应
        }
        // 更新成功
        res.send('success');
    });
});



// 添加获取newknowledge全部数据的 API 端点
router.get('/arr', (req, res) => {
    // SQL查询语句，获取newknowledge表中的所有数据
    const sqlQuery = "SELECT * FROM newknowledge";
    
    // 执行数据库查询操作
    db.query(sqlQuery, (err, results) => {
        if (err) {
            return res.status(500).send(err.message); // 发送错误响应
        }
        res.json(results); // 返回newknowledge表中的所有数据
    });
});


// 添加获取全部数据的 API 端点
router.get('/book', (req, res) => {
    // SQL查询语句，获取newknowledge表中的所有数据
    const sqlQuery = "SELECT * FROM books";
    
    // 执行数据库查询操作
    db.query(sqlQuery, (err, results) => {
        if (err) {
            return res.status(500).send(err.message); // 发送错误响应
        }
        res.json(results); // 返回newknowledge表中的所有数据
    });
});


// 添加提交数据的 API 端点
router.post('/submitData', (req, res) => {
    // 从请求体中获取提交的数据
    const data = req.body;
    // SQL插入语句，将数据插入数据库
    const sqlInsert = "INSERT INTO newknowledge2 ( authorname, authoravatar, loves, date, concern, love,  txt, imgs, class_, paragraph1, paragraph2, paragraph3, paragraph4, news1, news2, news3) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    // 执行数据库插入操作
    db.query(sqlInsert, [
         data.authorname, data.authoravatar, data.loves, data.date, data.concern, data.love, data.txt, data.imgs, data.class_, data.paragraph1, data.paragraph2, data.paragraph3, data.paragraph4, data.news1, data.news2, data.news3
    ], (err, results) => {
        if (err) {
            return res.status(500).send(err.message); // 发送错误响应
        }
        // 提交成功
        res.send('success');
    });
});


//删除文章
router.post('/deleteData', (req, res) => {
    const knowledgeId = req.body.knowledgeId; // 获取前端传递的 knowledgeId
    // 这里根据你的实际数据库和数据表名称来修改 SQL 语句
    const sql = 'DELETE FROM newknowledge WHERE authorid = ?'; 
    // 执行 SQL 删除操作
    db.query(sql, [knowledgeId], (err, result) => {
        if (err) {
            console.error('错误', err);
            res.status(500).json({ error: 'Error deleting article' });
            return;
        }

        console.log('删除成功了喔');
        res.status(200).json({ message: 'Article deleted successfully' });
    });
});

//吧new表里面的数据给传给vuex的接口
// 添加获取全部数据的 API 端点
router.get('/newarr', (req, res) => {
    // SQL查询语句，获取newknowledge2表中的所有数据
    const sqlQuery = "SELECT * FROM newknowledge2";
    
    // 执行数据库查询操作
    db.query(sqlQuery, (err, results) => {
        if (err) {
            return res.status(500).send(err.message); // 发送错误响应
        }
        res.json(results); // 返回newknowledge表中的所有数据
    });
});

router.post('/mdeleteData', (req, res) => {
    const articleId = req.body.articleId; // 获取前端传递的 articleId
    // 这里根据你的实际数据库和数据表名称来修改 SQL 语句
    const sql = 'DELETE FROM newknowledge WHERE authorid = ?'; 
    // 执行 SQL 删除操作
    db.query(sql, [articleId], (err, result) => {
        if (err) {
            console.error('错误', err);
            res.status(500).json({ error: 'Error deleting article' });
            return;
        }
        console.log('删除成功了喔');
        res.status(200).json({ message: 'Article deleted successfully' });
    });
});



router.post('/moveToMainTable', (req, res) => {
    const article = req.body; // 获取请求体中的文章数据

    const sqlInsert = "INSERT INTO newknowledge (authorid, authorname, authoravatar, loves, date, concern, love, txt, imgs, class_, paragraph1, paragraph2, paragraph3, paragraph4, news1, news2, news3) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const sqlDelete = 'DELETE FROM newknowledge2 WHERE authorid = ?';

    db.query(sqlInsert, [
        article.authorid, article.authorname, article.authoravatar, article.loves, article.date, article.concern, article.love, article.txt, article.imgs, article.class_, article.paragraph1, article.paragraph2, article.paragraph3, article.paragraph4, article.news1, article.news2, article.news3
    ], (err, insertResults) => {
        if (err) {
            console.error("Failed to insert into newknowledge:", err);
            return res.status(500).send(err.message);
        }

        db.query(sqlDelete, [article.authorid], (deleteErr, deleteResults) => {
            if (deleteErr) {
                console.error("Failed to delete from newknowledge2:", deleteErr);
                return res.status(500).send(deleteErr.message);
            }
            
            console.log(`Deleted from newknowledge2 where authorid = ${article.authorid}`);
            res.send('success');
        });
    });
});


// 删除表二
router.post('/mdeleteData2', (req, res) => {
    const articleId = req.body.articleId; // 获取前端传递的 articleId
    // 这里根据你的实际数据库和数据表名称来修改 SQL 语句
    const sql = 'DELETE FROM newknowledge2 WHERE authorid = ?'; 
    // 执行 SQL 删除操作
    db.query(sql, [articleId], (err, result) => {
        if (err) {
            console.error('错误', err);
            res.status(500).json({ error: 'Error deleting article' });
            return;
        }
        console.log('删除成功了喔');
        res.status(200).json({ message: 'Article deleted successfully' });
    });
});




// 添加获取newknowledge全部数据的 API 端点
router.get('/user', (req, res) => {
    // SQL查询语句，获取newknowledge表中的所有数据
    const sqlQuery = "SELECT * FROM users";
    
    // 执行数据库查询操作
    db.query(sqlQuery, (err, results) => {
        if (err) {
            return res.status(500).send(err.message); // 发送错误响应
        }
        res.json(results); // 返回newknowledge表中的所有数据
    });
});




//向外导出路由
module.exports = router;

