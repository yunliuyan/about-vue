<template>
  <div class="card-add">
    <header>
      <ppy-path></ppy-path>
      <PpyRadio class="radio" label="1" :value="type" @change="handleRadio">云名片</PpyRadio>
      <PpyRadio class="radio" label="2" :value="type" @change="handleRadio">电子说明书</PpyRadio>
      <PpyRadio class="radio" label="3" :value="type" @change="handleRadio">智能挪车卡</PpyRadio>
    </header>
    <step-wrap class="step" label="1" :value="-1">
      <div class="step-one clearfix">
        <div class="left">
          <p class="title">
            上传模板背景
          </p>
          <ul>
            <li>
              <PpyRadio class="radio" label="横版" :value="style" @change="handleStyle">横板</PpyRadio>
              <p>663PX宽*428PX高</p>
            </li>
            <li>
              <PpyRadio class="radio" label="竖版" :value="style" @change="handleStyle">竖板</PpyRadio>
              <p>428PX宽*663PX高</p>
            </li>
          </ul>
        </div>
        <div class="right">
          <div class="show-tpl":style="styleUpload" @click="upload">
            <span class="iconfont icon-add-" ></span>
          </div>
          <input ref="uploadImages" type="file" name="file" style="display: none;">
        </div>
      </div>
    </step-wrap>
    <step-wrap class="step" label="2" :value="-1">
      <div class="step-two clearfix">
        <div class="left">
          <p class="title">模板效果预览</p>
          <p class="subtitle">（选中拖动可任意移动元素或输入数值）</p>
        </div>
        <div class="center" :class="{active: style=='横版'}">
          <div v-if="style=='竖版'" class="template-wrapper" >
            <vdr
              :grid="[20,15]"
              v-for="(item,index) in UI"
              :key="index"
              :resizable="false"
              :parent="true"
              :x="item.x"
              :y="item.y"
              :w="item.w"
              :h="item.h"
              @dragging="onDrag"
              @dragstop="dragstop(item)"
            >
              <drag-wrap :color="item.color" :font-size="item.fontSize" :value="item.text"></drag-wrap>
            </vdr>
          </div>
          <div v-else class="template-wrapper" :style="styleTpl">
            <vdr
              :grid="[20,15]"
              v-for="(item,index) in UI"
              :key="index"
              :resizable="false"
              :parent="true"
              :x="item.x"
              :y="item.y"
              :w="item.w"
              :h="item.h"
              @dragging="onDrag"
              @dragstop="dragstop(item)"
            >
              <drag-wrap :color="item.color" :font-size="item.fontSize" :value="item.text"></drag-wrap>
            </vdr>
          </div>
        </div>
        <div class="right" :class="{active: style == '横版'}">
          <div class="group-wrapper">
            <p class="title">选择模板展示元素</p>
            <div class="groups">
              <group-check :groups="checks" @change="handleCheck"></group-check>
            </div>
          </div>
          <div class="group-wrapper">
            <ul class="clearfix">
              <li>
                <el-color-picker v-model="color"></el-color-picker>
                <span>{{color}}</span>
              </li>
              <li>
                <span>字体大小：</span>
                <input type="number" v-model="fontSize"/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </step-wrap>
    <step-wrap class="step" label="3" :value="-1">
      <div class="step-three clearfix">
        <div class="left">
          <div class="title">风格定位</div>
          <PpyRadio class="radio" label="1" :value="style2" @change="handleStyle2">商务轻奢</PpyRadio>
          <PpyRadio class="radio" label="2" :value="style2" @change="handleStyle2">清新花卉</PpyRadio>
          <PpyRadio class="radio" label="3" :value="style2" @change="handleStyle2">简约时尚</PpyRadio>
        </div>
      </div>
    </step-wrap>
    <step-wrap class="step" label="4" :value="-1">
      <div class="step-three clearfix">
        <div class="left">
          <div class="title">授权设置</div>
          <PpyRadio class="radio" label="1" :value="auth" @change="handleAuth">完全公开</PpyRadio>
          <PpyRadio class="radio" label="2" :value="auth" @change="handleAuth">仅公司员工</PpyRadio>
        </div>
      </div>
    </step-wrap>
    <div class="button">
      <a href="javascript:void(0);">保存提交</a>
    </div>
    <ppy-dialog :visible.sync="authVisible" :width="640" :height="380" @before-close="authBeforeClose">
      <div class="setting-user">
        <h2 class="title">设置公开用户</h2>
        <div class="align-right">
          <ppy-radio :value="checkAll" label="1" @change="handleCheckAll">全选</ppy-radio>
        </div>
        <group-check :groups="checkUserGrups" @change="getCheckedUser"></group-check>
        <div class="button">
          <a href="javascript:void(0);">确定</a>
        </div>
      </div>
    </ppy-dialog>
  </div>
