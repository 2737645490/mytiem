<template>
    <div style="height: 60px;"></div>
    <div class="block">
    </div>
    <div>
        <div class="body-b">
            <div class="body-b-t">
                <el-tabs>
                    <div class="body-b-t-box">
                        <div @click="switchTab('recommend')"><a href="#" :class="{ active: activeTab === 'recommend' }"
                                @click="switchTab">推荐</a></div>
                        <div @click="switchTab('hot')"><a href="#" :class="{ active: activeTab === 'hot' }"
                                @click="sortByLikes">最热</a></div>
                        <div @click="switchTab('newest')"><a href="#" :class="{ active: activeTab === 'newest' }"
                                @click="sortByDate">最新</a></div>
                    </div>
                </el-tabs>
                <!-- 身体盒子的上面选择页 -->
            </div>
            <div class="body-b-c">
                <div class="body-b-c-l">
                    <div class="box" v-for="(item, index) in paginatedArr" :key="index">

                        <div class="box-l">
                            <el-image class="body-l-img" :src="item.imgs">
                                <div slot="placeholder" class="image-slot">
                                    加载中<span class="dot">...</span>
                                </div>
                            </el-image>
                        </div>

                        <div class="box-r" v-if="item">
                            <a :href="'/knowledge/' + item.authorid">
                                <div class="box-r-t">
                                    <div class="box-id">
                                        <h3></h3>
                                    </div>
                                    <div class="box-title">
                                        <h3>{{ index + 1 }}.{{ item.txt }}</h3>
                                    </div>
                                </div>
                            </a>
                            <div class="box-data">{{ item.date }}</div>
                            <div class="box-r-b">
                                <div><img style="width: 20px;height: 20px;" src="../assets/热度.png" alt="">{{ item.loves }}
                                </div>
                                <div class="box-r-b-l">
                                    <img v-if="item.love" style="height: 25px;width: 25px;" src="../assets/love1.png"
                                        @click="handofflove(item)" alt="" loading="lazy">
                                    <img v-else style="height: 25px;width: 25px;" src="../assets/love2.png"
                                        @click="handofflove(item)" alt="" loading="lazy">
                                </div>
                                <div>
                                    <i v-if="item.isStarOn" class="el-icon-star-on" @click="toggleStar(item)"></i>
                                    <i v-else class="el-icon-star-off" @click="toggleStar(item)"></i>
                                </div>
                            </div>
                        </div>
                        <div class="box-r" v-else>
                            <!-- 使用占位符代替 -->
                            <div class="placeholder">
                                数据加载中...
                            </div>
                        </div>

                    </div>


                    <!-- 底部分页页面 -->
                    <div>
                        <el-pagination background layout="prev, pager, next" :current-page="currentPage"
                            :page-size="pageSize" :total="Arr.length" @current-change="handleCurrentChange">
                        </el-pagination>
                    </div>

                </div>
                <div class="body-b-c-r">
                    <!-- 收藏盒子 -->
                    <div class="rbox1">
                        <div class="rbox1-t"><i class="el-icon-s-management"></i>
                            <h3>收藏</h3>
                        </div>
                        <!-- 收藏页 -->
                        <el-collapse v-if="favorites.length > 0">
                            <el-collapse-item v-for="(item, index) in favorites" :key="item">
                                <div>{{ index + 1 }}.{{ item.txt }}</div>
                            </el-collapse-item>
                        </el-collapse>

                        <el-alert v-else title="暂无收藏" type="info" />

                    </div>

                    <!-- 小知识盒子 -->
                    <div>
                        <KnowBox></KnowBox>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    </div>
</template>
<style></style>
<script>
import { mapState, mapActions } from 'vuex';

import KnowBox from '../components/KnowBox.vue'; 

export default {
    components: {
        KnowBox
    },

    data() {
        return {
            isStarOn: false, // 初始状态为星星关闭
            activeTab: 'recommend',
            favorites: [], // 用于存储收藏项目的新属性
            currentPage: 1,  // 当前页码
            pageSize: 5,  // 每页显示的条数
        };
    },
    computed: {
        // 计算属性来计算分页后的数组
        paginatedArr() {
            const start = (this.currentPage - 1) * this.pageSize;
            const end = start + this.pageSize;
            return this.Arr.slice(start, end);
        },
        totalPages() {
            return Math.ceil(this.Arr.length / this.pageSize);
        },
        // 使用mapState函数将state中的Arr映射到组件的computed属性中
        ...mapState(['Arr']),

    },

    mounted() {
        // 在组件挂载时调用 fetchArrData 动作
        this.$store.dispatch('fetchArrData');
        console.log(this.$store.state.Arr);
    },

    methods: {
        ...mapActions(['fetchArrData']), // 将 fetchArrData 映射到组件的方法中

        toggleStar(item) {
            item.isStarOn = !item.isStarOn; // 切换星星状态
            if (item.isStarOn) {
                this.favorites.push(item); // 将项目添加到收藏列表中
            } else {
                const index = this.favorites.findIndex(fav => fav === item);
                if (index !== -1) {
                    this.favorites.splice(index, 1); // 从收藏列表中移除项目
                }
            }
        },

        handofflove(item) {
            item.love = !item.love; // 点赞更换图片
            item.loves += item.love ? 1 : -1; // 更新点赞数量
        },

        sortByLikes() {
            // 使用数组排序方法对数据进行排序
            this.Arr.sort((a, b) => b.loves - a.loves);
            this.$forceUpdate();
        },

        switchTab(tabName) {
            // 切换标签的事件处理函数
            this.activeTab = tabName;
            // 可以在这里添加其他逻辑，例如根据标签名重新排序数据等
            if (tabName === 'recommend') {
                this.shuffleArray(this.Arr); // 调用随机排序方法
            }
        },

        sortByDate() {
            // 根据日期排序
            this.Arr.sort((a, b) => new Date(b.date) - new Date(a.date)); // 确保 date 字段拼写正确
        },

        shuffleArray(array) {
            // 随机排序数组
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        },

        // 添加 handleCurrentChange 方法来更新 currentPage
        handleCurrentChange(page) {
            this.currentPage = page;
        },

        

    },
}

</script>

<style>
@import url('./Knowledge.css');
</style>