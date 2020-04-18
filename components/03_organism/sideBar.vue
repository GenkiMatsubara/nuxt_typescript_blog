<template>
  <div class="sideBarComponent">
    <div class="titleContent">
      <n-link class="link" :to="'/'">
        <p>Genkiのブログ</p>
      </n-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {}
};
</script>

<style scoped lang="scss">
p {
  font-size: 36px;
  margin-right: 20px;
  color: aliceblue;
}
.titleContent {
  width: 100%;
  height: 50px;
}
// タブ
@media (max-width: 896px) {
}
// SP
@media (max-width: 480px) {
  p {
    font-size: 32px;
  }
}
</style>
