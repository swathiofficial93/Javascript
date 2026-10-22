//call back - It is in JS is a function pass as asn argument to another function,
//so that it can be executed later

//example
function greet(name) //here greet is the call back method/function
{
    console.log("hello "+name);
}
function processUser(callback)
{
    console.log("hi user");
    let name="mini";
    callback(name);
}
processUser(greet);

//callback using anonymous function
function calculate(a,b,callback)
{
let result = a+b;
callback(result);
}
calculate(10,20,function(result)
{
console.log("sum is " +result);
})
