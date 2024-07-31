<template>
    <div class="big">
        <div class="ctop">
            <div class="ctop-box1">
                <h1 class="ct">新知</h1>
            </div>
            <div class="ctop-box2">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item class="breadcrumb-item" :to="{ path: '/knowledge' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item class="breadcrumb-item">详情</el-breadcrumb-item>
                </el-breadcrumb>
                <h4 style="margin-left: 60px;">{{ Arr[this.knowledgeId].txt }}</h4>

            </div>
            <div class="ctop-box3">
            </div>
        </div>
        <div style="height: 60px;"></div>
        <div class="cbody">

            <div class="cbody-t">

                <div class="author">
                    <img style="width: 30px; height: 30px;" v-if="Arr[knowledgeId]?.authoravatar"
                        :src="Arr[knowledgeId]?.authoravatar" alt="">
                    <img style="width: 30px; height: 30px;" v-else src="../assets/avatar/tm.jpg" alt="Placeholder">

                    <div style="width: 30px; height: 30px;"></div>

                    <div>作者：{{ Arr[knowledgeId]?.authorname }}</div>
                </div>
                <div style="width: 40%;"></div>
                <div class="cbody-t-b">
                    <div>热度</div>
                    <div style="display: flex;">
                        <div>
                            <img style="width: 15px;" src="../assets/热度.png" alt="">
                            {{ this.$store.state.Arr[this.knowledgeId].loves }}
                        </div>
                    </div>
                </div>
                <div class="cbody-t-b">
                    <div>类型</div>
                    <div>{{ this.$store.state.Arr[this.knowledgeId].class_ }}</div>
                </div>
            </div>
            <div class="cbody-t2">
                <h2 style="margin: 40px;">{{ this.$store.state.Arr[this.knowledgeId].txt }}</h2>
            </div>
            <div class="cimg">
                <div>
                    <el-image style="width: 100%;height: 100%;" :src="this.$store.state.Arr[this.knowledgeId].imgs">
                        <div slot="placeholder" class="image-slot">
                            加载中<span class="dot">...</span>
                        </div>
                    </el-image>
                </div>
            </div>
            <div class="p1">
                <div> {{ this.$store.state.Arr[this.knowledgeId].paragraph1 }}</div>
            </div>
            <div class="p1">
                <div> {{ this.$store.state.Arr[this.knowledgeId].paragraph2 }}</div>
            </div>
            <div class="p1">
                <div> {{ this.$store.state.Arr[this.knowledgeId].paragraph3 }}</div>
            </div>
            <div class="p1">
                <div> {{ this.$store.state.Arr[this.knowledgeId].paragraph4 }}</div>
            </div>
            <div class="p1" style="color: #ccc;">发表于{{ this.$store.state.Arr[this.knowledgeId].data }}
            </div>
            <div style="display: flex;margin: 40px;">
                <div style="margin-right: 20px;">
                    <el-tag>{{ this.$store.state.Arr[this.knowledgeId].news1 }}</el-tag>
                </div>
                <div style="margin-right: 20px;"><el-tag>{{ this.$store.state.Arr[this.knowledgeId].news2 }}</el-tag></div>
                <div style="margin-right: 20px;"><el-tag>{{ this.$store.state.Arr[this.knowledgeId].news3 }}</el-tag></div>
            </div>
            <el-divider><el-button :plain="true" type="danger" plain @click="deleteArticle"
                    v-if="isCurrentUserAuthor">删除文章</el-button></el-divider>
        </div>

        <div class="message">
            <div>
                <el-button @click="show3 = !show3">查看评论</el-button>
            </div>

            <el-divider direction="vertical"></el-divider>
            <!-- 留言 -->

            <div>
                <el-input :rows="2" v-model="newMessage" placeholder="在这里输入你的留言"></el-input>
            </div>

            <el-divider direction="vertical"></el-divider>

            <div>
                <button type="success" @click="submitMessage" class="tijiao"
                    style="height: 30px;width: 80px; border-radius: 1px;background-color: white;" plain>
                    提交留言
                </button>

            </div>
        </div>

        <div class="messagebox" v-for="(item, index) in  messages" :key="index">
            <el-collapse-transition>
                <div v-show="show3" class="mbox">
                    <div class="mbox-t">
                        <div class="mbox-t1"><img style="width: 100%;height: 100%;" :src="item.meimg" alt=""></div>

                        <div class="mbox-t2">
                            <h5>用户：{{ item.mename }}</h5>
                        </div>
                        <div class="mbox-time">
                            <h6>地点:{{ this.$store.state.userData.address }}</h6>
                        </div>
                    </div>
                    <div class="mbox-c">
                        留言：{{ item.metxt }}
                    </div>

                </div>
            </el-collapse-transition>
        </div>
    </div>
</template>

<style>
.ct {
    color: #409EFF;
}

.cb {
    background-color: #409EFF;
}

.ctop {
    width: 100%;
    height: 60px;
    /* border: 1px solid; */
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    display: flex;
    align-items: center;
    Position: fixed;
    background-color: white;
    z-index: 10;

}

.ctop-box1 {
    width: 20%;
    height: 100%;
    /* border: 1px solid; */
    display: flex;
    justify-content: center;
    align-items: center;
}

.ctop-box2 {
    width: 60%;
    height: 100%;
    /* border: 1px solid; */
    display: flex;
    /* justify-content: center; */
    align-items: center;
}

