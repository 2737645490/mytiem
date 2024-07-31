  import createPersistedState from 'vuex-persistedstate';
  import { createStore } from 'vuex';
  import axios from 'axios'; // 确保正确导入 axios

  export default createStore({
    state: {
      // 在这里定义应用程序的状态
      User:[],
      userData: {},
      Arr: [],
      BookArr:[],
      newArr:[],
      Bookid:0,
    },
    
    mutations: {
      // 在这里定义修改应用程序状态的方法
      updateUserData(state, userData) {
        state.userData = userData;
        // 用于更新 state 中的 userData 状态为传入的 data。
      },
      setUserData(state, userData) {
        state.userData = userData;
      },
      updateUser(state, updatedUserData) {
        state.userData = { ...state.userData, ...updatedUserData };
      },

      deleteArticle(state, knowledgeId) {
        state.Arr.splice(knowledgeId, 1);
      },

      setArr(state, data) {
        state.Arr = data;
      },
      //更新书组件数据
      setBookArr(state, data) {
        state.BookArr = data;
      },

      // 更新newarr
      setnewArr(state,data){
        state.newArr=data;
      },

      //获取User数据
      setUser(state,data){
        state.User=data;
      },
      //更新展示书籍id
      setBookId(state, bookId) {
        state.Bookid = bookId;
      }
    },
    actions: {
      // 在这里定义处理异步操作的方法
      deleteArticle({ commit, state }, knowledgeId) {
        if (state.Arr[knowledgeId].author.name === state.userData.name) {
          commit('deleteArticle', knowledgeId);
          // 更新持久化存储
          localStorage.setItem('articles', JSON.stringify(state.Arr));
          console.log('删除文章');
        } else {
          console.log('您不是文章的作者，无法删除文章');
        }
      },

      //获取数据库newknowledge表里面全部的数据给Arr
      async fetchArrData({ commit }) {
        try {
          const response = await axios.get('http://localhost:3000/arr');
          commit('setArr', response.data);
        } catch (error) {
          console.error('错误', error);
        }
      },

      //获取数据库表book里面全部的数据给BookArr
      async fetchBookData({ commit }) {
        try {
          const response = await axios.get('http://localhost:3000/book');
          commit('setBookArr', response.data);
        } catch (error) {
          console.error('错误', error);
        }
      },

      //获取数据库表new里面全部的数据给newarr
      async fetchnewArr({ commit }) {
        try {
          const response = await axios.get('http://localhost:3000/newarr');
          commit('setnewArr', response.data);
        } catch (error) {
          console.error('错误', error);
        }
      },

      
      async fetchUser({ commit }) {
        try {
          const response = await axios.get('http://localhost:3000/User');
          commit('setUser', response.data);
        } catch (error) {
          console.error('错误', error);
        }
      },

    },
    
    modules: {
      // 如果需要，可以将 store 拆分成多个模块
    },
    plugins: [createPersistedState()] // 在这里应用 vuex-persistedstate 插件
  });