<template>
  <div>
    <div class="login">
        <LoginTop />
        <div class="setting-wrapper">
          <el-row class="login-content">
            <el-col :span="12"><LoginLeft /></el-col>
            <el-col :span="12">
            <transition name="fade" mode="out-in">
              <div v-if='isPasswordLogin' class="right-content" key="password">
                  <img :src="qrCode" @click='changeLoginWay' class="change-login-way"/>
                  <div class="login-title">账号登录</div>
                  <div class="login-form">
                    <label>
                      <i class="iconfont icon-PCchawanwu_zhanghuzhanghao"></i>
                      <input class="input-style" type="text" v-model="user" style="margin-top:0" placeholder="请输入天工账号" />
                    </label>
                    <label>
                      <i class="iconfont icon-PCchawanwu_shurumima"></i>
                      <input class="input-style" type="password" v-model="password" placeholder="请输入6-8位密码" />
                    </label>
                    <label>
                      <i class="iconfont icon-PCchawanwu_yanzhengma"></i>
                      <input class="input-style" type="text" v-model="checkCode" placeholder="请输入下方验证码" />
                    </label>
                  </div>
                  <div  class="code-img">
                    <img :src='codeImge' /> 
                  </div>
                  <el-button type="info" class="login-btn" @click="goLogin">登录</el-button>
                  <el-row class="login-others">
                    <el-col :span="12" class='login-in'><span @click="goRegistered">立即注册</span></el-col>
                    <el-col :span="12" class='login-in'><span @click="getPassword">忘记密码</span></el-col>
                  </el-row>
              </div>
              <div v-if='!isPasswordLogin' class="right-content" key="qrCode">
                  <img :src="password" @click='changeLoginWay' class="change-login-way"/>
                  <div class="login-title">扫码安全登录</div>
                  <div class="login-qrCode">
                    <img :src="qrImg" />
                  </div>
                  <div class="qr-intro">
                    <i class="iconfont icon-PCchawanwu_saoyisao"></i>
                    <span>微信</span>查万物 </span>/</span> 易名片<span>小程序扫码登录</span>
                  </div>
                  <el-row style="margin-top: 20px;" class="login-others">
                    <el-col :span="12" class='login-in'><span @click="goRegistered">立即注册</span></el-col>
                    <el-col :span="12" class='login-in'><span @click="getPassword">忘记密码</span></el-col>
                  </el-row>
              </div>
            </transition >
            <transition name="fade-registered">
              <div v-if="isRegistered" class="right-registered" style="margin-left:9%;margin-top:0">
                <div class="background-black" @click="goRegistered"></div>
                <div v-if="!isLoginSuccess" class="right-content right-registered" style="margin-left: 10%">
                    <div class="login-title">注册账号</div>
                    <div class="login-form" style="height: 227px">
                      <label>
                        <i class="iconfont icon-PCchawanwu_zhanghuzhanghao"></i>
                        <input class="input-style" v-model="registeredUser" type="text" style="margin-top:0" placeholder="企业账户需包含英文字母" />
                      </label>
                      <label>
                        <i class="iconfont icon-PCchawanwu_shurumima"></i>
                        <input class="input-style" v-model="registeredPassword" type="password" placeholder="请输入6-8位密码" />
                      </label>
                      <label>
                        <i class="iconfont icon-PCchawanwu_shurumima"></i>
                        <input class="input-style" v-model="registeredPasswordAgain" type="password" placeholder="再次确认密码" />
                      </label>
                      <label>
                        <i class="iconfont icon-PCchawanwu_yanzhengma"></i>
                        <input class="input-style" v-model="registeredPhone" type="text" placeholder="输入保密手机" />
                      </label>
                      <label>
                        <i class="iconfont icon-PCchawanwu_shurumima"></i>
                        <input class="input-style" v-model="registeredCode" type="text" placeholder="请输入六位验证码" />
                        <div class="check-code"> <span>获取验证码</span></div>
                      </label>
                    </div>
                    <el-button type="info" class="login-btn" @click="registeredUserFun">注册</el-button>
                    <el-row class="login-others">
                      <el-col :span="24" class='login-in'><span class="go-back" @click="goRegistered">返回登录</span></el-col>
                    </el-row>
                </div>
                <div v-if="isLoginSuccess" class="right-content right-registered" style="margin-left: 11%;text-align: center;">
                  <div class="success-logo"><i class="iconfont icon-PCchawanwu_duihao"></i></div>
                  <div class="success-tips">恭喜！您的账号已经成功注册。</br><span>"yunliuyan"</span></div>
                  <div class="success-go-login" @click="goRegistered">返回登录</div>
                </div>
              </div > 
              <div v-if="isForgetPw" class="right-registered" style="margin-left:9%;margin-top:0">
                <div class="background-black" @click="getPassword"></div>
                <div v-if="!isFindSuccess&&!isChangePw" class="right-content right-registered" style="margin-left: 10%">
                    <div class="login-title">找回密码</div>
                    <div class="login-form" style="height: 210px">
                      <label>
                        <i class="iconfont icon-PCchawanwu_zhanghuzhanghao"></i>
                        <input class="input-style" v-model="forgetUser" type="text" style="margin-top:0" placeholder="请输入登录账号" />
                      </label>
                      <label>
                        <i class="iconfont icon-PCchawanwu_yanzhengma"></i>
                        <input class="input-style" v-model="forgetPhone" type="password" placeholder="输入保密手机" />
                      </label>
                      <label>
                        <i class="iconfont icon-PCchawanwu_shurumima"></i>
                        <input class="input-style" v-model="forgetCode" type="text" placeholder="请输入六位验证码" />
                        <div class="check-code"> <span>获取验证码</span></div>
                      </label>
                    </div>
                    <el-button type="info" class="login-btn" @click="findPassword">提交</el-button>
                    <el-row class="login-others">
                      <el-col :span="24" class='login-in'><span class="go-back" @click="getPassword">返回登录</span></el-col>
                    </el-row>
                </div>
                <div v-if="isFindSuccess&&!isChangePw" class="right-content right-registered" style="margin-left: 11%;text-align: center;">
                  <div class="success-logo"><i class="iconfont icon-PCchawanwu_duihao"></i></div>
                  <div class="success-tips">恭喜！您的密码已经找回。</br><span>"yunliuyan"</span></div>
                  <div class="success-go-login" @click="changePassword">修改密码</div>
                    <el-row class="login-others" style="margin-top: 100px">
                      <el-col :span="24" class='login-in'><span class="go-back" @click="getPassword">返回登录</span></el-col>
                    </el-row>
                </div>
                <div v-if="isChangePw" class="right-content right-registered" style="margin-left: 11%">
                  <div v-if="!isChangeSuccess">
                    <div class="login-title">修改密码</div>
                    <div class="login-form" style="height: 170px">
                      <label>
                        <i class="iconfont icon-PCchawanwu_shurumima"></i>
                        <input class="input-style" v-model="changePasswordValue" type="password" placeholder="请输入6-8位密码" />
                      </label>
                      <label>
                        <i class="iconfont icon-PCchawanwu_shurumima"></i>
                        <input class="input-style"  v-model="changePasswordAgainValue" type="password" placeholder="再次确认密码" />
                      </label>
                    </div>
                    <el-button type="info" class="login-btn" @click="changePasswordFun">提交</el-button>
                    <el-row class="login-others" style="margin-top: 54px">
                      <el-col :span="24" class='login-in'><span class="go-back" @click="getPassword">返回登录</span></el-col>
                    </el-row>
                  </div>
                  <div v-if="isChangeSuccess" style="text-align: center">
                    <div class="success-logo"><i class="iconfont icon-PCchawanwu_duihao"></i></div>
                    <div class="success-tips">恭喜！您的密码已经修改成功。</br><span>"yunliuyan"</span></div>
                    <div class="success-go-login" @click="getPassword">返回登录</div>
                  </div>
                </div>
              </div>
            </transition >
            </el-col>
          </el-row>
        </div>
    </div>
    <LoginBottom />
  </div>
