<template>
    <div class="muhome">
        <el-card>
            <div slot="header" class="clearfix">
                <h3>当前用户<el-badge class="a1" :value="userData.length" type="primary"></el-badge></h3>
            </div>
        </el-card>
        <el-table :data="userData" style="width: 100%">
            <el-divider></el-divider>
            <el-table-column prop="id" label="id" sortable width="200"></el-table-column>
            <el-table-column prop="name" label="姓名" sortable width="200"></el-table-column>
            <el-table-column prop="address" label="地址" width="200"></el-table-column>
            <el-table-column prop="gender" label="性别" width="200"></el-table-column>
            <el-table-column prop="mb" label="电话" width="200"></el-table-column>
            <el-table-column prop="grade" label="权限" width="200"></el-table-column>
            
        </el-table>

    </div>
</template>
  

<style>
.a1{
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

</style>
<script>
export default {
    data() {
        return {
            userData: []
        };
    },
    mounted() {
        //获取用户数量
        this.$store.dispatch('fetchUser');
        console.log('用户数量:', this.$store.state.User);
        // this.userData = this.$store.state.User;
        this.fetchUserData();
    },

    methods: {
        fetchUserData() {
            this.userData = this.$store.state.User;
        },
        // formatter(row, column) {
        //     return row.address;
        // }
    }


};
</script>
  
<style scoped>
.muhome {
    width: 1200px;
    height: 600px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    /* border: 1px solid; */
}
</style>