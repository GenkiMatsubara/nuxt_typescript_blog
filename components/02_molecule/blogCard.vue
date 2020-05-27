<template>
  <nuxt-link tag="div" class="blogCardsComponent" :to="setPath(blogContentData)">
    <div class="cardImg" :style="`backgroundImage: url(`+blogContentData.image+`)`" :alt="blogContentData.title"></div>
    <div class="blogInfo">
      <div class="subInfo">
        <span v-if="setType(blogContentData)" class="categorie" :class="setType(blogContentData)">{{setType(blogContentData)}}</span>
        <span v-else class="categorie noCategorie">カテゴリーなし</span>
        <span class="date">{{setDate(blogContentData.created_at)}}</span>
      </div>
      <h2 class="postTitle">
        <a class="content">
          {{blogContentData.title}}
        </a>
      </h2>
      <div class="postTag" v-if="blogContentData.type">
        <ul class="tags">
          <li>#tag1</li>
          <li>#tag2</li>
          <li>#tag3</li>
        </ul>
      </div>
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
  methods:{
    setPath(data) {
      return (
        data.dir.replace("static/json/", "") +
        "/" +
        data.base.replace(".json", "")
      );
    },
    setType(data) {
      return data.dir.replace("static/json/", "") 
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
  position: relative;
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
        color: #fff;
      }
      .tech {
        background: orange;
      }
      .life {
        background: rgb(57, 156, 234);;
      }
      .photo {
        background: rgb(63, 204, 69);;
      }
      .travel {
        background: rgb(230, 68, 68);;
      }
      .noCategorie {
        background: grey;
      }
      .date{
        font-size: 0.8em;
        position: absolute;
        right: 0;
        top: 4px;
        color: #a7a5a5;
      }
    }
    .postTitle {
      height: 2.4em;
      font-family: A\+EqpB-游ゴシック体 Pr6N B,sans-serif;
      font-weight: 600;
      font-size: 1.2rem;
      line-height: 1.5em;
      margin-top: 0.8rem;
      margin-bottom: 1rem;
      .content {
        box-sizing: border-box;
      }
      .content:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
    }
    .postTag {
      .tags {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        li {
          font-size: 0.8em;
          margin-right: 0.3em;
        }
      }
    }
  }
}
.blogCardsComponent:hover {
  opacity: 0.7;
}
@media (max-width: 974px) {
}
</style>
