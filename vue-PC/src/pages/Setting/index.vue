<template>
  <div class="settig">
    <settingTop />
    <div class="setting-wrapper">
    <el-row class="setting-content">
      <el-col :span="6" class='setting-left'><settingLeft /></el-col>
      <el-col :span="18" class='setting-right'>
        <router-view></router-view>
      </el-col>
    </el-row>

    </div>
  </div>
</template>
<script>
  import settingLeft from '../../components/Setting/settingLeft'
  import settingTop from '../../components/Setting/settingTop'
  export default {
    components: {
      settingLeft,
      settingTop
    }
  }
</script>
<style lang="scss">
  @import "../../assets/style/mixin";
  .setting-wrapper{
    @include horizental-align-width;
  }
  .setting-content {
    margin-top: 50px;
    .setting-right {
      margin-top: -20px;
    }
  }
</style>
