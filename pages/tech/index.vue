<template>
  <PageTemplate>
    <h1>tech</h1>
    <Categorie />
  </PageTemplate>
</template>

<script>
import PageTemplate from "@/components/04_templates/pageTemplate.vue";
import Categorie from "@/components/04_templates/categorie.vue";

export default {
  data() {
    return {
      pageData: "index"
    };
  },
  created() {},
  components: {
    Categorie,
    PageTemplate
  }
};
</script>

<style lang="css">
* {
  margin: 0;
  padding: 0;
}
</style>
