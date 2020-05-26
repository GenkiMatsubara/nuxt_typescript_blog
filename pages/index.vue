<template>
  <PageTemplate>
    <div class="imageList clearfix">
      <!-- <textAnime /> -->
      <!-- <NewsPost /> -->
      <h2>カテゴリーから探す</h2>
      <Genre />
      <!-- <Cards /> -->
    </div>
  </PageTemplate>
</template>

<script>
import PageTemplate from "@/components/04_templates/pageTemplate.vue";
import Cards from "@/components/02_molecule/cards.vue";
import Genre from "@/components/02_molecule/genre.vue";
import TextAnime from "@/components/02_molecule/textAnime.vue";
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
    Genre,
    TextAnime,
    SetImage,
    NewsPost
  },
  created() {
  },
  mounted() {
    this.readJSON();
  },
  methods: {
    readJSON() {}
  },
  asyncData() {
    return client.getEntries()
      .then(entries => {
        return {
          posts: entries.items
        }
    })
  }
};
</script>
<style scoped lang="scss">
h2 {
  font-size: 32px;
}
.post {
  margin-bottom: 20px;
  .postTitle {
    font-size: 24px;
  }
}
</style>

