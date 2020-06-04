<template>
  <div class="cardsComponent">
    <nuxt-link class="card" :to="'/tech'">
      <div style="background:orange" class="box">
        <div class="card_text_box">
          <span class="cards_font">テック</span>
        </div>
      </div>
    </nuxt-link>
    <nuxt-link class="card" :to="'/life'">
      <div style="background:#399cea" class="box">
        <div class="card_text_box">
          <span class="cards_font">LIFE</span>
        </div>
      </div>
    </nuxt-link>
    <nuxt-link class="card" :to="'/photo'">
      <div style="background:#3fcc45" class="box">
        <div class="card_text_box">
          <span class="cards_font">写真</span>
        </div>
      </div>
    </nuxt-link>
    <nuxt-link class="card" :to="'/travel'">
      <div style="background:#e64444" class="box">
        <div class="card_text_box">
          <span class="cards_font">旅</span>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "content"
    };
  }
};
</script>
<style scoped lang="scss">
.box:hover {
  opacity: 0.6;
}
.cardsComponent {
  height: 120px;
  display: flex;
  a {
    height: fit-content;
    text-decoration: none;
  }
  .card {
    width: 25%;
    height: 100%;
    display: block;
  }
  .box {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
    .card_text_box {
      color: aliceblue;
      height: 100%;
      // margin-top: 70px;
      font-size: 2.5em;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-weight: bold;
      text-align: center;
      .cards_font {
        color: white;
      }
    }
  }
}
@media (max-width: 896px) {
  .cardsComponent {
    height: 80px;
    display: flex;
    .box {
      // width: 100px;
      // height: 100px;
      .card_text_box {
        color: aliceblue;
        height: 100%;
        // margin-top: 70px;
        font-size: 2em;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-weight: bold;
        text-align: center;
      }
    }
  }
}
@media (max-width: 480px) {
  .cardsComponent {
    display: block;
    height: auto;
    .box {
      width: 100%;
      .card_text_box {
        color: aliceblue;
        height: 100%;
        // margin-top: 70px;
        font-size: 1.5em;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        font-weight: bold;
        text-align: center;
      }
    }
  }
}
</style>
