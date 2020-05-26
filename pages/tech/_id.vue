<template>
  <PageTemplate>
    <div class="wrapper">
      <RenderHtml :htmlData="pageData.bodyContent" />
    </div>
  </PageTemplate>
</template>

<script>
import PageTemplate from "@/components/04_templates/pageTemplate.vue";
import RenderHtml from "@/components/02_molecule/renderHtml.vue";
export default {
  data() {
    return {
      pageId: this.$route.params.id,
      pageData: require("@/static/json/tech/" + this.$route.params.id + ".json")
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
.renderHtml {
  width: 100%;
}
</style>