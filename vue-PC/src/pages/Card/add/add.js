
import PpyPath from '../../../components/PpyPath'
import PpyRadio from '../../../components/PpyRadio'
import StepWrap from '../../../components/StepWrap'
import GroupCheck from '../../../components/GroupCheck'
import vdr from 'vue-draggable-resizable'
import DragWrap from '../../../components/DragWrap'
import PpyDialog from '../../../components/PpyDialog'
import {checkGroups,checkGroups2} from "./groups";

export default {
  data() {
    return {
      type: '1',
      style: '竖版',
      style2: '1',
      auth: '1',
      color: '#333333',
      fontSize: '36',
      UI:[],
      checks: checkGroups,
      options:{
        x: 0,
        y: 0,
        width: 0,
        height: 0,
      },
      authVisible: false,
      checkAll: -1,
      checkUserGrups: [
        {
          text: '用户一',
          checked: false
        },
        {
          text: '用户一',
          checked: false
        },
        {
          text: '用户一',
          checked: false
        },
        {
          text: '用户一',
          checked: false
        },
        {
          text: '用户一',
          checked: false
        },
        {
          text: '用户一',
          checked: false
        },
        {
          text: '用户一',
          checked: false
        },
        {
          text: '用户一',
          checked: false
        },
        {
          text: '用户一',
          checked: false
        },
        {
          text: '用户一',
          checked: false
        },
        {
          text: '用户一',
          checked: false
        },
        {
          text: '用户一',
          checked: false
        },
        {
          text: '用户一',
          checked: false
        },
        {
          text: '用户一',
          checked: false
        },
        {
          text: '用户一',
          checked: false
        },
      ]
    }
  },
  computed: {
    styleTpl(){
      if(this.style == "横版"){
        return {
          height: '289px',
          width: '444px'
        }
      }
      return {}
    },
    styleUpload(){
      if(this.style == "竖版"){
        return {
          height: '264px',
          width: '170px'
        }

      }
      return {}
    }
  },
  methods: {
    handleRadio(value) {
      this.type = value
    },
    handleStyle(value) {
      this.style = value
    },
    handleStyle2(value){
      this.style2 = value;
    },
    handleAuth(value){
      this.auth = value;
      if(value == 2){
        this.authVisible = true;
      }
    },
    handleCheck(groups,item){
      let data = groups;
      if(item){
        if(item.checked){

          item.color = this.color;
          item.fontSize = this.fontSize;
          item.x = 0;
          item.y = 0;
          item.w = item.text.length*this.fontSize;
          item.h = parseInt(this.fontSize)+2;
          if(item.text == '二维码' || item.text == 'LOGO'){
            item.w = 39
            item.h = 39
          }
          data.push(item);
        }else{
          let index = data.indexOf(item);
          data.splice(index,1)
        }
      }
      if(this.UI && this.UI.length>0){
        this.UI = []
      }
      setTimeout(()=>{
        this.UI = data
      },20)

    },
    onDrag(x,y,width,height){
      this.options.x = x;
      this.options.y = y;
      this.options.width = width;
      this.options.height = height;
    },
    dragstop(item){
      item.x = this.options.x-0;
      item.y = this.options.y-0;
    },
    authBeforeClose(){

    },
    handleCheckAll(value){
      this.checkAll == value?this.checkAll = -1:this.checkAll = value;
    },
    getCheckedUser(users,item){
      let data = users || [];
      if(item.checked){
        data.push(item)
      }else{
        data.slice(users.indexOf(item),1);
      }

      console.log(data);

    },
    upload(){
      this.$refs.uploadImages.click();
    }
  },
  mounted() {
  },
  components: {
    PpyPath,
    PpyRadio,
    StepWrap,
    GroupCheck,
    vdr,
    DragWrap,
    PpyDialog
  },
  watch:{
    style(newStyle){
      this.UI = [];
      this.checks = [];
      if(this.style == '横版'){
        this.checks = checkGroups2
      }else{
        this.checks = checkGroups;
      }
      setTimeout(()=>{
        this.UI = this.checks.filter(ele=>{
          return ele.checked
        })
      },20)
    }
  }
}
