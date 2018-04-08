<!--  -->
<template>
  <div class='home-container'>
    <component :is='currentRole'></component>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import adminHome from './admin'
import editorHome from './editor'
export default {
  name:'home',
  components:{adminHome,editorHome},
  data () {
    return {
      currentRole:'adminHome'
    };
  },
  computed:{
    ...mapGetters(
      ['roles']
    )
  },
  created(){
    if(!this.roles.includes('admin')){
      this.currentRole='editorHome'
    }
  }
}

</script>
<style lang='css' scoped>
.home-container{
  
}
</style>