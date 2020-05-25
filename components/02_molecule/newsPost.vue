<template>
  <div class="">
    <div>最新の記事</div>
    <div v-for="(item,index) in setAllPostData" :key="index">
      <div>{{item.title}}</div>
      <div>{{setDate(item.created_at)}}</div>
    </div>
  </div>
</template>

<script>
import techPostList from "@/static/json/tech.json";
import lifePostList from "@/static/json/life.json";
import travelPostList from "@/static/json/travel.json";
import photoPostList from "@/static/json/photo.json";

export default {
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

      return setArray;
    },
  },
  created(){
    console.log(this.setAllPostData)
  },
  methods:{
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
</style>
