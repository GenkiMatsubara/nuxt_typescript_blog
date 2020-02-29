<template>
  <div>
    <img :src="this.imageSrc" :alt="setAlt()" />
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
      this.imageSrc = require(`@/assets/images/` + this.src);
      return this.imageSrc;
    },
    setAlt() {
      return this.alt;
    }
  }
};
</script>
