<template>
  <div class="public">
    <div class="query-conditions">
      <ppy-select :list="list" @selected="handleSelect1"></ppy-select>
      <ppy-select :list="list2" @selected="handleSelect2"></ppy-select>
    </div>
    <div class="groups clearfix">
      <div class="item" v-for="i in 15">
        <div class="imgs"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import PpySelect from '../../../components/PpySelect'
  export default {
    data() {
      return {
        list:[
          {
            label: '全部',
            value: '全部'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          }
        ],
        list2:[
          {
            label: '分类',
            value: '分类'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          },
          {
            label: '行业一',
            value: '行业一'
          }
        ]
      }
    },
    methods: {
      handleSelect1(item){
        console.log(item);
      },
      handleSelect2(item){
        console.log(item);
      }
    },
    mounted() {
    },
    components:{
      PpySelect
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../../assets/style/mixin";
  .query-conditions {
    height: 60px;
    padding-top: 15px;
  }
  .groups{
    .item{
      width: 240px;
      height: 252px;
      padding-bottom: 25px;
      padding-right: 15px;
      box-sizing: border-box;
      float: left;
      .imgs{
        width: 100%;
        height: 100%;
        background-color: #eee;
        @include rounded(10px);
      }
    }
  }
</style>
