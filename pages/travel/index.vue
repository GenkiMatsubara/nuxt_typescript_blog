<template>
  <ContentList />
</template>

<script>
import ContentList from "@/components/04_templates/contentList.vue";

export default {
  data() {
    return {
      pageData: "index"
    };
  },
  created() {},
  components: {
    ContentList
  }
};
</script>

<style lang="css">
* {
  margin: 0;
  padding: 0;
}
</style>
