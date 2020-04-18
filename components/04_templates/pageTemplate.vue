<template>
  <div class>
    <Header />
    <div class="main">
      <div class="content">
        <slot />
      </div>
      <div class="sideBar">サイドバー</div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/03_organism/header.vue";
import Footer from "@/components/03_organism/footer.vue";
export default {
  data() {
    return {
      mainData: require("@/static/json/travel.json")
    };
  },
  components: {
    Header,
    Footer
  },
  created() {}
};
</script>
<style scoped lang="scss">
.main {
  width: 100%;
  display: flex;
  .content {
    width: calc(100% - 300px);
  }
  .sideBar {
    background-color: aqua;
    width: 300px;
  }
}
</style>
