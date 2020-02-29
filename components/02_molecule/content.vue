<template>
  <div class="content">
    <h2>{{this.contentData.title}}</h2>
    <n-link :to="`/travel/${this.contentData.id}`">
      <setIcon
        :imageId="this.contentData.id"
        :imageType="'icon'"
        :gameTitle="this.contentData.title"
      />
    </n-link>
  </div>
</template>

<script>
import setIcon from "@/components/01_atom/setIcon.vue";

export default {
  data() {
    return {
      content: "content"
    };
  },
  components: {
    setIcon
  },
  created() {},
  props: {
    contentData: {
      type: Object,
      required: true
    }
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped lang="css">
.content {
  width: fit-content;
  height: fit-content;
}
.content img {
  width: 100px;
  height: 100px;
}
</style>
