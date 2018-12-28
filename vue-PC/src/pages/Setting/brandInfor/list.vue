<template>
  <div class="base-information">
  
            <div class="brand-information">
                <div class="brand-nav">
                    <div class="nav-list">我创建的品牌</div>
                    <div class="add-brand" @click="goAddBrand(0)"><i class="iconfont icon-add-"></i><span>新建品牌</span></div>
                </div>
                <div class="brand-list">
                    <div class="list-cloumn" v-for="(item,index) in brandData" @click="goAddBrand(item.id)" @mouseover="changeActive(index)" @mouseout="outActive()" :class="{'brand-active': index==indexNum}">
                        <i class="iconfont icon-PCchawanwu_jibenxinxi"></i>
                        <div class="cloumn-title">{{item.title}}</div>
                        <div class="cloumn-id" style="margin-top:22px;">品牌ID： {{item.id}}</div>
                        <div class="cloumn-id">创建人:  {{item.createPeople}}</div>
                        <div class="cloumn-id">创建时间:   {{item.createTime}}</div>
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
          brandData: [
              {
                  title: '爱园艺',
                  id: '95494026',
                  createPeople: '爱园艺工作室',
                  createTime: '2018-12-25'
              },
               {
                  title: '爱园艺',
                  id: '95494026',
                  createPeople: '爱园艺工作室',
                  createTime: '2018-12-25'
              },
               {
                  title: '爱园艺',
                  id: '95494026',
                  createPeople: '爱园艺工作室',
                  createTime: '2018-12-25'
              },
               {
                  title: '爱园艺',
                  id: '95494026',
                  createPeople: '爱园艺工作室',
                  createTime: '2018-12-25'
              },
          ],
          indexNum: null,
      }
    },
    components:{
      settingTop,
      settingLeft,
    },
    methods: {
        changeActive: function(index){
            const _this = this;
            setTimeout(function(){
                _this.indexNum = index;
            },300)
        },
        outActive: function(){
            const _this = this;
            setTimeout(function(){
                _this.indexNum = null;
            },300)
        },
        goAddBrand: function(id){
            this.$router.push({path: `/setting/brandInfo/add/${id}`})
        }
    },
    mounted() {
    }
  }
</script>
<style lang="scss" scoped>
        .brand-information {
            color: #666;
            margin-top: 20px;
            .brand-nav {
                display: flex;
                display: -webkit-flex;
                justify-content: space-between;
                border-bottom: 1px solid #ddd;
                line-height: 36px;
                .nav-list {

                }
                .add-brand {
                    color: rgb(109,93,234);
                    cursor: pointer;
                    i{
                        font-size: 12px;
                        position: relative;
                        right: 6px;
                    }
                }
            }
            .brand-list {
                width: 82%;
                position: absolute;
                .brand-active {
                    background: linear-gradient(45deg, #6d5dea, #cc90ff);
                    transition: all .3s ease-in-out;
                    color: #fff;
                }
                .list-cloumn {
                    float: left;
                    width: 280px;
                    height: 164px;
                    margin-top: 34px;
                    border-radius: 10px;
                    border: 1px solid #ddd;
                    margin-right:30px;
                    cursor: pointer;
                    i {
                        display: inline-block;
                        position: relative;
                        float: right;
                        margin: 10px;
                    }
                    .cloumn-title {
                        width: 100%;
                        text-align: center;
                        font-weight: bold;
                        font-size: 30px;
                        margin-top: 22px;
                        margin-left: 30px;
                    }
                    .cloumn-id {
                        line-height: 23px;
                        font-size: 14px;
                        margin-left:20px;
                    }
                }
            }
          
  }
</style>
