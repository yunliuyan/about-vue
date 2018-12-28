<template>
  <div class="base-information">
      <div class="billing-details">
        <div class="brand-nav">
          <div class="nav-list"><span>用户列表</span></div>
          <div class="add-brand" @click="addNewRoleFun"><i class="iconfont icon-PCchawanwu_tianjiajiaoseyonghu"></i><span>添加新用户</span></div>
        </div>
        <div class="border-up-empty"></div>
        <div v-if="!list" class="no-data">
          <img :src="nullData" />
        </div>
        <div v-if="list" class="billing-list">
          <div v-for="(item,index) in list" class="list-cloumn">
            <el-row>
              <el-col :span="3"><div class="cloumn-avatar"><img :src="item.avatar" /></div></el-col>
              <el-col :span="3"><div class="cloumn-name">{{item.name}}</div></el-col>
              <el-col :span="11"><div class="cloumns-role">{{item.phone}}</div></el-col>
              <el-col :span="6"><div class="cloumns-setting" @click="changeRoleFun(index)"><i class="iconfont icon-PCchawanwu_shezhi"></i><span>{{item.role}}</span></div></el-col>
              <el-col :span="1"> <div class="cloumns-del" @click="delModelShow(item.role,item.name)"><i class="iconfont icon-PCchawanwu_shanchu-"></i></div></el-col>
            </el-row>
        </div>
      </div>
      <div class="bottom-pagination">
        <el-pagination
          layout="sizes, prev, pager, next, jumper, ->, total, slot"
          :total="list.length"
          :current-page.sync="initParams.pageNo"
          :page-size="initParams.pageSize"
          @current-change="currentChange"
          @size-change="sizeChange"
          :page-sizes="[10,20,50,100]"
        >
        </el-pagination>
    </div>  
    <ppy-dialog  class="palyer-dialog" :visible.sync="isAddNewRole" :width="400" :height="220">
       <div class="input-box">
          <div style="width: 90%;margin-left: 6%;" class="change-ps-input">
            <i class="iconfont icon-PCchawanwu_yanzhengma"></i>
            <input style="width: 90%" type="text" v-model='newPhone' placeholder="请输入用户联系方式"/>
          </div>
          <div style="width: 90%;margin-left: 6%;" class="change-ps-input">
            <i class="iconfont icon-PCchawanwu_shurumima"></i>
            <input style="width: 60%" type="text" v-model='newCode' placeholder="请输入六位验证码"/>
            <div class="check-code"> <span>获取验证码</span></div>
          </div>
        </div>
     <el-button @click="saveNewPhone" type="info" class="login-btn">绑定</el-button>
    </ppy-dialog>
    <ppy-dialog  class="palyer-dialog" :visible.sync="isADelRole" :width="400" :height="220">
      <div class="add-tip">删除角色</div>
      <div class="input-box">
        <div class="change-ps-input" style="border:none;margin-top:30px">该操作不可逆，确认删除"{{delRole}}"</div>
      </div>
      <el-button @click="saveRole" style="background: red;border:none;margin-top:20px" type="info" class="login-btn">确定删除</el-button>
    </ppy-dialog>
    <ppy-dialog  class="palyer-dialog" :visible.sync="isChangeRole" :width="400" :height="268">
      <div class="add-tip">设定用户角色</div>
      <div class="input-box">
        <div class="change-ps-input" style="border:none;margin:0;width:100%">
          <div v-for="(item,index) in roleList" class="list-column" :class="{'chossed-item': choosedNum==index}" @click="chooseRole(index)">
              {{item.role}}
          </div>
        </div>
      </div>
      <el-button @click="saveRoleChange" style="position: fixed;bottom: 20px;" type="info" class="login-btn">确定</el-button>
    </ppy-dialog>
  </div>
      
  </div>
