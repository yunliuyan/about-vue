<template>
  <div class="base-information">
    <div class="user-space">
      <div class="brand-nav">
          <div class="nav-list">空间状态</div>
          <div class="add-brand">总空间: 520GB</div>
      </div>
      <div class="space-show">
          <div class="energy-slot">
            <div class="used-space">400GB</div>
            <div class="slot-box">
                <div :style="{width: energyWidth+'%'}" class="slot-used"></div>
            </div>
            <div class="remaning-space">剩余: 120GB</div>
          </div>
          <transition name="change-color" appear>
            <div class="open-vip-tip">开通会员免费再领500MB!<span>戳我戳我</span><div class="triangle-tip"></div></div>
          </transition>
          
          <div class="end-time">最近到期时间: 2019-12-27 <span>30GB</span></div>
          <el-button type="info" class="login-btn">继续充值</el-button>
          <div class="wait-use-space">
            <div class="wait-tip">待生效空间</div>
            <div class="space-list">
              <div v-for="item in spaceList" class="list-cloumn">
                <div class="space-size">{{item.title}}GB</div>
                <div class="wait-time">生效日期: {{item.effectiveTime}}</div>
                <div class="effective-days">有效时长: {{item.effectiveDays}}个月</div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
    import settingTop from '@/components/Setting/settingTop';
    import settingLeft from '@/components/Setting/settingLeft';
  export default {
    data() {
      return {
        energyWidth: 0,
         spaceList: [
           {
             title: '3',
             effectiveTime: '2018-12-31',
             effectiveDays: '3'
           },
           {
             title: '3',
             effectiveTime: '2018-12-31',
             effectiveDays: '3'
           },
           {
             title: '3',
             effectiveTime: '2018-12-31',
             effectiveDays: '3'
           },
           {
             title: '3',
             effectiveTime: '2018-12-31',
             effectiveDays: '3'
           },
           {
             title: '3',
             effectiveTime: '2018-12-31',
             effectiveDays: '3'
           },
         ]
      }
    },
    components:{
      settingTop,
      settingLeft,
    },
    methods: {
        
    },
    mounted() {
      const _this = this;
      let t = setInterval(function(){
        if(_this.energyWidth > 80){
          clearInterval(t)
        }else{
          _this.energyWidth = _this.energyWidth +1
        }
      },10)
    }
  }
</script>
<style lang="scss" scoped>
  @keyframes myanimate{
    from{
      background: #ff6ccd
    }
    to{
      background: #6d5dea
    }
  }
  .base-information {
    .change-color-enter-active {
      transition: all .8s scale(1.5);
    }
    margin-bottom: 30px;
    .user-space{
      margin-top: 20px;
      color: #666;
      .brand-nav {
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        border-bottom: 1px solid #ddd;
        line-height: 36px;
      }
      .space-show {
        width: 850px;
        margin: 0 auto;
        margin-top:36px;
        .energy-slot {
          color: rgb(109,93,234);
          font-size: 14px;
          .used-space{
            margin-left:545px;
          }
          .slot-box {
            width: 850px;
            height: 22px;
            border-radius: 20px;
            border: 1px solid rgb(255,108,205);
            margin: 6px 0 14px;
            .slot-used{
              height: 24px;
              margin-top: -1px;
              background:linear-gradient(left, #6d5dea, #ff6ccd);
              border-radius: 20px;
            }
          }
          .remaning-space{
            float: right;
            margin-right: 4px;
            color: #666;
          }
        }
        .open-vip-tip:hover{
          color:#ff6ccd;
        }
        .open-vip-tip {
          color: rgb(109,93,234);
          font-size: 14px;
          cursor: pointer;
          span {
            width: 74px;
            height: 20px;
            text-align: center;
            line-height: 20px;
            border-radius: 4px;
            color: #fff;
            display: block;
            position: absolute;
            font-size:12px;
            margin-top:10px;
            margin-left: 90px;
            transition: all .5s;
            animation: myanimate 1s forwards;
            animation-iteration-count: 5;
          }
          span:hover{
            color: #eee;
          }
          .triangle-tip {
            width: 0;
            height: 0;
            border-left: 2px solid transparent;
            border-right: 8px solid transparent;
            border-bottom: 10px solid rgb(109,93,234);
            position:relative;
            margin-left: 120px;
          }
        }
        .end-time {
          font-size: 16px;
          margin-top: 38px;
        }
        .login-btn {
          border-radius: 20px;
          width: 470px;
          height: 48px;
          text-align: center;
          background: linear-gradient(#6d5dea, #8273fa);
          margin: 70px 240px 70px;
          font-size: 16px;
        }
        .wait-use-space {
          .wait-tip{
            font-size: 16px;
            margin: 38px 0 0;
          }
          .space-list{
            display: flex;
            display: -webkit-flex;
            flex-wrap: wrap;
            .list-cloumn {
              margin-top: 30px;
              margin-left: 10px;
              width: 200px;
              height: 110px;
              border-radius: 10px;
              border: 1px solid #6d5dea;
              .space-size {
                  text-align: center;
                  line-height: 50px;
                  font-size: 26px;
              }
              .wait-time {
                font-size: 14px;
                margin-left: 25px;
                line-height: 30px;
              }
              .effective-days {
                font-size: 14px;
                margin-left: 25px;
                line-height: 20px;
              }
            }
          }
        }
        
      }
    }
  }
</style>