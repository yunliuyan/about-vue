<template>
  <div class="setting-top">
    <div class="setting-wrapper">
      <el-row class="top-content">
        <el-col :span="8" class='top-left'>
          <div class="user-information">
            <div class="information-left">
              <img :src="settingTop" />
            </div>
            <div class="information-right">
              <div>云流烟</div>
              <div>爱园艺网络有限公司</div>
            </div>
          </div>
        </el-col>
        <el-col :span="16" class='top-right'>
          <div class="user-id">
            <div>用户ID： 13355779999</div>
            <div>企业ID： 13355779999</div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        settingTop: require("../../assets/image/Setting/settingTop.png"),
      }
    },
    methods: {},
    mounted() {
    }
  }
</script>
<style lang="scss" >
  @import "../../assets/style/mixin";
    .setting-wrapper{
      @include horizental-align-width;
    }
    .setting-top{
        width: 100%;
        height: 260px;
        background: url("../../assets/image/Setting/settingTop.png") no-repeat;
        background-size: 100% 100%;
        .top-content {
            width: 100%;
            padding-top: 170px;
            .top-left {
                .user-information {
                    display: flex;
                    display: -webkit-flex;
                    align-items: center;
                    .information-left{
                        img {
                            width: 120px;
                            height: 120px;
                            border-radius: 50%;
                        }
                    }
                    .information-right {
                        font-size: 16px;
                        color: rgb(102,102,102);
                        line-height: 24px;
                        margin-left: 22px;
                        div {
                            text-overflow: ellipsis;
                            overflow: hidden;
                            white-space: nowrap;
                        }
                    }
                }
            }
            .top-right {
                .user-id {
                    float: right;
                    margin-top: 35px;
                    div {
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                        font-size: 16px;
                        color: rgb(102,102,102);
                        line-height: 24px;
                    }
                }
            }
        }
    }
</style>
