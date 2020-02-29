<template>
  <header class="header">
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
      <div style="background:orange" class="box">テック</div>
      <div style="background:#399cea" class="box">LIFE</div>
      <div style="background:#3fcc45" class="box">写真</div>
      <n-link class="link" :to="'/travel'">
        <div style="background:#e64444" class="box">旅</div>
      </n-link>
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
  position: absolute;
  top: 0;
  text-align: center;
  background: #0a58a8;
  color: aliceblue;
  font-size: 2em;
  font-weight: bold;
}
p {
  float: left;
  margin-right: 20px;
}
.box {
  font-size: 0.5em;
  float: left;
  width: 150px;
  height: 50%;
}
</style>
