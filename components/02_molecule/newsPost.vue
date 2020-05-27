<template>
  <div class="newPost">
    <h2>最新の10記事</h2>
    <div v-for="(item,index) in setAllPostData" :key="index">
      <BlogCard class="post" :blogContentData="item" />
    </div>
  </div>
</template>

<script>
import techPostList from "@/static/json/tech.json";
import lifePostList from "@/static/json/life.json";
import travelPostList from "@/static/json/travel.json";
import photoPostList from "@/static/json/photo.json";
import BlogCard from "@/components/02_molecule/blogCard.vue";

export default {
  components:{BlogCard},
  computed:{
    setAllPostData() {
      let setArray = [];
      for(let i of Object.keys(techPostList.fileMap)) {
        techPostList.fileMap[i].base = techPostList.fileMap[i].base.replace('.md', '');
        setArray.push(techPostList.fileMap[i])
      }
      for(let i of Object.keys(lifePostList.fileMap)) {
        lifePostList.fileMap[i].base = lifePostList.fileMap[i].base.replace('.md', '');
        setArray.push(lifePostList.fileMap[i])
      }
      for(let i of Object.keys(travelPostList.fileMap)) {
        travelPostList.fileMap[i].base = travelPostList.fileMap[i].base.replace('.md', '');
        setArray.push(travelPostList.fileMap[i])
      }
      for(let i of Object.keys(photoPostList.fileMap)) {
        photoPostList.fileMap[i].base = photoPostList.fileMap[i].base.replace('.md', '');
        setArray.push(photoPostList.fileMap[i])
      }

      setArray.sort((a,b) => {
        return (a.created_at < b.created_at ? 1 : -1);
      });

      return setArray.slice(0, 10);
    },
  },
  methods:{
    setLinke(item){
      const link = '/' + item.dir.replace('static/json/', '') + '/' + item.base.replace('.json', '');
      return link;
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
.newPost {
  h2 {
    font-size: 28px;
    margin-bottom: 20px;
  }
  .post {
    margin-bottom: 20px;
  }
}
// mobile
@media screen and (max-width: 974px) {
  .newPost {
    h2 {
      font-size: 28px;
      margin-bottom: 10px;
    }
    .post {
      margin-bottom: 20px;
    }
  }
}
</style>
