<template>
<div>
  <div class="base-information">
            <div class="brand-information">
                <div class="brand-nav">
                    <div class="nav-list"><span @click="goBrandList">我创建的品牌</span>>{{isExit?detailData.title:'新建品牌'}}</div>
                    <div>品牌ID:{{isExit?detailData.id:'创建成功后自动生成'}}</div>
                </div>
                <div class="brand-list">
                   <div class="infor-input">
                        <span> 品牌名称： </span>
                        <input type="text" v-model="detailData.title" placeholder="请输入您的品牌名称"/>
                        <span class="search-value">检测</span>
                    </div>
                    <div class="user-intro">
                        <div>品牌介绍:</div>
                        <textarea v-model='detailData.intro'  placeholder="请在此输入品牌详细介绍:"/>
                    </div>
                    <div class="user-intro">
                        <div>宣传视频:</div>
                        <div class="video-box">
                            <div v-if="detailData.intro_video" class="update-logo">
                                <img  :src="detailData.intro_video+videoImg" />
                                <i @click="viewVideo" style="color:#fff" class="iconfont icon-PCchawanwu_shipin"></i>
                                <i style="position:absolute;font-size: 20px;margin: -44px 12px;color:#eee" class="iconfont icon-weibiaoti-" @click="delVideo"></i>
                            </div>
                            <div v-if="!detailData.intro_video" class="update-logo"><i class="iconfont icon-add-"></i></div>
                        </div>
                    </div>
                    <div class="user-intro">
                        <div>品牌荣誉:</div>
                        <div class="video-box">
                            <div v-if="detailData.honors.length" v-for="(item,index) in detailData.honors" class="update-logo">
                                <img :src="item.honor_pic" @click="viewPhone(index)" style="margin-left: -50px;" />
                                <i @click="delHonor(index)" style="position:absolute;font-size: 20px;margin: -44px 33px;color:#eee" class="iconfont icon-weibiaoti-"></i>
                            </div>
                            <div class="update-logo"><i class="iconfont icon-add-"></i></div>
                        </div>
                    </div>
                </div>
                <el-button type="info" class="login-btn">保存提交</el-button>
            </div>
  </div>
   <ppy-dialog v-if="detailData.intro_video" class="palyer-dialog" :visible.sync="playerVisible" :width="1180" :height="750">
      <div class="player">
        <div class="player-area">
          <ppy-player :src="detailData.intro_video"></ppy-player>
        </div>
        <div class="info-area">
          <p class="title">{{detailData.title}}</p>
          <p class="createdate">上传时间：{{detailData.createTime}}</p>
          <span @click="delVideo" class="iconfont icon-PCchawanwu_shanchu-"></span>
        </div>
      </div>
    </ppy-dialog>
     <ppy-dialog v-if="detailData.honors" class="palyer-dialog" :visible.sync="phoneVisible" :width="1150" :height="658">
      <div class="player" style="padding-top:658px;">
        <div class="player-area" style="text-align: center">
          <img :src="detailData.honors[phoneNum].honor_pic"  style="height:640px"/>
        </div>
         <div class="change-phone">
            <div @click="preventPhoto"><i class="iconfont icon-jiantouxia-" style="display:inline-block;transform:rotate(180deg);"></i></div>
            <div @click="nextPhoto"><i class="iconfont icon-jiantouxia-"></i></div>
         </div>
      </div>
    </ppy-dialog>
  </div>
