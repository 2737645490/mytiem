<template>
    <div class="manbig">
        <div class="mantop">
            <div class="mantop1">
                <h1 style="color: ba">新知管理系统</h1>
            </div>
            <div class="mantop2">
                <div class="mantop2-le">
                    欢迎使用本系统管理员--
                    <p style="color: #409EFF;font-size: 20px;font-weight: 600;">{{ this.$store.state.userData.name }}</p>
                </div>
                <div class="mantop2-ct">
                </div>
                <div class="mantop2-ri">
                    <el-link type="info">退出登录</el-link>
                </div>
            </div>
        </div>

        <div class="mance">
            <div>
                <el-row class="tac">
                    <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                        <el-menu-item index="1" @click="handleMenuClick('1')">
                            <i class="el-icon-s-home"></i>
                            <span>首页</span>
                        </el-menu-item>
                        <el-menu-item index="2" @click="handleMenuClick('2')">
                            <i class="el-icon-user"></i>
                            <span slot="title">用户管理</span>
                        </el-menu-item>
                        <el-menu-item index="3" @click="handleMenuClick('3')">
                            <i class="el-icon-document"></i>
                            <span slot="title">新知文章管理</span>
                        </el-menu-item>
                        <el-menu-item index="4" @click="handleMenuClick('4')">
                            <i class="el-icon-menu"></i>
                            <span slot="title">组件管理</span>
                        </el-menu-item>
                    </el-menu>
                </el-row>
            </div>
            <div style="margin: 40px;">
                <component :is="currentComponent"></component>
            </div>

        </div>


    </div>
</template>



<script>
import ManageHome from '../views/ManageHome.vue';
import ManageUser from '../views/ManageUser.vue';
import ManageArticle from '../views/ManageArticle.vue';
import ManageComponent from '../views/ManageComponent.vue';

export default {
    components: {
        ManageHome,
        ManageUser,
        ManageArticle,
        ManageComponent
    },
    data() {
        return {
            currentComponent: 'ManageHome',
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        handleMenuClick(index) {
    this.currentComponent = index;
    const components = {
        "1": 'ManageHome',
        "2": 'ManageUser',
        "3": 'ManageArticle',
        "4": 'ManageComponent'
    };

    this.currentComponent = components[index] || 'ManageHome'; // 默认显示首页
}
    },
    mounted() {
        // console.log(this.$store.state.Arr);
        // console.log(this.$store.state.userData);
        // this.$store.dispatch('fetchBookData');
        // console.log(this.$store.state.BookArr);

    },
}
</script>

<style>
.mantop {
    width: 100%;
    height: 80px;
    /* border: 1px solid; */
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    display: flex;
    /* background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%); */
}

.mantop1 {
    width: 20%;
    height: 100%;
    /* border: 1px solid; */
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04); */
    display: flex;
    justify-content: center;
    align-items: center;
}

.mantop2 {
    width: 80%;
    height: 100%;
    /* border: 1px solid; */
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04); */
    display: flex;
}

.mantop2-le {
    width: 30%;
    /* height: 100%; */
    /* border: 1px solid; */
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04); */
    display: flex;
    justify-content: center;
    align-items: center;


}

.mantop2-ct {
    width: 40%;
    height: 100%;
    /* border: 1px solid; */
    display: flex;
    justify-content: center;
    align-items: center;
}

.mantop2-ri {
    width: 30%;
    height: 100%;
    /* border: 1px solid; */
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04); */
    display: flex;
    justify-content: center;
    align-items: center;
}

.mance {
    width: 100%;
    height: auto;
    /* border: 1px solid; */
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04); */
    display: flex;
}

.el-row {
    /* height: 100%; */
    width: 30%;
    /* border: 1px solid; */
    margin-top: 30px;
}

/* .tac{
    display: flex;
} */
</style>