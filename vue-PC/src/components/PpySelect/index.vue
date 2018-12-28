<template>
  <div class="ppy-select">
    <p class="ppy-select-title" @click="toogle">{{selected}} <span class="iconfont icon-icon_sanjiaoxing"></span></p>
    <transition name="fade-transform" mode="out-in">

      <div class="ppy-select-list" v-show="active" v-on:mouseleave="handleMouseleave" v-on:mouseenter="handleMouseEnter">
        <vue-scroll :ops="ops">
          <ul>
            <li v-for="(item,index) in list" @click="check(item)"> {{item.label}}</li>
          </ul>
        </vue-scroll>
      </div>
    </transition>
  </div>
</template>
<script>
  import scroll from '../../config/scrool'
  export default {
    props: {
      list: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        selected:this.list[0].label || '',
        ops: scroll,
        active:false,
        timer: null
      }
    },
    methods: {
      toogle(){
        this.active = !this.active
        if(!this.active && this.timer){
          clearTimeout(this.timer)
        }
      },
      handleMouseEnter(){
        if(this.timer){
          clearTimeout(this.timer)
        }
      },
      handleMouseleave(item){
        if(this.timer){
          this.timer = null;
        }
        this.timer = setTimeout(()=>{
          this.active = false;
        },5000)
      },
      check(item){
        this.selected = item.label
        this.toogle();
        this.$emit('selected',item)
      }
    },
    mounted() {
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/style/variable";
  @import "../../assets/style/mixin";

  .ppy-select {
    display: inline-block;
    width: 104px;
    position: relative;
    .ppy-select-title {
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      text-align: center;
      span {
        float: right;
        margin-right: 15px;
      }
    }
    .ppy-select-list {
      width: 100%;
      border: 1px solid #e2e2e2;
      padding: 5px 0;
      font-size: $fz;
      position: absolute;
      top: 35px;
      height: 250px;
      @include shadow(0, 0, 1px, rgba(0, 0, 0, .1));
      @include rounded(5px);
      overflow: hidden;
      li {
        padding-left: 14px;
        line-height: 30px;
        cursor: pointer;
        &:first-child {
          font-weight: 700;
        }
        &:hover {
          background-color: $purple;
          color: #fff;
        }
      }
    }
  }
</style>
