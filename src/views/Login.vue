<template>
    <div class="bigbox" :style="{ backgroundImage: 'url( ' + Image + ' )' }">

        <div class="b">
            <div class="login">
                <div class="login-box">
                    <div class="login-box1" :style="{ order: box1Order }">
                        <div class="login-box-title ">
                            <h3>{{ box1Content }}页面</h3>
                        </div>
                        <div class="login-box-c">
                            <el-form :inline="true" :model="formInline" action="http://localhost:3000/addUser">
                                <el-form-item label="账号">
                                    <el-input v-model="formInline.name" placeholder="登录"  type="text"></el-input>
                                </el-form-item>
                                <el-form-item label="密码">
                                    <el-input v-model="formInline.password"  type="password" placeholder="密码"></el-input>
                                </el-form-item>

                            </el-form>
                        </div>
                        <div class="login-box-b ">
                            <div v-if="counter" :style="{ display: none }">
                                <el-button plain @click="open1" style="margin-right: 50px;">
                                    登录
                                </el-button>
                            </div>

                            <div v-else></div>
                            <div>
                                <el-button  plain @click="toggleOrder(); open2(); changeBackground();">
                                    注册
                                </el-button>
                            </div>
                        </div>
                    </div>
                    <div class="login-box2" :style="{ order: box2Order, backgroundImage: 'url( ' + Image + ' )' }">
                        <!-- {{ box2Content }} -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>


</script>
<script>
import axios from 'axios';
// import { mapGetters } from 'vuex';
export default {

    data() {
        return {
            //设置控制登录和注册的盒子
            box1Order: 1,
            box2Order: 2,
            //动态文字
            box1Content: '登录',
            box2Content: '注册',
            //注册按钮显示的注册页面
            counter: true,
            Image: '../src/assets/f1.jpg',  // 初始化背景图片路径
            formInline: {
                name: '',
                password: '',
                region: '',
            }
        }
    },
    created() {
        console.log(this.$slots)

    },

    methods: {
        onSubmit() {
            console.log('submit!');
        },
        open1() {
            this.loginUser();
        },

        loginUser() {
            const name = this.formInline.name;
            const password = this.formInline.password;

            axios.post('http://localhost:3000/loginUser', {
                name: name,
                password: password,
            })
                .then(response => {
                    if (response.data !== 'failure') { // 如果返回的不是登录失败消息
                        const userData = response.data;

                        // 调用 Vuex action 设置全局 userData 数据
                        this.$notify({
                            title: '登录',
                            message: '登录成功',
                            type: 'success',
                        });
                        // 调用 action 传入 userData
                        console.log(userData);
                        // 在用户登录成功或获取数据后，将数据存储到 Vuex 和 LocalStorage
                        this.$store.commit('setUserData', userData); // 在 Vuex 中设置用户数据
                        localStorage.setItem('userData', JSON.stringify(userData));
                        // 在 LocalStorage 中存储用户数据
                        // 登录成功后跳转到用户相关页面
                        // this.$router.push('/' + userData.name + '/knowledge');
                        // 根据用户角色跳转到不同页面
                        if (userData.grade === "manage") {
                            this.$router.push('/manage'); // 跳转到管理页面
                        } else {
                            this.$router.push('/' + userData.name + '/knowledge'); // 其他用户跳转到知识页面
                        }

                    } else {
                        this.$notify({
                            title: '登录',
                            message: '登录失败，请检查账号密码',
                            type: 'error',
                        });
                    }
                })
                .catch(error => {
                    console.error('登录请求失败:', error);
                });
        },

        open2() {
            if (!this.counter) {
                //点击切换显示登录的按钮
                this.registerUser();
            }
            // 切换计数器的状态
            this.counter = !this.counter;
        },

        // 处理注册请求
        registerUser() {
            const name = this.formInline.name; // 获取表单中的用户名
            const password = this.formInline.password; // 获取表单中的密码


            // 在前端添加用户名和密码长度验证逻辑
            if (name.length < 3 || password.length < 6) {
                this.$notify({
                    title: '注册',
                    message: '用户名至少包含3个字符',
                    type: 'error',
                });
                return;
            }

            // 在前端添加密码复杂度验证逻辑
            const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,}$/;
            if (!password.match(passwordRegex)) {
                this.$notify({
                    title: '注册',
                    message: '密码至少为6位，需要包含数字和常规字符以及符号，',
                    type: 'error',
                });
                return;
            }

            axios.post('http://localhost:3000/addUser', { // 发起POST请求到后端接口
                name: name, // 提交用户名数据
                password: password // 提交密码数据
            })
                .then(response => { // 处理响应
                    if (response.status === 200) { // 如果响应状态码为200（成功）
                        // alert('注册成功!'); // 弹出注册成功提示
                        this.$notify({ // 使用ElementUI的notify方法显示消息
                            title: '注册',
                            message: '注册成功',
                            type: 'success',
                        });
                    } else {
                        // alert('注册失败，请重试'); // 弹出注册失败提示
                        this.$notify({
                            title: '注册',
                            message: '注册失败',
                            type: 'error',
                        });
                    }
                })
                .catch(error => { // 捕获请求失败错误
                    console.error('注册请求失败:', error); // 在控制台输出注册请求失败的错误信息
                    this.$notify({
                        title: '注册',
                        message: '注册失败',
                        type: 'error',
                    });
                });

        },
        toggleOrder() {
            // 切换盒子的排序方式
            this.box1Order = this.box1Order === 1 ? 2 : 1;
            this.box2Order = this.box2Order === 1 ? 2 : 1;
            // 点击改变盒子里面的元素
            this.box1Content = this.box1Order === 1 ? '登录' : '注册';
            this.box2Content = this.box2Order === 1 ? '注册' : '登录';
        },
        changeBackground() {
            // 当前背景图片是 f1 时才改变为 f2
            if (this.Image === '../src/assets/f1.jpg') {
                this.Image = '../src/assets/f2.jpg';
            } else {
                this.Image = '../src/assets/f1.jpg';
            }
        }
    },
}
</script>



