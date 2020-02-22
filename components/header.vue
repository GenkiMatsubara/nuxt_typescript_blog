<template>
  <div class="header">
    <p>Genkiの旅ログ</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      headerData:'header'
    }
  },
  created(){
  },
}
</script>

<style scoped lang="css">
.header {
  width: 100%;
  height: 120px;
  position: absolute;
  top: 0;
  text-align: center;
  background: black;
  color: aliceblue;
  font-size: 2em;
  font-family: fantasy;
  font-weight: bold;
}
</style>
