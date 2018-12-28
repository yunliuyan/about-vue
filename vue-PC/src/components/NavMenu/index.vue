<template>
  <div class="navmenu">
    <ul class="clearfix">
      <li v-for="(item,index) in groups" @click="handleCheck(item,index)">{{item.text}}</li>
    </ul>
    <div class="bottom" :style="{left: `${index*100}px`}"></div>
  </div>
</template>
<script>
  export default {
    props:{
      groups:{
        type: Array,
        default: []
      },
      type: {
        type: Number,
        default: 0
      }
    },
    computed:{
      index: {
        get(){
          return this.type
        },
        set(){}
      }
    },
    data() {
      return {

      }
    },
    methods: {
      handleCheck(item,index){
          this.index = index;
          this.$emit('change',index)
      }
    },
    mounted() {
    }
  }
</script>
<style lang="scss">
  @import "../../assets/style/variable";
  @import "../../assets/style/mixin";
  .navmenu{
    line-height: 45px;
    border-bottom: 1px solid #e2e2e2;
    position: relative;
    .bottom{
      width: 100px;
      height: 2px;
      position: absolute;
      bottom: -1px;
      background-color: $purple;
      @include transition(left);
    }
    li{
      float: left;
      width: 100px;
      text-align: center;
      font-size: $fz-medium;
      cursor: pointer;
    }
  }
</style>
