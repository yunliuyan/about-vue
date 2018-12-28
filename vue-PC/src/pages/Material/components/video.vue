
<style lang="scss">

</style>
<template>
  <div class="video">
    <div class="clearfix groups">
      <div class="item" v-for="i in 12" @click="startPlayer">
        <div class="imgs">
          <span class="iconfont icon-PCchawanwu_shanchu-"></span>
        </div>
        <p class="title">视频名称视频名称视频名称</p>
        <p class="sub-title">时间：2018-12-12</p>
      </div>
    </div>
    <ppy-dialog class="palyer-dialog" :visible.sync="playerVisible" :width="1180" :height="750">
      <div class="player">
        <div class="player-area">
          <ppy-player :src="src"></ppy-player>
        </div>
        <div class="info-area">
          <p class="title">视频名称视频名称视频名称视频名称</p>
          <p class="createdate">上传时间：2018-12-12</p>
          <span class="iconfont icon-PCchawanwu_shanchu-"></span>
        </div>
      </div>
    </ppy-dialog>
  </div>
</template>
<script>
  import PpySelect from '../../../components/PpySelect';
  import PpyDialog from '../../../components/PpyDialog';
  import PpyPlayer from '../../../components/PpyPlayer';

  export default {
    data() {
      return {
        playerVisible: false,
        src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
      }
    },
    methods: {
      startPlayer(){
        this.playerVisible = true
      }
    },
    mounted() {
    },
    components:{
      PpySelect,
      PpyDialog,
      PpyPlayer
    }
  }
</script>
<style lang="scss">
  .ppy-dialog.palyer-dialog{
    .content{
      top: 3px !important;
    }
  }
</style>
<style lang="scss" scoped>
  @import "../../../assets/style/variable";
  @import "../../../assets/style/mixin";
  .video{
    margin-top: 30px;
    .item{
      width: 300px;
      height: 250px;
      float: left;
      padding-right: 40px;
      box-sizing: border-box;
      .imgs{
        height: 170px;
        background-color: #eeeeee;
        @include rounded(10px);
        position: relative;
        .iconfont{
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 22px;
          color: #bebebe;
          cursor: pointer;
          &:hover{
            color: $purple;
          }
        }
      }
      .title{
        line-height: 1;
        margin-top: 14px;
        font-size:  14px;
        padding-left: 10px;
      }
      .sub-title{
        font-size: 12px;
        color: #666666;
        margin-top: 10px;
        padding-left: 10px;
      }
    }
    .player{
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding-top: 680px;
      .createdate{
        font-size: 12px;
        color: #666666;
        margin-top: 15px;
      }

      .iconfont{
        position: absolute;
        right:20px;
        bottom: 20px;
        font-size: 22px;
        cursor: pointer;
        color: #909090;
        &:hover{
          color: $purple;
        }
      }
    }
    .player-area{
      background-color: #f2f2f2;
      position: absolute;
      top: 5px;
      left: 5px;
      right: 5px;
      height: 660px;
      overflow: hidden;
      @include rounded(8px);
      .title{
        font-size: $fz-medium;
      }
    }

  }
</style>
