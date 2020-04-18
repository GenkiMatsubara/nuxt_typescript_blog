<template>
  <PageTemplate>
    <div v-html="$md.render(htmlData)"></div>
  </PageTemplate>
</template>

<script>
import PageTemplate from "@/components/04_templates/pageTemplate.vue";
import mdInformation from "@/static/md/information.md";

export default {
  data() {
    return {
      pageData: "index",
      htmlData: mdInformation
    };
  },
  created() {},
  components: {
    PageTemplate
  }
};
</script>

<style lang="css">
body {
  margin: 0;
  padding: 0;
}
</style>