</template>
<script>
  import PpyDialog from '@/components/PpyDialog';
  import {checkPassword,checkPhone,checkCode,checkEmail} from '@/util/checkLogin.js';
  export default {
    data() {
      return {
        isAddNewRole: false,
        newPhone:'',
        newCode: '',
        isADelRole: false,
        delRole: '',
        isChangeRole: false,
        choosedNum: null,
         roleList: [
                {
                  role: '超级管理员',
                },
                {
                  role: '管理员',
                },
                {
                  role: '会员',
                },
                {
                  role: '普通用户',
                }, 
             ],
          nullData: require('@/assets/image/Setting/noData.png'),
             list: [
                {
                  avatar: require('@/assets/image/Setting/noData.png'),
                  name: '云流烟',
                  role:'超级管理员',
                  phone: '18879252951'
                },
                 {
                  avatar: require('@/assets/image/Setting/noData.png'),
                  name: '蝉嘶雪',
                  role:'管理员',
                  phone: '18879252951'
                },
                {
                  avatar: require('@/assets/image/Setting/noData.png'),
                  name: '墨冥言',
                  role:'会员',
                  phone: '18879252951'
                },
                 {
                  avatar: require('@/assets/image/Setting/noData.png'),
                  name: '裁影风',
                  role:'普通成员',
                  phone: '18879252951'
                }, 
             ],
          initParams: {
            pageSize: 9,
            pageNo: 0,
            keyword: '',
            orderBy: ''
          },
      }
    },
     components:{
      PpyDialog,
    },
    methods: {
      addNewRoleFun: function(){
        this.isAddNewRole = !this.isAddNewRole;
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
            this.addNewRoleFun();
          }
        },
      //删除
      delModelShow: function(role,name){
        this.isADelRole = !this.isADelRole;
        this.delRole = `${role}-${name}`;
      },
      saveRole: function(){
         this.$message.success(`删除成功`)
        this.delModelShow();
      },
      //设置权限
      changeRoleFun: function(index){
        this.isChangeRole = !this.isChangeRole 
         this.roleList.map((item,k)=>{
          if( item.role == this.list[index].role){
            this.choosedNum = k
          }
        })
        console.log(this.choosedNum)
      },
      chooseRole: function(index){
        this.choosedNum = index;
      },
      saveRoleChange: function(){
        this.isChangeRole = !this.isChangeRole
        console.log(this.choosedNum);
      },
         //pagination 页码改变
      currentChange(val){
        this.initParams.pageNo = val;
      },
      //pagination pageSize改变
      sizeChange(val){
        this.initParams.pageSize = val
      },
    },
    mounted() {
    }
  }
</script>
<style lang="scss">
.icon-active {
  display: inline-block;
  transform: rotate(180deg);
}
.chossed-item {
  background: linear-gradient(left, #6d5dea, #cc90ff);
  color: #fff;
}
.palyer-dialog{
  .add-tip {
        font-size:18px;
        font-weight: bold;
        text-align: center;
      }
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
      .list-column:hover{
        background: linear-gradient(left, #6d5dea, #cc90ff);
        color: #fff;
      }
      .list-column {
        float: left;
        margin-left: 28px;
        margin-top: 16px;
        width: 87px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 14px;
        border: 1px solid #eee;
        border-radius: 10px;
        cursor: pointer;
        transition:all .6s;
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
          .billing-details {
            margin-top: 20px;
             color: #666;
            .brand-nav {
                display: flex;
                display: -webkit-flex;
                justify-content: space-between;
                border-bottom: 1px solid #999;
                line-height: 36px;
                .nav-list {
                  font-size: 16px;
                  font-weight: bold;
                  span {
                    position: relative;
                    top:-8px;
                  }
                }
                .add-brand:hover{
                  background: #6d5dea;
                }
                .add-brand {
                  width: 126px;
                  height: 30px;
                  text-align: center;
                  line-height: 30px;
                  border-radius: 6px;
                  color: #fff;
                  background: linear-gradient( #6d5dea, #8273fa);
                  cursor: pointer;
                  i {
                    font-size: 20px;
                  }
                  span {
                    position: relative;
                    top:-2px;
                    left: 4px;
                  }
                }
              }
               .border-up-empty{
                  width: 20px;
                  height: 15px;
                  border-left: 1px solid #999;
                  border-top: 1px solid #999;
                  position: absolute;
                  -webkit-transform: rotate(45deg);
                  transform: rotate(35deg);
                  background: #fff;
                  z-index: 2;
                  top: 28px;
                  margin-left: 42px;
                }
            .no-data {
              img{
                height: 500px;
              }
              
            }
            .billing-list {
              width: 850px;
              margin: 0 auto;
              .list-cloumn {
                border-bottom: 1px dashed #ddd;
                line-height: 100px;
                font-size: 16px;
                width: 100%;
                .cloumn-avatar {
                  img {
                    width: 54px;
                    height: 54px;
                    border-radius: 50%;
                    position: relative;
                    top: 23px;
                  }
                }
                .cloumns-setting {   
                  cursor: pointer;
                  i {
                    color: #6d5dea;
                    font-size:20px;
                  }
                  span:hover {
                    color: #6d5dea;
                  }
                  span {
                    display: inline-block;
                    margin-left: 12px;
                  }
                }
                .cloumns-del:hover {
                  color: #6d5dea;
                }
                .cloumns-del {
                  
                  cursor: pointer;
                  i {
                    font-size:20px;
                  }
                }
              }
            }
            .bottom-pagination {
              margin: 30px 0;
            }
          }
     
  }
</style>