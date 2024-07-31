<template>
    <div>
        <!-- 小知识盒子 -->
        <div class="rbox2">
            <div>
                <div class="rbox1-t"><i class="el-icon-s-opportunity"></i>
                    <h3>小知识</h3>
                </div>
                <div class="rbox2-c">
                    <h3>{{ currentTrivia }}</h3>
                </div>
                <div class="rbox2-b">
                    <el-button type="primary" @click="nextTrivia">下一条</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.rbox2 {
    margin-top: 300px;
    width: 100%;
    height: 300px;
    position: relative;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

.rbox2-c {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 220px;
    background-color: #409EFF;
    opacity: 0.75;
    color: white;
}

.rbox2-b {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

<script>
export default {
    data() {
        return {
            currentTriviaIndex: 0,//初始值为
            Trivia: [
                "北极熊的皮肤其实是黑色的",
                "大熊猫其实是杂食动物",
                "冥王星现在不属于太阳系九大行星了",
                "下雨的时候，跑步会比走路淋的雨多",
                "音乐可以影响动植物产量",
                "有些昆虫没有头还可以再活上一年"
            ],
            //小知识的数据
            KonwBox: 'KonwBox',
        };
    },
    computed: {
        currentTrivia() {
            return this.Trivia[this.currentTriviaIndex];
        },

    },
    methods: {
        nextTrivia() {
            this.currentTriviaIndex = (this.currentTriviaIndex + 1) % this.Trivia.length;
        },
        // 点击切换小知识盒子
    }

}
</script>