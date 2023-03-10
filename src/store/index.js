import Vue from "vue";
import Vuex from "vuex";
import movies from "@/store/modules/movies";
import loader from "@/store/modules/loader";
import notificationStore from "@/store/modules/notification";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    movies,
    loader,
    notificationStore,
  },
});
export default store;
