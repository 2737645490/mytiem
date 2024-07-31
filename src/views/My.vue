<template>
  <div class="mybig">
    <div class="mytop">
            <div class="mytop1">
                <h1 class="ct">新知</h1>
            </div>
            <div class="mytop2">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item class="breadcrumb-item" :to="{ path: '/knowledge' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item class="breadcrumb-item">信息详情</el-breadcrumb-item>
                </el-breadcrumb>
                <h3 style="margin-left: 70px;">账号个人页面</h3>
            </div>
            <div class="mytop3">
            </div>
        </div>
    <!-- <div class="mytop">
      <div class="mytop1"></div>
      <div class="mytop2"></div>
      <div class="mytop3"></div>
    </div> -->

    <div style="height: 70px;"></div>
    <div class="mybody">
      <div class="my-c">
        <div class="my-c-t">
          <div class="my-c-t1">
            <div class="my-name">姓名：
              {{ name }}
            </div>
            <div class="myaddress">省会:
              {{ address }}
            </div>
          </div>
          <!-- 用户头像图片 -->
          <div class="my-c-t2-box1">
            <img :src="img" style="width: 100%;height: 100%;">
          </div>
          <div class="my-c-t2">
            <div class="my-gender">性别：
              {{ gender }}
            </div>
            <div class="my-c-t2-box2">
              <el-button type="primary" @click="toggleBox" plain>修改信息</el-button>
            </div>
          </div>
        </div>
        <div class="my-c-c">
          <div class="my-c-cl">
            <el-tabs type="border-card">
              <el-tab-pane label="账号管理">
                <div class="fome-rt">
                  <div>
                    <h3>账号安全管理</h3>
                  </div>
                </div>
                <el-divider></el-divider>
                <div class="fome-rt">
                  <div>id号：</div>
                  <div><el-input type="text" placeholder="请输入内容" v-model="id" maxlength="10" show-word-limit
                      :disabled="true"></el-input>
                  </div>
                </div>
                <el-divider></el-divider>
                <div class="fome-rt">
                  <div>密码：</div>
                  <div>
                    <!-- <el-input placeholder="请输入密码" v-model="password" show-password></el-input> -->
                    <!-- <el-link type="primary">编辑</el-link> -->
                    ******
                  </div>
                  <!-- <el-link class="my-c-cl-a" type="primary">查看/编辑密码</el-link> -->
                  <el-button class="my-c-cl-a"  @click="openpw">编辑密码</el-button>
                </div>
                <el-divider></el-divider>
                <div class="fome-rt">
                  <div>绑定手机号：</div>
                  <div>
                    <div>{{ mb.slice(0, -4).replace(/./g, '*') + mb.slice(-4) }}</div>
                  </div>
                  <!-- <el-link type="primary" @click="MobilePhone"></el-link> -->
                  <el-button class="my-c-cl-a"  @click="openmb">编辑手机号</el-button>
                </div>

                <el-divider></el-divider>
                <div class="fome-rt">
                 
                  <el-button type="danger" @click="open" plain>注销账号</el-button>
                </div>
                

              </el-tab-pane>
              <el-tab-pane label="设置">配置管理</el-tab-pane>
            </el-tabs>
          </div>
          <div class="my-c-cr">
            <div class="my-c-cr1">
              <h3>常见问题</h3>
            </div>
            <div class="my-c-cr2">
              <h4>账号问题</h4>
            </div>
            <div class="my-c-cr3"> <el-link type="primary">问题1</el-link></div>
            <div class="my-c-cr3"> <el-link type="primary">问题2</el-link></div>
            <div class="my-c-cr3"> <el-link type="primary">问题3</el-link></div>
            <div class="my-c-cr2">
              <h4>其他问题</h4>
            </div>
            <div class="my-c-cr3"> <el-link type="primary">问题4</el-link></div>
            <div class="my-c-cr3"> <el-link type="primary">问题5</el-link></div>
          </div>

        </div>
      </div>
    </div>
  </div>
  <!-- 隐藏盒子 -->
  <div class="hidebox">
    <div v-if="showBox" class="formbox">
      <div class="form">
        <div class="formtop">
          个人信息
        </div>
        <div class="formbody">
          <div class="form-l">
            <div class="formimg">
              <div style="font-size: 14px; margin-bottom: 20%;">请选择你的头像</div>
              <button v-for="(item, index) in avatars" :key="index" @click="selectAvatar(index)">
                <img :src="item" class="avatar">
              </button>

            </div>
          </div>
          <div class="fome-r">
            <div class="fome-rt">
              <div>用户名：</div>
              <div><el-input type="text" placeholder="请输入内容" v-model="name" maxlength="10" show-word-limit></el-input>
              </div>
            </div>

            <div class="fome-rt">
              <div>性别：</div>
              <div>
                <el-input type="text" placeholder="只有男和女" v-model="gender" maxlength="1" @input="validateGender"
                  show-word-limit></el-input>
              </div>
            </div>

            <div class="fome-rt">
              <div>省会：</div>
              <div><el-input type="text" placeholder="你是哪个省的？" v-model="address" maxlength="10"
                  show-word-limit></el-input>
              </div>
            </div>
            <div class="fome-rt">
              <div>
                <!-- <el-button type="primary" @click="submitForm" plain>修改</el-button> -->
                <el-button type="primary" @click="upuser" plain>修改</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showBox" @click="hideBox" class="overlay"></div>
  </div>
