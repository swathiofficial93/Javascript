//Promises - It is an object that represents the eventual success or failure of an asynchronous operation
// States of Promise
/*1. new Promise() creates a Promise object.
2. resolve() indicates that the operation succeeded.
3. reject() indicates that the operation failed.
4. .then() handles the successful result.
5. .catch() handles the rejected result.
*/

//Simple example -promise
const myPromise=new Promise((resolve, reject)=>
{
    let success = true;
    if(success)
    {
        resolve("operation successful");
    }
    else
    {
        reject("operation failed");
    }
})
console.log(myPromise);

//How to consume a promise using then and catch-running a promise
const promise=new Promise((resolve,reject)=>
{
    let success = true;// here we put false then the oupput will be "unable to receive data".
    if(success)
    {
        resolve("data received successfully");
    }
    else
    {
        reject("unable to receive data");
    }
}
)
.then((result)=>
{
    console.log(result);
})
.catch((error)=> 
{ 
    console.log(error);
})
//callback hell program using promises- promise chaining
function getUser(id)
{
    return Promise.resolve({
        id:id,
        name:"Mini"
    })
}
function getOrders(userId)
{
     return Promise.resolve([{
        id:101,
        product:"laptop"
    }])
}
function getOrderDetails(orderId)
{
     return Promise.resolve(
        {
        orderId:orderId,
        amount:5000
    }
)
}
function makePayment(details)
{
     return Promise.resolve(
        {
        amount:details.amount,
        status:"Success"
    }
)
}
getUser(1)
    .then((user)=>{
        console.log("User:", user);
        return getOrders(user.id);
    })
    .then((orders)=>{
        console.log("Orders:",orders);
        return getOrderDetails(orders[0].id);
    })
     .then((details)=>{
        console.log("Details:",details);
        return makePayment(details);
    })
    .then((result)=>{
        console.log("Payment:",result);
    })
    .catch((error)=>{
        console.log("Error:", error);
    })
