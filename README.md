# Get-Your-Shit-Together :pencil2:

This repository  contains the source files code for a simple Javascript todo app, we are going to discuss some of the technologies used in the project. Also consider that this app depends completely on the client side.

 https://facn3.github.io/Get-Your-Shit-Together/
 
 
##  Project Files   :open_file_folder:

 1. [index.html](https://github.com/FACN3/Get-Your-Shit-Together/blob/master/index.html): Main the only html file which has the main html elements.
 1. [dom.js](https://github.com/FACN3/Get-Your-Shit-Together/blob/master/dom.js): this files is responsible to handle everything related to user interface like rendering and the submit form.    
 1. [logic.js](https://github.com/FACN3/Get-Your-Shit-Together/blob/master/logic.js): Contains the main functions that controls the logic flow of the app.
 1. [/tests/logic.tests.js](https://github.com/FACN3/Get-Your-Shit-Together/blob/master/tests/logic.tests.js): This files contains a couples of tests that for the functions that is written in the [logic.js](https://github.com/FACN3/Get-Your-Shit-Together/blob/master/logic.js), these tests is written using the npm pacakage [tape](https://www.npmjs.com/package/tape).
 1. [style.css](https://github.com/FACN3/Get-Your-Shit-Together/blob/master/style.css): Contains the css styles.

## Contributers :octocat:


  1. [Mynah Marie](https://github.com/MynahMarie)       :musical_note:
  1. [Hassan Saad](https://github.com/ghassanmas)       :sunglasses:
  1. [Ghassan Maslamani](https://github.com/hasansaad1) :alien:


## Testing Strategy: :white_check_mark:


  As we have mentioned before we have used the [tape](https://www.npmjs.com/package/tape) library to tests the logic functions, one of the challenges we faced was about how to test if an array of objects equals other array of objects we found that this could be done using ''deepEqual'' as shown below:
  ```javascript
test("tests for addTodo",function(t){

  var actual = logic.addTodo([],newTodo);
  var expected = [{"id":1,"description":"hello","done": false}];
  t.deepEqual(actual,expected,"your new todo was added to an empty array");
  t.end();
});
```
[Check here in the logic.tests.js file](https://github.com/FACN3/Get-Your-Shit-Together/blob/master/tests/logic.tests.js#L9-L15)


## Coding Shortcuts :turtle:

  We used a code shortcuts while coding for the project one of them is using the [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator). check the following example:

  ```javascript
  todo.done ? input.checked = true : input.checked = false;
```
Which is equivalent to:

```javascript
if(todo.done){
  input.checked=true;
}else{
  input.checked=false;
}
```
[show in the mode.js file](https://github.com/FACN3/Get-Your-Shit-Together/blob/master/dom.js#L30-L35)
