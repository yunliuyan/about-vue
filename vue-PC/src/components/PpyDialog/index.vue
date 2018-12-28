<template>
  <transition  name="fade-transform" mode="out-in">
  <div class="ppy-dialog" v-if="visible" @click.capture.self="close" >

      <div class="dialog-wrapper"
           :style="{width: `${width}px`,height: `${height}px`}"
           v-show="visible"
      >
        <div class="close-button" @click="close">
          <span class="iconfont icon-PCchawanwu_hongsechahao1"></span>
        </div>
          <div class="content">
            <vue-scroll :ops="ops">
              <div class="content-wrapper">
                <slot></slot>
              </div>
            </vue-scroll>
          </div>
      </div>
  </div>
  </transition>
</template>
<script>
  import scroll from '../../config/scrool'
  export default {
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      width: {
        type: Number,
        default: 500
      },
      height: {
        type: Number,
        default: 500
      }
    },
    data() {
      return {
        ops:scroll
      }
    },
    methods: {
      close(){
        this.$emit('beforeClose');
        this.$emit('update:visible',false)
      }
    },
    mounted() {
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/style/mixin";
  @import "../../assets/style/variable";
  .ppy-dialog{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;
    background-color: rgba(0,0,0,.3);
    &:before{
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      filter: blur(10px);
    }
    .dialog-wrapper{
      box-sizing: border-box;
      @include horizontal-vertical;
      padding: $distance;
      background-color: #fff;
      @include shadow(0px,0px,10px,rgba(0,0,0,.375));
      @include rounded(8px);
    }
    .content{
      width: 100%;
      position: absolute;
      top: 30px;
      left: 0;
      right: 0;
      bottom: 0;
      .content-wrapper{
        padding: 0 15px;
      }
    }
    .close-button{
      position: absolute;
      top: -50px;
      @include rounded(50%);
      border: 2px solid #fff;
      color: #ffffff;
      width: 24px;
      height: 24px;
      text-align: center;
      line-height: 24px;
      right: 10px;
      cursor: pointer;
      &:after{
        content: '';
        height: 30px;
        width: 2px;
        background-color: #ffffff;
        position: absolute;
        left:  50%;
        bottom: -31px;
        transform: translateX(-0.5px);
      }
      .iconfont{
        font-size: $fz;
      }
    }
  }
</style>
