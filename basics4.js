//functions
function add (a,b)
{
    return a+b;
}
let sum = add (2,3);
console.log(sum);
//Anonymous method without function name
let sumofintegers = function(c,d) //here function has no name 
{
    return c+d;
}
console.log(sumofintegers(2,3));// function assigned to a variable
// Anonymous method with arrow function
let sumofnumbers = (c,d)=>c+d;
console.log(sumofnumbers(2,3));

