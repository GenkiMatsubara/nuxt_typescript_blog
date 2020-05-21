<template>
  <PageTemplate pageTopImg="tech.jpg">
    <Categorie />
    <!-- <Cards /> -->
  </PageTemplate>
</template>

<script>
import PageTemplate from "@/components/04_templates/pageTemplate.vue";
import Categorie from "@/components/04_templates/categorie.vue";
import Cards from "@/components/02_molecule/cards.vue";

export default {
  data() {
    return {
      pageData: "index"
    };
  },
  created() {},
  components: {
    Categorie,
    PageTemplate,
    Cards
  }
};
</script>

<style lang="css">
* {
  margin: 0;
  padding: 0;
}
</style>
