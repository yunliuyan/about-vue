<template>
  <div class="group-check clearfix">
      <div class="item" v-for="(item,index) in groups" :key="index" @click="handleCheck(item)">
          <div class="icon"  :class="{active: item.checked}" >
            <span class="iconfont icon-PCchawanwu_baisexuanzhongduihao"></span>
          </div>{{item.text}}
      </div>
  </div>
</template>
<script>
  export default {
    props:{
      groups: {
        type: Array,
        default: []
      }
    },
    data(){
      return {
        checked: []
      }
    },
    methods:{
      handleCheck(item){
        item.checked = !item.checked;
        this.$emit('change',this.checked,item)
      }
    },
    mounted(){
      setTimeout(()=>{
        let tem = this.groups.filter(ele =>{
          if(ele.checked){
            return true;
          }
        })
        this.checked = tem || [];
        if(tem.length>0)
        this.$emit('change',tem)
      },200)
    },
    watch:{
      groups(groups){
        let tem = groups.filter(ele =>{
          if(ele.checked){
            return true;
          }
        })
        this.checked = tem || [];
        if(tem.length>0)
          this.$emit('change',tem)
      }
    }
  }
</script>
<style lang="scss">
  @import "../../assets/style/variable";
  @import "../../assets/style/mixin";
  .group-check{
    .icon{
      width: 18px ;
      height: 18px;
      background-color:#fff;
      position: absolute;
      left: 0;
      top: -1px;
      text-align: center;
      border: 1px solid $purple;
      @include rounded(4px);
      .iconfont{
        color: #fff;
        font-size: 14px;
      }
      &.active{
        background-color: $purple;
      }
    }
    .item{
      padding-left: 25px;
      position: relative;
      vertical-align: middle;
      cursor: pointer;
      float: left;
      width: 88px;
      line-height: 18px;
      margin-bottom: 28px;

  }
  }
</style>
