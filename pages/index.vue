<template>
  <div>
    <Header />
    <Top />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/03_organism/header.vue";
import Footer from "@/components/03_organism/footer.vue";
import Top from "@/components/04_templates/top.vue";

export default {
  data() {
    return {
      pageData: "index"
    };
  },
  created() {},
  components: {
    Header,
    Footer,
    Top
  }
};
</script>

<style lang="css">
* {
  margin: 0;
  padding: 0;
}
</style>
