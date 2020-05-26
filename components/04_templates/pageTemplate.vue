<template>
  <div class>
    <Header />
    <div class="mainImg" :style="`backgroundImage: url(`+pageTopImg+`)`" alt="トップ画像"></div>
    <div class="main">
      <div class="content">
        <slot />
      </div>
      <SideBar class="sideBar" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/03_organism/header.vue";
import Footer from "@/components/03_organism/footer.vue";
import SideBar from "@/components/03_organism/sideBar.vue";
import SetImage from "@/components/01_atom/setImage.vue";
export default {
  data() {
    return {
      mainData: require("@/static/json/travel.json")
    };
  },
  props: {
    pageTopImg: {
      type: String,
      default: () => {
        return "/images/sample.jpg";
      }
    }
  },
  components: {
    Header,
    Footer,
    SetImage,
    SideBar
  },
  created() {}
};
</script>
<style scoped lang="scss">
.mainImg {
  width: 100%;
  height: 300px;
  position: sticky;
  position: -webkit-sticky;
  display: inline-block;
  overflow: hidden;
  background-size: cover;
  img {
    margin: 0px;
    width: 100%;
  }
}
.main {
  width: 100%;
  display: flex;
  max-width: 1180px;
  margin: 0 auto;
  .content {
    width: calc(100% - 300px - 32px);
    margin: 0 16px 40px;
    h1 {
      font-size: 32px;
    }
  }
  .sideBar {
    background-color: aqua;
    width: 300px;
  }
}



@media (max-width: 896px) {
  .mainImg {
    width: 100%;
    height: 200px;
  }
  .main {
    width: calc(100% - 32px);
    margin: 0 16px;
    display: block;
    .content {
      width: 100%;
      margin: 0;
    }
    .sideBar {
      width: 100%;
    }
  }
}
// SP
@media (max-width: 480px) {
  .main {
    width: calc(100% - 32px);
    margin: 0 16px;
    display: block;
    .content {
      width: 100%;
      margin: 0;
    }
    .sideBar {
      width: 100%;
    }
  }
}

  h1 {
    font-size: 48px;
    margin-top: 24px;
    margin-bottom: 48px;
    background: #0a58a8;
    color: white;
    padding: 6px 6px 6px 24px;
    border-radius: 6px;
  }
  h2 {
    color: #0a58a8;
    font-size: 36px;
    margin-top: 60px;
    margin-bottom: 40px;
    position: relative;
    padding: 0.6em;
    background: #e0edff;
    padding: 6px 6px 6px 24px;
  }

  h2:after {
    position: absolute;
    content: "";
    top: 100%;
    left: 30px;
    border: 15px solid transparent;
    border-top: 15px solid #e0edff;
    width: 0;
    height: 0;
  }
  h3 {
    font-size: 24px;
    margin-top: 18px;
    margin-bottom: 36px;
    margin-left: 24px;
    color: #0a58a8;
    padding-left: 12px;
    border-left: solid 5px #0a58a8; /*左線*/
  }
  h4 {
    color: #0a58a8;
    font-size: 20px;
    padding-left: 24px;
    margin-top: 32px;
    margin-bottom: 32px;
  }
  h5 {
    color: #0a58a8;
    font-size: 18px;
    margin-top: 14px;
    margin-bottom: 28px;
  }
  p {
    font-size: 18px;
    line-height: 54px;
    margin-top: 18px;
    margin-bottom: 36px;
    padding: 6px 6px 6px 24px;
  }
  li {
    font-size: 18px;
    margin-top: 9px;
    margin-bottom: 18px;
  }
  ul {
    padding-left: 32px;
    margin-bottom: 36px;
    margin-left: 16px;
  }
  ol {
    padding-left: 32px;
    margin-bottom: 36px;
  }
  dl {
    padding-left: 32px;
    margin-bottom: 36px;
  }
  img {
    width: auto;
    max-width: 100%;
    margin: 40px 0;
  }
  a {
    color: cornflowerblue;
    text-decoration: underline;
  }
  strong {
    color: #0a58a8;
  }
  pre {
    padding: 20px;
    border-radius: 10px;
    background: rgb(167, 164, 164);
    code {
      color: black;
    }
  }
@media (max-width: 974px) {
  h1 {
    font-size: 40px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  h2 {
    font-size: 36px;
    margin-top: 18px;
    margin-bottom: 18px;
  }
  h3 {
    font-size: 32px;
    margin-top: 16px;
    margin-bottom: 16px;
  }
  h4 {
    font-size: 28px;
    margin-top: 14px;
    margin-bottom: 14px;
  }
  h5 {
    font-size: 24px;
    margin-top: 12px;
    margin-bottom: 12px;
  }
  p,
  li {
    font-size: 18px;
    margin-top: 9px;
    margin-bottom: 9px;
  }
  img {
    width: 75%;
    margin-bottom: 20px;
  }
}
</style>
