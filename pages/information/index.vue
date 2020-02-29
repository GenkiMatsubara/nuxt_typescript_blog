<template>
  <div>
    <!-- <Header /> -->
    <div v-html="$md.render(htmlData)"></div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import ContentList from "@/components/contentList.vue";
import Footer from "@/components/footer.vue";
import mdInformation from "@/static/md/information.md";

export default {
  data() {
    return {
      pageData: "index",
      htmlData: mdInformation
    };
  },
  created() {},
  components: {
    Header,
    ContentList,
    Footer
  }
};
</script>

<style lang="css">
body {
  margin: 0;
  padding: 0;
}
</style>
