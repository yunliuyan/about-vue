<template>
  <div class="audio">
      <div class="groups">
        <template v-for="(item,index) in groups">
        <div class="item">
          <div class="icon">
            <span class="iconfont  " :class="item.playing?'icon-PCchawanwu_bofang':'icon-PCchawanwu_zanting'" @click="startPlayOrPause(item)"></span>
          </div>
          <p class="title">{{item.title}}</p>
          <p class="sub-title">备注：{{item.remark}}</p>
          <span class="createdate">上传时间：{{item.createdate}}</span>
          <div class="util">
            <span class="iconfont icon-PCchawanwu_shanchu-"></span>
          </div>

        </div>
        </template>
      </div>

    <audio
      ref="audio"
      style="display: none;"
      :src="audio.source"
      controls="controls"></audio>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        audio: {
          // 该字段是音频是否处于播放状态的属性
          playing: false,
          // 音频当前播放时长
          currentTime: 0,
          // 音频最大播放时长
          maxTime: 0,
          source: '../../../../static/陌生人.mp3'
        },
        groups:[
          {
            title: '语音名称语音名称语音名称',
            remark: '此处为备注信息',
            createdate: '2018-12-12',
            src:'../../../../static/陌生人.mp3',
            playing: false
          },
          {
            title: '语音名称语音名称语音名称',
            remark: '此处为备注信息',
            createdate: '2018-12-12',
            src:'../../../../static/陌生人.mp3',
            playing: false
          },
          {
            title: '语音名称语音名称语音名称',
            remark: '此处为备注信息',
            createdate: '2018-12-12',
            src:'../../../../static/陌生人.mp3',
            playing: false
          },
          {
            title: '语音名称语音名称语音名称',
            remark: '此处为备注信息',
            createdate: '2018-12-12',
            src:'../../../../static/陌生人.mp3',
            playing: false
          },
          {
            title: '语音名称语音名称语音名称',
            remark: '此处为备注信息',
            createdate: '2018-12-12',
            src:'../../../../static/陌生人.mp3',
            playing: false
          }
        ]
      }
    },
    methods: {
      // 控制音频的播放与暂停
      startPlayOrPause (item) {
        item.playing = !item.playing;
        // this.audio.source = item.src;
        return this.audio.playing ? this.pause() : this.play();
      },
      // 播放音频
      play () {
        this.$refs.audio.play();
        this.audio.playing = true;
      },
      // 暂停音频
      pause () {
        this.$refs.audio.pause()
        this.audio.playing = false;
      },
    },
    mounted() {

    }
  }
</script>
<style lang="scss" scoped>
  @import "../../../assets/style/mixin";
  @import "../../../assets/style/variable";
  .audio{
    margin-top: 30px;
    .item{
      height: 125px;
      border-bottom: 1px dashed #e2e2e2;
      box-sizing: border-box;
      padding-left: 140px;
      position: relative;
      overflow: hidden;
      .icon{
        width: 80px;
        height: 80px;
        @include rounded(50%);
        color: $purple;
        @include shadow(0,0,5px,rgba(110,93,234,.3));
        line-height: 80px;
        text-align: center;
        position: absolute;
        top: 22px;
        left: 30px;
        cursor: pointer;
        @include transition(all);
        &:hover{
          transform: rotate(360deg);
        }
        .iconfont{
          font-size: 33px;
        }
      }
      p{
        line-height: 1;
        padding-left: 10px;
        letter-spacing: 2px;
      }
      .title{
        margin-top: 42px;
        font-size: $fz-medium;
        color: #4f4f4f;
      }
      .sub-title{
        margin-top: 11px;
        color: #a0a0a0;
        letter-spacing: 2px;
      }
      .createdate{
        line-height: 124px;
        font-size: $fz;
        letter-spacing: 2px;
        position: absolute;
        right: 112px;
        line-height: 1;
        top: 55px;
      }
      .util{
        position: absolute;
        right: 25px;
        line-height: 124px;
        top: 0;
        .iconfont{
          color: #898989;
          font-size: 21px;
          cursor: pointer;
          &:hover{
            color: $purple;
          }
        }
      }
    }
  }
</style>
