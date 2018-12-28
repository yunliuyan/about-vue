<template>
  <div class="">
    <div v-if="!flag" class="drag-imgs">{{text}}</div>
    <p v-else  @dblclick="toEdit" :style="{color: color,fontSize: `${fontSize}px`}">{{text}}</p>
  </div>
</template>
<script>
  export default {
    props:{
      value: String,
      color: String,
      fontSize: [Number,String]
    },
    data() {
      return {
        text: this.value,
        flag: this.value != '二维码' && this.value != 'LOGO',
        active: true
      }
    },
    methods: {
      toEdit(){
        this.active = false;
      },
      toText(){
        this.active = true;
      }
    },
    mounted() {
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/style/mixin";
  .drag-imgs{
      width: 39px;
      height: 39px;
      background-color: #999999;
      text-align: center;
      line-height: 39px;
      color: #fff;
      font-size: 12px;
      @include rounded(10px);
  }
</style>
