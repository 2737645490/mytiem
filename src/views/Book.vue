<template>
  <div style="height: 70px;"></div>
  <div class="bbox">
    <div class="bboxl">
      <div class="btbox">
        <div class="btbox1">
          <img style="width:100%;height: 100%;" :src="this.$store.state.BookArr[id].img" alt="">
        </div>
        <div class="btbox2">
          <div class="btbox21">
            <h3>今日推荐:《{{ this.$store.state.BookArr[id].name }}》 </h3>
          </div>
          <div class="btbox21">{{ this.$store.state.BookArr[id].author }}-著</div>
          <div class="btboxx">
            <el-rate v-model="this.$store.state.BookArr[this.id].score" disabled show-score text-color="#ff9900"
              score-template="{value}">
            </el-rate>
          </div>
          <div style="height: 40px;display: flex;width: 100%;">
            <el-tag style="margin: 5px;" type="info">{{ this.$store.state.BookArr[id].tag1 }}</el-tag>
            <el-tag style="margin: 5px;" type="info">{{ this.$store.state.BookArr[id].tag2 }}</el-tag>
            <el-tag style="margin: 5px;" type="info">{{ this.$store.state.BookArr[id].tag3 }}</el-tag>
          </div>
          <div>
          </div>
        </div>
      </div>
      

      <div>
      <div class="tbbox2">
        <div class="tbbox2t">
          <div class="tbbox2tb">
            <h4>简介</h4>
          </div>
          <div class="tbbox2c">
            <div class="tbbox2bt">
              {{ this.$store.state.BookArr[id].proverb }}
            </div>
            <div class="tbbox2bc">
              <p style="margin: 25px;">{{ this.$store.state.BookArr[id].introduction }}</p>
            </div>
          </div>
          <div class="tbbox2b">
            <el-button @click="show3 = !show3">点击展开</el-button>
          </div>
          <div style="margin-top: 20px; overflow: hidden;" >
            <el-collapse-transition>
              <div v-show="show3">
                <div class="transition-box ">
                  <div>
                    <div><b>作者：</b>
                      <p style="margin-left: 30px;">{{ this.$store.state.BookArr[id].author }}</p>
                    </div>
                  </div>
                  <div>
                    <div><b>上架时间：</b>
                      <p style="margin-left: 30px;">{{ this.$store.state.BookArr[id].date }}</p>
                    </div>
                  </div>
                  <div>
                    <div><b>字数：</b>
                      <p style="margin-left: 30px;">{{ this.$store.state.BookArr[id].wordcount }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </el-collapse-transition>
          </div>

        </div>

      </div>
    </div>

      <div class="blbom">
        <div class="blbomt">
          <b style="margin-left: 30px;">评分</b>
        </div>
        <div class="blbomc">
          <div class="blbomc1">{{ this.$store.state.BookArr[this.id].score }}
          </div>
          <div class="blbomc2">
            <el-rate v-model="this.$store.state.BookArr[this.id].score" disabled>
            </el-rate>
          </div>
          <!-- 评分 -->
          <div class="blbomc3">
            <el-progress :percentage="this.$store.state.BookArr[this.id].good">
              <p style="font-size: 10px;font-weight: 600;">好评{{ this.$store.state.BookArr[this.id].good }}%</p>
            </el-progress>
            <el-progress :color="yel" :percentage="this.$store.state.BookArr[this.id].medium">
              <p style="font-size: 10px;font-weight: 600;">中评{{ this.$store.state.BookArr[this.id].medium }}%</p>
            </el-progress>
            <el-progress :color="red" :percentage="this.$store.state.BookArr[this.id].gap">
              <p style="font-size: 10px;font-weight: 600;">差评{{ this.$store.state.BookArr[this.id].gap }}%</p>
            </el-progress>

          </div>
        </div>
      </div>
    </div>

    <div class="bboxr">
        <div class="bboxrtop"><img style="height: 100%;width: 100%;" src="../assets/书籍.png" alt=""></div>

        <div class="bboxrcen">
          <div class="bboxrcen2-t"><b>作品情况</b></div>
          <div class="bboxrcen2-c">
            <el-tag :type="tagType">{{ tagText }}</el-tag>
          </div>
          
        </div>

        <div class="bboxrcen2">
          <div class="bboxrcen2-t"><b>作者信息</b></div>
          <div class="bboxrcen2-c">
            <div style="height: 100%;width: 50px;">
              <img style="height: 100%;width: 100%;" :src="this.$store.state.BookArr[id].authorimg" alt="">
            </div>
            <div style="height: 50px;margin-left: 30px;display: flex;justify-
            content: center; align-items: center;">{{ this.$store.state.BookArr[id].author }}</div>
          </div>
        </div>
    </div>
  </div>
</template>
  
<script>

export default {

  data() {
    return {
      id: this.$store.state.Bookid,
      show3: false,
      red: '#f56c6c', // 初始颜色设置为亮红色
      yel: '#e6a23c',
    }
  },
  computed: {
    tagType() {
      const status = this.$store.state.BookArr[this.id].status;
      switch (status) {
        case '热门':
          return 'warning';
        case '火爆':
          return 'danger';
        case '小众':
          return 'success';
        default:
          return 'info'; // 如果没有匹配到任何状态，默认显示 info 类型的标签
      }
    },
    tagText() {
      const status = this.$store.state.BookArr[this.id].status;
      switch (status) {
        case '热门':
          return '热门';
        case '火爆':
          return '火爆';
        case '小众':
          return '小众';
        default:
          return '其他状态'; // 如果没有匹配到任何状态，默认显示其他状态的文字
      }
    }
  },
  mounted() {
    // 在组件挂载时确保调用 BookArr 动作
    this.$store.dispatch('fetchBookData');
    console.log(this.$store.state.BookArr);
    console.log(this.id);
  },


}
</script>
<style>
.bbox {
  height: auto;
  /* height: 600px; */
  width: 70%;
  margin-left: 15%;
  /* border: 1px solid; */
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  display: flex;

}

.bboxl {
  width: 70%;
  height: 100%;
  margin-right: 20px;
  /* border: 1px solid; */
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04); */
}

