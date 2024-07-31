// import { createApp } from 'vue'

// // import 'style/.css'

// import App from './App.vue'

// import router from './router';

// //引入 Element的 ui
// import ElementPlus from 'element-plus'
// import "element-plus/dist/index.css"

// // import 'element-ui/lib/theme-chalk/index.css';

// const app = createApp(App);

// app.use(router)
// // 这是 Vue.js 3 中的全局 API，用于安装插件或中间件。

// app.use(ElementPlus)


// import store from './views/store';
// app.use(store);


// // 在应用初始化时，从 LocalStorage 中获取用户数据并设置到 Vuex
// // const userData = JSON.parse(localStorage.getItem('userData'));
// // if (userData) {
// //     $store.commit('setUserData', userData); // 在 Vuex 中设置用户数据
// // }
// const userData = JSON.parse(localStorage.getItem('userData'));
// if (userData) {
//     store.commit('setUserData', userData); // 直接调用 store.commit()
// }



// //导入并且使用用户信息路由模块
// // const users= require('./server/users');
// // app.use('my',users)

// app.mount("#app")
// // 这是 Vue.js 3 中的方法，用于将你创建的 Vue 应用程序实例挂载到 HTML 文档中的特定元素上。

// // new Vue({
// //     router,
// //     render: h => h(App)
// //   }).$mount('#app');


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import "element-plus/dist/index.css"
import store from './views/store'

// 确保取消了这行的注释，并且 'users' 模块是正确导出的
// import users from './server/users'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(store)

// 如果你想要使用 'users' 模块，请取消下面的注释
// app.use(users)

// 在应用初始化时，从 LocalStorage 中获取用户数据并设置到 Vuex
const userData = JSON.parse(localStorage.getItem('userData'));
if (userData) {
    store.commit('setUserData', userData);
}

app.mount('#app')