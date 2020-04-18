<template>
  <PageTemplate>
    <div class="imageList clearfix">
      <h1>topだよ</h1>
      <Cards />
      <div class="img_box">
        <SetImage :src="'top_bg.png'" :alt="'トップ画像'" />
      </div>
      <Cards />
    </div>
  </PageTemplate>
</template>

<script>
import PageTemplate from "@/components/04_templates/pageTemplate.vue";
import Cards from "@/components/02_molecule/cards.vue";
import SetImage from "@/components/01_atom/setImage.vue";

export default {
  data() {
    return {
      mainData: require("@/static/json/travel.json")
    };
  },
  components: {
    PageTemplate,
    Cards,
    SetImage
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
.img_box img {
  width: 100%;
}
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

