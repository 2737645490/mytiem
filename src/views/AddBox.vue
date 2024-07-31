<template>
  <div>
    <div class="addtop">
      <el-breadcrumb separator="/" style="margin-left: 60px;">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>添加页面</el-breadcrumb-item>

      </el-breadcrumb>
    </div>
    <!-- <div class="addtop">间隙</div> -->
    <div class="addct">

      <el-form ref="form" :model="form" label-width="80px">
        <div style="margin: 20px; font-weight: 700;">提交文章内容</div>
        <el-divider></el-divider>
        <el-form-item label="文章类型">
          <el-select v-model="form.class_" placeholder="请选择文章类型" style="width: 40%;">
            <el-option label="新闻" value="新闻"></el-option>
            <el-option label="国际" value="国际"></el-option>
            <el-option label="联合国" value="联合国"></el-option>
            <el-option label="生物学" value="生物学"></el-option>
            <el-option label="职场" value="职场"></el-option>
            <el-option label="技巧" value="技巧"></el-option>
            <el-option label="学习" value="学习"></el-option>
            <el-option label="科学" value="科学"></el-option>
            <el-option label="环保" value="环保"></el-option>
            <el-option label="心理" value="心理"></el-option>
            <el-option label="美景" value="美景"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="日期" style="width: 40%;">
          <el-date-picker v-model="form.date" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>

        <el-form-item label="标题">
          <el-input type="text" style="width: 40%;" placeholder="请输入标题" maxlength="10" v-model="form.txt"></el-input>
        </el-form-item>
        <el-form-item label="封面">
          <input type="file" @change="uploadImage" accept="image/*">
        </el-form-item>

        <div>
          <el-form-item style="width: 40%;" label="标签1">
            <el-input v-model="form.news1"></el-input>
          </el-form-item>
          <el-form-item style="display: flex;width: 40%;" label="标签2">
            <el-input v-model="form.news2"></el-input>
          </el-form-item>
          <el-form-item style="display: flex;width: 40%;" label="标签3">
            <el-input v-model="form.news3"></el-input>
          </el-form-item>
        </div>

        <el-form-item label="段落1">
          <el-input type="textarea" style="width: 40%;" v-model="form.paragraph1"></el-input>
        </el-form-item>
        <el-form-item label="段落2">
          <el-input type="textarea" style="width: 40%;" v-model="form.paragraph2"></el-input>
        </el-form-item>
        <el-form-item label="段落3">
          <el-input type="textarea" style="width: 40%;" v-model="form.paragraph3"></el-input>
        </el-form-item>
        <el-form-item label="段落4">
          <el-input type="textarea" style="width: 40%;" v-model="form.paragraph4"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>

      </el-form>

      <div class="rbox">


      </div>
    </div>


  </div>
</template>

<style>
.addtop {
  width: 100%;
  height: 60px;
  /* border: 1px solid; */
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  margin-bottom: 30px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
}

.addct {
  width: 70%;
  height: 100%;
  /* border: 1px solid; */
  margin-left: 15%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  padding: 20px;
  /* display: flex; */
}

.rbox {
  width: 400px;
  height: 600px;
  border: 0.5px solid #ccc;
  position: absolute;
  top: 200px;
  left: 800px;
  background-image: url(../assets/fj.jpg);
  background-size: 100% 100%;
  opacity: 0.9;
}
</style>




<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        authorname: this.$store.state.userData.name,
        authoravatar: this.$store.state.userData.img,
        date: '',
        // title: '',
        txt: '',
        imgs: '',
        class_: '',
        paragraph1: '',
        paragraph2: '',
        paragraph3: '',
        paragraph4: '',
        news1: '',
        news2: '',
        news3: '',
      },

    };
  },

  methods: {
    onSubmit() {
      const data = {
        // authorid: this.$store.state.Arr.length,
        authorname: this.form.authorname,
        authoravatar: this.form.authoravatar,
        loves: 0,
        date: this.form.date,
        concern: false,
        love: false,
        // title: this.form.title,
        txt: this.form.txt,
        imgs: this.form.imgs,
        class_: this.form.class_,
        paragraph1: this.form.paragraph1,
        paragraph2: this.form.paragraph2,
        paragraph3: this.form.paragraph3,
        paragraph4: this.form.paragraph4,
        news1: this.form.news1,
        news2: this.form.news2,
        news3: this.form.news3,
      };
      console.log('提交的数据为:', data);
      this.submitData(data);  // 将 data 传递给 submitData 方法
    },

    submitData(data) {
      axios.post('http://localhost:3000/submitData', data)
        .then(response => {
          console.log(response.data); // 打印出成功提交的消息
          // 可以在这里处理成功提交后的逻辑，比如显示成功消息或者重定向到其他页面
        })
        .catch(error => {
          console.error('错误', error);
          // 可以在这里处理提交失败的逻辑，比如显示错误消息给用户
        });
    },


    // 获取到图片
    uploadImage(event) {
      const file = event.target.files[0];
      if (file) {
        this.form.imgs = URL.createObjectURL(file);
      }
    },

  }
};
</script>





