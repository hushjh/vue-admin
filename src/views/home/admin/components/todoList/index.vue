<!--  -->
<template>
  <section class='todoapp'>
      <header class='header'>
          <input class='new-todo' autocomplete="off" placeholder="Todo List" @keyup.enter="addTodo">
      </header>
      <section class='main'>
          <input type='checkbox' id='toggle-all' class='toggle-all' :checked='allChecked'>
          <label for='toggle-all'></label>
      </section>
      <footer class='footer'></footer>
  </section>
</template>

<script>
export default {
    data () {
        return {
        };
    },
    methods:{
        addTodo(){}
    }
}

</script>
<style lang='scss' >
@import './index.scss'
</style>