</template>

<script>
import img1 from '../assets/avatar/tm.jpg'
import img2 from '../assets/avatar/tm2.jpg'
import img3 from '../assets/avatar/tm3.jpg'
import axios from 'axios';
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      showBox: false,
      avatars: [img1, img2, img3],
      gender: '', // 初始化 gender 属性
      // address: this.userData.address, // 初始化 address 属性
      ImgIndex: 0,
      state1: '',
      id: this.$store.state.userData.id,
      password: this.$store.state.userData.password,
      name: this.$store.state.userData.name,
      gender: this.$store.state.userData.gender,
      address: this.$store.state.userData.address,
      mb: this.$store.state.userData.mb,
      img:this.$store.state.userData.img,
      showEditMobileDialog: false, // 控制编辑手机号弹窗显示状态
      newMobile: '' // 新的手机号
    };
  },

  computed: {
    selectedAvatar() {
      return this.avatars[this.ImgIndex];//图片
    },


  },

  mounted() {
    // 在组件挂载后执行登录请求
  },

  created() {
    console.log('my用户数据:', this.$store.state.userData);
  },
  methods: {
    // ...mapMutations(['setUserData']),
    updateUser() {
      const userData = { /* 更新后的用户数据 */ };
      this.setUserData(userData); // 调用 mutation 更新 userData
      // this.$store.commit('setUserData', userData);
      // localStorage.setItem('userData', JSON.stringify(userData));

    },
   open() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },

    //修改数据
    upuser() {
      // this.$store.commit('updateUserData', newData);
      this.$store.commit('updateUser', {
        name: this.name,
        gender: this.gender,
        address: this.address,
        // md:this.md,
        mb: this.$store.state.userData.mb,
        img: this.selectedAvatar
      });
      console.log(this.$store.state.userData);
      // 
      this.hideBox();

      const userData = {
        id: this.id,
        name: this.name,
        gender: this.gender,
        address: this.address,
        img:this.selectedAvatar
      };

      // 发送 POST 请求到后端路由
      axios.post('http://localhost:3000/updateUser', JSON.stringify(userData), {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          console.log(response.data); // 打印后端返回的响应数据
          this.hideBox(); // 更新成功后隐藏编辑框
        })
        .catch(error => {
          console.error(error); // 打印错误信息
          // 处理错误，比如显示错误提示等
        });
    },

    toggleBox() {
      this.showBox = !this.showBox;
    },
    hideBox() {
      this.showBox = false;
    },
    selectAvatar(index) {
      this.ImgIndex = index;
    },
    validateGender() {
      // 使用正则表达式验证输入是否为"男"或"女"
      if (!/^(男|女)$/i.test(this.gender)) {
        // 如果输入不符合要求，则清空输入框并给出提示
        this.gender = '';
        this.$message.warning('请输入男或女');
      }
    },

    openmb() {
      this.$prompt('请输入手机号', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^1[3-9]\d{9}$/,
        inputErrorMessage: '手机格式不正确'
      }).then(({ value }) => {
        const usermb = {
          id: this.id,
          mb: value
        };

        axios.post('http://localhost:3000/updatemb', JSON.stringify(usermb), {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          console.log(response.data); // 打印后端返回的响应数据
          this.hideBox(); // 更新成功后隐藏编辑框
        })
        .catch(error => {
          console.error(error); // 打印错误信息
          // 处理错误，比如显示错误提示等
        });

        this.$message({
          type: 'success',
          message: '你的手机号是: ' + value,

        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });
      });
    },

    openpw() {
      this.$prompt('密码', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,}$/,
        inputErrorMessage: '密码必须包含至少一个字母、一个数字和一个特殊字符，并且长度至少为6个字符'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '密码更新成功'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });
      });
    }
  },

};
</script>

<style>
@import url('./My.css');
</style>

<style>
.avatar {
  width: 100px;
  height: 100px;
  display: block;
}
</style>