<template>
  <div class="ppy-radio" :class="{active:label==active}" @click="toggle">
    <span class="iconfont" :class="label==active?'icon-jiantouxia-1':'icon-jiantouxia-2'"></span>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props: {
      value: [Number,String],
      label: {
        type: [Number,String],
        default: -1
      }
    },
    computed:{
      active:{
        get(){
          return this.value;
        },
        set(value){

        }
      }
    },
    methods: {
      toggle() {
        this.$emit('change',this.label);
      }
    },
    mounted() {

    }
  }
</script>
<style lang="scss">
  @import "../../assets/style/variable";

  .ppy-radio {
    display: inline-block;
    font-size: 16px;
    letter-spacing: 0px;
    cursor: pointer;
    .iconfont {
      font-size: 16px;
      color: $purple;
    }
  }
</style>
