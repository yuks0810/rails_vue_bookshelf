<template>
  <div class="container">
    <h1 class="#f3e5f5 purple lighten-5 center">ユーザー一覧</h1>
    <div class="row #e3f2fd blue lighten-5">
      <div class="col s4 m6" v-for="user in users">
        <div class="card btn">
          <span class="card-title" v-on:click="setUserInfo(user.id)">
            {{ user.email }}
          </span>
        </div>
      </div>
    </div>
    <div class="row" v-show="userInfoBool">
      <div class="col s12 m12">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title"> 【{{ userInfo.username }}】 </span>
            <div class="detail">・著者：{{ userInfo.encrypted_password }}</div>
            <div class="detail">・出版社：{{ userInfo.email }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserIndex",
  data: function () {
    return {
      userInfo: {},
      userInfoBool: false,
      users: [],
    };
  },
  mounted: function () {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      axios.get("/api/users").then(
        (res) => {
          for (var i = 0; i < res.data.users.length; i++) {
            this.users.push(res.data.users[i]);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    },
    setUserInfo(id) {
      axios.get(`api/users/${id}.json`).then((res) => {
        this.userInfo = res.data;
        this.userInfoBool = true;
      });
    },
  },
};
</script>

<style scoped></style>
