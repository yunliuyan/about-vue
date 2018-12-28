<template>
  <div class="base-information">
        <div class="base-infor">
            <div class="infor-input">
              <span> 登录账号： </span>
              <input type="text" placeholder="请设置登录账号"/>
            </div>
            <div class="infor-input">
              <span> 企业全称： </span>
              <input type="text" placeholder="输入企业全称，点击检测避免重复创建"/>
              <span class="search-value">检测</span>
            </div>
             <div class="infor-input">
              <span> 企业简称： </span>
              <input type="text" placeholder="输入企业简称，点击检测避免重复创建"/>
              <span class="search-value">检测</span>
            </div>
            <div class="infor-input">
              <span> 客服热线： </span>
              <input type="text" placeholder=""/>
            </div>
            <div class="infor-input">
              <span> 广告语： </span>
              <input type="text" placeholder=""/>
            </div>
             <div class="open-vip">
              <span>VIP权限：<span class="vip-tip">立即开通</span></span>
            </div>
            <div class="user-intro">
              <div>账号主体简介:</div>
              <textarea  placeholder="请输入简介:"/>
            </div>
            <div class="industry-change">
              <div class="industry-top">
                <span> 关联行业: </span>
                <span class="industry-tip">最多可以同时选择3个(已选3个)</span>
                <span class="industry-show" @click="changeStatus">{{isHide?'展开全部':'隐藏部分'}}</span>
                <i class="iconfont icon-jiantoushang" :style="{transform: isHide?'rotate(180deg)':''}" @click="changeStatus"></i>
              </div>
              <div class="industry-list" >
                  <div v-for="(item,index) in industryList" v-if="isHide?index<11:true" class="list-column" :class="{'chossed-item': choosed.indexOf(index)>-1? true:false}" @click="chooseIndutry(index)">
                    {{item.name}}
                  </div>
                  <div v-if="isHide" class="list-column" @click="changeStatus">......</div>
              </div>
              
            </div>

        </div>
        <el-button type="info" class="login-btn">保存提交</el-button>
  </div>
</template>
<script>
    import settingTop from '@/components/Setting/settingTop';
    import settingLeft from '@/components/Setting/settingLeft';
  export default {
    data() {
      return {
        industryList: [
            {
              id: '1',
              name: '园林园艺',
            },
            {
              id: '2',
              name: '机构组织',
            },
            {
              id: '3',
              name: '农林牧渔',
            },
            {
              id: '4',
              name: '环保绿化',
            },
            {
              id: '5',
              name: '餐饮住宿',
            },
            {
              id: '6',
              name: '文体娱乐',
            },
            {
              id: '7',
              name: '旅游休闲',
            },
            {
              id: '8',
              name: '教育培训',
            },
            {
              id: '9',
              name: '金融投资',
            },
            {
              id: '10',
              name: '广告传媒',
            },
            {
              id: '11',
              name: '网络通讯',
            },
            {
              id: '12',
              name: '信息产业',
            },
            {
              id: '13',
              name: '电子电工',
            },
            {
              id: '14',
              name: '医药卫生',
            },
            {
              id: '15',
              name: '医药卫生',
            },
            {
              id: '16',
              name: '机械电子',
            },
            {
              id: '17',
              name: '建筑建材',
            },
            {
              id: '18',
              name: '冶金矿业',
            },
            {
              id: '19',
              name: '石油化工',
            },
            {
              id: '20',
              name: '水利水电',
            },
            {
              id: '21',
              name: '交通运输',
            },
            {
              id: '22',
              name: '轻工食品',
            },
            {
              id: '23',
              name: '服装组织',
            },
            {
              id: '24',
              name: '玩具礼品',
            },
             {
              id: '25',
              name: '家具用品',
            },
             {
              id: '26',
              name: '办公文教',
            },
             {
              id: '27',
              name: '包装印刷',
            },
             {
              id: '28',
              name: '安全防护',
            },
             {
              id: '29',
              name: '物资设备',
            },
             {
              id: '30',
              name: '专业服务',
            },
        ],
        isHide: false, //是否全部展开行业选择列表
        choosed: [0], //选中的行业
      }
    },
    components:{
      settingTop,
      settingLeft,
    },
    methods: {
      changeStatus: function(){
        this.isHide = !this.isHide;
      },
      chooseIndutry: function(index){
          if(this.choosed.indexOf(index)>-1){
            this.choosed.splice(this.choosed.indexOf(index),1)
          }else{
            if(this.choosed.length>2){
              this.$message.error('行业选择不能超过三个！')
            }else{
              this.choosed.push(index)
            }
            
          }
        
      },
    },
    mounted() {
    }
  }
</script>
<style lang="scss">

  .base-information {
          .base-infor {
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
              input {
                margin-top: 36px;
                border: none;
                outline: none; 
              -webkit-appearance: none;
                margin-left: 10px;
                width: 87%;
              }
              .search-value {
                text-decoration: underline;
              }
            }
            .industry-change {
              width: 100%;
              .industry-top {
                width: 100%;
                height: 62px;
                font-size: 14px;
                color: rgb(109,93,234);
                margin-top: 36px;
                .industry-tip {
                  margin-left: 10px;
                  color: #999;
                  display: inline-block;
                  width: 82%;
                }
                .industry-show {
                  cursor: pointer;
                }
                i{
                  cursor: pointer;
                  display: inline-block;
                }
              }            
              .industry-list {
                width: 89%;
                margin: -46px auto;
                .chossed-item {
                  background: rgb(109,93,234);
                  color: #fff;
                }
                .list-column {
                  float: left;
                  margin-left: 36px;
                  margin-top: 30px;
                  width: 94px;
                  height: 30px;
                  line-height: 30px;
                  text-align: center;
                  font-size: 14px;
                  border: 1px solid #eee;
                  border-radius: 10px;
                  cursor: pointer;
                }
              }
            }
            .open-vip {
              height: 80px;
              line-height: 80px;
              color: rgb(109,93,234);
              font-size: 14px;
              .vip-tip {
                color: #666;
                text-decoration: underline;
                cursor: pointer;
                margin-left:6px;
              }
            }
            .user-intro {
              color: rgb(109,93,234);
              font-size: 14px;
              textarea {
                outline: none;
                resize: none;
                width: 730px;
                height: 230px;
                border-radius: 10px;
                background: rgb(238,238,238);
                border: none;
                margin: 20px 77px;
                padding: 10px;
              }
            }
          } 
          .login-btn {
              border-radius: 20px;
              width: 470px;
              height: 48px;
              text-align: center;
              background: linear-gradient( #6d5dea, #8273fa);
              margin: 70px 240px 140px;
              font-size: 16px;

          }
        }
   
</style>
