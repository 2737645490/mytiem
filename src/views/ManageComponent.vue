<template>
  <div class="mcbig">
    <div style="width: 100%;height: 60px;display: flex;align-items: center;">
      <h2>书籍页面<el-badge class="a1" :value="book.length" type="primary"></el-badge></h2>
    </div>
    <div class="mctop" v-for="item in book">
      <div class="mtboxl"><img :src="item.img" alt=""></div>
      <div class="mtboxc">
        <div class="mbc-t">
          <h4>{{ item.name }}</h4>
          
        </div>
        <el-collapse accordion>
          <el-collapse-item title="名言" v-if="item.proverb">
            <div slot="content">{{ item.proverb }}</div>
          </el-collapse-item>
          <el-collapse-item title="简介" v-if="item.introduction">
            <div slot="content">{{ item.introduction }}</div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="mtboxr">
        <div class="mtboxr-t">当前推荐</div>
        <div class="mtboxr-c"> 
          <el-radio-group v-model="radio" @change="handleRadioChange">
          <el-radio :label="item.id">当前展示页面</el-radio>
        </el-radio-group></div>
      </div>
    </div>
  </div>
</template>



<style>
  .mtboxr{
  width: 15%;
  height: 100%;
  /* border: 1px solid; */
  /* box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); */
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04); */
}
.mtboxr-t{
  width: 100%;
  height: 60px;
  /* border: 1px solid; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.mtboxr-c{
  width: 100%;
  height: 180px;
  /* border: 1px solid; */
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
<script>

export default {
  data() {
    return {
      book: this.$store.state.BookArr,
      activeNames: ['1'],
      radio: this.$store.state.Bookid
    }
  },
  computed: {

  },
  mounted() {
    // 在组件挂载时确保调用 BookArr 动作
    this.$store.dispatch('fetchBookData');
    console.log(this.$store.state.BookArr);
    console.log(this.$store.state.Bookid);
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    handleRadioChange(val) {
      this.$store.commit('setBookId', val);
      console.log(val);
    }
  }


}
</script>


<style>
.mcbig {
  width: 1200px;
  /* border: 1px solid; */
  /* box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); */
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  overflow-y: auto;
  /* 添加内部垂直滚动条 */
  max-height: 700px;
  /* 设置最大高度 */
  scrollbar-width: none;
  /* 隐藏滚动条 Firefox */
  -ms-overflow-style: none;
  /* 隐藏滚动条 IE/Edge */
}

.mctop {
  /* height: 80px; */
  width: 100%;
  /* border: 1px solid; */
  display: flex;
  margin-top: 30px;
}

.mtboxl {
  width: 15%;
  height: 240px;
  /* border: 1px solid; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.mtboxl>img {
  width: 95%;
  height: 95%;
}

.mtboxl>img:hover {
  width: 100%;
  height: 100%;
}

.mtboxc {
  width: 70%;
  height: 240px;
  /* border: 1px solid; */
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.mbc-t {
  width: 100%;
  height: 20%;
  /* border: 1px solid; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.mbc-c {
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mbc-b {
  width: 100%;
  height: 60%;
  /* border: 1px solid; */
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>