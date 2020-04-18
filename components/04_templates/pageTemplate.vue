<template>
  <div class>
    <Header />
    <slot />
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
<style scoped lang="css">
</style>
