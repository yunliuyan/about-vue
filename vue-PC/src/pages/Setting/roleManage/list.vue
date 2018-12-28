<template>
  <div class="base-information">
      <div class="billing-details">
        <div class="brand-nav">
          <div class="nav-list"><span>角色列表</span></div>
          <div class="add-brand" @click="addNewRoleFun"><i class="iconfont icon-PCchawanwu_tianjiajiaoseyonghu"></i><span>添加新角色</span></div>
        </div>
        <div class="border-up-empty"></div>
        <div v-if="!list" class="no-data">
          <img :src="nullData" />
        </div>
        <div v-if="list" class="billing-list">
          <div v-for="item in list" class="list-cloumn">
            <div class="cloumn-role">{{item.role}}</div>
            <div class="cloumn-setting" @click="settingPermissionFun"><i class="iconfont icon-PCchawanwu_shezhi"></i><span>设置权限</span></div>
            <div class="cloumn-del" @click="delModelShow(item.role)"><i class="iconfont icon-PCchawanwu_shanchu-"></i></div>
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
      <div class="add-tip">添加新角色</div>
      <div class="input-box">
        <div class="change-ps-input"><input type="type" v-model='newRole' placeholder="请输入新角色名称"/></div>
      </div>
      <el-button @click="saveRole" type="info" class="login-btn">确定</el-button>
    </ppy-dialog>
     <ppy-dialog  class="palyer-dialog" :visible.sync="isSettingPermission" :width="830" :height="536">
      <div class="add-tip">设置角色权限</div>
      <div class="permission-list">
          <div class="list-cloumn" v-for="(item,k) in settingList" :key="k">
              <div class="cloumn-nav">
                  <div class="nav-name">{{item.name}}<i @click="isShowItem(k)" v-bind:class="{'icon-active':changeItem.indexOf(k)>-1}" class="iconfont icon-jiantoushang"></i></div>
                  <div class="nav-check-all"><el-checkbox :label="k" :key="k"  @change="handleCheckAllChange(k)">全选</el-checkbox></div>
              </div>
              <div class="content-box">
                <div class="cloumn-content" v-if="changeItem.indexOf(k)<0" v-for="(types,num) in item.typeList" :key="num">
                    <div class="content-title">{{types.title}}</div>
                    <el-checkbox-group class="check-box" v-model="checkedCities" @change="handleCheckedCitiesChange">
                      <el-checkbox class="box-detail" v-for="(city,index) in types.cloumnList" :label="city.id" :key="city.id">{{city.name}}</el-checkbox>
                    </el-checkbox-group>
                </div>
              </div>
             
          </div>
      </div>
      <el-button @click="saveSetting" style="margin-left: 300px;margin-bottom:20px;"  type="info" class="login-btn">确定</el-button>
    </ppy-dialog>
     <ppy-dialog  class="palyer-dialog" :visible.sync="isADelRole" :width="400" :height="220">
      <div class="add-tip">删除角色</div>
      <div class="input-box">
        <div class="change-ps-input" style="border:none;margin-top:30px">该操作不可逆，确认删除"{{delRole}}"</div>
      </div>
      <el-button @click="saveRole" style="background: red;border:none;margin-top:2px" type="info" class="login-btn">确定删除</el-button>
    </ppy-dialog>
  </div>
      
  </div>
