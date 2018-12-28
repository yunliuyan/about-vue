<template>
  <div>
      <div class="login-bottom">
        
            <div class='bottom-intro'>
                <div class='intro-title'>官方授权，海量数据，合作共赢</div>
                <div class='intro-list'>
                    <div class='list-colunm'>
                        <div class="colunm-top" :style="{background: `linear-gradient(${angle}deg, #556dff, #be93ff)`}">1000万+</div>
                        <div class="colunm-bottom">用户及商家信赖之选</div>
                    </div>
                    <div class='list-colunm'>
                        <div class="colunm-top" :style="{background: `linear-gradient(${angle}deg, #ffd8ab, #ff5a6d)`}">100万+</div>
                        <div class="colunm-bottom">商品信息档案</div>
                    </div>
                    <div class='list-colunm'>
                        <div class="colunm-top" :style="{background: `linear-gradient(${angle}deg, #56e9ff, #474bff)`}">100万+</div>
                        <div class="colunm-bottom">人员名片信息</div>
                    </div>
                    <div class='list-colunm'>
                        <div class="colunm-top" :style="{background: `linear-gradient(${angle}deg, #f25fff, #4799ff )`}">200个+</div>
                        <div class="colunm-bottom">覆盖行业及类目</div>
                    </div>
                    <div class='list-colunm'>
                        <div class="colunm-top" :style="{background: `linear-gradient(${angle}deg, #ff4974, #ffe746 )`,opacity: .8}">10万+</div>
                        <div class="colunm-bottom">品牌及企业数据</div>
                    </div>
                </div>
            </div>
            <div class="bottom-brand">
                <div class="brand-title">与众多品牌一起感受云服务的魅力</div>
                
                   <scroll :data="brandList" :class-option="classOption"  class="brand-display">
                        <div class="brand-display">
                         <img v-for="item in brandList" :src="item" />
                   
                    </div>
                   </scroll>
                <div class="brand-tip">注：以上为部分云产品应用优秀品牌展示，排名部分先后</div>
            </div>
            <div class="bottom-nav">
                <div class="setting-wrapper">
                <div class='nav-list'>
                    <div v-for="item in navList" class='list-counm'>{{item}}</div>
                </div>
                <img :src='safeImage' />
                </div>
            </div>
      </div>
  </div>
</template>
<script>
import scroll from './scroll';
  export default {
      
    data() {
      return {
         angle: 45,
         animate:false,
         brandList: [
             require("../../assets/image/Login/scroll1.png"),
             require("../../assets/image/Login/scroll2.png"),
             require("../../assets/image/Login/scroll3.png"),
         ],
         safeImage: require("../../assets/image/Login/safe.png"),
         navList: [
             '友情链接',
             '中国商品信息服务平台',
             '国家市场监督管理总局',
             '中国商标网',
             '中国物品编码中心',
             '联系我们',
             '服务热线:4008768180',
             '苏州爱园艺网络有限公司',
             '苏ICP备17019654号-3',

         ]

      }
      
    },
    computed: {
     classOption () {
        
        return {
          step: .5,
          limitMoveNum: 3,
          openTouch: false
        }
      }
    },
    components:{
        scroll
    },
    created: function () {
    },
    
    mounted() {
            const _this = this;
            setInterval(function(){
                if(_this.angle<360){
                    
                    _this.angle += 5;
                }else{
                    _this.angle = 0
                }
            },300)
    },
    methods: {
      
    },
  }
</script>
<style lang="scss">
@import "../../assets/style/mixin";
  .setting-wrapper{
    @include horizental-align-width;
  }
    .login-bottom {
        width: 100%;
        margin-top: 120px;
        .bottom-intro {
            width: 100%;
            height: 330px;
            .intro-title {
                text-align: center;
                font-size:  30px;
                font-weight: bold;
            }
            .intro-list {
                width: 100%;
                height: 110px;
                margin-top: 100px;
                display: flex;
                -webkit-display: flex;
                justify-content: center;
                .list-colunm {
                    height: 100%;
                    margin-right: 50px;
                    margin-left: 50px;
                    .colunm-top {
                        color: #fff;
                        height: 130px;
                        width: 130px;
                        border-radius: 50%;
                        text-align: center;
                        font-size: 20px;
                        line-height: 130px;
		                background-size:100% 100%;
                    }

                    .colunm-bottom {
                        color: #666;
                        font-size: 16px;
                        margin-top: 40px;
                        text-align: center;
                    }
                }
            }
        }
        .bottom-brand {
            width: 100%;
            margin-top:140px;
            text-align: center;
            .brand-title {
                font-size:  30px;
                font-weight: bold;
                margin-bottom: 60px;
            }
            .brand-display {
                width: 100%;
                margin: 0 auto;
                height: 265px;
                overflow: hidden;
                text-align: center;
                img {
                    margin-top:30px;
                }
                .brand-list {
                    width: 100%;
                    position: relative;

                }
            }
            .brand-tip {
                margin-top: 80px;
                color: #666;
                font-size: 16px;
            }
        }
        .bottom-nav {
            width: 100%;
            height: 300px;
            margin-top: 100px;
            background: rgb(240,238,253);
            .nav-list {
                width: 1320px;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-display: flex;
                -ms-flex-wrap: wrap;
                flex-wrap: wrap;
                .list-counm {
                    margin-right: 140px;
                    font-size: 16px;
                    color: rgb(102,102,102);
                    margin-top: 60px;
                }
            }
            img {
                margin: 60px auto 0;
                text-align: center;
                width: 100%;
                position: relative;

            }
        }
    }
  
</style>