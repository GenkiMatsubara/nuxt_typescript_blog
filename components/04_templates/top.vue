<template>
  <div class="imageList clearfix">
    <h1>topだよ</h1>
    <div class="img_box">
      <SetImage :src="'top_bg.png'" :alt="'トップ画像'" />
    </div>
    <div>
      <div style="background:orange" class="box">テック</div>
      <div style="background:#399cea" class="box">LIFE</div>
      <div style="background:#3fcc45" class="box">写真</div>
      <div style="background:#e64444" class="box">旅</div>
    </div>
  </div>
</template>

<script>
import Content from "@/components/02_molecule/content.vue";
import SetImage from "@/components/01_atom/setImage.vue";
export default {
  data() {
    return {
      mainData: require("@/static/json/travel.json")
    };
  },
  components: {
    Content,
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
.box {
  float: left;
  width: 25%;
  height: 100%;
}
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
