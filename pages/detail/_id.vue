<template>
  <PageTemplate class="wrapper">
    <div class="contentArea">
      <div v-if="this.pageData.length > 0">
        <div v-for="(item, index) in this.pageData" :key="index">
          <h2>{{item.title}}</h2>
          <p>{{item.description}}</p>
          <p>{{item.description}}</p>
          <p>{{item.description}}</p>
          <setIcons :imageId="item.id" :imageType="'icon'" :gameTitle="item.title" />
          <p>{{item.description}}</p>
          <p>{{item.description}}</p>
          <p>{{item.description}}</p>
          <p>{{item.description}}</p>
          <n-link :to="'/'">TOPに戻る</n-link>
        </div>
      </div>
      <div v-else>
        <p>該当のページはありません</p>
        <n-link :to="'/'">TOPに戻る</n-link>
      </div>
    </div>
  </PageTemplate>
</template>

<script>
import PageTemplate from "@/components/04_templates/pageTemplate.vue";
import setIcons from "@/components/01_atom/setIcon.vue";

export default {
  data() {
    return {
      mainData: require("@/static/json/travel.json"),
      pageId: this.$route.params.id,
      pageData: null
    };
  },
  components: {
    setIcons,
    PageTemplate
  },
  created() {
    this.pageData = this.mainData.filter(item => item.id === this.pageId);
  },
  methods: {}
};
</script>

<style scoped lang='css'>
.wrapper {
  min-width: 640px;
}
body {
  margin: 0;
  padding: 0;
}
.contentArea {
  margin-top: 120px;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>