.bbox1 {
  height: 100%;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04); */
  margin-right: 30px;
}

.btbox {
  height: 250px;
  width: 100%;
  /* border: 1px solid; */
  display: flex;
}

.btbox1 {
  height: 230px;
  width: 25%;
  /* border: 1px solid; */
  margin-right: 30px;
  margin: 20px;
}

.btbox2>div {
  margin-top: 20px;
  display: flex;
  align-items: center;
}

.btbox2 {
  margin: 20px;
  height: 230px;
  width: 70%;
  /* border: 1px solid; */
}

.btbox21 {
  width: 100%;
  height: 30px;
  /* border: 1px solid; */
}

.btboxx {
  width: 100%;
  height: 40px;
  /* border: 1px solid; */
  display: flex;
  align-items: center;
}


.tbbox2 {
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  /* height: auto; */
  /* border: 1px solid; */
}

.tbbox2t {
  margin-top: 20px;
  height: 50px;
  width: 100%;
  /* border: 1px solid; */
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04); */
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.1);

}

.tbbox2tb {
  height: 50px;
  width: 100px;
  /* border: 1px solid; */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 文字盒子 */
.tbbox2bt {
  height: 50px;
  /* margin-top: 20px; */
  margin: 20px;
  width: 100%;
  /* border: 1px solid; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: darkgray;
  font-style: italic;
}

.tbbox2bc {
  height: 120px;
  width: 100%;
  /* border: 1px solid; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}

/* 展开盒子 */
.tbbox2b {
  margin-top: 30px;
  /* height: 40px; */
  width: 100%;
  /* border: 1px solid; */
  display: flex;
  justify-content: center;
  align-items: center;

}

.tbbox2bbb {
  height: 100px;
  width: 100%;
}
</style>

<!-- 左底部 -->
<style>
.blbom {
  margin-top: 20px;
  height: 180px;
  /* border: 1px solid; */
  
}

.blbomt {
  height: 30%;
  /* border: 1px solid; */
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  display: flex;
  align-items: center;
}

.blbomc {
  height: 70%;
  width: 100%;

  display: flex;

}

.blbomc1 {
  height: 100%;
  width: 20%;
  /* border: 1px solid; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
}

/* 星级盒子 */
.blbomc2 {
  height: 100%;
  width: 30%;
  /* border: 1px solid; */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 评分数据盒子 */
.blbomc3 {
  height: 100%;
  width: 50%;
  /* border: 1px solid; */
  /* display: flex; */
  /* justify-content: center; */
  align-items: center;
  display: flex;
  flex-direction: column;


}

.blbomc3>div {
  height: 34%;
  width: 100%;
  /* border: 1px solid; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: 10px; */
}

.el-progress__text {
  font-size: 5px;
}
</style>


<!-- 折叠 -->
<style>
.transition-box {
  width: 100%;
  /* height: 90px; */
  height: auto;
  /* text-align: center; */
  /* padding: 40px 20px; */
  box-sizing: border-box;
  border: 1px solid;

}

.transition-box>div {
  width: 100%;
  height: 30px;
  /* border: 1px solid; */
  /* margin-left: 50px; */
  display: flex;
  /* justify-content: center; */
  align-items: center;
}

.transition-box>div>div {
  margin-left: 20px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  /* border: 1px solid; */
}
</style>

<!-- 右边 -->
<style>
  .bboxrtop{
    width: 100%;
    height: 250px;
    /* border: 1px solid; */
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    padding-bottom: 40px;
  }

.bboxr {
  height: 100%;
  width: 30%;
  /* border: 1px solid; */

}

.bboxrcen{
  margin-top: 20px;
  height: 100px;
  /* border: 1px solid; */
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

}
.bboxrcen2{
  margin-top: 30px;
  height: 100px;
  /* border: 1px solid; */
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  padding-bottom: 30px;
}
.bboxrcen2-t{
  height: 50px;
  /* border: 1px solid; */
  display: flex;
  /* justify-content: center; */
  align-items: center;
  margin-left: 30px;

}
.bboxrcen2-c{
  height: 50px;
  /* border: 1px solid; */
  margin-left: 30px;
  display: flex;
}
</style>