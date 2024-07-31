<template>
  <div class="mhbig">
    <div class="mhbig-t">
      <div style="display: flex;justify-content: center;align-items: center;float: left;position: relative;"> <div class="t1"></div><h1 style="color: white;">新知数据</h1></div>
      <div class="cylon_eye"></div>
    </div>
    <div class="mhbig-c">

      <div class="mhbig-cc" >
        <div class="chbcc-c">
          <div>
            <div class="c-t">存在时间</div>
            <div class="c-c">{{ formattedElapsedTime }}</div>
          </div>
          <div>
              <div style="width: 50px; height: 50px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);">
                <!-- <img src="" alt="" style="width: 100%;height: 100%;"> -->
                <i class="el-icon-date" style="font-size: 50px;"></i>
              </div>
          </div>
        </div>
        <div class="chbcc-t">a</div>
      </div>

      <div class="mhbig-cc" >
        <div class="chbcc-c">
          <div>
            <div class="c-t">用户数量</div>
            <div class="c-c">{{ mharr.usenbm }}人</div>
          </div>
          <div>
              <div style="width: 50px; height: 50px; box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);">
                <!-- <img src="" alt="" style="width: 100%;height: 100%;"> -->
                <i class="el-icon-s-custom" style="font-size: 50px;"></i>
              </div>
          </div>
        </div>
        <div class="chbcc-t">b</div>
      </div>

      <div class="mhbig-cc" >
        <div class="chbcc-c">
          <div>
            <div class="c-t">新知数量</div>
            <div class="c-c">{{ mharr.newubm }}个</div>
          </div>
          <div>
              <div style="width: 50px; height: 50px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);">
                <!-- <img src="" alt="" style="width: 100%;height: 100%;"> -->
                <i class="el-icon-chat-line-square" style="font-size: 50px;"></i>
              </div>
          </div>
        </div>
        <div class="chbcc-t">c</div>
      </div>

      <div class="mhbig-cc" >
        <div class="chbcc-c">
          <div>
            <div class="c-t">今日推荐</div>
            <div class="c-c">《{{ this.$store.state.BookArr[0].name }}》</div>
          </div>
          <div>
              <div style="width: 50px; height: 50px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);">
                <!-- <img src="" alt="" style="width: 100%;height: 100%;"> -->
                <i class="el-icon-notebook-2" style="font-size: 50px;"></i>
                
              </div>
          </div>
        </div>
        <div class="chbcc-t">d</div>
      </div>

      <div class="mhbig-cc" >
        <div class="chbcc-c">
          <div>
            <div class="c-t">未设定</div>
            <div class="c-c">？？？</div>
          </div>
          <div>
              <div style="width: 50px; height: 50px;">
                <img src="" alt="" style="width: 100%;height: 100%;">
              </div>
          </div>
        </div>
        <div class="chbcc-t">e</div>
      </div>
      
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue';
export default {
  data() {
    return {
      
      mharr: {
        id: 1,
        usenbm: this.$store.state.User.length,
        newubm: 6,
        
      },
     
    };
  },
  computed: {

  },
  mounted() {
    // console.log(this.$store.state.Arr);
    // console.log(this.$store.state.userData);

    //获取书籍
    this.$store.dispatch('fetchBookData');
    console.log(this.$store.state.BookArr);

    //获取用户数量
    this.$store.dispatch('fetchUser');
    console.log('用户数量:', this.$store.state.User.length); // 输出用户数量
  },

  setup() {
    const startTime = new Date('2024-06-01T00:00:00Z').getTime();
    const currentTime = ref(new Date().getTime());
    const intervalId = ref(null);

    // 格式化时间差为可读的时间字符串
    const formattedElapsedTime = computed(() => {
      const elapsedSeconds = Math.floor((currentTime.value - startTime) / 1000);
      const hours = Math.floor(elapsedSeconds / 3600);
      const minutes = Math.floor((elapsedSeconds % 3600) / 60);
      const seconds = elapsedSeconds % 60;
      return `${hours}时${minutes}分${seconds}秒`;
    });

    // 更新当前时间的函数
    const updateCurrentTime = () => {
      currentTime.value = new Date().getTime();
    };

    // 组件挂载时开始定时更新当前时间
    onMounted(() => {
      intervalId.value = setInterval(updateCurrentTime, 1000);
      updateCurrentTime(); // 立即更新一次时间
    });

    // 组件卸载时清除定时器
    onUnmounted(() => {
      if (intervalId.value) {
        clearInterval(intervalId.value);
      }
    });

    return {
      formattedElapsedTime,
    };
  },


  

};
</script>



