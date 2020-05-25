<template>
  <PageTemplate>
    <div class="imageList clearfix">
      <NewsPost />
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
      <div>
        <div>使用技術について</div>
        <div>
          Nuxt.js
          <br />FireBase
        </div>
        <div>FireBaseとFireBaseのABテスト機能を使ってみたいという理由で今回はこのような選定になっています。</div>
      </div>
      <!-- <Cards /> -->
    </div>
  </PageTemplate>
</template>

<script>
import PageTemplate from "@/components/04_templates/pageTemplate.vue";
import Cards from "@/components/02_molecule/cards.vue";
import NewsPost from "@/components/02_molecule/newsPost.vue";
import SetImage from "@/components/01_atom/setImage.vue";
import client from '~/plugins/contentful.js'

export default {
  data() {
    return {
      mainData: require("@/static/json/travel.json")
    };
  },
  components: {
    PageTemplate,
    Cards,
    SetImage,
    NewsPost
  },
  created() {},
  mounted() {
    this.readJSON();
  },
  methods: {
    readJSON() {}
  },
  asyncData() {
    return client.getEntries()
      .then(entries => {
        // console.log(entries.items);
        return {
          posts: entries.items
        }
    })
  }
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
  display: flex;
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
      width: calc(100% - 150px);
      padding-right: 16px;
    }
  }
}
// // SP
// @media (max-width: 480px) {
//   .category {
//     // display: block;
//     width: 100%;
//     height: 300px;
//     .card {
//       // width: 200px;
//       width: 100%;
//       height: 200px;
//     }
//     .cardText {
//       width: 100%;
//     }
//   }
// }
</style>

