<template>
  <div class="login-left">
       <div class="left-lattice">
            <div v-for="item in menus"  class="lattice-content">
                <img :src="item.path" />
            </div>
       </div> 
  </div>
</template>
<script>
import  { mapGetters }  from 'vuex'
  export default {
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters([
        'menus',
      ])
    },
    methods: {},
    mounted() {
        
    },
     components:{
    }
  }
</script>
<style lang="scss">
  .login-left {
      .left-lattice {
        width: 535px;
        height: 440px;
        margin-left: -40px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-top: -44px;
          .lattice-content {
              margin:0;
              padding: 0;
              margin-top: -4px;
          }
      }
  }
  
</style>