import Vue from "vue";
import Vuex from "vuex";
import { Permission } from "@/models/Permission";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {permission:new Permission()},
  mutations: {},
  actions: {},
  modules: {}
});
