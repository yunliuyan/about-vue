<template>
  <div class="base-information">
            <div class="billing-details">
                <div class="brand-nav">
                    <div class="nav-list">历史账单>全部</div>
                    <div class="add-brand">总消费： 1000000</div>
                </div>
                <div v-if="!bilingData" class="no-data">
                  <img :src="nullData" />
                </div>
                <div v-if="bilingData" class="billing-list">
                    <div v-for="item in bilingData.list" class="list-cloumn">
                        <div>*****{{item.event}}消费{{item.pay}}元</div>
                        <div>{{item.createTime}}</div>
                    </div>
                </div>
                <div class="bottom-pagination">
                  <el-pagination
                    layout="sizes, prev, pager, next, jumper, ->, total, slot"
                    :total="bilingData.list.length"
                    :current-page.sync="initParams.pageNo"
                    :page-size="initParams.pageSize"
                    @current-change="currentChange"
                    @size-change="sizeChange"
                    :page-sizes="[10,20,50,100]"
                  >
                  </el-pagination>
                </div>  
            </div>
      
  </div>
</template>
<script>
  export default {
    data() {
      return {
          nullData: require('@/assets/image/Setting/noData.png'),
          bilingData: {
             total: 100000,
             list: [
                 {
                  event: '云流烟开通会员',
                  pay: 1231,
                  createTime: '2018-12-26',
                },
                 {
                  event: '云流烟开通会员',
                  pay: 1231,
                  createTime: '2018-12-26',
                },
                 {
                  event: '云流烟开通会员',
                  pay: 1231,
                  createTime: '2018-12-26',
                },
                 {
                  event: '云流烟开通会员',
                  pay: 1231,
                  createTime: '2018-12-26',
                },
                 {
                  event: '云流烟开通会员',
                  pay: 1231,
                  createTime: '2018-12-26',
                },
                 {
                  event: '云流烟开通会员',
                  pay: 1231,
                  createTime: '2018-12-26',
                },
                 {
                  event: '云流烟开通会员',
                  pay: 1231,
                  createTime: '2018-12-26',
                },
                 {
                  event: '云流烟开通会员',
                  pay: 1231,
                  createTime: '2018-12-26',
                },
                 {
                  event: '云流烟开通会员',
                  pay: 1231,
                  createTime: '2018-12-26',
                }
             ],
          },
          initParams: {
            pageSize: 9,
            pageNo: 0,
            keyword: '',
            orderBy: ''
          },
      }
    },
    methods: {
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
  .base-information {
          .billing-details {
            margin-top: 20px;
             color: #666;
            .brand-nav {
                display: flex;
                display: -webkit-flex;
                justify-content: space-between;
                border-bottom: 1px solid #ddd;
                line-height: 36px;
            }
            .no-data {
              img{
                height: 500px;
              }
              
            }
            .billing-list {
              .list-cloumn {
                display: flex;
                display: -webkit-flex;
                justify-content: space-between;
                border-bottom: 1px dashed #ddd;
                line-height: 60px;
              }
            }
            .bottom-pagination {
              
              margin: 30px 0;
            }
          }
     
  }
</style>