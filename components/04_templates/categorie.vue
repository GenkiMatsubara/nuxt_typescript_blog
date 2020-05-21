<template>
  <div class="categoriePage">
    <h1>{{savePath}}</h1>
    <p class="subtitle">{{ setPageTitle() }}</p>
    <div v-for="(item, index) in setPageData[1]" :key="index">
      <div>
        <nuxt-link :to="setType(item)">
          <h2>{{item.title}}</h2>
        </nuxt-link>
      </div>
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
      const setTitle = this.$route.path;
      return setTitle.slice(1);
    }
  },
  methods: {
    setType(data) {
      return (
        data.dir.replace("static/json/", "") +
        "/" +
        data.base.replace(".json", "")
      );
    },
    setPageTitle() {
      if (this.$route.path == "/tech") {
        return "技術記事";
      }
      if (this.$route.path == "/tech") {
        return "雑記記事";
      }
      if (this.$route.path == "/photo") {
        return "写真紹介";
      }
      if (this.$route.path == "/travel") {
        return "たびについて";
      }
      return "このページについて";
    }
  }
};
</script>
<style scoped lang="scss">
.categoriePage {
  .subtitle{font-size: 24px;margin-bottom: 16px;}
  h1{font-size: 32px;margin-bottom: 16px;}
  h2{font-size: 30px;margin-bottom: 16px;}
}
</style>
