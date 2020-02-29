<template>
  <div class="imageList clearfix">
    <div class="contentArea clearfix" v-for="(data, index) in mainData" :key="index">
      <!-- <Content :contentData="data" /> -->
    </div>
  </div>
</template>

<script>
import Content from "@/components/02_molecule/content.vue";
export default {
  data() {
    return {
      mainData: require("@/static/json/travel.json")
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
