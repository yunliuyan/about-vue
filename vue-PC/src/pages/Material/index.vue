<template>
  <div class="material">
    <header>
      <ppy-path ></ppy-path>
    </header>
    <navmenu :groups="menus" :type="index" @change="handleCheck"></navmenu>
    <div class="upload" @click="upload">
      <span class="iconfont icon-PCchawanwu_shangchuan"></span>
    </div>
    <input type="file" name="file" style="display: none;" ref="uploadImage">
    <transition-group tag="div"   name="fade-transform" mode="out-in">


        <div :key="0" v-if="index == 0">
          <video-list></video-list>
        </div>
        <div :key="1" v-else-if="index == 1">
          <audio-list></audio-list>
        </div>
        <div :key="2" v-else-if="index == 2">
          <photolist></photolist>
        </div>
        <div :key="3" v-else-if="index == 3">
          <public-list></public-list>
        </div>
    </transition-group>
  </div>
</template>
<script>
  import PpyPath from '../../components/PpyPath'
  import Navmenu from '../../components/NavMenu'
  import videoList from './components/video'
  import publicList from './components/public'
  import photolist from './components/photo'
  import audioList from './components/audio'
  export default {
    data() {
      return {
        menus:[
          {text: '视频',checked:true},
          {text: '音频',checked:false},
          {text: '图册',checked:false},
          {text: '公共库',checked:false}
        ],
        index: 0
      }
    },
    methods: {
      handleCheck(index){
        this.index = index;
      },
      upload(){
        this.$refs.uploadImage.click();
      }
    },
    mounted() {
      const $ = this;
      setTimeout(()=>{
        let type = $.$route.params.type
        switch (type) {
          case 'video':
            this.index = 0;
            break;
          case 'audio':
            this.index = 1;
            break;
          case 'images':
            this.index = 2;
            break;
          case 'publicStore':
            this.index = 3;
            break;

        }
      },20)
    },
    components:{
      PpyPath,
      Navmenu,
      videoList,
      publicList,
      photolist,
      audioList
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/style/variable";
  @import "../../assets/style/mixin";
  .material{
    @include horizental-align-width;
    position: relative;
    header{
      height: 68px;
      line-height: 68px;
    }
    .upload{
      position: absolute;
      right: 30px;
      top: 85px;
      .iconfont{
        font-size: 26px;
        color: $purple;
        cursor: pointer;
        z-index: 1;
      }
    }
  }
</style>
