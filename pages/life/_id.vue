<template>
  <div class="wrapper">
    <div v-html="$md.render(pageData.bodyContent)"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageId: this.$route.params.id,
      pageData: require("@/static/json/life/" + this.$route.params.id + ".json")
    };
  },
  components: {},
  created() {
    console.log(this.pageData);
  },
  methods: {}
};
</script>

<style scoped lang='css'>
</style>