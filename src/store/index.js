import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [
      { text: '寫國文作業', done: false },
      { text: '寫數學考卷', done: false }
    ],
    Loaded: false,
    isLoading: false,
    clickTimes: 0,
    clickedTimes: 0,
    users: []
  },
  getters: {
    //篩選女性的人數 ( 類似 computed )
    FemaleNum(state) {
      return state.users.filter(item => item.gender == "female").length;
    },
    MaleNum(state, getters) {
      return state.users.length - getters.FemaleNum;
    },
    returnFn: state => gd => {
      if (state.users.filter(item => item.gender == gd).length > 2) {
        console.log('數據中超過兩個' + gd);
      } else {
        console.log('數據中沒有超過兩個' + gd);
      }
    }
  },
  mutations: {
    ///////////////////////////////
    addTodo(state, str) {
      const obj = { text: str, done: false }
      state.todos.push(obj)
    },
    setDone(state, index) {
      state.todos[index].done = true
    },
    //////////////////////////////
    // 將 state 設定為參數
    Loaded(state) {
      // state 的 isLoading true/false 互轉
      state.isLoading = !state.isLoading

      //這樣每執行一次就會設定一次
      Vue.set(state, 'click', false);
    },
    addTimes(state, payload) {
      state.clickedTimes = state.clickedTimes + payload.count;
    },
    //api 相關
    dataLoaded(state) {
      // 抓到user之後，將state的loaded改為true
      state.Loaded = true;
    },
    SetFalse(state) {
      state.Loaded = false;
    },
    //把拿到的 dataInfo 丟進 state 裡面
    setUserInfo(state, payload) {
      state.users = payload
    }
  },
  actions: {

    //get api
    GetUser({ commit, dispatch }) {
      axios.get("https://randomuser.me/api/?results=5").then(function (res) {
        console.log(res);
        // 在 actions 裡面，可以用 context.commit 來呼叫 mutations，
        // 也可以用 context.dispatch 來呼叫另外一個 actions。
        commit('dataLoaded');
        //context.dispatch('AnotherActions')

        //將抓回來的data發回給mutations
        var dataInfo = res.data.results;
        commit('setUserInfo', dataInfo);

      }).catch(function (error) {
        console.log(error);
      })
    },
    ClickedActions({ commit }, payload) {
      commit('addTimes', payload);
    }
  },
  modules: {

  }
});
export default store;