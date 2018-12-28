import PpyDialog from '../../components/PpyDialog';
import PpyButton from '../../components/PpyButton';
import PpyRadio from '../../components/PpyRadio'
import scroll from '../../config/scrool'

export default {
  data() {
    return {
      workbenchVisible: false,//控制台弹窗显示隐藏
      explainVisible: false,//使用说明弹窗
      toSetVisible: false,
      showAnimation: false,
      translate: 0,
      groups: [
        {
          icon: 'icon-yidongduanhoutai_zuopinguanli',
          text: '作品管理',
          btns: [
            '电子说明书',
            '云名片',
            '云档案',
            '电子标牌',
            '防伪降价',
            '电子海报',
            '电子贺卡',
            '云相册',
            'DIY制作',
          ]
        },
        {
          icon: 'icon-yidongduanhoutai_mobanguanli',
          text: '模板制作',
          btns: ['电子说明书', '云名片', '智能挪车卡']
        },
        {
          icon: 'icon-yidongduanhoutai_sucaiguanli',
          text: '素材管理',
          btns: ['视频', '音频', '图册']
        },
        {
          icon: 'icon-yidongduanhoutai_shangchengguanli',
          text: '商城管理',
          btns: ['免费试用', '申请开通']
        },
        {
          icon: 'icon-yidongduanhoutai_chengyuanguanli',
          text: '成员管理',
          btns: ['角色管理', '用户管理']
        }
      ],
      showUtil: -1,
      ops: scroll,
      checkAll: -1,
      worbenchBtns: [
        {
          text: '账号管理',
          checked: false,
          disabled: false,
        },
        {
          text: '作品管理',
          checked: false,
          disabled: false,
        },
        {
          text: '模板管理',
          checked: false,
          disabled: false,
        },
        {
          text: '商城管理',
          checked: false,
          disabled: false,
        },
        {
          text: '成员管理',
          checked: false,
          disabled: false,
        },
        {
          text: '企业微网',
          checked: false,
          disabled: true,
        },
        {
          text: '预约管理',
          checked: false,
          disabled: true,
        },
        {
          text: '活动管理',
          checked: false,
          disabled: true,
        },
        {
          text: '产品管理',
          checked: false,
          disabled: true,
        },
        {
          text: '库存管理',
          checked: false,
          disabled: true,
        },
        {
          text: '账号管理',
          checked: false,
          disabled: true,
        },
        {
          text: '考勤管理',
          checked: false,
          disabled: true,
        },
        {
          text: '合同管理',
          checked: false,
          disabled: true,
        },
        {
          text: '考勤管理',
          checked: false,
          disabled: true,
        },
        {
          text: '流程管理',
          checked: false,
          disabled: true,
        },
        {
          text: '业务管理',
          checked: false,
          disabled: true,
        },
        {
          text: '权限管理',
          checked: false,
          disabled: true,
        },
        {
          text: '财务管理',
          checked: false,
          disabled: true,
        }
      ]
    }
  },
  methods: {
    beforeClose() {
    },
    toPage(item){
      let index = this.showUtil;
      if(index == 0){
        switch(item){

        }
      }else if(index == 1){
        switch(item){
          case '云名片':
            this.$router.push({path: '/card'});
            break;
        }

      }else if(index == 2){
        switch(item){
          case '视频':
            this.$router.push({path: '/material/list/video'});
            break;
          case '音频':
            this.$router.push({path: '/material/list/audio'});
            break;
          case '图册':
            this.$router.push({path: '/material/list/images'});
            break;
        }
      }else if(index == 3){

      }else if(index == 4){

      }
    },


    showUtils(item, index) {

      this.translate = index;
      this.showUtil = index
    },
    hideUtils() {
      this.showUtil = -1;
      return false;
    },
    setWorkbench() {
      this.workbenchVisible = true;
    },
    //设置我的工作台全选
    handleCheckAll(value){
     if(this.checkAll != value){
       this.worbenchBtns.forEach((item,index)=>{
          if(!item.disabled){
            item.checked = true
          }
       })
       this.checkAll = value;
     }else{
       this.worbenchBtns.forEach((item,index)=>{
         if(!item.disabled){
           item.checked = false
         }
       })
       this.checkAll = -1;
     }
    },
    //设置我的工作台 按钮点击切换
    toggleChoosed(item){
      if(!item.disabled){
        item.checked = !item.checked
      }
    }
  },
  mounted() {
    setTimeout(_ => {
      this.showAnimation = true;
    }, 20)
  },
  components: {
    PpyDialog,
    PpyButton,
    PpyRadio
  }
}
