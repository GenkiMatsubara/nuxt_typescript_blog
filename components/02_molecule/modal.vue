<template>
  <div class="modalWarapper">
    <div class="modal">
      <div v-on:click="closeModal()">close</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods:{
    closeModal(){
      this.$emit('close-modal');
    }
  }
};
</script>

<style scoped lang="scss">

.modalWarapper{
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #0a58a8;
  z-index: 999;
  .modal {
    width: 187px;
    height: 100%;
    margin: 84px auto 0;
    .modalContent {
      height: 100%;
    }
  }
}
</style>