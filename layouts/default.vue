<template>
  <Nuxt class="layout_nuxt" />
</template>

<style lang="scss">
.pcOnly {
  display: block!important;
}
.spOnly {
  display: none!important;
}
a {
  text-decoration: none;
}
* {
  font-size: 18px;
  color: #05368e;
}
body {
  margin: 0;
}

// mobile
@media screen and (max-width: 974px) {
  .pcOnly {
    display: none!important;
  }
  .spOnly {
    display: block!important;
  }
  * {
    font-size: 18px;
  }
}
</style>