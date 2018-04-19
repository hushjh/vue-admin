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
      <ul class='todo-list'>
          <todo v-for='(todo,index) in filtersTodo' :key='index' :todo='todo' ></todo>
      </ul>
      <footer class='footer'></footer>
  </section>
</template>

<script>
import todo from './todo.vue'

const filters={
  all:todos=>todos,
  active:todos=>todos.filter(todo=>!todo.done),
  completed:todos=>todos.filter(todo=>todo.done)
}
const defaultList = [
  { text: 'star this repository', done: false },
  { text: 'fork this repository', done: false },
  { text: 'follow author', done: false },
  { text: 'vue-element-admin', done: true },
  { text: 'vue', done: true },
  { text: 'element-ui', done: true },
  { text: 'axios', done: true },
  { text: 'webpack', done: true }
]
export default {
    components:{
        todo
    },
    data () {
        return {
            visibility:'all',
            filters,
            todos:defaultList
        };
    },
    computed:{
        allChecked(){
            return this.todos.every((todo)=>todo.done)
        },
        filtersTodo(){
            return filters[this.visibility](this.todos)
        }
    },
    methods:{
        addTodo(){}
    }
}

</script>
<style lang='scss' >
@import './index.scss';
.todoapp{
    background-color:#fff;
    color: #4d4d4d;
    font-weight: 300;
    line-height:1.4em;
    min-width:230px;
    max-width:550px;
    position:relative;
    .header{
        .new-todo{
            padding:10px 16px 16px 60px;
            font-size:18px;
            width:100%;
            box-sizing: border-box;
            border:none;
            outline: none;
            box-shadow: inset 0px -2px 1px rgba(0,0,0,.05);
            line-height:1.4em;
        }
    }
    .main{
        position:relative;
        border:1px solid #e6e6e6;
        .toggle-all{
            position: absolute;
            opacity: 0;
            & + label{
                position: absolute;
                transform:rotate(90deg);
                width:60px;
                height:34px;
                top:-52px;
                left:-13px;
                font-weight: 700;
                &:before{
                    content:'>';
                    font-size:22px;
                    color:#e6e6e6;
                    padding:10px 27px 10px 27px;
                }
            }
        }
    }
}
</style>