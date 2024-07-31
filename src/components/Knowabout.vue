<template>
    <div style="height: 100px;width: 90px;"></div>
    <div class="kabig">
        <div class="kabox">
            <div class="katop">
                <div class="ktimg">
                    <p class="ktop-t1">N</p>
                </div>
                <div class="ktimgo">
                    <p class="ktop-t2" style="color: white;">E</p>
                </div>
                <div class="ktimg">
                    <p class="ktop-t3">W</p>
                </div>

                <div class="ktb">
                    <p>know</p>
                </div>

            </div>
            <div class="kact">
                <div><b>现代新知网页</b></div>
                <div><b>传播现代最新知识的网站</b></div>
            </div>

            <div class="kact2">
                <div>
                    <div class="kact2-img1"></div>
                </div>
                <div>
                    <div class="kact2-img2">最新知识</div>
                </div>
                <div>
                    <div class="kact2-img3"></div>
                </div>
            </div>
            <div class="kact3">
                <div>
                    <div class="kact3-t">都在</div>
                </div>
                <div>
                    <div class="kact3-img"></div>
                </div>
                <div>
                  <div class="kact3-t">这里</div>
                </div>
            </div>
            <div class="kact4">
                <div></div>
            </div>
            <div class="kact5">

            </div>
        </div>
    </div>
</template>


<!-- 上篇动画 -->
<style>
.kabig {
    height: 1500px;
    width: 100%;
    /* border: 1px solid; */
    display: flex;
    justify-content: center;

}

.kabox {
    width: 70%;
    height: 100%;
    border: 1px solid;
}

.katop {
    width: 100%;
    height: 260px;
    /* border: 1px solid; */
    display: flex;
    justify-content: center;
    align-items: center;
}

.ktimg {
    height: 150px;
    width: 150px;
    /* border: 1px solid; */
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* transition: transform 0.3s ease; */
    /* 添加动画过渡效果 */
}


.ktimgo {
    height: 150px;
    width: 150px;
    /* border: 1px solid; */
    margin: 20px;
    border-radius: 50%;
    /* 使用 border-radius 将盒子变成圆形 */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #409EFF;

}

.ktop-t1 {
    font-size: 150px;
    color: #409EFF;
    /* 动画1 */
    animation-name: rotate;
    animation-duration: 0.7s;
    animation-direction: reverse;


}

.ktop-t2 {
    font-size: 150px;
    color: #409EFF;

    animation-name: rotate;
    animation-duration: 0.7s;
    animation-delay: 0.3s;
    /* 延迟 */
    animation-direction: reverse;


}

.ktop-t3 {
    font-size: 150px;
    color: #409EFF;
    animation-name: rotate;
    animation-duration: 0.7s;
    animation-direction: reverse;
    animation-delay: 0.6s;

}

/* 动画名称 */
@keyframes ktop {
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }
}


.ktb {
    width: 100px;
    height: 50px;
    border: 1px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    margin-top: 90px;
    /* background-color: #409EFF; */
    color: #409EFF;
    animation-name: shake;
    animation-duration: 0.7s;
    animation-iteration-count: 1;
    /* 可以根据需要修改动画次数 */
    animation-delay: 0.9s;
}


@keyframes shake {

    0%,
    100% {
        transform: translateY(0);
    }

    10%,
    30%,
    50%,
    70%,
    90% {
        transform: translateY(-15px);
    }

    20%,
    40%,
    60%,
    80% {
        transform: translateY(15px);
    }
}
</style>

<!-- 中篇介绍 -->
<style>
.kact {
    margin-top: 50px;
    width: 100%;
    height: 50px;
    /* border: 1px solid; */
    animation: dropDown 0.5s ease forwards;
}

@keyframes dropDown {
    0% {
        transform: translateY(-100%);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

.kact>div {
    height: 50%;
    width: 100%;
    /* border: 1px solid; */
    display: flex;
    justify-content: center;
    align-items: center;
}

.kact2 {
    margin-top: 50px;
    height: 200px;
    width: 100%;
    /* border: 1px solid; */
    display: flex;
}

.kact2>div {
    height: 200px;
    width: 35%;
    /* border: 1px solid; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* border-radius: 50%; */
}

.kact2>div>div {
    height: 150px;
    width: 150px;
    /* border: 1px solid; */
    border-radius: 50%;
}

.kact2-img1 {
    background-image: url(https://ts3.cn.mm.bing.net/th?id=OIP-C.l078emu_QUX8saL_mLJRnQHaGP&w=272&h=229&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2);
    background-size: 100% 100%;
    animation: kact2-img1 1s ease forwards;
}

@keyframes kact2-img1 {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

.kact2-img2 {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #409EFF;
    color: white;
    font-size: 30px;
    animation: kact2-img2 1s ease forwards;
    animation-duration: 0.5s;
}

@keyframes kact2-img2 {
    0% {
        transform: translateY(-100%);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

.kact2-img3 {
    background-image: url(https://ts3.cn.mm.bing.net/th?id=OIP-C.2rOVEdlen3ENZTRmM1rpAQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2);
    background-size: 100% 100%;
    animation: kact2-img3 1s ease forwards;
}

@keyframes kact2-img3 {
    0% {
        transform: translateX(100%);
        opacity: 0;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
}</style>

<style>
.kact3 {
    margin-top: 50px;
    height: 200px;
    width: 100%;
    /* border: 1px solid; */
    display: flex;
    
}

.kact3>div {
    height: 200px;
    width: 35%;
    /* border: 1px solid; */
    display: flex;
    justify-content: center;
    align-items: center;
}
.kact3>div>div {
    height: 150px;
    width: 150px;
    /* border: 1px solid; */
    border-radius: 50%;
   
}
.kact3-t{
    width: 150px;
    height: 150px;
    border: 1px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #409EFF;
    font-size: 30px;
    animation: flip 0.5s linear 5; /* 应用翻转动画 */
}

@keyframes flip {
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}

.kact3-img{
    background-image: url(data:image/jpeg;base64,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);
    background-size: 100%  100%;
}
</style>

<style>
.kact4 {
    margin-top: 50px;
    height: 200px;
    width: 100%;
    /* border: 1px solid; */
    display: flex;
    
}

.kact4>div{
        height: 100%;
        width: 20%;
        /* border: 1px solid black; */
        animation-name: moveLeft;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-delay: 1s;
        animation-name: right;
        /* background-color: rgb(223, 243, 241); */
        background-image: url(../assets/新知logo.png);
        background-size: 100% 100%;
        
    }
    @keyframes right {
        0% {
            margin-left: 0;
            
        }


        50% {
            /* background-color: aqua; */
            margin-left: 40%;
            background-image: url(../assets/书籍.png);
        }

        100% {
            /* background-color: rgb(0, 255, 170); */
            margin-left: 80%;
            background-image: url(../assets/新知书籍logo.png);
        }

    }


</style>

<style>
.kact5{
    margin-top: 50px;
    height: 340px;
    width: 100%;
    border: 1px solid;
    display: flex;
    /* background-color: ; */
    /* color: #409EFF; */
    background-color: #409EFF;
}
</style>



