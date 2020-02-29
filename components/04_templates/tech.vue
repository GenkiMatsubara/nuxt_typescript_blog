<template>
  <div>
    <p>テックのリスト</p>
    {{pageList}}
    <div v-for="(item, index) in pageList['fileMap']" :key="index">
      <br />
      <div>{{item.title}}</div>
      <br />
      <div>{{item}}</div>
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
  components: {}
};
</script>
<style scoped lang="css">
</style>
