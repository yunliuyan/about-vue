<template>
  <div class="step-wrap" :class="{active: active==label}">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props:{
      value: Number,
      label: String
    },
    computed:{
      active : {
        get(){
          return this.value
        },
        set(){}
      }
    },
    data() {
      return {

      }
    },
    methods: {},
    mounted() {
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/style/variable";
  @import "../../assets/style/mixin";
  .step-wrap{
    border-left: 1px dashed #999999;
    position: relative;
    padding-top: 16px;
    padding-bottom: 30px;
    padding-left: 58px;
    &.active{
      &:after{
        background: linear-gradient(45deg,#715eec 60%,#b390f6);
        border: none;
      }
    }
    &:after{
      content: '';
      display: block;
      width: 16px;
      height: 16px;
      position: absolute;
      left: -8px;
      top: 16px;
      @include rounded(50%);
      @include shadow(0,0,10px,rgba(110,93,234,.8));
      box-sizing: border-box;
      background-color: #fff;
      border: 1px solid $purple;

    }
  }
</style>
