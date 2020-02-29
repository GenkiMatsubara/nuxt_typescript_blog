<template>
  <div>
    <img :src="this.imageSrc" v-on:error="errorSrc" :alt="setAlt()" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "content",
      imageSrc: null
    };
  },
  created() {
    this.imageSrc = this.setSrc();
  },
  props: {
    imageId: {
      type: String,
      required: true
    },
    imageType: {
      type: String,
      required: true
    },
    gameTitle: {
      type: String,
      required: true
    }
  },
  mounted() {},
  methods: {
    setSrc() {
      this.imageSrc = require(`@/assets/images/${this.imageType}/${this.imageId}.jpg`);
      return this.imageSrc;
    },
    errorSrc() {
      this.imageSrc = require(`@/assets/images/${this.imageType}/error.jpg`);
    },
    setAlt() {
      if (this.imageType === "icon") return this.gameTitle + "のアイコン";
      if (this.imageType === "banner") return this.gameTitle + "のバナー";
      return this.gameTitle + "の画像";
    }
  }
};
</script>
<style scoped lang="css">
.iconImage img {
  width: 100px;
  height: 100px;
}
</style>
