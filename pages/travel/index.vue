<template>
  <div>
    <Header />
    <ContentList />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/03_organism/header.vue";
import Footer from "@/components/03_organism/footer.vue";
import ContentList from "@/components/04_templates/contentList.vue";

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
    ContentList
  }
};
</script>

<style lang="css">
* {
  margin: 0;
  padding: 0;
}
</style>
