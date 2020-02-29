<template>
  <div class="imageList clearfix">
    <h1>topだよ</h1>
  </div>
</template>

<script>
import Content from "@/components/02_molecule/content.vue";
export default {
  data() {
    return {
      mainData: require("@/static/json/travel/data.json")
    };
  },
  components: {
    Content
  },
  created() {},
  mounted() {
    this.readJSON();
  },
  methods: {
    readJSON() {}
  }
};
</script>
<style scoped lang="css">
.imageList {
  margin-top: 120px;
}
.contentArea {
  float: left;
  width: 100%;
  height: fit-content;
  display: block;
  list-style: none;
}
.clearfix:after {
  content: ".";
  display: block;
  clear: both;
  height: 0;
  visibility: hidden;
}
</style>
