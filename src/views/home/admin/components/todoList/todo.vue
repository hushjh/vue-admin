<!--  -->
<template>
  <div class='view'>
    <input type="checkbox" class='toggle'>
    <label for="" v-text='todo.text'></label>
    <button class='destory'></button>
  </div>
</template>

<script>

export default {
  props:{
    todo:{
      type:Object,
      default:null
    }
  },
  data () {
    return {
     
    };
  }
}

</script>
<style lang='css' scoped>
</style>