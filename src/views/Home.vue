<template>
  <div class="big" style="">
    <div class="top l">
      <div  class="top-1 c">
        <h1>现代新知</h1>

      </div>
      <div class="top-2 c ">
        <el-menu class="el-menu-demo" mode="horizontal" default-active="ChildComponent1" @select="handleSelect">
          <el-menu-item index="ChildComponent1">新知</el-menu-item>
          <!-- <el-menu-item index="ChildComponent2">应用</el-menu-item> -->
          <!-- <el-menu-item index="ChildComponent3">生活</el-menu-item> -->
          <el-menu-item index="ChildComponent4">推荐书籍</el-menu-item>
          
          <el-submenu>
            <!-- <template slot="title">更多</template> -->
            <el-menu-item index="Childabout">关于</el-menu-item>
            <!-- <el-menu-item index="ChildComponent4-2">选项2</el-menu-item> -->
            <!-- <el-menu-item index="ChildComponent4-3">选项3</el-menu-item> -->
          </el-submenu>
        </el-menu>
      </div>
      <div class="top-3" id="topr">
        <div class="top-3-1">
          <!-- <el-button type="primary"><i class="el-icon-search"></i>搜索</el-button> -->
        </div>
        <div>
          <router-link to="/add">
            <i class="el-icon-edit"></i>
          </router-link>
        </div>
        <div>
          
          <!-- <router-link  :to="`/${username}/my`"  index="ChildComponentmy"> -->
          <router-link :to="{ name: 'my', params: { username: $route.params.username } }">
            <img style="width: 40px;height:40px;" :src="img" alt="">
          </router-link>
        </div>
      </div>
    </div>
    <component :is="currentComponent"></component>
    <!-- 引入向上组件 -->
  <div>
    <TopCom></TopCom>
  </div>
    <div>
    <BottonCom></BottonCom>
  </div>
 
  </div>
  
  
</template>


<script>
// new Vue().$mount('topr')
import ChildComponent1 from './Knowledge.vue';
import ChildComponent4 from './Book.vue'

import ChildComponentmy from './My.vue';

import Childabout from '../components/Knowabout.vue'

import axios from 'axios'; // 导入 axios

import BottonCom from '../components/BottonCom.vue'//底部盒子
import TopCom from '../components/TopCom.vue';
export default {
  name: 'Home',
  components: {
    ChildComponent1,
    ChildComponent4,
    ChildComponentmy,
    BottonCom,
    TopCom,
    Childabout,
  },
  data() {
    return {
      currentComponent: 'ChildComponent1',
      currentComponent2: 'ChildComponent4',
      currentComponentmy: 'ChildComponentmy',
      Childabout:'Childabout',
      img:this.$store.state.userData.img,
    };
  },

  mounted() {
    // 在组件挂载后执行登录请求
    console.log(this.$store.state.userData);
   
  },

  methods: {
    // 
    users() {
      // console.log(userData);
    },
    handleSelect(index) {
      this.currentComponent = index;
    },
    getUsers() {
      axios.get('/login')
        .then(response => {
          this.users = response.data;
          // console.log(users);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    },

  }, created() {
    this.users()
  },

}
</script>


<style>
@import url("./hoem.css");
@import url("//unpkg.com/element-ui@2.15.14/lib/theme-chalk/index.css");

/* 设置菜单项背景色和文字颜色 */
.el-menu-demo .el-menu-item,
.el-menu-demo .el-submenu__title {
  background-color: rgb(255, 255, 255);
  /* 背景色 */
  color: #333;
  /* 文字颜色 */
  
}
</style>