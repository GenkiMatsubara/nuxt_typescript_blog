<template>
  <PageTemplate>
    <h1>このページはご利用いただけません</h1>
    <p>
      アクセスしようとしたページが見つかりませんでした。<br>ページが移動または削除されたか、URL の入力間違いの可能性があります。
    </p>
    <nuxt-link to="/">トップページへ戻る</nuxt-link>
  </PageTemplate>
</template>

<script>
import PageTemplate from "@/components/04_templates/pageTemplate.vue";
export default {
  components: {
    PageTemplate,
  },
};
</script>
