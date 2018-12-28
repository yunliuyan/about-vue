<template>
  <div class="breadcrumb">
    <ul>
      <li v-for="(item,index) in levelList" @click="handleClick(item)">
        {{item.name}}
        <span v-if="index < levelList.length-1">&nbsp;>&nbsp;</span>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'PpyPath',
    data() {
      return {
        levelList: []
      }
    },
    methods: {
      getBreadCrumb(){
        let matched = this.$route.matched.filter(item => {
          if (item.name) {
            return true
          }

        })
        const first = matched[0]
        if(first && first.name.trim() !== '首页'){
          matched = [{path: '',name: '首页'}].concat(matched);
        }
        this.levelList = matched
      },
      handleClick(item){
        const {redirect,path} = item;
        if(redirect){
          this.$router.push({path:redirect})
          return ;
        }
        this.$router.push({path:path})
      }
    },
    created(){
      this.getBreadCrumb();
    },
    watch: {
      $route(newValue,oldValue){
        console.log(newValue);
        console.log(oldValue);
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/style/variable";
  .breadcrumb{
    display: inline-block;
    vertical-align: middle;
    margin-top: -5px;
    li{
      float: left;
      font-size: 16px;
      color: $color;
      cursor: pointer;
      font-family: "Microsoft YaHei";
    }
  }
</style>
