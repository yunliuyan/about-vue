<template>
  <vue-scroll :ops="opt">
    <div id="app"  @click.capture="toggleWork">

      <router-view/>
    </div>
  </vue-scroll>
</template>

<script>
  import {mapGetters,mapMutations} from 'vuex'
  import scroll from './config/scrool'
export default {
  name: 'App',
  computed:{
    ...mapGetters(['showwork'])
  },
  data(){
    return {
      opt: scroll
    }
  },
  methods: {
    ...mapMutations({
      toggle: 'SET_SHOW_WORK'
    }),
    toggleWork(){
      if(this.showwork){
        this.toggle(false);
      }
    }
  },
}
</script>

<style>
</style>
