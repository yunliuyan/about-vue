<template>
  <div class="photo">
    <div class="groups clearfix">
      <div class="item" v-for="(item,index) in groups" @click="handleShowPhoto(item,index)">
        <div class="imgs">
          <span class="iconfont icon-PCchawanwu_shanchu-"></span>
          <img :src="item.img" alt="">
        </div>
      </div>
    </div>
    <ppy-dialog class="photo-dialog" :visible.sync="photoVisible" :width="1180" :height="600">
      <div style="width: 1180px;height: 600px;">
        <ppy-carousel :groups="groups" :num="index"></ppy-carousel>
      </div>
    </ppy-dialog>
  </div>
</template>

<style lang="scss">

  .ppy-dialog.photo-dialog{
    .content{
      top: 0px !important;
      .content-wrapper{
        padding: 0 !important;
        overflow: hidden;
      }
    }
  }
</style>
<script>
  import PpySelect from '../../../components/PpySelect'
  import PpyCarousel from '../../../components/PpyCarousel'
  import PpyDialog from '../../../components/PpyDialog'
  export default {
    data() {
      return {
        list:[
          {
            label: '全部',
            value: '全部'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          }
        ],
        list2:[
          {
            label: '分类',
            value: '分类'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          }
        ],
        groups: [
          {
            img: "https://sass-img.iyyclub.com/1/pic/256601118832857088.jpg"
          },
          {
            img: "https://sass-img.iyyclub.com/1/pic/256601118832857088.jpg"
          },
          {
            img: "https://sass-img.iyyclub.com/1/pic/256601118832857088.jpg"
          },
          {
            img: "https://sass-img.iyyclub.com/1/pic/256601118832857088.jpg"
          },
          {
            img: "https://sass-img.iyyclub.com/1/pic/256601118832857088.jpg"
          }
        ],
        photoVisible: false,
        index: 0
      }
    },
    methods: {
      handleSelect1(item){
        console.log(item);
      },
      handleSelect2(item){
        console.log(item);
      },
      handleShowPhoto(item,index){

        this.index = index;
        this.photoVisible = true;
      }
    },
    mounted() {
    },
    components:{
      PpySelect,
      PpyCarousel,
      PpyDialog
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../../assets/style/mixin";
  @import "../../../assets/style/variable";
  .photo{
    margin-top: 30px;
    .item{
      width: 240px;
      height: 252px;
      padding-bottom: 25px;
      padding-right: 15px;
      box-sizing: border-box;
      float: left;
      .imgs{
        width: 100%;
        height: 100%;
        background-color: #eee;
        @include rounded(10px);
        position: relative;
        overflow: hidden;
        cursor: pointer;
        img{
          width: 100%;
          min-height: 100%;
          @include transition(all);
        }
        &:hover{
          img{
            transform: scale(1.3);
          }
        }
        .iconfont{
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 22px;
          color: #bebebe;
          cursor: pointer;
          z-index: 1;
          &:hover{
            color: $purple;
          }
        }
      }
    }
  }
</style>
