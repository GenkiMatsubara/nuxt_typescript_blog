<template>
  <div>
    <img :src="this.src" :alt="setAlt()" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageSrc: null
    };
  },
  created() {
    this.imageSrc = this.setSrc();
  },
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },
  methods: {
    setSrc() {
      // this.imageSrc = require(`/images/` + this.src);
      return this.imageSrc;
    },
    setAlt() {
      return this.alt;
    }
  }
};
</script>

<style>
img {
  width: 100%;
}
</style>
