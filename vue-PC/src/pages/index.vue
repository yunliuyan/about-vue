<template>
  <div class="">
    <header >
      <div class=logo>
        <a href="javascript:void(0);"></a>
        品牌云<span class="sub">&nbsp;|&nbsp;为品牌而生</span>
      </div>
      <navgation></navgation>
      <nav-util></nav-util>
    </header>
    <router-view></router-view>
    <work-desk></work-desk>
  </div>
</template>
<script>
  import Navgation from '../components/Navigation'
  import NavUtil from '../components/Navigation/NavUtil'
  import workDesk from  '../components/workDesk'
  export default {
    data() {
      return {}
    },
    mounted() {
    },
    components:{
      Navgation,
      NavUtil,
      workDesk
    }
  }
</script>
<style lang="scss" scoped>
  @import '../assets/style/variable.scss';
  header{
    height: 59px;
    line-height: 59px;
    padding: 0 520px;
    position: relative;
    border-bottom: 1px solid #e2e2e2;
    .logo{
      cursor: pointer;
      position: absolute;
      font-size: 30px;
      font-weight: 700;
      left: 233px;
      a{
        display: inline-block;
        width: 54px;
        height: 29px;
        background: url("../assets/img/LOGO.png") no-repeat;
        background-size: cover;
        vertical-align: middle;
      }
      span{
        font-weight: normal;
        font-size: 16px;
        position: relative;
        top: -2px;
      }
    }
  }
  @media (max-width: 1580px) {
    header{
      padding: 0 320px;
      .logo{
        left: 100px;
      }
    }
  }
</style>
