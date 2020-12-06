<template>
  <div id="app">
    <Header />
    <div id="app">
      <button @click="alert">alert!</button>
    </div>
    <router-view />
  </div>
</template>

<script>
import Header from "../components/Header.vue";

const alert = function () {
  this.$swal({
    title: "タイトル",
    text: "よろしければOKボタンを押してください",
    type: "warning",
    showCancelButton: true,
    confirmButtonText: "OK",
  }).then((result) => {
    if (result.value) {
      this.$swal("OK!", "成功しました.", "success");
    }
  });
};

export default {
  name: "App",
  components: {
    Header,
  },
  methods: {
    alert: alert,
  },
};
</script>

<style scoped></style>
