<template>
  <div class="card-info">
    <div class="card-id">ID:1234567</div>
    <h2>
      我创建的名片>苏州爱园艺网络有限公司
    </h2>
    <div class="card-info-wrapper">
      <div class="left">
        <div class="form">
          <div class="form-item is-required">
            <span class="label ">公司：</span>
            <div class="input">
              <input type="text" v-model="formData.company">
            </div>
          </div>
          <div class="form-item is-required">
            <span class="label ">电话：</span>
            <div class="input">
              <input type="text" v-model="formData.telephone">
            </div>
          </div>
          <div class="form-item">
            <span class="label ">广告语：</span>
            <div class="input">
              <input type="text" v-model="formData.slogan">
            </div>
          </div>
          <div class="form-item">
            <span class="label ">电子邮箱：</span>
            <div class="input">
              <input type="text" v-model="formData.email">
            </div>
          </div>
          <div class="form-item">
            <span class="label ">公司网址：</span>
            <div class="input">
              <input type="text" v-model="formData.companyUrl">
            </div>
          </div>
          <div class="form-item">
            <span class="label ">开票税号：</span>
            <div class="input">
              <input type="text" v-model="formData.dutyParaph">
            </div>
          </div>
          <div class="form-item">
            <span class="label ">开户银行：</span>
            <div class="input">
              <input type="text" v-model="formData.bank">
            </div>
          </div>
          <div class="form-item">
            <span class="label ">银行账号：</span>
            <div class="input">
              <input type="text" v-model="formData.bankAccount">
            </div>
          </div>
          <div class="form-item">
            <span class="label ">权限设定：</span>
            <div class="input">
             <ppy-radio label="1" :value="formData.auth" @change="handleChange">允许搜索</ppy-radio>
             <ppy-radio label="2" :value="formData.auth" @change="handleChange">不允许搜索</ppy-radio>
            </div>
          </div>
          <div class="form-item">
            <span class="label">商城橱窗：</span>
            <div class="input">
              <a href="javascript:void(0);">点击查看</a>
            </div>
          </div>
          <div class="form-item is-required">
            <span class="label ">地址：</span>
            <div class="input">
              <input type="text" v-model="formData.address">
            </div>
          </div>
        </div>
      </div>
      <div class="right">
          <div class="choose-card" @click="cardVisible=true">
            <span>选择名片模板</span>
          </div>
        <div class="scan"></div>
        <p>保存后刷新页面</p>
        <p>即可扫描二维码预览效果</p>
      </div>
    </div>
    <ppy-dialog class="choose-card-dialog" :visible.sync="cardVisible" :width="985" :height="740">
      <div style="width: 985px;height: 740px">
        <h2>选择名片模板</h2>
        <div class="card-dialog-wrapper">
          <carousel :groups="[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]"></carousel>
        </div>
        <div class="button">
          <a href="javascript:void(0);">确定</a>
        </div>
      </div>
    </ppy-dialog>
  </div>
</template>
<script>
  import PpyRadio from '../../../components/PpyRadio'
  import PpyDialog from '../../../components/PpyDialog'
  import carousel from './carousel'
  export default {
    data() {
      return {
        formData: {
          company: '苏州爱园艺网络有限公司',
          telephone: '040-146468161',
          slogan: '南国有雪，陌上花开',
          email: 'IYYClub@163.com',
          companyUrl: 'www.iyyclub.com',
          dutyParaph: '7987972321321',//税号
          bank: '中国银行',//开户银行
          bankAccount: '62238 2112 1212 222',//银行账号
          auth: 1,
          shoppingMall: '',
          address: '江苏省苏州市工业园区'
        },
        cardVisible: false
      }
    },
    methods: {
      handleChange(label){
        this.formData.auth = label;
      }
    },
    mounted() {
    },
    components: {
      PpyRadio,
      PpyDialog,
      carousel
    }
  }
</script>
<style lang="scss">
  .choose-card-dialog.ppy-dialog{
    .content{
      top: 0 !important;
      .content-wrapper{
        padding: 0 !important;
      }
    }
  }
</style>
<style lang="scss" scoped>
  @import "../../../assets/style/mixin";
  @import "../../../assets/style/variable";

  /*.ppy-dialog{*/
    /*&.choose-card-dialog{*/
      /*.dialog-wrapper{*/
        /*padding: 0 !important;*/
      /*}*/
    /*}*/
  /*}*/
  .card-info {
    padding-top: 30px;
    position: relative;
    .ppy-radio{
      margin-right: 30px;
    }
    h2 {
      font-size: $fz-medium;
      line-height: 1;
      padding-bottom: 14px;
      border-bottom: 1px solid #e2e2e2;
    }
    .card-id {
      position: absolute;
      right: 14px;
      font-size: $fz-medium;
    }
    .card-info-wrapper{
      display: flex;
      margin-top: 35px;
      .left{
        flex: 3;
      }
      .right{
        flex: 2;
        padding-left: 50px;
      }
    }
    .form {
      .form-item {
        line-height: 28px;
        margin-bottom:20px;
        position: relative;
        padding-left: 110px;
        box-sizing: border-box;
        span {
          display: block;
          width: 110px;
          text-align: right;
          position: absolute;
          left: 0;
          top: 0;
          color: $purple;
        }
        &.is-required {
          span:before {
            content: '*';
            color: #fe5153;
            font-size: $fz;
          }
        }
        .input {
          padding-left: 30px;
        }
        input {
          width: 100%;
          display: block;
          line-height: 28px;
          height: 28px;
          border: none;
          outline: none;
          border-bottom: 1px solid #e2e2e2;
          font-size: $fz;
          color: $color;
        }
      }
    }
    .choose-card{
      width: 275px;
      height: 175px;
      background: #e5e5e5;
      text-align: center;
      @include rounded(10px);
      line-height: 175px;
      margin: 0 auto 60px;
    }
    .scan{
      width: 220px;
      height: 220px;
      background-color: #e5e5e5;
      margin: 0 auto;
      @include rounded(10px);
      margin-bottom: 20px;
    }
    p{

      font-size: $fz-medium;
      text-align: center;
    }
    .choose-card-dialog{
      h2{
        text-align: center;
        font-weight: 700;
        line-height: 49px;
        height: 49px;
        border-bottom: 1px solid #e2e2e2;
        padding-bottom: 0;
      }
      .card-dialog-wrapper{
        height: 602px;
      }
      .button{
        height: 87px;
        text-align: center;
        a{
          display: block;
          margin: 0 auto;
          height: 48px;
          width: 465px;
          background-color: $purple;
          font-size: $fz-medium;
          color: #fff;
          line-height: 48px;
          border-radius: 20px;
          text-decoration: none;
          letter-spacing: 5px;
        }
      }
      
    }
  }
</style>
