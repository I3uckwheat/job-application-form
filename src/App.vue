<template>
  <router-view></router-view>
</template>

<script>
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";

export default {
  components: {
    appFooter: Footer,
    appHeader: Header
  }
};
</script>

<style>
</style>
