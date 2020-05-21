<template>
  <PageTemplate pageTopImg="/images/photo.jpg">
    <h1>ギャラリー</h1>
    <div class="garary">
      <iframe
      src="https://snapwidget.com/embed/815802"
      class="snapwidget-widget"
      allowtransparency="true"
      frameborder="0"
      scrolling="no"
      style="border:none; overflow:hidden;  width: 100%; height:990px;"
    />
    </div>
    <Categorie />
  </PageTemplate>
</template>

<script>
import PageTemplate from "@/components/04_templates/pageTemplate.vue";
import Categorie from "@/components/04_templates/categorie.vue";

export default {
  data() {
    return {
      pageData: "index"
    };
  },
  created() {},
  components: {
    PageTemplate,
    Categorie
  }
};
</script>

<style lang="css">
* {
  margin: 0;
  padding: 0;
}
h1 {
  padding-left: 16px;
}
.garary {
  padding: 0 16px;
}
</style>
