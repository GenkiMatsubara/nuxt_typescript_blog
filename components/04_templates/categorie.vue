<template>
  <div>
    <h1>{{savePath}}</h1>
    <p>技術記事リスト</p>
    <div v-for="(item, index) in pageData" :key="index">
      <!-- <n-link :to="setPath(item)">
        <div>{{item}}</div>
      </n-link>-->
      {{item}}
    </div>
    {{setPageData}}
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
        return this.pageData;
      }
      if (this.$route.path == "/life") {
        this.pageData = lifePostList;
        return this.pageData;
      }
      if (this.$route.path == "/photo") {
        this.pageData = photoPostList["fileMap"];
        return this.pageData;
      }
      if (this.$route.path == "/travel") {
        this.pageData = travelPostList["fileMap"];
        return this.pageData;
      }
    },
    savePath() {
      return this.$route.path;
    }
  },
  methods: {
    setPath: data => {
      const localPath = this.path;
      return (
        "/" +
        localPath.slice(1) +
        "/" +
        data.base.replace(localPath.slice(1), "").replace(".json", "")
      );
    }
  }
};
</script>
<style scoped lang="css">
</style>