</template>
<script>
  import LoginTop from '@/components/Login/LoginTop';
  import LoginLeft from '@/components/Login/LoginLeft';
  import LoginBottom from '@/components/Login/LoginBottom';
  import {checkUser,checkPassword,checkPhone,checkCode} from '@/util/checkLogin.js';
  export default {
    data() {
      return {
        codeImge: require("../../assets/image/Login/code.png"),
        qrCode:require("../../assets/image/Login/qrcode.png"),
        password: require("../../assets/image/Login/password.png"),
        qrImg:require("../../assets/image/Login/qrImg.jpg"),
        isPasswordLogin: true, //true表示密码登录，false表示扫码登录。
        isRegistered: false, //是否注册
        isLoginSuccess: false, //是否注册成功
        isForgetPw: false, //是否忘记密码，想找回密码
        isFindSuccess: false, //是否找回密码成功 
        isChangePw: false, //是否修改密码
        isChangeSuccess: false, //是否修改密码成功
        user: '', //登录账号
        password: '', //登录密码
        checkCode: '', //登录验证码
        registeredUser: '', //注册账号
        registeredPassword: '', //注册密码
        registeredPasswordAgain: '', //注册再次确认密码
        registeredPhone: '', //注册密保手机
        registeredCode: '', //获取验证码
        forgetUser: '', //找回密码账号
        forgetPhone: '', //找回密码手机号
        forgetCode: '', //找回密码验证码
        changePasswordValue: '', //修改密码
        changePasswordAgainValue: '', //修改密码再次确认
      }
    },
    methods: {
      /*登录*/
      goLogin: function(){
        let temp = true;
        //验证账号
        let checkUserObj = checkUser(this.user);
        if(!checkUserObj.status){
          temp = false;
          this.$message.error(checkUserObj.msg);
          return 
        }
        //验证密码
        let checkPasswordObj = checkPassword(this.password);
        if(!checkPasswordObj.status){
          temp = false;
          this.$message.error(checkPasswordObj.msg)
          return 
        }
        //验证验证码
        if(this.checkCode.toString().length != 4){
          temp = false;
          this.$message.error('验证码错误')
          return 
        }
        if(temp){
          console.log(111);
          this.$router.push({path: '/Home'});
        }
      },
      /**
        注册
       */
      registeredUserFun: function(){
         let temp = true;
        //验证账号
        let checkUserObj = checkUser(this.registeredUser);
        if(!checkUserObj.status){
          temp = false;
          this.$message.error(checkUserObj.msg);
          return 
        }
        //验证密码
        let checkPasswordObj = checkPassword(this.registeredPassword);
        if(!checkPasswordObj.status){
          temp = false;
          this.$message.error(checkPasswordObj.msg)
          return 
        }
        //确认密码与密码是否一致
        if(this.registeredPassword != this.registeredPasswordAgain){
          temp = false;
          this.$message.error('两次输入密码不一致');
          return 
        }
        //验证手机号码
        let checkPhoneObj = checkPhone(this.registeredPhone);
        if(!checkPhoneObj.status){
          temp = false;
          this.$message.error(checkPhoneObj.msg)
          return 
        }
        //验证注册验证码
        let checkCodeObj = checkCode(this.registeredCode)
        if(!checkCodeObj.status){
          temp = false;
          this.$message.error(checkCodeObj.msg)
          return 
        }

        if(temp){
          console.log('验证成功，注册环节')
          this.isLoginSuccess = !this.isLoginSuccess;
        }
      },
      /**
        找回密码
       */
      findPassword: function(){
         let temp = true;
        //验证账号
        let checkUserObj = checkUser(this.forgetUser);
        if(!checkUserObj.status){
          temp = false;
          this.$message.error(checkUserObj.msg);
          return 
        }
         //验证手机号码
        let checkPhoneObj = checkPhone(this.forgetPhone);
        if(!checkPhoneObj.status){
          temp = false;
          this.$message.error(checkPhoneObj.msg)
          return 
        }
         //验证注册验证码
        let checkCodeObj = checkCode(this.forgetCode)
        if(!checkCodeObj.status){
          temp = false;
          this.$message.error(checkCodeObj.msg)
          return 
        }
        if(temp){
          console.log('验证成功，提示环节')
          this.isFindSuccess = !this.isFindSuccess;
        }
      },
      /**
        修改密码
       */
       changePasswordFun: function(){
         let temp = true;
         //验证密码
        let checkPasswordObj = checkPassword(this.changePasswordValue);
        if(!checkPasswordObj.status){
          temp = false;
          this.$message.error(checkPasswordObj.msg)
          return 
        }
        //确认密码与密码是否一致
        if(this.changePasswordValue != this.changePasswordAgainValue){
          temp = false;
          this.$message.error('两次输入密码不一致');
          return 
        }
        if(temp){
          console.log('修改密码成功环节，提示环节')
          this.isChangeSuccess = !this.isChangeSuccess
          console.log(this.isChangeSuccess)
        }
       },
      changeLoginWay: function(){
        this.isPasswordLogin = !this.isPasswordLogin
      },
      goRegistered: function(){
        this.isRegistered = !this.isRegistered
      },
      getPassword: function(){
        this.isForgetPw = !this.isForgetPw
      },
      changePassword: function(){
        this.isChangePw = !this.isChangePw;
      },
    },
    mounted() {
    },
     components:{
      LoginTop,
      LoginBottom,
      LoginLeft,
    }
  }
