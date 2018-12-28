<template>
  <div>

    <span class="turnOn" :class="{active: active}" @click.stop.prevent="toggle">
      <span class="iconfont icon-PCchawanwu_gongzuotai"></span>
    </span>

  <div class="work-desk" :class="{active: isShow}">
    <h2>我的工作台</h2>
    <ul>
      <li>
        <h2>作品管理{{active}}</h2>
        <div class="items clearfix">
          <a href="javascript:void(0);">电子说明书</a>
          <a href="javascript:void(0);" class="active">云名片</a>
          <a href="javascript:void(0);">云档案</a>
          <a href="javascript:void(0);">电子标牌</a>
          <a href="javascript:void(0);">防伪降价</a>
          <a href="javascript:void(0);">电子海报</a>
          <a href="javascript:void(0);">电子贺卡</a>
          <a href="javascript:void(0);">云相册</a>
          <a href="javascript:void(0);">DIY制作</a>
        </div>
      </li>
      <li>
        <h2>模板制作</h2>
        <div class="items clearfix">
          <a href="javascript:void(0);">电子说明书</a>
          <a href="javascript:void(0);" class="active">云名片</a>
          <a href="javascript:void(0);">只能挪车卡</a>
        </div>
      </li>
      <li>
        <h2>素材管理</h2>
        <div class="items clearfix">
          <a href="javascript:void(0);">视频</a>
          <a href="javascript:void(0);">音频</a>
          <a href="javascript:void(0);">图册</a>
        </div>
      </li>
      <li>
        <h2>商城管理</h2>
        <div class="items clearfix">
          <a href="javascript:void(0);">免费试用</a>
          <a href="javascript:void(0);">申请开通</a>
        </div>
      </li>
      <li>
        <h2>成员管理</h2>
        <div class="items clearfix">
          <a href="javascript:void(0);">角色管理</a>
          <a href="javascript:void(0);">用户管理</a>
        </div>
      </li>
    </ul>
  </div>
  </div>
</template>
<script>
  import {mapGetters,mapMutations} from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        active: 'showwork'
      }),
      isShow(){
        if(this.active){
            return true
        }else{
            return false
        }
      }
    },
    data() {
      return {
      }
    },
    methods: {
      ...mapMutations(['SET_SHOW_WORK']),
      toggle(){
        this.SET_SHOW_WORK(true)
      }
    },
    mounted() {
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/style/variable";
  @import "../../assets/style/mixin";
  .turnOn{
    content: '';
    position: fixed;
    margin-top: -100px;
    transition: all .2s ease;
    transform: rotate(-20deg);
    width: 60px;
    height: 150px;
    top: 50%;
    background-color: $purple;
    right: -55px;
    overflow: hidden;
    cursor: pointer;
    &.active{
      width: 200px;
      height: auto;
      background-color: #fff;
      right: 0;
      top: 60px;
      bottom: 0;
      border-left: 1px solid #eee;
      transform: rotate(0);
    }
    .iconfont{
      display: block;
      margin: 10px;
      font-size: 20px;
      transform: rotate(20deg);
      color: #fff;
    }
  }
  .work-desk{
    width: 200px;
    position: fixed;
    top: 60px;
    bottom: 0;
    right: -200px;
    z-index: 1;
    box-sizing: border-box;
    border-left: 1px solid #e2e2e2;
    background-color: #fff;
    opacity: 0;
    transition: all .2s ease;
    &.active{
      right: 0;
      opacity: 1;
    }
    h2{
      height: 39px;
      border-bottom: 1px solid #e2e2e2;
      font-size: $fz-medium;
      line-height: 39px;
      font-weight: 700;
      padding-left: 20px;
    }
    li{
      border-bottom: 1px solid #e2e2e2;
      h2{
        border-bottom: none;
        line-height: 60px;
        height: 60px;
        cursor: pointer;
      }
      .items{
        height: 0;
        padding-left: 20px;
        overflow: hidden;
        @include transition(all);
        a{
          display: block;
          width: 50%;
          float: left;
          margin-bottom: 30px;
          text-decoration: none;
          &.active{
            color: $purple;
          }
        }
      }
      &:hover{
        .items{
          height: 245px;
        }
      }
    }
  }
</style>
