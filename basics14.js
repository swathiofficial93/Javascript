//closure - A closure in js is created when an inner function remembers and can access the variables from an outer function's scope even after the outr function has finished its execution.

function outer()
{
    let message = "hello";
    function inner()
    {
        console.log(message);
    }
    return inner;
}
const result = outer() //closure has been created, here result is also a function like function with declaration
result(); 

//Another example

function bankAccount()
{
    let balance = 1000;

return{
    deposit(amount)
    {
        balance +=amount;
        return balance;
    },
    getBalance()
    {
        return balance;
    }
}
}
const account = bankAccount();
console.log(account.getBalance());
console.log(account.deposit(500));
console.log(account.balance);//here balance can't access directly through account.
//balance, it can be accessed only through methods.
//Beacuse they form closures over the outer function's scope.

