var test = require('tape');
var logic = require('../logic.js');
var newTodo={
  "id":"",
  "description":"hello",
  "done": false
};

test("tests for addTodo",function(t){

  var actual = logic.addTodo([],newTodo);
  var expected = [{"id":1,"description":"hello","done": false}];
  t.deepEqual(actual,expected,"your new todo was added to an empty array");
  t.end();
});


var todoList = [{"id":1, "description":"li1", "done": false},{"id":2, "description":"li2", "done": false}];
test("tests for addTodo",function(t){

 logic.generateId();
  var actual = logic.addTodo(todoList,newTodo);
  var expected = [{"id":1, "description":"li1", "done": false},{"id":2, "description":"li2", "done": false},{"id":3,"description":"hello","done": false}];
  t.deepEqual(actual,expected,"your new todo was added to an existing array");
  t.end();
});
test("test for deleting in deleteTodo",function(t){
  var array =[{"id":1, "description":"li1", "done": false},{"id":2, "description":"li2", "done": false},{"id":3,"description":"hello","done": false}];
  var actual = logic.deleteTodo(array,2);
  var expected = [{"id":1, "description":"li1", "done": false},{"id":3,"description":"hello","done": false}];
  t.deepEqual(actual,expected,"your todo was deleted from the an existing array");
  t.end();
});
test("test for deleting in deleteTodo",function(t){
  var array =[{"id":1, "description":"li1", "done": false},{"id":2, "description":"li2", "done": false},{"id":3,"description":"hello","done": false}];
  var actual = logic.deleteTodo(array,2);
  var expected = [{"id":1, "description":"li1", "done": false},{"id":3,"description":"hello","done": false}];
  t.notEqual(actual,expected,"your todo was deleted from the an existing array");
  t.end();
});
