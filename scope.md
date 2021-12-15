FUNCTIONS ARE OBJECTS IN JAVASCRIPT
FIRST CLASS FUNCTION => MEAN CREATE A FUNCTION AND ASSIGN IT TO A VARIABLE
SCOPE HEIREACHY
CHILD CAN ACCESS PARENT SCOPE BUT ITS VICE VERSA DEPENDS

JAVASCRIPT DO SCOPE ON FUNCTION LEVEL NOT BLOCK LEVEL

All about creating new scope

Compiler and Interpreter

fnA()

function fnA(){
  console.log("papa")
}

fnA

var fnA = function(){
  console.log("papa")
}

console.log("pap")

"use strict"
