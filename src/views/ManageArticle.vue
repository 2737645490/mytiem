<template>
    <div class="maEssay">
        <el-card class="box-card">
            <div slot="header" class="clearfix" style="display: flex;align-items: center;">
                <h3>页面已有文章<el-badge class="a1" :value="tableData.length" type="primary"></el-badge></h3>
            </div>
            <el-divider></el-divider>
            <div>
                <el-table :data="tableData" style="width: 100% ">
                    <el-table-column prop="id" label="id" width="80">
                    </el-table-column>
                    <el-table-column prop="date" label="日期" width="180">
                    </el-table-column>
                    <el-table-column prop="txt" label="文章名字" width="280">
                    </el-table-column>
                    <el-table-column prop="class_" label="文章类型" width="120">
                    </el-table-column>

                    <el-table-column prop="编辑" label="编辑" width="120">
                        <el-tooltip content="编辑" placement="top">
                            <el-button>
                                <i class="el-icon-edit-outline"></i>
                            </el-button>
                        </el-tooltip>
                    </el-table-column>

                    <el-table-column prop="删除" label="删除" width="120">
                        <template v-slot="scope">
                            <el-tooltip content="删除" placement="top">
                                <el-button type="danger" @click="mdeleteArticle(scope.row.id)"><i
                                        class="el-icon-delete"></i></el-button>
                            </el-tooltip>
                        </template>
                    </el-table-column>
                    <el-table-column prop="查看" label="查看页面" width="120">
                        <template v-slot="scope">
                            <el-tooltip content="查看全部信息" placement="top">
                                <el-button type="primary" @click="openViewDialog(scope.row)"><i
                                        class="el-icon-view"></i></el-button>
                            </el-tooltip>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-card>


        <div>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <h3>待审核文章<el-badge :value="newtableData.length" class="mark"></el-badge></h3>
                </div>
                <el-divider></el-divider>
                <div>

                    <el-table :data="newtableData" style="width: 100% ">

                        <el-table-column prop="id" label="id" width="80">
                        </el-table-column>

                        <el-table-column prop="date" label="日期" width="180">

                        </el-table-column>

                        <el-table-column prop="txt" label="文章名字" width="280">
                        </el-table-column>
                        <el-table-column prop="class_" label="文章类型" width="180">
                        </el-table-column>

                        <el-table-column prop="通过" label="管理">
                            <template v-slot="scope">
                                <el-tooltip content="通过" placement="top">
                                    <el-button type="success" @click="Pass(scope.row)">
                                        通过
                                    </el-button>
                                </el-tooltip>

                                <el-tooltip content="不通过" placement="top">
                                    <el-button type="danger" @click="notPass(scope.row.id)">
                                        不通过
                                    </el-button>
                                </el-tooltip>
                            </template>
                        </el-table-column>

                    </el-table>

                </div>
            </el-card>
        </div>


    </div>
</template>


<!-- 动画 -->
<style>
.a1 {
    margin-right: 20px;
    animation: swing .4s infinite linear both;
}

@keyframes swing {
    20% {
        transform: rotate3d(0, 0, 1, 15deg);
    }

    40% {
        transform: rotate3d(0, 0, 1, -10deg);
    }

    60% {
        transform: rotate3d(0, 0, 1, 5deg);
    }

    80% {
        transform: rotate3d(0, 0, 1, -5deg);
    }

    to {
        transform: rotate3d(0, 0, 1, 0deg);
    }
}


.mark {
    animation: fade 1.8s infinite linear both;
}


@keyframes fade {

    from,
    to {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }
}
</style>

<script>
import axios from 'axios';
export default {

    data() {
        return {
            dialogVisible: false // 控制弹窗是否显示
        }
    },
    computed: {
        tableData() {
            return this.$store.state.Arr.map(item => ({
                authorname: item.authorname,
                authoravatar: item.authoravatar,
                id: item.authorid,
                date: item.date,
                txt: item.txt,
                class_: item.class_,
                loves: item.loves,
                authorname: item.authorname,
                love: item.love,
                imgs: item.imgs,
                paragraph1: item.paragraph1,
                paragraph2: item.paragraph2,
                paragraph3: item.paragraph3,
                paragraph4: item.paragraph4,
                news1: item.news1,
                news2: item.news2,
                news3: item.news3,
            }));
        },
        newtableData() {
            return this.$store.state.newArr.map(item => ({
                authorid: this.$store.state.Arr.length,
                authorname: item.authorname,
                authoravatar: item.authoravatar,
                id: item.authorid,
                date: item.date,
                txt: item.txt,
                class_: item.class_,
                loves: item.loves,
                authorname: item.authorname,
                love: item.love,
                imgs: item.imgs,
                paragraph1: item.paragraph1,
                paragraph2: item.paragraph2,
                paragraph3: item.paragraph3,
                paragraph4: item.paragraph4,
                news1: item.news1,
                news2: item.news2,
                news3: item.news3,
            }));
        },

    },
    mounted() {

        // 挂载组件调用
        this.$store.dispatch('fetchArrData');
        this.$store.dispatch('fetchnewArr');
        console.log(this.$store.state.Arr);
        console.log(this.$store.state.newArr);

    },
    methods: {

        mdeleteArticle(articleId) {
            // 发送删除请求
            axios.post('http://localhost:3000/mdeleteData', { articleId })
                .then(response => {
                    console.log('管理员删除' + articleId + '成功');
                    // 更新 Vuex 中的数据
                    this.$store.commit('deleteArticle', articleId);
                    // 刷新页面
                    window.location.reload();
                })
                .catch(error => {
                    // 处理删除失败的情况
                    console.error('删除失败', error);
                });
        },

        Pass(article) {
            // console.log(article);
            // console.log(article.authorid);
            axios.post('http://localhost:3000/moveToMainTable', article)
                .then(response => {
                    console.log(response.article);
                    // 刷新页面
                    window.location.reload();

                })
                .catch(error => {
                    console.error('发布失败', error);
                });
        },
        notPass(articleId) {
            console.log(articleId);

            // 发送删除请求
            axios.post('http://localhost:3000/mdeleteData2', { articleId })
                .then(response => {
                    console.log('管理员删除' + articleId + '成功');
                    // 更新 Vuex 中的数据
                    this.$store.commit('deleteArticle', articleId);
                    // 刷新页面
                    window.location.reload();
                })
                .catch(error => {
                    // 处理删除失败的情况
                    console.error('删除失败', error);
                });
        },



        openViewDialog(row) {
            let authorId = row.id;
            let url = '/knowledge/' + authorId;
            this.$router.push(url);
        },
        openEditDialog(article) {
            this.editArticle = { ...article };
            this.editDialogVisible = true;
        },


    }


}
</script>




<style>
.maEssay {
    height: 100%;
    width: 1200px;
    /* border: 1px solid; */
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

.cell {
    display: flex;

}
</style>

<style scoped>
.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}

.box-card {
    width: 100%;
    height: auto;
}
</style>
