<template>
  <div class="categoriePage">
    <h1>{{savePath}}</h1>
    <p class="subtitle">{{ setPageTitle() }}</p>
    <div class="cardContents">
      <div class="categorieCard" v-for="(item, index) in setPageData[1]" :key="index">
        <BlogCard class="" :blogContentData="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import techPostList from "@/static/json/tech.json";
import lifePostList from "@/static/json/life.json";
import travelPostList from "@/static/json/travel.json";
import photoPostList from "@/static/json/photo.json";
import BlogCard from "@/components/02_molecule/blogCard.vue";
export default {
  data() {
    return {
      path: this.$route.path,
      pageData: null
    };
  },
  components: {
    BlogCard
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
  .subtitle{
    font-size: 24px;
    margin-bottom: 16px;
    padding-left: 0;
  }
  h1{
    font-size: 32px;
    padding-left: 0;
    margin-bottom: 16px;
    font-weight: bold;
  }
  h2{
    font-size: 30px;
    padding-left: 0;
    margin-bottom: 16px;
    font-weight: bold;
  }
  .cardContents {
    .categorieCard {
      float: left;
      width: 47%;
      margin: 30px 3% 30px 0;
      .cardContent {
        padding-right: 16px;
        img {cursor: pointer;}
        h2 {
          font-size: 20px;
          font-weight: bold;
          overflow: hidden;
          height: 3em;
          overflow: hidden;
          text-overflow: ellipsis;
          cursor: pointer;
        }
      }
    }
  }
  .cardContents:after {
    content: "";
    display: block;
    clear: both;
    height: 0;
    visibility: hidden;
  }
}

// mobile
@media screen and (max-width: 974px) {
  .categoriePage {
    width: 100%;
    .subtitle{
      // font-size: 24px;
      // margin-bottom: 16px;
      // padding-left: 0;
    }
    h1{
      // font-size: 32px;
      // padding-left: 0;
      // margin-bottom: 16px;
    }
    h2{
      // font-size: 30px;
      // padding-left: 0;
      // margin-bottom: 16px;
    }
    .cardContents {
      width: 100%;
      .categorieCard {
        float: none;
        width: 100%;
        margin: 50px 0;
        .cardContent {
          padding-right: 0;
          // h2 {
          //   font-size: 20px;
          //   overflow: hidden;
          //   height: 3em;
          //   overflow: hidden;
          //   text-overflow: ellipsis;
          // }
        }
      }
    }
    // .cardContents:after {
    //   content: "";
    //   display: block;
    //   clear: both;
    //   height: 0;
    //   visibility: hidden;
    // }
  }
}
</style>
