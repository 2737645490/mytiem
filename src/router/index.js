
import { createRouter, createWebHistory } from "vue-router";
// 导入需要的模块，包括 createRouter 和 createWebHistory    

import Home from '../views/Home.vue';
import NotFound from '../components/NotFound.vue';
// import Knowledge from '../views/Knowledge.vue';
// import KnowledgeDetail from '../views/KnowledgeDetail.vue';

const routes = [
    // 在这里定义路由规则
    {
        path: "/",
        redirect: "/login",
    },
    {
        name: 'login',
        path: '/login',
        // title:'首页',
        component: () => import('../views/Login.vue'),
        meta: {
            title: '首页'
        },
    },
    {
        name: 'home',
        path: '/',
        // component: () => import('../views/Home.vue'),
        component: Home,
        children: [
            {
                path: '/:username/knowledge',
                name: 'Knowledge',
                // component: () => import('../views/Knowledge.vue'),
                // component: Knowledge, 
                meta: {
                    title: '新知'
                },
                beforeEnter: (to, from, next) => {
                    const { username } = to.params;
                    const gender = to.query.gender; // 获取 URL 查询参数中的性别信息
                    // 在这里可以使用 username 和 gender 数据
                    // console.log("当前用户名是：" + username + "，性别是：" + gender);
                    next(); // 确保继续路由导航
                }
            },
        ],
    },
    {
        path: '/:username/my',
        name: 'my',
        component: () => import('../views/My.vue'),
        meta: {
            title: '我的'
        },
    },
    {
        path: '/knowledge/:id',
        name: 'KnowledgeDetail',
        component: () => import('../components/KnowledgeDetail.vue'),
        meta: {
            title: '新知详情'
        }
    },



    {
        path: '/add',
        name: 'AddBox',
        component: () => import('../views/AddBox.vue'),
        meta: {
            title: '发表文章'
        }
    },
    {
        path: '/manage',
        name: 'Manage',
        component: () => import('../views/Manage.vue'),
        meta: {
            title: '管理页面'
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
        meta: {
            title: '页面未找到'
        }
    }


]

// 路由参数配置
const router = createRouter({
    // 将定义的路由表传入路由实例
    routes,
    // 指定路由的历史模式为 Web History 模式
    history: createWebHistory()
})

export default router