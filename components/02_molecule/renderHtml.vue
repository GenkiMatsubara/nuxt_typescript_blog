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
    margin-bottom: 48px;
    background: #0a58a8;
    color: white;
    padding: 6px 6px 6px 24px;
    border-radius: 6px;
  }
  /deep/ h2 {
    color: #0a58a8;
    font-size: 36px;
    margin-top: 60px;
    margin-bottom: 40px;
    position: relative;
    padding: 0.6em;
    background: #e0edff;
    padding: 6px 6px 6px 24px;
  }

  /deep/ h2:after {
    position: absolute;
    content: "";
    top: 100%;
    left: 30px;
    border: 15px solid transparent;
    border-top: 15px solid #e0edff;
    width: 0;
    height: 0;
  }
  /deep/ h3 {
    font-size: 24px;
    margin-top: 18px;
    margin-bottom: 36px;
    margin-left: 24px;
    color: #0a58a8;
    padding-left: 12px;
    border-left: solid 5px #0a58a8; /*左線*/
  }
  /deep/ h4 {
    color: #0a58a8;
    font-size: 20px;
    padding-left: 24px;
    margin-top: 32px;
    margin-bottom: 32px;
  }
  /deep/ h5 {
    color: #0a58a8;
    font-size: 18px;
    margin-top: 14px;
    margin-bottom: 28px;
  }
  /deep/ p {
    font-size: 18px;
    line-height: 54px;
    margin-top: 18px;
    margin-bottom: 36px;
    padding: 6px 6px 6px 24px;
  }
  /deep/ li {
    font-size: 18px;
    margin-top: 9px;
    margin-bottom: 18px;
  }
  /deep/ ul {
    padding-left: 32px;
    margin-bottom: 36px;
    margin-left: 16px;
  }
  /deep/ ol {
    padding-left: 32px;
    margin-bottom: 36px;
  }
  /deep/ dl {
    padding-left: 32px;
    margin-bottom: 36px;
  }
  /deep/ img {
    width: auto;
    // padding-left: 24px;
    max-width: 100%;
    margin: 40px 0;
  }
  /deep/ a {
    color: cornflowerblue;
    text-decoration: underline;
  }
  /deep/ strong {
    color: #0a58a8;
  }
  /deep/ pre {
    // margin: 20px 24px;
    padding: 20px;
    border-radius: 10px;
    background: rgb(167, 164, 164);
    code {
      color: black;
    }
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
