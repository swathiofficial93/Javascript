//Hoisting in JS is a behavior where JS processes variabale and function declarations before executing the code
//Hoisting with var
const a = 10; // Here out put will be 10
console.log(a);// 'a' will be declared here in case of var
//var a =10;// assignation with this line only but declaration will be happening , so output will be undefined
//let a =10; //output : Cannot access 'a' before initialization
//const a =10; //output : Cannot access 'a' before initialization
// A function decalre using the function declaration syntax can be called before function declaration

//example -Function declaration
//here output will get
greet();
function greet()
{
    console.log("hello");
}
//Hoisting with function expression
//here the output will be undefined
greet1();
var greet1 = function()
{
    console.log("hello");
}


