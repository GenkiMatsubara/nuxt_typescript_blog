<template>
  <PageTemplate>
    <h2>カテゴリーから探す</h2>
    <Genre />
  </PageTemplate>
</template>

<script>
import PageTemplate from "@/components/04_templates/pageTemplate.vue";
import Cards from "@/components/02_molecule/cards.vue";
import Genre from "@/components/02_molecule/genre.vue";
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
@media (max-width: 974px) {
}
</style>

