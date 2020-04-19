<template>
  <div class="renderHtml" v-html="$md.render(htmlData)" />
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  created() {},
  props: {
    htmlData: {
      type: Object,
      required: true,
      default: () => {
        return "";
      }
    }
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped lang="scss">
.renderHtml {
  width: 100%;
  /deep/ h1 {
    font-size: 48px;
    margin-top: 24px;
    margin-bottom: 24px;
  }
  /deep/ h2 {
    font-size: 40px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  /deep/ h3 {
    font-size: 36px;
    margin-top: 18px;
    margin-bottom: 18px;
  }
  /deep/ h4 {
    font-size: 32px;
    margin-top: 16px;
    margin-bottom: 16px;
  }
  /deep/ h5 {
    font-size: 28px;
    margin-top: 14px;
    margin-bottom: 14px;
  }
  /deep/ p,
  li {
    font-size: 18px;
    margin-top: 9px;
    margin-bottom: 9px;
  }
  /deep/ ul,
  ol,
  dl {
    padding-left: 32px;
  }
  /deep/ img {
    width: 75%;
    margin-right: 5%;
    margin-bottom: 20px;
  }
  /deep/ a {
    color: cornflowerblue;
    text-decoration: underline;
  }
}
@media (max-width: 896px) {
  .renderHtml {
    width: 100%;
    /deep/ h1 {
      font-size: 40px;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    /deep/ h2 {
      font-size: 36px;
      margin-top: 18px;
      margin-bottom: 18px;
    }
    /deep/ h3 {
      font-size: 32px;
      margin-top: 16px;
      margin-bottom: 16px;
    }
    /deep/ h4 {
      font-size: 28px;
      margin-top: 14px;
      margin-bottom: 14px;
    }
    /deep/ h5 {
      font-size: 24px;
      margin-top: 12px;
      margin-bottom: 12px;
    }
    /deep/ p,
    li {
      font-size: 18px;
      margin-top: 9px;
      margin-bottom: 9px;
    }
    /deep/ img {
      width: 75%;
      margin-bottom: 20px;
    }
  }
}
@media (max-width: 480px) {
  .renderHtml {
    width: 100%;
    /deep/ h1 {
      font-size: 36px;
      margin-top: 18px;
      margin-bottom: 18px;
    }
    /deep/ h2 {
      font-size: 32px;
      margin-top: 16px;
      margin-bottom: 16px;
    }
    /deep/ h3 {
      font-size: 28px;
      margin-top: 14px;
      margin-bottom: 14px;
    }
    /deep/ h4 {
      font-size: 24px;
      margin-top: 12px;
      margin-bottom: 12px;
    }
    /deep/ h5 {
      font-size: 20px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    /deep/ img {
      width: 100%;
      margin-bottom: 20px;
    }
  }
}
</style>
