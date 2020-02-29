<template>
  <div>
    <p>技術記事リスト</p>
    <div v-for="(item, index) in pageList['fileMap']" :key="index">
      <br />
      <n-link :to="path(item)">
        <div>{{item.title}}</div>
      </n-link>
      <br />
    </div>
  </div>
</template>

<script>
import techPostList from "@/static/json/tech.json";
export default {
  data() {
    return {
      pageList: techPostList
    };
  },
  components: {},
  methods: {
    path: data => {
      return `/tech/` + data.base.replace("tech", "").replace(".json", "");
    }
  }
};
</script>
<style scoped lang="css">
</style>
