<template>
  <div class="carousel">
    <div class="radio">
      <ppy-radio label="1" :value="style" @change="handleStyle">横版</ppy-radio>
      <ppy-radio label="2" :value="style" @change="handleStyle">竖版</ppy-radio>
    </div>
    <div class="carousel-wrapper">
      <div class="arrow">
        <span class="arrow-left iconfont icon-jiantouxia-" @click="turnLeft"></span>
        <span class="arrow-right iconfont icon-jiantouxia-" @click="turnRight"></span>
      </div>
      <div class="show-carousel" ref="carousel">
        <ul :style="{width: `${this.list.length*795}px`,transform: `translateX(${-index*795}px)`}">
          <li
            v-for="(item,i) in list"
            :style="{width: `${ops.w}px`,height: `${ops.h}px`}"
            :class="[style == 1? 'heng':'shu']"
          >

              <div v-for="(child,idx) in item" class="item" :style="{width: `${ops.w/4}px`}">
                  <div class="imgs">
                          {{child}}
                  </div>
                  <p>模板名称</p>
                  <P>ID : 124567</P>
              </div>

          </li>
        </ul>
      </div>
      <div class="util">
        <ul>
          <li v-for="(item,i) in list" :class="{active:index == i}" @click="handleUtil(i)"></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import PpyRadio from '../../../components/PpyRadio';
  import {sliceArray} from "../../../util";

  export default {
    props: {
      groups: {
        type: Array,
        default: []
      }
    },
    computed:{
      list(){
        let step = this.style == 1? 12:8;

        return sliceArray(this.groups,step);

      }
    },
    data() {
      return {
        style: '1',
        ops:{
          w:0,
          h:0
        },
        index: 0
      }
    },
    methods: {
      handleStyle(label) {
        this.index = 0;
        this.style = label
      },
      turnLeft(){
        if(this.index>0){
          this.index --
        }
      },
      turnRight(){
        if(this.index < this.list.length-1){
          this.index++
        }
      },
      handleUtil(i){
        this.index = i;
      }
    },
    mounted() {
      setTimeout(()=>{
        this.ops.w = this.$refs.carousel.clientWidth;
        this.ops.h = this.$refs.carousel.clientHeight;
      },20)
    },
    components: {
      PpyRadio
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../../assets/style/mixin";
  @import "../../../assets/style/variable";
  .carousel {
    width: 100%;
    height: 100%;
    position: relative;
    .radio {
      padding: 15px 0;
      text-align: right;
      .ppy-radio {
        margin-right: 30px;
      }
    }
    .carousel-wrapper {
      box-sizing: border-box;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 51px;
      padding: 0 95px 50px 95px;
      .arrow{

        span {
          position: absolute;
          font-size: 50px;
          top: 50%;
          margin-top: -45px;
          color: #dddddd;
          padding: 20px;
          cursor: pointer;
          @include transition(all);
          &:hover{
            transform: scale(1.5);
            &.arrow-left{
              transform: scale(1.5) rotate(180deg);
            }
          }
        }
        .arrow-left {
          left: 4px;
          transform: rotate(180deg);
        }
        .arrow-right {
          right: 4px;
        }
      }
      .util{
        height: 50px;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
        ul{
          position: absolute;
          left: 50%;
          transform: translateX(-50%);

          padding-top: 20px;
        }
        li{
          width: 8px;
          height: 8px;
          @include rounded(50%);
          background-color: #ddd;
          float: left;
          margin: 0 8px;
          position: relative;
          cursor: pointer;
          float: left;
          //增加点击面积
          &:after{
            content: '';
            position: absolute;
            top: -4px;
            bottom: -4px;
            left: -4px;
            right: -4px;
          }
          &.active{
            background-color: $purple;
          }
        }
      }
      .show-carousel{
        width: 100%;
        height: 100%;
        overflow: hidden;
        ul{

          @include transition(all);
        }
        li{
          float: left;
          .item{
            float: left;
            margin-bottom: 20px;
          }
          .imgs{
            background-color: #eee;
            @include rounded(10px);
            margin: 0 auto;
          }
          p{
            text-align: center;
            line-height: 1.5em;
          }
          &.heng{
            .imgs{
              width: 175px;
              height: 111px;
            }
          }
          &.shu{
            .imgs{
              width: 111px;
              height: 175px;
            }
          }
        }
      }
    }
  }
</style>
