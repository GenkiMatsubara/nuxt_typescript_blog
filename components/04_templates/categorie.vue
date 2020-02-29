<template>
  <div>
    <h1>{{savePath}}</h1>
    <p>技術記事リスト</p>
    <div v-for="(item, index) in setPageData[1]" :key="index">
      <br />
      <h2>{{item.title}}</h2>
      <h2>{{item}}</h2>
    </div>
  </div>
</template>

<script>
import techPostList from "@/static/json/tech.json";
import lifePostList from "@/static/json/life.json";
import travelPostList from "@/static/json/travel.json";
import photoPostList from "@/static/json/photo.json";
export default {
  data() {
    return {
      path: this.$route.path,
      pageData: null
    };
  },
  computed: {
    setPageData() {
      if (this.$route.path == "/tech") {
        this.pageData = techPostList["fileMap"];
        return [this.$route.path, this.pageData];
      }
      if (this.$route.path == "/life") {
        this.pageData = lifePostList["fileMap"];
        return [this.$route.path, this.pageData];
      }
      if (this.$route.path == "/photo") {
        this.pageData = photoPostList["fileMap"];
        return [this.$route.path, this.pageData];
      }
      if (this.$route.path == "/travel") {
        this.pageData = travelPostList["fileMap"];
        return [this.$route.path, this.pageData];
      }
    },
    savePath() {
      return this.$route.path;
    }
  },
  methods: {}
};
</script>
<style scoped lang="css">
</style>
