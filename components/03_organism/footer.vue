<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="footerTitle">
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
            <li>
              <n-link :to="'/about'">このサイトについて</n-link>
            </li>
            <li>
              <n-link :to="'/spine'">アニメーション</n-link>
            </li>
          </ul>
        </div>
        <div class="colum">
        </div>
        <div class="colum">
        </div>
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
  background: #0a58a8;
  color: aliceblue;
  font-size: 2em;
  font-weight: bold;
  .wrapper {
    width: auto;
    max-width: 1180px;
    margin: 0 auto;
    padding: 32px 16px 64px;
    .footerTitle {
      width: 100%;
      p {
        color: white;
        font-size: 36px;
        margin-bottom: 20px;
      }
    }
    .footrtContents {
      width: 100%;
      display: flex;
      .colum {
        width: 25%;
        height: 100px;
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
    }
  }
}

// mobile
@media screen and (max-width: 974px) {
  .footer {
    width: 100%;
    background: #0a58a8;
    color: aliceblue;
    font-size: 2em;
    font-weight: bold;
    .wrapper {
      .footerTitle {
        width: 100%;
        p {
          color: white;
          font-size: 36px;
        }
      }
      .footrtContents {
        width: 100%;
        display: block;
        .colum {
          width: 100%;
          height: auto;
        }
        ul {
          list-style: none;
        }
        li{
          margin-bottom: 10px;
        }
        p {
          color: white;
        }
        a {
          color: white;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
