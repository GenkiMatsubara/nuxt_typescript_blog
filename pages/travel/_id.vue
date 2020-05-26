<template>
  <PageTemplate>
    <RenderHtml :htmlData="pageData.bodyContent" />
  </PageTemplate>
</template>

<script>
import PageTemplate from "@/components/04_templates/pageTemplate.vue";
import RenderHtml from "@/components/02_molecule/renderHtml.vue";
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
    PageTemplate,
    RenderHtml
  },
  created() {},
  methods: {}
};
</script>

<style scoped lang='css'>
</style>