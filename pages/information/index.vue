<template>
  <div v-html="$md.render(htmlData)"></div>
</template>

<script>
import mdInformation from "@/static/md/information.md";

export default {
  data() {
    return {
      pageData: "index",
      htmlData: mdInformation
    };
  },
  created() {},
  components: {}
};
</script>

<style lang="css">
body {
  margin: 0;
  padding: 0;
}
</style>
