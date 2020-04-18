<template>
  <PageTemplate>
    <div v-html="$md.render(pageData.bodyContent)"></div>
  </PageTemplate>
</template>

<script>
import PageTemplate from "@/components/04_templates/pageTemplate.vue";
export default {
  data() {
    return {
      pageId: this.$route.params.id,
      pageData: require("@/static/json/travel/" +
        this.$route.params.id +
        ".json")
    };
  },
  components: {
    PageTemplate
  },
  created() {
    console.log(this.pageData);
  },
  methods: {}
};
</script>

<style scoped lang='css'>
</style>