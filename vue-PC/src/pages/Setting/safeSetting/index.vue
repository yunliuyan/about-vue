<template>
<div>
  <div class="base-information">
    
            <div class="safe-setting">
              <div class="infor-input">
                  <span> 登录密码： </span>
                  <span class="value-show" style="color: #666">******</span>
                  <span class="search-value" @click="changePasswordFun">修改</span>
                </div>
                 <div class="infor-input">
                  <span> 密保手机： </span>
                  <span class="value-show" style="color: #666">18879252951</span>
                  <span class="search-value" @click="changePhoneFun">修改</span>
                </div>  
                 <div class="infor-input">
                  <span> 密保邮箱： </span>
                  <span class="value-show" style="color: #666">1038733742@qq.com</span>
                  <span class="search-value" @click="changeEmailFun">修改</span>
                </div>   
            </div>
  </div>
  <ppy-dialog  class="palyer-dialog" :visible.sync="changePassword" :width="400" :height="240">
    <div class="input-box" style="margin-top:-16px">
      <div class="change-ps-input"><input type="password" v-model='oldPassword' placeholder="请输入旧密码"/></div>
      <div class="change-ps-input"><input type="password" v-model='newPassword' placeholder="请输入6-8位新密码"/></div>
      <div class="change-ps-input"><input type="password" v-model='newPasswordAgain' placeholder="请再次确认密码"/></div>
    </div>
     <el-button @click="saveNewPassword" type="info" class="login-btn">确认修改</el-button>
  </ppy-dialog>
   <ppy-dialog  class="palyer-dialog" :visible.sync="changePhone" :width="400" :height="208">
    <div class="input-box">
      <lable style="width: 90%;margin-left: 6%;" class="change-ps-input">
        <i class="iconfont icon-PCchawanwu_yanzhengma"></i>
        <input style="width: 90%" type="text" v-model='newPhone' placeholder="请输入新的密保手机"/>
      </lable>
      <lable style="width: 90%;margin-left: 6%;" class="change-ps-input">
        <i class="iconfont icon-PCchawanwu_shurumima"></i>
        <input style="width: 60%" type="text" v-model='newCode' placeholder="请输入六位验证码"/>
        <div class="check-code"> <span>获取验证码</span></div>
      </lable>
    </div>
     <el-button @click="saveNewPhone" type="info" class="login-btn">确认修改</el-button>
  </ppy-dialog>
   <ppy-dialog  class="palyer-dialog" :visible.sync="changeEmail" :width="400" :height="178">
    <div class="input-box">
      <lable style="width: 90%;margin-left: 6%;" class="change-ps-input">
        <i class="iconfont icon-PCchawanwu_yanzhengma"></i>
        <input style="width: 90%" type="text" v-model='newEmail' placeholder="请输入新的密保邮箱"/>
      </lable>
    </div>
     <el-button @click="saveNewEmail" type="info" class="login-btn">发送验证</el-button>
  </ppy-dialog>
</div>
</template>
<script>
    import settingTop from '@/components/Setting/settingTop';
    import settingLeft from '@/components/Setting/settingLeft';
    import PpyDialog from '@/components/PpyDialog';
    import {checkPassword,checkPhone,checkCode,checkEmail} from '@/util/checkLogin.js';
  export default {
    data() {
      return {
          changePassword: false,
          oldPassword: '',
          newPassword: '',
          newPasswordAgain: '',
          changePhone: false,
          newPhone: '',
          newCode: '',
          changeEmail: false,
          newEmail: '',
      }
    },
    components:{
      settingTop,
      settingLeft,
      PpyDialog,
    },
    methods: {
      
        //修改密码
        changePasswordFun: function(){
          this.changePassword = !this.changePassword;
        },
        saveNewPassword: function(){
          let temp = true;
           //验证旧密码
          let checkOldPasswordObj = checkPassword(this.oldPassword);
          if(!checkOldPasswordObj.status){
            temp = false;
            this.$message.error(`旧${checkOldPasswordObj.msg}`)
            return 
          }
           //验证新密码
          let checkPasswordObj = checkPassword(this.newPassword);
          if(!checkPasswordObj.status){
            temp = false;
            this.$message.error(`新${checkPasswordObj.msg}`)
            return 
          }
          //确认密码与新密码是否一致
          if(this.newPassword != this.newPasswordAgain){
            temp = false;
            this.$message.error('两次输入密码不一致');
            return 
          }
          if(temp){
             this.$message.success(`密码修改成功`)
            this.changePasswordFun();
          }
        },
        //修改手机号码
        changePhoneFun: function(){
          this.changePhone = !this.changePhone
        },
        saveNewPhone: function(){
          let temp = true;
           //验证手机号码
          let checkPhoneObj = checkPhone(this.newPhone);
          if(!checkPhoneObj.status){
            temp = false;
            this.$message.error(checkPhoneObj.msg)
            return 
          }
          //验证注册验证码
          let checkCodeObj = checkCode(this.newCode)
          if(!checkCodeObj.status){
            temp = false;
            this.$message.error(checkCodeObj.msg)
            return 
          }
          if(temp){
            this.$message.success(`手机修改成功`);
            this.changePhoneFun();
          }
        },
        //修改邮箱
        changeEmailFun: function(){
          this.changeEmail = !this.changeEmail
        },
        saveNewEmail: function(){
          let temp = true
          let checkEmailObj = checkEmail(this.newEmail);
          if(!checkEmailObj.status){
            temp = false;
            this.$message.error(checkEmailObj.msg)
            return 
          }
          if(temp){
            this.$message.success(`验证已发送您的邮箱，请查看`)
            this.changeEmailFun();
          }
        },
    },
    mounted() {
    }
  }
</script>
<style lang="scss">
.palyer-dialog{
  .input-box{
    .change-ps-input {
      display: inline-block;
      width: 75%;
      height: 48px;
      margin: 0 12.5%;
      border-bottom: 1px solid #ddd;
      input {
        width: 96%;
        margin-left: 2%;
        margin-top: 12px;
        height: 36px;
        border: none;
        outline: none; 
        -webkit-appearance: none;
      }
      i {
        color: rgb(109,93,234);
      }
       .check-code{
              position: absolute;
              right: 0;
              margin-top: -30px;
              margin-right: 36px;
              span {
                  display: block;
                  width: 90px;
                  height: 20px;
                  font-size: 13px;
                  border: 1px solid #6d5dea;
                  color: #999;
                  line-height: 22px;
                  text-align: center;
                  border-radius: 9px;
              }
            }
    }
  }
  .login-btn {
    border-radius: 20px;
    width: 206px;
    height: 40px;
    text-align: center;
    background: linear-gradient( #6d5dea, #8273fa);
    margin: 30px 80px 0;
    font-size: 16px;
    color: #fff;
  }
  
}
  
</style>
<style lang="scss" scoped>
  .base-information {
          .safe-setting {
             .infor-input{
              width: 100%;
              height: 62px;
              border-bottom: 1px solid #ddd;
              font-size: 14px;
              display: block;
              span {
                color: rgb(109,93,234);
                margin-top: 36px;
              }
              .value-show {
                display: inline-block;
                margin-top: 36px;
                border: none;
                outline: none; 
              -webkit-appearance: none;
                margin-left: 10px;
                width: 87%;
              }
              .search-value {
                text-decoration: underline;
                cursor: pointer;
              }
            }
          }
     
  }
</style>