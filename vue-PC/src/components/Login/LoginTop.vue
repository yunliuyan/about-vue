<template>
  <div>
      <div class="login-tops setting-wrapper">

        <el-row>
          <el-col :span="12" class='login-top'>
            <img :src='imageLogo'></img>
            <span class='top-title'>品牌云</span> 
            <span class='top-intro'>| 为品牌而生</span>
          </el-col>
          <el-col :span="12" class='login-top' style="text-align: end">
            <span @mouseover="changeActive(1)" v-bind:class='["login-nav", isActive==1?borderLine:" "]'>资讯</span>
            <span @mouseover="changeActive(2)" v-bind:class='["login-nav", isActive==2?borderLine:" "]'>天工物联</span>
          </el-col>
        </el-row>

      </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
          isActive:0,
          borderLine: 'border-line',
          imageLogo: require("../../assets/image/Login/LOGO.png")
      }
    },
    methods: {
         changeActive(value){
           const _this = this;
           setTimeout(function(){
              _this.isActive = value;
           },300)
        }
    },
    mounted() {
       
    }
  }
</script>
<style lang="scss">
   @import "../../assets/style/mixin";
    .setting-wrapper{
      @include horizental-align-width;
    }
    .border-line {
        border-bottom: 2px solid #fff;
    }
  .login-tops {
    .login-top {
      color: rgb(109,93,234);
      height: 60px;
      img{
        width: 30px;
        height: 16px;
        margin-top:12px;
        position: relative;
        top: 4px;
      }
      .top-title {
        font-size: 22px;
        font-weight: bold;
      }
      .top-intro {
        font-size: 16px;
        margin-left: 10px;
      }
      .login-nav {
        color: #fff;
        font-size: 14px;
        line-height:60px;
        margin-left: 56px;
        cursor: pointer;
      }
  }
  }
  
</style>