<template>
  <div class="sideBarComponent">
    <div class="content">
      <div class="titleContent">
      <n-link class="link" :to="'/'">
        <p>Genkiのブログ</p>
      </n-link>
      </div>
      <Cards />
      <NewsPost />
    </div>
  </div>
</template>

<script>
import Cards from "@/components/02_molecule/cards.vue";
import NewsPost from "@/components/02_molecule/newsPost.vue";
export default {
  data() {
    return {};
  },
  created() {},
  components: {
    Cards,
    NewsPost
  }
};
</script>

<style scoped lang="scss">
p {
  font-size: 36px;
  margin-right: 20px;
  color: aliceblue;
}
.titleContent {
  width: 100%;
  height: 50px;
}

@media (max-width: 974px) {
  .sideBarComponent {
    .content{
      padding: 0 16px;
    }
    p {
      font-size: 32px;
    }
  }
}
</style>
