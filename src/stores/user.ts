import { defineStore } from "pinia";
import { ref } from "vue";
import { getUserToken } from "@/api/user";
import { setToken } from "@/utils/auth";

export const useUserStore = defineStore('user', () => {
  // user info
  const token = ref('')

  // action
  function userLogIn(d: UserLogIn) {
    getUserToken(d).then(({ data }) => {
      setToken(data)
    })
  }

  return {
    token,
    userLogIn
  }
})