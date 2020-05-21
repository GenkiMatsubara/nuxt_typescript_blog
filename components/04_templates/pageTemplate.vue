<template>
  <div class>
    <Header />
    <div class="mainImg">
      <img :src="pageTopImg" alt="トップ画像" />
    </div>
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
  height: 200px;
  position: sticky;
  position: -webkit-sticky;
  display: inline-block;
  overflow: hidden;
  background-size: cover;
}
.main {
  width: 100%;
  // max-width: 1280px;
  display: flex;
  .content {
    width: calc(100% - 300px - 32px);
    margin: 0 16px 40px 32px;
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
    // height: 200px;
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
</style>
