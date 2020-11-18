const myApp = new Vue({


  el:("#root"),

  data:{
    newTodo:"",
    todoArray: [],
  },

  methods:{
    getInput: function(){
      //console.log(this.newTodo);
      this.todoArray.push(this.newTodo);
      //console.log(this.todoArray);
      this.newTodo="";

    },

    removeTodo: function(index,howMany){
      this.todoArray.splice(index,howMany)
    }
  }
})
