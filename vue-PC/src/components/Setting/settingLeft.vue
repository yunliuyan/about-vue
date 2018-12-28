<template>
  <div class="setting">
      <div class="setting-nav">
          <div class="nav-column"  v-for="(item,index) in menus" v-bind:key="index" v-if="index<6" v-bind:class="{active: activeNum.indexOf(index)>-1}" @click="goActive(index,item.path)">
               <i class="iconfont" v-bind:class="item.icon"></i>
               <span>{{item.name}}</span>
          </div>
          <div class="line-box"></div>
           <div class="nav-column"  v-for="(item,index) in menus" v-bind:key="index" v-if="index>5" v-bind:class="{active: activeNum.indexOf(index)>-1}" @click="goActive(index,item.path)">
               <i class="iconfont" v-bind:class="item.icon"></i>
               <span>{{item.name}}</span>
          </div>
      </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
  export default {
    data() {
      return {
          activeNum: [],
      }
    },
    computed: {
      ...mapGetters([
        'menus'
      ])
    },
    methods: {
      changeActive: function(index){
        const _this = this;
        setTimeout(function(){
            _this.activeNum = [...(new Set(_this.activeNum))]
          if(_this.activeNum.length>1){
            _this.activeNum.splice(_this.activeNum.length-1,1);
             _this.activeNum.push(index);
          }else{
            _this.activeNum.push(index);
          }
        },500)


      },
      outActive: function(index){
        const _this = this;
        setTimeout(function(){
          if(_this.activeNum.length>1){
            _this.activeNum.splice(_this.activeNum.length-1,1);
          }
        },500)
      },
      goActive: function(index,path){
        this.activeNum = [];
        this.activeNum.push(index)
        this.$router.push({path: path});
      }
    },
    mounted() {
      let path = this.$router.history.current.matched[2].path;
      this.menus.map((item,index)=>{
        if(item.path == path){
          this.activeNum.push(index)
        }
      })
    }
  }
</script>
<style lang="scss">
  .setting {
    .setting-nav {
      width: 80%;
      color: rgb(102,102,102);
      .active {
        background: linear-gradient(-135deg, transparent 16px, rgb(109,93,234) 0) top right,
                    linear-gradient(-45deg, transparent 16px, rgb(109,93,234) 0) bottom right;
        background-size: 100% 50%;
        background-repeat: no-repeat;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
        color: #fff;
      }
      .nav-column:hover {
        background: linear-gradient(-135deg, transparent 16px, rgb(109,93,234) 0) top right,
                    linear-gradient(-45deg, transparent 16px, rgb(109,93,234) 0) bottom right;
        background-size: 100% 50%;
        background-repeat: no-repeat;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
        color: #fff;
      }
      .nav-column {
        width: 90%px;
        height: 46px;
        line-height: 46px;
        margin-top: 5px;
        cursor: pointer;
        i {
          position: relative;
          margin-left: 20px;
          font-size: 17px;
        }
        span {
          margin-left: 10px;
          font-size: 18px;
        }
      }
    }
    .line-box {
      width: 170px;
      border-bottom: 1px dashed rgb(102,102,102);
      margin: 22px 0;
    }
  }
</style>
