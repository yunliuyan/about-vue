<template>
  <div class="nav-util" @mouseleave="toggle=false">
    <ul class="clearfix">
      <li>
        <span class="iconfont icon-sousuo"></span>
      </li>
      <li>
        <div class="tips">99</div>
        <span class="iconfont icon-xinfeng"></span>
      </li>
      <li>
        <div class="head-photo" @mouseenter="toggle = true">

        </div>
        <div class="util-group" :class="{active: toggle}" @mouseleave="toggle=false">
          <dl>
            <dt>Klus_ab12345</dt>
            <router-link   v-for="(item,index) in menus" v-if="index<menus.length-2" :key="index" tag="dt" :to="item.path"><span class="iconfont" :class="item.icon"></span>{{item.name}}</router-link>
            <dt>退出</dt>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  export default {
    computed: {
      ...mapGetters(['menus'])
    },
    data() {
      return {
        toggle: false
      }
    },
    methods: {},
    mounted() {
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/style/mixin";
  @import "../../assets/style/variable";
  $fc: #949494;
  .nav-util {
    position: absolute;
    right: 215px;
    top: 0;
    z-index: 2;
    li{
      float: left;
      padding: 0 17px;
      color: $fc;
      position: relative;
      .iconfont{
        font-size: 20px;
      }
      .head-photo{
        width: 40px;
        height: 40px;
        @include rounded(50%);
        background-color: #f7f7f7;
        margin-top: 7px;
        cursor: pointer;
      }
      .tips{
        padding: 2px 5px;
        font-size: 12px;
        background-color: #ff2d2c;
        position: absolute;
        right: 0em;
        top: 10px;
        line-height: 1;
        color: #fff;
        @include rounded(5px);
      }
      .util-group{
        box-sizing:border-box;
        position: absolute;
        left: -55px;
        bottom: -375px;
        width: 202px;
        height: 0px;
        opacity: 0;
        z-index: 10;
        transform: translateY(-375px);
        background-color: #fff;
        padding-top: 10px;
        text-align: center;
        @include rounded(0 0  10px 10px);
        box-shadow: 0 0px 1px rgba(0,0,0,.2);
        overflow: hidden;
        @include transition(all);
        &.active{
          z-index: 1;
          height: 361px;
          opacity: 1;
          transform: translateY(0);
        }
        dt{
          line-height: 43px;
          color: $fc;
          cursor: pointer;
          .iconfont{
            margin-right: 10px;
            font-size: 14px;
          }
          &:nth-child(1){
            line-height: 46px;
          }
          &:last-child{
            line-height: 46px;
            border-top: 1px solid #949494;
          }
          &:hover{
            background-color: $purple;
            color: #fff;
          }
        }
      }
    }
  }
  @media (max-width: 1580px){
    .nav-util{
      right: 100px;
    }
  }
</style>
