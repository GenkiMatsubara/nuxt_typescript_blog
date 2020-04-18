<template>
  <PageTemplate>
    <h1>photo</h1>
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
    PageTemplate,
    Categorie
  }
};
</script>

<style lang="css">
* {
  margin: 0;
  padding: 0;
}
</style>
