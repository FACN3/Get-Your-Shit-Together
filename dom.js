// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [
  //  { id: -3, description: 'first todo' },
  //  { id: -2, description: 'second todo' },
  //  { id: -1, description: 'third todo' },
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    // you will need to use addEventListener
    // Add markTodo button
    var input=document.createElement("INPUT");
        input.setAttribute("type","checkbox");
        todoNode.appendChild(input);
        input.addEventListener('click',function(event){

          var newState = todoFunctions.markTodo(state,todo.id);
        //  update(newState);
          console.log(newState);

        });
     //if(todo.done){
    //   input.checked=true;
    // }else{
    //   input.checked=false;
    // }
    todo.done ? input.checked = true : input.checked = false;
    // add span holding description
      var span = document.createElement("span");
      span.textContent = todo.description;
      todoNode.appendChild(span);

    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    var deleteButtonImg = document.createElement('IMG');
    deleteButtonImg.setAttribute("src", "images/trashRed.png");
    deleteButtonImg.setAttribute("width", "100%");
    deleteButtonImg.setAttribute("height", "100%");
    deleteButtonImg.setAttribute("alt", "delete icon");
    deleteButtonNode.appendChild(deleteButtonImg);
    todoNode.appendChild(deleteButtonNode);

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
      event.preventDefault();
      var description = document.getElementById("add-todo")[0].value; // event.target ....
      var priority = document.getElementById("priority").value;
      var newTodo = {"description": description , done: false, "priority": priority};
      // hint: todoFunctions.addTodo

      var newState = todoFunctions.addTodo(state, newTodo);
      newState = todoFunctions.sortTodos(newState, function(a,b) {
        return a.priority -  b.priority;
      });
      document.getElementById("add-todo")[0].value = "";
      update(newState);
      console.log(newState);
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