</script>
<style lang="scss">
  @import "../../assets/style/mixin";
  .setting-wrapper{
    @include horizental-align-width;
  }
    .login{
      background: url('../../assets/image/Login/loginBg.png') no-repeat;
      background-size: 100% 100%;
      width: 100%;
      height: 1020px;
      .fade-enter-active, .fade-leave-active {
          transition: all 0.4s;
      }
      .fade-enter, .fade-leave-to{
        opacity: 0;
      }
      .fade-registered-enter-active, .fade-registered-leave-active {
         transition: all 0.7s 0s cubic-bezier(0.33, 0.25, 0.33, 1);
      }
      .fade-registered-enter, .fade-registered-leave-to{
         transform: translateX(-400px);
      }
      .login-content {
        margin-top: 256px;
        .background-black {
            width: 442px;
            height: 440px;
            z-index: 2;
            background: rgba(0,0,0,.2);
            border-radius: 20px;
            margin-left: 54px;
        }
        .right-registered {
          z-index: 3;
          margin-top: -440px;
          position: absolute;
          color: rgb(109,93,234);
          .success-logo {
            margin-top: 120px;
            i {
              font-size: 70px;
            }
          }
          .success-tips {
            font-size: 18px;
            line-height: 40px;
            span {
              font-weight: bold;
            }
          }
          .success-go-login {
            color: #666;
            text-decoration: underline;
            cursor: pointer;
          }
        }
        .right-content {
          width: 420px;
          height: 440px;
          background: #fff;
          border-radius: 20px;
          float: right;
          color: rgb(109,93,234);
          .change-login-way {
              width: 58px;
              height: 58px;
              margin-left: 358px;
              margin-top: 5px;
              position: absolute;
          }
          .login-title {
            width: 100%;
            text-align: center;
            font-size: 20px;
            font-weight: bold;
            line-height: 100px;
          }
          .login-form {
            width: 320px;
            height: 140px;
            margin: 0 auto;
            input {
              border: none;
              margin-left: 14px;
              border-bottom: 1px solid #eee;
              width: 280px;
              height: 26px;
              margin-top:20px;
              outline: none; 
              -webkit-appearance: none;
            }
            .check-code{
              position: absolute;
              right: 0;
              margin-top: -33px;
              margin-right: 58px;
              span {
                  display: block;
                  width: 90px;
                  height: 22px;
                  font-size: 13px;
                  border: 1px solid #6d5dea;
                  color: #999;
                  line-height: 22px;
                  text-align: center;
                  border-radius: 9px;
              }
            }
            
          }
          .login-qrCode {
            width: 245px;
            height: 245px;
            margin: -30px auto 0;
          }
          .qr-intro {
            width: 100%;
            text-align: center;
            line-height: 40px;
            span {
              color: #666;
              margin-right: 4px;
              position: relative;
              margin-left: 4px;
            }
          }
          .code-img {
            width: 322px;
            height: 72px;
            margin: auto;
          }
          .login-btn {
              border-radius: 40px;
              width: 300px;
              height: 44px;
              text-align: center;
              margin: 20px 60px;
              background: linear-gradient( #6d5dea, #8273fa)
          }
          .login-others {
            .login-in {
              text-align: center;
              span {
                border-bottom: 1px solid rgb(109,93,234);
                cursor: pointer;

              }
            }
            .go-back {
              float: right;
              margin-right: 25px;
            }
          }
        }
      }
      
    }
  
</style>
