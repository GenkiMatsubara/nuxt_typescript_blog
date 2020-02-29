<template>
  <div>
    <nuxt-link :to="'/tech'">
      <div style="background:orange" class="box">
        <p class="card_text_box">
          <span class="cards_font">テック</span>
        </p>
      </div>
    </nuxt-link>
    <nuxt-link :to="'/life'">
      <div style="background:#399cea" class="box">
        <p class="card_text_box">
          <span class="cards_font">LIFE</span>
        </p>
      </div>
    </nuxt-link>
    <nuxt-link :to="'/photo'">
      <div style="background:#3fcc45" class="box">
        <p class="card_text_box">
          <span class="cards_font">写真</span>
        </p>
      </div>
    </nuxt-link>
    <nuxt-link :to="'/travel'">
      <div style="background:#e64444" class="box">
        <p class="card_text_box">
          <span class="cards_font">旅</span>
        </p>
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
<style scoped lang="css">
.box {
  float: left;
  width: 200px;
  height: 200px;
}
.box:hover {
  opacity: 0.6;
  width: 200px;
  height: 200px;
}
.card_text_box {
  color: aliceblue;
  height: 60px;
  margin-top: 70px;
  font-size: 2.5em;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  text-align: center;
}
/* .cards_font {
  font-size: 2.5em;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
} */
</style>
