<template>
  <header class="header">
    <div class="content">
      <div class="titleContent">
        <n-link class="titleLink" :to="'/'">
          <p class="pageTitle">Genkiのブログ</p>
        </n-link>
        <ul class="headerLink pcOnly">
          <li>
            <n-link class="link" :to="'/tech'">
              <p>▶︎tech</p>
            </n-link>
          </li>
          <li>
            <n-link class="link" :to="'/life'">
              <p>▶︎life</p>
            </n-link>
          </li>
        </ul>
        <div class="spButton spOnly">
          ≡
        </div>
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
    position: relative;
    widows: 100%;
    max-width: 1180px;
    height: 100%;
    margin: 0 auto;
    color: aliceblue;
    .titleContent {
      width: 100%;
      height: auto;
      .titleLink {
        .pageTitle {
          font-size: 28px;
          margin-left: 16px;
          margin-right: 20px;
          margin-top: 0;
          margin-bottom: 0;
          color: aliceblue;
        }
      }
      .headerLink {
        position: absolute;
        top: 0;
        right: 0;
        width: 300px;
        list-style: none;
        display: flex;
        p{
          font-size: 20px;
          margin-right: 20px;
          margin-top: 4px;
          width: fit-content;
          color: aliceblue;
        }
      }
    }
  }
}
p:hover {
  opacity: 0.7;
}
// mobile
@media screen and (max-width: 974px) {
  .header {
    width: 100%;
    .content{
      margin-left: 16px;
    }
  }
  .spButton {
    font-size: 28px;
    width: fit-content;
    position: absolute;
    top: 0;
    right: 16px;
    color: white;
  }
}
</style>