<style lang="scss">
.like {
  cursor: pointer;
  font-size: 25px;
  display: inline-block;
}
</style>

<style>
.mhbig {
  width: 1200px;
  height: 600px;
  /* border: 1px solid; */
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

}

.mhbig-t {
  width: 100%;
  height: 50px;
  /* margin-top: 50px; */
/*   
  display: flex;
  justify-content: center;
  align-items: center; */
  /* border: 1px solid; */
  /* background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%); */
  background-color: #4facfe;
  overflow: hidden;
}

.cylon_eye {
        background-color: rgb(255, 255, 255);
        background-image: linear-gradient(to right,
                rgba(79, 172, 254, 0.9) 25%,
                rgba(79, 172, 254, 0.1) 50%,
                rgba(79, 172, 254, 0.9) 75%
                );
        color: white;
        height: 100%;
        width: 20%;
        -webkit-animation: 5s linear 0s infinite alternate move_eye;
        animation: 5s linear 0s infinite alternate move_eye;
    }

    @-webkit-keyframes move_eye {
        from {
            margin-left: -20%;
        }

        to {
            margin-left: 100%;
        }
    }

    @keyframes move_eye {
        from {
            margin-left: -20%;
        }

        to {
            margin-left: 100%;
        }
    }




.mhbig-c {
  margin-top: 50px;
  height: 150px;
  width: 100%;
  display: flex;
}


.mhbig-cc {
  width: 18%;
  height: 100%;
  /* border: 1px solid; */
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  margin-left: 1%;
  margin-right: 1%;
}

.chbcc-t{
  width: 100%;
  height: 20%;
  /* border: 1px solid; */
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.chbcc-c{
  width: 100%;
  height: 80%;
  /* border: 1px solid; */
  display: flex;
}
/* 小盒子里面左边的 */
.chbcc-c>:nth-child(1){
  width: 60%;
  height: 100%;
  /* border: 1px solid; */
}
.c-t{
  width: 100%;
  height: 30%;
  /* border: 1px solid; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.c-c{
  width: 100%;
  height: 70%;
  /* border: 1px solid; */
  display: flex;
  justify-content: center;
  align-items: center;
/*   color: transparent;
  background-image: linear-gradient(to right, #4facfe, #00f2fe); 
  -webkit-background-clip: text; 
  background-clip: text;
   */
  
}
/* 小盒子里面右边的 */
.chbcc-c>:nth-child(2){
  width: 40%;
  height: 100%;
  /* border: 1px solid; */
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>

<style>
.t1{
  width: 20px;
  height: 20px;
  /* border: 1px solid; */
  /* background-color: #409EFF; */
  /* background-color: black; */
background-color: white;
  margin: 5px;
  animation: spin 1.4s infinite linear both;
}

@keyframes spin {
  0% {
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  3.2% {
    transform: matrix3d(0.763, 0.652, 0, 0, -0.501, 0.871, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  4.3% {
    transform: matrix3d(0.614, 0.797, 0, 0, -0.649, 0.768, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  6.41% {
    transform: matrix3d(0.325, 0.953, 0, 0, -0.853, 0.534, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  8.61% {
    transform: matrix3d(0.083, 1.002, 0, 0, -0.961, 0.296, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  12.71% {
    transform: matrix3d(-0.149, 0.992, 0, 0, -1.003, -0.001, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  12.91% {
    transform: matrix3d(-0.154, 0.991, 0, 0, -1.003, -0.01, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  17.22% {
    transform: matrix3d(-0.181, 0.984, 0, 0, -0.994, -0.111, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  18.92% {
    transform: matrix3d(-0.163, 0.987, 0, 0, -0.994, -0.116, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  25.23% {
    transform: matrix3d(-0.066, 0.998, 0, 0, -0.998, -0.067, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  28.33% {
    transform: matrix3d(-0.028, 1, 0, 0, -0.999, -0.037, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  31.43% {
    transform: matrix3d(-0.004, 1, 0, 0, -1, -0.015, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  39.44% {
    transform: matrix3d(0.013, 1, 0, 0, -1, 0.007, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  56.46% {
    transform: matrix3d(0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  61.66% {
    transform: matrix3d(-0.001, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  81.48% {
    transform: matrix3d(0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }

  83.98% {
    transform: matrix3d(0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  100% {
    transform: matrix3d(0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
}

</style>