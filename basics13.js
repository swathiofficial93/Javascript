//scope chain - It is a mechanism to find a variable when it is accessed inside a function or block.
let a =10;
let x =10;
function outer()
{
    let b =20;
   // let x=20;

    function inner()
    {
        let c = 30;
        //let x=30;
        console.log(a);//global scope
        console.log(b);//outerscope
        console.log(c);//inner scope
        //console.log(d);// it is not inner outer or global, so output will be ReferenceError: d is not defined
        console.log(x);//this will print inner first if it is  ot there, outer scope x, will not go for global if it is in outer
    }
    inner();
}
outer();
