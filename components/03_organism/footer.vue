<template>
  <footer class="footer">
    <div class="titleContent">
      <n-link class="link" :to="'/'">
        <p>Genkiのブログ</p>
      </n-link>
    </div>
    <div class="footrtContents">
      <div class="colum">
        <ul>
          <li>
            <n-link :to="'/tech'">プログラミング</n-link>
          </li>
          <li>
            <n-link :to="'/life'">LIFE</n-link>
          </li>
          <li>
            <n-link :to="'/photo'">写真</n-link>
          </li>
          <li>
            <n-link :to="'/travel'">旅</n-link>
          </li>
        </ul>
      </div>
      <div class="colum">
        <ul>
          <li>
            <n-link :to="'/tech'">リンク</n-link>
          </li>
          <li>
            <n-link :to="'/life'">リンク</n-link>
          </li>
          <li>
            <n-link :to="'/photo'">リンク</n-link>
          </li>
          <li>
            <n-link :to="'/travel'">リンク</n-link>
          </li>
        </ul>
      </div>
      <div class="colum">
        <ul>
          <li>
            <n-link :to="'/tech'">リンク</n-link>
          </li>
          <li>
            <n-link :to="'/life'">リンク</n-link>
          </li>
          <li>
            <n-link :to="'/photo'">リンク</n-link>
          </li>
          <li>
            <n-link :to="'/travel'">リンク</n-link>
          </li>
        </ul>
      </div>
      <div class="colum">
        <ul>
          <li>
            <n-link :to="'/tech'">お問い合わせ</n-link>
          </li>
          <li>
            <n-link :to="'/life'">プライバシーポリシー</n-link>
          </li>
        </ul>
      </div>
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

<style scoped lang="scss">
.footer {
  width: 100%;
  padding: 20px 16px;
  background: #0a58a8;
  color: aliceblue;
  font-size: 2em;
  font-weight: bold;
}
.titleContent {
  width: 100%;
  p {
    font-size: 36px;
  }
}
ul {
  list-style: none;
}
p {
  color: white;
}
a {
  color: white;
  text-decoration: none;
}

.footrtContents {
  width: 100%;
  display: flex;
  .colum {
    width: 25%;
    height: 100px;
  }
}
</style>
