<template>
  <nuxt-link tag="div" class="blogCardsComponent" :to="setType(blogContentData)">    
    <div class="cardImg" :style="`backgroundImage: url(`+blogContentData.image+`)`" :alt="blogContentData.title"></div>
    <div class="blogInfo">
      <div class="subInfo">
        <span class="categorie">{{blogContentData.type}}</span>
        <span class="date">{{setDate(blogContentData.created_at)}}</span>
      </div>
      <h2 class="postTitle">{{blogContentData.title}}</h2>
      <div class="postTag">#tag</div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    blogContentData: {
      type: Object
    }
  },
  created(){
  },
  methods:{
    setType(data) {
      return (
        data.dir.replace("static/json/", "") +
        "/" +
        data.base.replace(".json", "")
      );
    },
    setDate(date){
      const setDate = new Date(date);
      const year = setDate.getFullYear();
      const month = setDate.getMonth() + 1;
      const day = setDate.getDate();

      return  year + '.' + ("0"+ month).slice(-2) + '.' + ("0"+ day).slice(-2);
    },
  }
};
</script>
<style scoped lang="scss">
.blogCardsComponent {
  .cardImg {
    width: 100%;
    // height: 320px;
    padding-top: 70%;
    background-position: 0;
    background-size: cover;
    border-radius: 16px 16px 0 0;
  }
  .blogInfo {
    height: 100%;
    background-color: #f5f5f5;
    padding: 16px;
    border-radius: 0 0 16px 16px;
    .subInfo {
      position: relative;
      .categorie {
        display: inline-block;
        padding: 4px 8px;
        border-radius: 12px;
        background: green;
      }
      .date{
        position: absolute;
        right: 0;
        top: 4px
      }
    }
    .postTitle {
      height: 3em;
      margin-top: 1.5em;
      margin-bottom: 1em;
      line-height: 1.5em;
    }
    .postTag {
      font-size: 0.8em;
    }
  }
}
.blogCardsComponent:hover {
  opacity: 0.7;
}
@media (max-width: 974px) {
}
</style>
