<template>
  <div>
    <h1>tech</h1>
    <Categorie />
  </div>
</template>

<script>
import Categorie from "@/components/04_templates/categorie.vue";

export default {
  data() {
    return {
      pageData: "index"
    };
  },
  created() {},
  components: {
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