</template>
<script>
    import settingTop from '@/components/Setting/settingTop';
    import settingLeft from '@/components/Setting/settingLeft';
    import PpyPlayer from '@/components/PpyPlayer';
    import PpyDialog from '@/components/PpyDialog';
  export default {
    data() {
      return {
         isExit: false,
         detailData: {},
         videoImg: '?x-oss-process=video/snapshot,t_1000,f_jpg,w_750,h_450,m_fast',
         playerVisible: false,
         phoneVisible: false,
         phoneNum: 0,
      }
    },
    components:{
      settingTop,
      settingLeft,
      PpyDialog,
      PpyPlayer
    },
    methods: {
        goBrandList: function(){
            this.$router.push({path: '/setting/brandInfo'})
        },
        delVideo: function(){
            this.detailData.intro_video = '';
            if(this.playerVisible){
                this.playerVisible = !this.playerVisible;
            }
        },
        delHonor: function(index){
            this.detailData.honors.splice(index,1)
        },
        viewVideo: function(){
            this.playerVisible = !this.playerVisible
        },
        viewPhone: function(index){
            this.phoneVisible = !this.phoneVisible
            this.phoneNum = index;
        },
        preventPhoto: function(){
            if(this.phoneNum>0){
                this.phoneNum = this.phoneNum -1
            }
        },
        nextPhoto: function(){
            if(this.phoneNum < this.detailData.honors.length-1){
                this.phoneNum = this.phoneNum+1
            }
        },
        getDetail: function(id){
            console.log(id);
            this.detailData = {
                title: '爱园艺',
                id: '95494026',
                createPeople: '爱园艺工作室',
                createTime: '2018-12-25',
                intro: '爱园艺网络注册资本500万，累计投资1000万。公司致力于以二维码为基础的技术开发，同时为客户提供云端Saas应用服务，助其实现多维度营销整合及信息化生产流程管理，目前已服务超过300家的中小企业，软硬件产品累计用户超过100万人。\n\n爱园艺产品涵盖范围：电子标签、电子名片、电子档案、电子说明书、电子海报、电子贺卡、电子相册、智能网关及各种土壤、环境监测传感器等。爱园艺应用涉及领域：图像识别、网络商城、商品管理、预约管理、售后管理、销售管理、库存管理等，目前集合应用在爱园艺自主研发的天工万联开放平台，已服务于鲜花园艺、教育培训、服装商超、医疗美容、房产销售、汽车销售、酒店民宿等行业。',
                intro_video: 'https://img.iyyclub.com/ecards/39/video/226610683704250368.mp4',
                honors: [
                    {
                        id: 333,
		                card_id:414,
                        honor_pic:'https://img.iyyclub.com/ecards/39/pic/246601890324811776.jpg',
                    },
                    {
                        id: 334,
                        card_id: 414,
                        honor_pic: 'https://img.iyyclub.com/ecards/39/pic/246601957865689088.jpg',
                    },
                    {
                        id: 335,
                        card_id: 414,
                        honor_pic: 'https://img.iyyclub.com/ecards/39/pic/246602250552610816.jpg'
                    }
                ]

            }
        }
    },
    mounted() {
        let id = this.$router.history.current.params.id;
        if(parseInt(id)){
            this.getDetail(id);
            this.isExit = !this.isExit;
        }
    }
  }
</script>
<style lang="scss">

  @import "../../../assets/style/variable";
  @import "../../../assets/style/mixin";
    .ppy-dialog.palyer-dialog{
        .content{
        top: 3px !important;
        }
    }
    .player{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding-top: 680px;
        .createdate{
            font-size: 12px;
            color: #666666;
            margin-top: 15px;
        }

        .iconfont{
            position: absolute;
            right:20px;
            bottom: 20px;
            font-size: 22px;
            cursor: pointer;
            color: #909090;
            &:hover{
            color: $purple;
            }
        }
        }
    .player-area{
      position: absolute;
      top: 5px;
      left: 5px;
      right: 5px;
      height: 660px;
      overflow: hidden;
      @include rounded(8px);
      .title{
        font-size: $fz-medium;
      }
      img {
          transition: all 1s;
      }
    }
    .change-phone {
        width: 94%;
        position: absolute;
        display: flex;
        dispaly: -webkit-flex;
        justify-content: space-between;
        margin-top: -30%;
        margin-left: 3%;
        div{
            i{
                position: relative !important;
                font-size: 40px !important;
            }
        }

    }
</style>
<style lang="scss" scoped>
  .base-information {
          .brand-information {
            color: #666;
            .brand-nav {
                display: flex;
                display: -webkit-flex;
                justify-content: space-between;
                border-bottom: 1px solid #ddd;
                line-height: 36px;
                .nav-list {
                    span:hover {
                        cursor: pointer;
                        color: rgb(109,93,234);
                    }
                    
                }
            }
            .brand-list {
                width: 100%;
                .infor-input{
                    width: 86%;
                    height: 62px;
                    border-bottom: 1px solid #ddd;
                    font-size: 14px;
                    display: block;
                    margin: 0 auto;
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
                        width: 83%;
                    }
                    .search-value {
                        text-decoration: underline;
                        cursor:pointer;
                    }
                }
                .user-intro {
                    width: 86%;
                    color: rgb(109,93,234);
                    font-size: 14px;
                    display: flex;
                    display: -webkit-flex;
                    margin: 40px auto;
                    textarea {
                        outline: none;
                        resize: none;
                        width: 680px;
                        height: 185px;
                        border-radius: 10px;
                        background: rgb(238,238,238);
                        border: none;
                        margin: 0 6px;
                        padding: 10px;
                    }
                    .video-box{
                        display: flex;
                        display: -webkit-flex;
                        .update-logo {
                            cursor: pointer;
                            width: 100px;
                            height: 100px;
                            border-radius: 10px;
                            text-align: center;
                            line-height: 100px;
                            background: rgb(242,242,242);
                            border: 1px solid #eee;
                            margin-left: 10px;
                            img {
                                width: 100px;
                                height: 100px;
                                border-radius: 10px;
                                position:absolute;
                                margin-left: -30px;
                            }
                            i{
                                display: inline-block;
                                position: relative;
                                z-index: 2;
                                font-size: 40px;
                                font-weight: bold;
                                color: #999;
                            }
                        }
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
     
  }
  
</style>