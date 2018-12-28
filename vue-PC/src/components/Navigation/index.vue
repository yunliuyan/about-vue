<template>
  <div class="navgation">
    <ul>
      <router-link tag="li" :class="{active:$route.path == '/home'}" :to="{path: '/home'}">
        首页
      </router-link>
      <li>
        咨询
      </li>
      <li>
        天工物联
      </li>
    </ul>
  </div>
</template>
<script>
    export default {
        data(){
            return {}
        },
        methods:{},
        mounted(){
        }
    }
</script>
<style lang="scss" scoped>
  @import '../../assets/style/variable';
  .navgation{
    height: 100%;
    ul{
      height: 100%;
      text-align: right;
      li{
        display: inline-block;
        padding: 0 40px;
        letter-spacing: 3px;
        cursor: pointer;
        &.active{
          background-color: $purple;
          color: #fff;
        }
      }
    }
  }
</style>