</template>
<script>
  import PpyDialog from '@/components/PpyDialog';
  export default {
    data() {
      return {
        isAddNewRole: false,
        newRole:'',
        isADelRole: false,
        delRole: '',
        isSettingPermission: false,
        changeItem: [],
        checkedCities:[],
        settingList: [
          {
            name: '工作台一',
            typeList: [
              {
                title: '分类一',
                cloumnList: [
                  {name:'新建产品',id:1},
                  {name:'新建产品',id:2},
                  {name:'新建产品',id:3},
                  {name:'新建产品',id:4},
                ]
              },
               {
                title: '分类二',
                cloumnList: [
                  {name:'新建产品',id:5},
                  {name:'新建产品',id:6},
                  {name:'新建产品',id:7},
                  {name:'新建产品',id:8},
                ]
              },
               {
                title: '分类三',
                cloumnList: [
                  {name:'新建产品',id:33},
                  {name:'新建产品',id:34},
                  {name:'新建产品',id:35},
                  {name:'新建产品',id:36},
                ]
              },
            ]
          },
           {
            name: '工作台二',
            typeList: [
              {
                title: '分类一',
                cloumnList: [
                  {name:'新建产品',id:9},
                  {name:'新建产品',id:10},
                  {name:'新建产品',id:11},
                  {name:'新建产品',id:12},
                ]
              },
               {
                title: '分类二',
                cloumnList: [
                  {name:'新建产品',id:13},
                  {name:'新建产品',id:14},
                  {name:'新建产品',id:15},
                  {name:'新建产品',id:16},
                ]
              },
               {
                title: '分类三',
                cloumnList: [
                  {name:'新建产品',id:17},
                  {name:'新建产品',id:18},
                  {name:'新建产品',id:19},
                  {name:'新建产品',id:20},
                ]
              },
            ]
          },
           {
            name: '工作台三',
            typeList: [
              {
                title: '分类一',
                cloumnList: [
                  {name:'新建产品',id:21},
                  {name:'新建产品',id:22},
                  {name:'新建产品',id:23},
                  {name:'新建产品',id:24},
                ]
              },
               {
                title: '分类二',
                cloumnList: [
                  {name:'新建产品',id:25},
                  {name:'新建产品',id:26},
                  {name:'新建产品',id:27},
                  {name:'新建产品',id:28},
                ]
              },
               {
                title: '分类三',
                cloumnList: [
                  {name:'新建产品',id:29},
                  {name:'新建产品',id:30},
                  {name:'新建产品',id:31},
                  {name:'新建产品',id:32},
                ]
              },
            ]
          },
        ],
        checkAll: [],
          nullData: require('@/assets/image/Setting/noData.png'),
             list: [
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
      saveRole: function(){
        if(this.newRole){
          this.$message.success(`添加成功`)
          this.addNewRoleFun();
        }else{
          this.$message.error(`请输入新角色名称`)
        }
        
      },
      //删除
      delModelShow: function(role){
        this.isADelRole = !this.isADelRole;
        this.delRole = role;
      },
      saveRole: function(){
         this.$message.success(`删除成功`)
        this.delModelShow();
      },
      //设置权限
      settingPermissionFun: function(){
        this.isSettingPermission = !this.isSettingPermission;
      },
      //显示隐藏工作台
      isShowItem: function(k){

        if(this.changeItem.indexOf(k)>-1){
          this.changeItem.splice(this.changeItem.indexOf(k),1)
        }else{
          this.changeItem.push(k);
        }
      },
      handleCheckAllChange(k) {
        if(this.checkAll.indexOf(k)<0){
          this.checkAll.push(k);
           this.settingList[k].typeList.map((item,index)=>{
            item.cloumnList.map(value=>{
              this.checkedCities.push(value.id);
            })
          })
        }else{
          this.checkAll.splice(this.checkAll.indexOf(k),1);
          this.settingList[k].typeList.map((item,index)=>{
            item.cloumnList.map(value=>{
               this.checkedCities.splice(this.checkedCities.indexOf(value.id),1);
            })
          })
        }
      },
      handleCheckedCitiesChange(value) {
          console.log(value)
      },
      saveSetting: function(){

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
.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #6d5dea;
    border-color: #6d5dea;
}
.el-checkbox__input.is-checked+.el-checkbox__label {
    color: #6d5dea;
}
.icon-active {
  display: inline-block;
  transform: rotate(180deg);
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
      margin: 20px 12.5%;
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
    }
  }
  .permission-list {
      width: 735px;
      margin: 0 auto;
    .list-cloumn{
      width: 100%;
      border-bottom: 1px solid #ddd;
      .cloumn-nav{
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        margin-top: 20px;
        .nav-name{
          font-size: 14px;
          font-weight: bold;
          i:hover{
            color: #666;
          }
          i{
            position: relative;
            color: #6d5dea;
            left: 10px;
            cursor: pointer;
          }
        }
        .nav-check-all{

        }
      }
      .content-box{
        margin-bottom: 20px;
        transition: all, .6s;
        .cloumn-content {
          display: flex;
          justify-content: space-between;
          display: -webkit-flex;
          margin-top: 20px;
          .content-title{
            margin-left: 32px;
          }
          .check-box {
            margin-right: 84px;
            .box-detail {
              margin-left: 64px;
            }
          }
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
    margin: 20px 80px 0;
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
                display: flex;
                display: -webkit-flex;
                justify-content: space-space-between;
                border-bottom: 1px dashed #ddd;
                line-height: 60px;
                font-size: 16px;
                .cloumn-role {
                  margin-left: 40px;
                }
                .cloumn-setting {
                  position: absolute;
                  margin-left: 620px;
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
                .cloumn-del:hover {
                  color: #6d5dea;
                }
                .cloumn-del {
                  position: absolute;
                  margin-left: 820px;
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