import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    user: null,
    token: localStorage.getItem("token") || "",
    isLogin: false,
  }),

  getters: {
    getUser: (state) => state.user,
    isAuthenticated: (state) => !!state.token,
  },

  actions: {
    async login(username, password) {
      try {
        const response = await axios.post("/login", {
          username: username,
          password: password,
        });

        if (response.status === 200) {
          this.user = response.data.data;
          this.isLogin = true;
        }
      } catch (error) {
        console.log(error);
      }
    },

    checkAuth() {
      if (this.isAuthenticated) {
        this.isLogin = true;
      }
    },
  },
});
