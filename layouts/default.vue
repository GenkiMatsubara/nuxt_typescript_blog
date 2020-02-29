<template>
  <div>
    <Header />
    <Nuxt class="layout_nuxt" />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/03_organism/header.vue";
import Footer from "@/components/03_organism/footer.vue";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    Footer
  }
};
</script>
<style>
@media screen and (min-width: 480px) {
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
}
@media screen and (min-width: 1024px) {
  .layout_nuxt {
    max-width: 1024px;
    margin: 0 auto;
  }
}
</style>