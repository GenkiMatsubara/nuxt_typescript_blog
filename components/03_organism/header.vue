<template>
  <div class="header">
    <n-link class="link" :to="'/'">
      <p>Genkiのブログ</p>
    </n-link>
    <n-link class="link" :to="'/travel'">
      <p>travel</p>
    </n-link>
    <n-link class="link" :to="'/information'">
      <p>Information</p>
    </n-link>
  </div>
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
  font-family: fantasy;
  font-weight: bold;
}
p {
  float: left;
  margin-right: 20px;
}
</style>
