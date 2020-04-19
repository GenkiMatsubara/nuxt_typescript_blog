<template>
  <footer class="footer">
    <div class="titleContent">
      <n-link class="link" :to="'/'">
        <p>Genkiのブログ</p>
      </n-link>
    </div>
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
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 1px;
  background: #0a58a8;
  color: aliceblue;
  font-size: 2em;
  font-weight: bold;
}
.titleContent p {
  font-size: 36px;
}
p {
  color: white;
}
a {
  text-decoration: none;
}
</style>
