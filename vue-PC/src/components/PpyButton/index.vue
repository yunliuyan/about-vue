<template>
    <div class="ppy-button" :class="[size,{active:checked},{disabled: disabled}]">
          <span>
            <slot></slot>
          </span>
    </div>
</template>
<script>
  export default {
    props:{
      disabled: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: ''
      },
      checked: {
        type: Boolean,
        default: false
      }
    },
    data(){
        return {}
    },
    methods:{},
    mounted(){
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/style/mixin";
  @import "../../assets/style/variable";
  .ppy-button{
    display: inline-block;
    width: 180px;
    height: 50px;
    vertical-align: middle;
    border: 1px solid #999999;
    background-color: #fcfcfc;
    cursor: pointer;
    @include rounded(20px);
    line-height: 48px;
    text-align: center;
    font-size: $fz-medium;
    position: relative;
    overflow: hidden;
    letter-spacing: 2px;
    box-shadow: 0px 1px 2px rgba(0,0,0,.1);
    background-color: #fff;
    &:before{
      content:"";
      position: absolute;
      width: 0;
      left: 0;
      top: 0;
      bottom: 0;
      background: linear-gradient(to top right,#6d5dea  50% , #c38bfd  100%);
      opacity: 0;
      transition: all .375s;

    }
    &.medium{
      width: 96px;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      letter-spacing: 0px;
      background-color: #fff;
      &:hover,&.active{
        background: linear-gradient(to top right,#6d5dea  50% , #c38bfd  100%);
        &:before{
          width: 0px;
        }
      }
    }
    &:hover,&.active{
      border-color: $purple;
      &:before{
        opacity: 1;
        width: 180px;
      }
      span{
        trasition-delay: .375s;
        color: #fff;
      }
    }
    &.disabled{
      opacity: .55;
      cursor: not-allowed;
      &:hover{
        background: #fff;
        border-color: #999999;
        &:before{
          width: 0px;
        }
        span{
          color: $color;
        }
      }
    }
    span{
      position: absolute;
      width: 100%;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
      color: $color;
    }
  }
</style>
