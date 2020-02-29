<template>
  <div>
    <p>テックのリスト</p>
    {{pageList}}
    <div v-for="(item, index) in pageList['fileMap']" :key="index">
      <br />
      <n-link :to="`/tech/1`">
        <div :on="consoleM(item)">{{item.title}}</div>
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
  created() {
    console.info(this.pageList);
  },
  components: {},
  methods: {
    consoleM: log => {
      console.log(log);
    }
  }
};
</script>
<style scoped lang="css">
</style>
