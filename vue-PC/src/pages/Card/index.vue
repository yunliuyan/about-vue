<template>
  <section class="card">
    <header>
      <PpyPath></PpyPath>
      <PpyRadio class="radio" :label="1" :value="type" @change="handleRadio">云名片</PpyRadio>
      <PpyRadio class="radio" :label="2" :value="type" @change="handleRadio">电子说明书</PpyRadio>
      <PpyRadio class="radio" :label="3" :value="type" @change="handleRadio">智能挪车卡</PpyRadio>
    </header>
    <div class="query-condition">
      <ul>
        <li>
          <span>风格：</span>
          <a href="javascript:void(0);" class="active">全部</a>
          <a href="javascript:void(0);">商务轻奢</a>
          <a href="javascript:void(0);">清新花卉</a>
          <a href="javascript:void(0);">简约时尚</a>
        </li>
        <li>
          <span>板式：</span>
          <a href="javascript:void(0);" class="active">横版</a>
          <a href="javascript:void(0);">竖版</a>
        </li>
        <li>
          <span>授权：</span>
        </li>
      </ul>
    </div>
    <div class="util">
      <a href="javascript:void(0);" @click="handleRedirect">+新建名片模板</a>
    </div>
    <div class="card-list">
      <ul class="clearfix">
        <li v-for="i in 8">
          <card-li></card-li>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
  import PpyPath from '../../components/PpyPath'
  import PpyRadio from '../../components/PpyRadio'
  import CardLi from '../../components/CardLi'
  export default {
    data() {
      return {
        type:1
      }
    },
    methods: {
      handleRedirect(){
        this.$router.push('/card/add')
      },

      handleRadio(value){
        this.type = value
      }
    },
    mounted() {
    },
    components: {
      PpyPath,
      PpyRadio,
      CardLi
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/style/mixin";
  @import "../../assets/style/variable";
  .card{
    @include horizental-align-width;
    header{
      height: 68px;
      line-height: 68px;
    }
    .radio{
      margin-left: 35px;
    }
    .query-condition{
      background-color: #eee;
      height: 172px;
      box-sizing: border-box;
      border: 2px solid #e2e2e2;
      @include rounded(18px);
      padding: 15px 28px;
      li{
        line-height: 45px;
        font-size: $fz;
        span{
          margin-right: 35px;
        }
        a{
          margin-right: 35px;
          text-decoration: none;
          &.active{
            color: $purple;
          }
        }
      }
    }
    .util{
      line-height: 58px;
      text-align: right;
      a{
        color: $purple;
        text-decoration: none;
      }
    }
    .card-list{
      li{
        width: 300px;
        float: left;
        text-align: center;
        margin-bottom: 30px;
      }
    }
  }
</style>
