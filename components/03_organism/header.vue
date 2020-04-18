<template>
  <header class="header">
    <div class="content">
      <div class="titleContent">
        <n-link class="link" :to="'/'">
          <p>Genkiのブログ</p>
        </n-link>
      </div>
      <!-- <div class="boxLink">
        <n-link class="link" :to="'/tech'">
          <div style="background:orange" class="box">テック</div>
        </n-link>
        <n-link class="link" :to="'/life'">
          <div style="background:#399cea" class="box">LIFE</div>
        </n-link>
        <n-link class="link" :to="'/photo'">
          <div style="background:#3fcc45" class="box">写真</div>
        </n-link>
        <n-link class="link" :to="'/travel'">
          <div style="background:#e64444" class="box">旅</div>
        </n-link>
      </div>-->
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      headerData: "header"
    };
  },
  created() {}
};
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: auto;
  background: #0a58a8;
  color: aliceblue;
  font-size: 2em;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 10px;
  .content {
    max-width: 1280px;
    height: 100%;
    margin: 0 auto;
    color: aliceblue;
  }
  .boxLink {
    width: 100%;
    height: 50px;
    .box {
      font-size: 0.5em;
      float: left;
      width: 24%;
      // margin-left: 1%;
      margin-right: 1%;
      height: 30px;
      // margin-top: 10px;
      margin-right: 10px;
      color: white;
      text-align: center;
    }
  }
}
p {
  float: left;
  margin-right: 20px;
  color: aliceblue;
}
.titleContent {
  width: 100%;
  height: 50px;
}
</style>
