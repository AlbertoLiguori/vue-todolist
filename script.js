const myApp = new Vue({


  el:("#root"),

    data:{

      inputText:"",

      todoArray:[],
    },

    methods:{

      addTodo: function(){

        let todoObject = {
          todoText:this.inputText,
          backgroundColor:"blue",
        };

        this.todoArray.push(todoObject);
        console.log(todoObject.todoText);
        console.log(this.todoArray);

        this.inputText = "";
      },

      removeTodo: function(index,howMany){
          this.todoArray.splice(index,howMany);
      },

      changeColor: function(index){
        if (this.todoArray[index].backgroundColor == "blue"){
          this.todoArray[index].backgroundColor = "coral"
        }else{
          this.todoArray[index].backgroundColor = "blue"
        };
      },



    }



})


// data:{
//   newTodo: "",
//   todoArray: [],
//   actualColor: "blue",
//   colorRed: "coral",
//
// },
//
// methods:{
//
//   getInput: function(){
//
//     this.todoArray.push(this.newTodo);
//     this.newTodo = "";
//   },
//
//   removeTodo: function(index,howMany){
//     this.todoArray.splice(index,howMany);
//   },
//
//   changeColor: function(){
//     if (this.actualColor == "blue"){
//       this.actualColor = this.colorRed
//     }else{
//       this.actualColor = "blue"
//     };
//   },
// },
