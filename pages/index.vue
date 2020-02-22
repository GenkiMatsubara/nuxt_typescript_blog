<template>
  <div>
    <Header />
    <ContentList />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import ContentList from "@/components/contentList.vue";
import Footer from "@/components/footer.vue";
export default {
  data(){
    return {
      pageData:'index'
    }
  },
  created(){
  },
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

