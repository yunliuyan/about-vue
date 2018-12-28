<template>
  <div class="">
    <div class="banner">
      <div class="banner-wrap">
        <h2 :class="{active:showAnimation}">品牌云 &nbsp;&nbsp;&nbsp;<span>——为品牌而生</span></h2>
        <p :class="{active:showAnimation}">再小的个体，也应有自己的品牌!</p>
        <h3 :class="{active:showAnimation}">——张小龙</h3>
      </div>
    </div>
    <div class="wrapper" @click.capture.self="hideUtils">
      <div class="title" @click="setWorkbench">
        <span class="iconfont icon-PCchawanwu_shezhi"></span>
        设置我的工作台
      </div>
      <div class="util-group">
        <ul class="clearfix">
          <li v-for="(item,index) in groups" :class="{active: showUtil == index}" :key="index"
              @mouseenter="showUtils(item,index)">
            <div class="icon-box">
              <span class="iconfont" :class="item.icon"></span>
              <span class="icon-shadow iconfont" :class="item.icon"></span>
            </div>
            <span class="text">{{item.text}}</span>
          </li>
        </ul>
        <div class="cascading" :class="{active: showUtil>=0}">
          <span class="cascading-arrow" :style="{left: `${translate*240+108}px`}"></span>
          <vue-scroll :ops="ops">
            <div class="cascading-content" v-if="showUtil>=0">
              <a v-for="(item,index) in groups[showUtil].btns" href="javascript:void(0);" @click="toPage(item)">
                <ppy-button class="btn">{{item}}</ppy-button>
              </a>

            </div>
          </vue-scroll>
        </div>
      </div>
    </div>

    <ppy-dialog :visible.sync="workbenchVisible" @beforeClose="beforeClose" :width="650" :height="627">
      <div class="workbench">
        <h2>
          请选择内容至我的工作台
          <div style="float: right;">
            <ppy-radio v-model="checkAll" :value="checkAll" label="1" @change="handleCheckAll">全选</ppy-radio>
          </div>
        </h2>
        <div class="content">
          <a v-for="(item,index) in worbenchBtns" :key="index" @click="toggleChoosed(item)">
            <ppy-button class="btn"
                        size="medium"
                        :checked="item.checked"
                        :disabled="item.disabled"
            >
              {{item.text}}
            </ppy-button>
          </a>
        </div>
        <div class="button">
          <a href="javascript:void(0);">保存提交</a>
        </div>
      </div>
    </ppy-dialog>

    <ppy-dialog :visible.sync="explainVisible" :width="900" :height="630">
      <div class="explain">
        <h2>
          "商城橱窗"&nbsp;&nbsp;开通说明
        </h2>
        <p><span>*</span>该功能目前仅针对拥有工商营业执照的法人组织，要开通该功能须开通企业帐号管理后台。企业可免费开通橱窗，每年仅需缴纳300元的认证费用。</p>
        <p><span>*</span>开通开通商品橱窗后，用户将免费同步入驻产供销商城平台，可通过搜索“产供销”小程序进入查看相关店铺及商品。</p>
        <p><span>*</span>用户申请入驻“产供销”商城平台，需提供最新的营业执照复印件，同时填写自己店铺名称，该名称一旦确定，后续将不可更改。</p>
        <p><span>*</span>只要入驻产供销平台后，用户在爱园艺网络提供的其他软件程序（例如“识花草”、“查万物”）里面，则不需要再重新申请开通，只要申请关联即可。</p>
      </div>
      <div class="button" style="margin-top: 0;">
        <a href="javascript: void(0);">免费试用30天</a>
      </div>
    </ppy-dialog>

    <ppy-dialog class="to-set" :visible.sync="toSetVisible" :width="568" :height="335">
      <div class="img">
        <img src="../../assets/img/Home/notice.png" alt="">
        <p>还没有设置个人信息哦~</p>
      </div>
      <div class="button">
        <a href="javascript:void(0);">立即设置</a>
      </div>
    </ppy-dialog>
  </div>
</template>
<script>
  import home from './home';

  export default home;
</script>
<style lang="scss" scoped>
  @import '../../assets/style/home';
</style>
