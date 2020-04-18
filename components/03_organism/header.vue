<template>
  <header class="header">
    <div class="content">
      <n-link class="link" :to="'/'">
        <p>Genkiのブログ</p>
      </n-link>
      <n-link class="link" :to="'/travel'">
        <p>travel</p>
      </n-link>
      <n-link class="link" :to="'/information'">
        <p>Information</p>
      </n-link>
      <div>
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
      </div>
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

<style scoped lang="css">
.header {
  width: 100%;
  height: 70px;
  background: #0a58a8;
  color: aliceblue;
  font-size: 2em;
  font-weight: bold;
}
.content {
  max-width: 1180px;
  height: 100%;
  margin: 0 auto;
  color: aliceblue;
}
p {
  float: left;
  margin-right: 20px;
  color: aliceblue;
}
.box {
  font-size: 0.5em;
  float: left;
  width: 100px;
  height: 50px;
  margin-top: 10px;
  margin-right: 10px;
  color: white;
  text-align: center;
}
</style>
