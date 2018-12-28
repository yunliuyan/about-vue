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

  export default {
    data() {
      return {
        menus: [
          {
            path: require('@/assets/image/Login/lattice1.png'),
          },
          {
            path: require('@/assets/image/Login/lattice2.png'),
          },
          {
            path: require('@/assets/image/Login/lattice3.png'),
          },
          {
            path: require('@/assets/image/Login/lattice4.png'),
          },
          {
            path: require('@/assets/image/Login/lattice5.png'),
          },
          {
            path: require('@/assets/image/Login/lattice6.png'),
          },
          {
            path: require('@/assets/image/Login/lattice7.png'),
          },
          {
            path: require('@/assets/image/Login/lattice8.png'),
          },
          {
            path: require('@/assets/image/Login/lattice9.png'),
          },
        ]
      }
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