<style lang="scss">
.homepage-hero-module,
.video-container {
    position: relative;
    height: 100vh;
    overflow: hidden;

}

.video-container {
    z-index: 0;
    position: absolute;
}

.fillWidth {
    width: 100%;
}


.bigbox {
    width: 100%;
    height: 100%;

    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    transition: background-size 0.3s ease;

    .bigbox::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(255, 255, 255, 0.8);
        /* 半透明背景 */
        // backdrop-filter: blur(10px);
        /* 模糊效果 */
    }


    .b {
        width: 100%;
        height: calc(100vh);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;

        // 不重复
        .login {
            width: 500px;
            height: 200px;
            // background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            // padding-left: 100px;
            padding: 20px;
            // opacity: 0.8;
            background-color: rgba(255, 255, 255, 0.7);
            border-radius: 5px;

            .login-box {
                width: 500px;
                height: 100%;
                // background: #fff;
                display: flex;


                .login-box1 {
                    // margin-top: 30px;
                    width: 50%;
                    height: 100%;
                    // border: 1px solid;

                    // display: flex;
                    .login-box-title {
                        // margin-top: 20px;
                        margin-bottom: 20px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: #409EFF;
                        // font-family:Verdana, Geneva, Tahoma, sans-serif
                    }

                    .login-box-b {
                        display: flex;
                        justify-content: center;
                        align-items: center;

                    }
                }

            }
        }
    }
}
</style>


<style>
.login-box2 {
    width: 50%;
    height: 100%;
    /* border: 1px solid; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-image: url(../assets/f1.jpg); */
    background-size: 90% 90%;
    background-repeat: no-repeat;
    background-position: center;
    transition: background-size 0.3s ease;
    /* 平滑过渡效果 */
    /* filter: blur(0.5px); //设置模糊度 */
}

.login-box:hover .login-box2 {
    background-size: 100% 100%;
    /* 鼠标悬停时背景图片放大到 100% */
    /* filter: blur(0px); 设置模糊度 */
}

/* .login-box2::before {
    content: "";
    position: absolute;
    top: -10%; right: -10%; bottom: -10%; left: -10%;
    background-image: inherit;
    background-size: cover;
    filter: blur(10px); 
    z-index: -1; 
    transition: transform 0.5s ease; 
    transform: scale(1.1); 
} */
</style>