.ctop-box3 {
    width: 20%;
    height: 100%;
    /* border: 1px solid; */
    display: flex;
    justify-content: center;
    align-items: center;
}

.cbody {
    /* margin-top: 00px; */
    width: 60%;
    /* height: 1000px; */
    border: 1px solid #ccc;
    margin-left: 20%;
    background-color: white;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}

.breadcrumb-item {
    font-size: 20px;
}

.author {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    /* border: 1px solid; */
}

.cbody-t {
    height: 60px;
    width: 100%;
    /* border: 1px solid; */
    display: flex;
    /* justify-items: center;
    align-items: center; */
}

.cbody-t-b {
    width: 100px;
    height: 100%;
    /* border: 1px solid; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* align-items: center; */
}

.cbody-t-b>div {
    width: 100%;
    height: 50%;
    /* border: 1px solid; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.cbody-t2 {
    /* margin-top: 30px; */
    width: 100%;
    height: 60px;
    /* border: 1px solid; */
    display: flex;
    justify-content: center;
    align-items: center;
}

.cimg {
    /* margin-top: 25px; */
    width: 100%;
    height: 570px;
    /* border: 1px solid; */
}

.cimg>div {
    width: 90%;
    height: 90%;
    margin-top: 5%;
    margin-left: 5%;
}

.p1 {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
    /* margin-left: 5%;
    margin-right: 5%; */
    /* border: 1px solid; */
}

.p1>div {
    margin-left: 5%;
    margin-right: 5%;
}
</style>
<style>
.mbox-time{
    margin-left: 70%;
}
.message {
    margin-top: 30px;
    margin-left: 20%;
    width: 60%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid; */
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}

.transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
}

.messagebox {
    width: 60%;
    height: auto;
    /* border: 1px solid; */
    margin-left: 20%;
    display: flex;
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04) */
}

.mbox {
    width: 100%;
    /* height: 200px; */
    height: auto;
    /* display: flex; */
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}

.mbox-t {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    /* border: solid 1px; */
    /* justify-content: center; */

}

.mbox-t1 {
    width: 30px;
    height: 30px;
    /* border: 1px solid; */
    margin-left: 50px;
}

.mbox-t2 {

    height: 30px;
    /* border: 1px solid; */
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.mbox-c {
    height: auto;
    /* height: 90px; */
    width: 100%;
    /* border: 1px solid; */
    /* display: flex;
    justify-content: center;
    align-items: center; */
    margin-left: 40%;
    margin-bottom: 20px;
}
</style>

<style>
.tijiao{
    border: 1px solid #ccc;
}
.tijiao:hover{
    /* background-color: #409EFF;; */
    border:  1px solid #409EFF;
    color: #409EFF;
}
</style>
<script>

import axios from 'axios';

// 导入vuex
import { mapState, mapActions } from 'vuex';

// import { mapState } from 'vuex';

export default {
    data() {
        return {
            Arr: this.$store.state.Arr,
            show3: false,
            messages: [], // 留言列表
            newMessage: '', // 新留言的内容

        };
    },
    created() {
    // 在组件创建时获取当前时间到分钟
    this.getCurrentTime();
  },
    mounted() {
        const knowledgeId = this.$route.params.id;
        // 在组件挂载后执行登录请求
        console.log('Knowledge ID:', knowledgeId);
        this.$store.dispatch('fetchnewArr');
        console.log(this.$store.state.Arr);
        // this.$store.dispatch('fetchArrData');
        
    },
    created() {
        // this.Arr.slice
        console.log('my用户数据:', this.$store.state.userData);
        console.log('文章数据', this.$store.state.Arr);
        // console.log('该用户数据', this.$store.state.Arr[this.knowledgeId])

    },
    methods: {
        // ...mapActions(['Arr']),
        ...mapActions(['fetchArrData']),
        deleteArticle() {
            const knowledgeId = this.knowledgeId; // 获取要删除的文章的 knowledgeId

            // 发送删除请求
            axios.post('http://localhost:3000/deleteData', { knowledgeId })
                .then(response => {
                    // 处理删除成功的情况
                    console.log('Article deleted successfully');
                })
                .catch(error => {
                    // 处理删除失败的情况
                    console.error('Error deleting article:', error);
                });
        },

        
    },

    computed: {
        // 使用mapState函数将state中的Arr映射到组件的computed属性中
        ...mapState(['Arr']),

        knowledgeId() {
            return this.$route.params.id; // 获取路由参数中的 id
        },

        submitMessage() {
            // 添加新留言到留言列表中
            this.messages.push({
                meimg: this.$store.state.userData.img, // 图片路径
                mename: this.$store.state.userData.name, // 用户名
                metxt: this.newMessage // 新留言内容

            });

            // 提交成功后，清空输入框
            this.newMessage = '';
            localStorage.setItem('messages', JSON.stringify(this.messages));
        },

        currentUser() {
            // 获取当前登录的用户信息，可以从 Vuex 中获取，或者使用其他方式获取
            return { id: 1, name: '当前用户' }; // 示例：返回当前用户信息对象
        },
        isCurrentUserAuthor() {
            // 判断当前用户是否是文章的作者，返回 true 或 false
            return this.$store.state.Arr[this.knowledgeId].authorname === this.$store.state.userData.name;
        }
    },


}

</script>
