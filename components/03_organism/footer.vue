<template>
  <footer class="footer">
    <p>Genkiのブログ</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerData: "footer"
    };
  },
  created() {}
};
</script>

<style scoped lang="css">
.footer {
  width: 100%;
  height: 70px;
  padding-top: 1px;
  text-align: center;
  background: #0a58a8;
  color: aliceblue;
  font-size: 2em;
  font-family: fantasy;
  font-weight: bold;
}
</style>
