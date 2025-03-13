import { ofetch } from "ofetch";
import { createStore } from "vuex";

export default createStore({
  state: {
    users: <[]>[],
    usersPosts: <[]>[],
  },
  getters: {},
  mutations: {
    setUsers(state, data) {
      state.users = data;
    },
    setUsersPosts(state, data) {
      state.usersPosts = data;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        console.log("calling fetch users function in store");
        const data = await ofetch("https://jsonplaceholder.typicode.com/users");
        console.log(data);
        commit("setUsers", data);
      } catch (error) {
        console.error("API Error:", error);
      }
    },

    async fetchUsersPosts({ commit }) {
      try {
        console.log("calling fetch users post function in store");
        const data = await ofetch("https://jsonplaceholder.typicode.com/posts");
        console.log(data);
        commit("setUsersPosts", data);
      } catch (error) {
        console.error("API Error:", error);
      }
    },
  },
  modules: {},
});