</template>
<script>
  import CardAdd from './add'
  export default  CardAdd;
</script>
<style>
  .el-color-picker{
    vertical-align: middle;
  }
</style>
<style lang="scss" scoped>
  @import "../../../assets/style/mixin";
  @import "../../../assets/style/variable";

  .card-add {
    @include horizental-align-width;
    header {
      height: 68px;
      line-height: 68px;
      .radio {
        margin-left: 35px;
      }
    }
    .step {
      margin-left: 78px;
      .title {
        font-size: 16px;
        color: $color;
        line-height: 1;
        font-weight: 700;
      }
      .subtitle {
        font-size: 12px;
        line-height: 30px;
      }
    }
    .left, .right, .center {
      float: left;
      box-sizing: border-box;
      p{
        text-align: center;
      }
    }

    .step-one {

      li {
        padding-left: 68px;
        padding-top: 36px;
        p {
          line-height: 24px;
          color: #818181;
          font-size: $fz;
          letter-spacing: 3px;
        }
      }
      .right {
        width: 331px;
        height: 331px;
        margin-left: 78px;

      }
      .show-tpl {
        width: 264px;
        height: 170px;
        background-color: #eeeeee;
        border-radius: 20px;
        text-align: center;
        display: table-cell;
        vertical-align: middle;
        transform: translateY(50px);
        cursor: pointer;

        @include transition(all);
        .iconfont {
          font-size: 26px;
        }
      }
    }
    .step-two {
      .left {
        padding-right: 30px;
      }
      .template-wrapper {
        height: 444px;
        width: 289px;
        background-color: #eeeeee;
        @include transition(all);
        @include rounded(10px);
        &.active {
          transform: rotate(90deg);
        }
      }
      .right{
        width: 496px;
        margin-left: 30px;
        .title{
          font-size: $fz;
          margin-bottom: 25px;
        }
        &.active{
          margin-left: 230px;
        }
        .group-wrapper{
          border: 1px dashed #999;
          padding: 20px 12px;
          line-height: 1;
          &:last-child{
            margin-top: 30px;
            padding: 10px;
          }
          li{
            float: left;
            padding: 0 20px;
            border-right: 1px solid #cccccc;
            width: 50%;
            box-sizing: border-box;
            text-align: center;
            line-height: 42px;
            span{
              vertical-align: middle;
            }
            &:last-child{
              border-right: none;
            }
            input[type="number"]{
              line-height: 42px;
              height: 42px;
              width: 62%;
              border: none;
              outline: none;
              vertical-align: middle;
            }
          }
        }
        .groups{
          padding: 8px;
        }
      }
      .center{
        position: relative;
        &.active{
          position: absolute;
          top: 65px;
        }
      }
    }
    .step-three{
      .title{
        margin-bottom: 30px;
      }
      .radio{
        margin-right: 30px;
      }
    }
    .button{
      margin: 30px 0;
      a{
        text-decoration: none;
        display: block;
        margin: 0 auto;
        width: 470px;
        height: 50px;
        @include rounded(25px);
        color: #fff;
        background-color: $purple;
        font-size: $fz-medium;
        text-align: center;
        line-height: 50px;
      }
    }
    h2.title{
      text-align: center;
      font-size: $fz-medium;
      font-weight: 700;
    }
    .setting-user{
      padding: 0 20px;
      .align-right{
        margin: 20px 0;
      }
    }
  }
</style>
