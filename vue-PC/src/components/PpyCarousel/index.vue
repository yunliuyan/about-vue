<template>
  <div ref="carousel" class="ppy-carousel">
    <ul class="clearfix"
        :style="{
        width: `${width*groups.length}px`,
        height: `${height}px`,
        transform: `translateX(${-index*1180}px)`
        }">
      <li
        v-cloak
        :style="{width: `${width}px`}"

         v-for="(item,index) in list"
      >
        <img :src="item.img" alt="">
      </li>
    </ul>
    <div class="util">
      <div class="arrow-left">
        <span class="arrow iconfont icon-jiantouxia-" @click="turnLeft"></span>
      </div>
      <div class="arrow-right">
        <span class="arrow iconfont icon-jiantouxia-" @click="turnRight"></span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      groups: {
        type: Array,
        default: [1, 2, 3, 4, 5]
      },
      num: {
        type: Number,
        default: 0
      }
    },
    computed: {
      list: {
        get(){
          return this.groups
        },
        set(){}
      }
    },
    data() {
      return {
        width: 0,
        height: 0,
        index: this.num || 0
      }
    },
    methods: {
      turnRight() {
        console.log(this.index);
        if (this.index < this.groups.length - 1) {
          this.index++;
        }
      },
      turnLeft() {
        if (this.index > 0) {
          this.index--;
        }
      }
    },
    mounted() {
      setTimeout(()=>{
        this.width = this.$refs.carousel.clientWidth
        this.height = this.$refs.carousel.clientHeight
      },20)
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/style/mixin";
  .ppy-carousel {
    width: 100%;
    height: 100%;
    background-color: #f2f2f2;
    position: relative;
    ul{
      @include transition(all);
    }
    li{
      float: left;
      height: 100%;
      overflow: hidden;
      position: relative;
      img{
       @include horizontal-vertical;
      }
    }
    .arrow {
      position: absolute;
      top: 50%;
      margin-top: -25px;
      font-size: 50px;
      color: #ddd;
      padding: 20px;
      cursor: pointer;
      transition: all .3s ease-in-out;
      &:hover {
        color: #b9b9b9;
      }
    }
    .arrow-left {
      .arrow {
        left: 20px;
        transform: rotate(180deg);
      }
    }
    .arrow-right {
      .arrow {
        right: 20px;
      }
    }
  }
</style>
