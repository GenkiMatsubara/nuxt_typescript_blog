<template>
  <div>
    <div class="category">
      <div class="cardText">
        技術的な学びを記事にしていきます。
        <br />また大学の理数系学科で学んだ内容も記事にしていきます。
      </div>
      <nuxt-link to="/tech">
        <div class="card tech">プログラミング</div>
      </nuxt-link>
    </div>
    <div class="category">
      <div class="cardText">
        ライフハックに関することを記事にしていきます。
        <br />また大学の一般教養科目で学んだ内容も記事にしていきます。
      </div>
      <nuxt-link to="/life">
        <div class="card life">LIFE</div>
      </nuxt-link>
    </div>
    <div class="category">
      <div class="cardText">趣味の写真を公開しています。</div>
      <nuxt-link to="/photo">
        <div class="card photo">写真</div>
      </nuxt-link>
    </div>
    <div class="category">
      <div class="cardText">ひとり旅を記事にしていきます。</div>
      <nuxt-link to="/travel">
        <div class="card travel">旅</div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
};
</script>
<style scoped lang="scss">
.tech {
  background: orange;
}
.life {
  background: #399cea;
}
.photo {
  background: #3fcc45;
}
.travel {
  background: #e64444;
}
.category {
  display: block;
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
  .card {
    color: white;
    width: 200px;
    height: 100%;
  }
  .card:hover {
    opacity: 0.6;
  }
  .cardText {
    float: right;
    width: calc(100% - 200px);
  }
}
// mobile
@media screen and (max-width: 974px) {
  .category {
    display: flex;
    height: 150px;
    margin-bottom: 20px;
    .card {
      width: 150px;
      height: 100%;
    }
    .cardText {
      float: none;
      width: calc(100% - 150px);
      padding-right: 16px;
    }
  }
}
</style>
