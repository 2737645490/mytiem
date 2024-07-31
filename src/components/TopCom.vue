<template>
    <div class="scroll-to-top">
      <div class="topbox">
        <i class="el-icon-top" @click="scrollToTop"></i>
      </div>
      <div class="refreshbox" @click="refreshPage">
        <i class="el-icon-refresh-right"></i>
      </div>
    </div>
  </template>
  
  <style>
  .scroll-to-top {
    position: fixed;
    bottom: 80px;
    right: 40px;
  }
  
  .topbox, .refreshbox {
    width: 50px;
    height: 50px;
    /* border: 1px solid; */
    text-align: center;
    line-height: 50px; /* 垂直居中文本 */
    cursor: pointer; /* 鼠标移上去显示手型光标 */
    margin-bottom: 10px; /* 间距调整 */
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    border-radius: 4px
    
  }
  
  .refreshbox {
    /* background-color: #f2f5f6; */
    /* color: #1989fa; */
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    border-radius: 4px
  }
  </style>
  
  <script>
  export default {
    methods: {
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      },
      refreshPage() {
        location.reload(); // 刷新页面
      }
    }
  };
  </script>