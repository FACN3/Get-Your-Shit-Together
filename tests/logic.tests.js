var test = require('tape');
var logic = require('../logic.js');
var newTodo={
  id:"",
  description:"hello",
  done: false;
};
var todoList = [{id:"", description:"li1", done: false;},{id:"", description:"li2", done: false;}];
test("tests for addTodo",function(t){
  var actual = logic.addTodo(todoList,newTodo);
  var expected = [{id:"", description:"li1", done: false;},{id:"", description:"li2", done: false;},{id:"",description:"hello",done: false;}];
  t.equal(actual,expected,"your new todo was not added");
  t.end();
});
