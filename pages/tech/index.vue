<template>
  <div>
    <h1>tech</h1>
    <Tech />
  </div>
</template>

<script>
import Tech from "@/components/04_templates/tech.vue";

export default {
  data() {
    return {
      pageData: "index"
    };
  },
  created() {},
  components: {
    Tech
  }
};
</script>

<style lang="css">
* {
  margin: 0;
  padding: 0;
}
</style>
