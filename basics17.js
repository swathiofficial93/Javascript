//callback hell -This occures when multiple call back function are nested inside the one another
//making the code difficult to read, understand ,debugg and maintain
//It is also called pyramid of doom, because the code gradually moved towards the right as more call backs are nested.
function getUser(userId,callback)
{
    setTimeout(() => {
       const user = {
        id: userId,
        name: "Mini"
       } 
       console.log("1.user fetched");
       callback(user);
    }, 1000); //setting timeout 
}
function getOrders(userid,callback)
{
setTimeout(()=>{
const orders =
[{
  id:101,
  product :"laptop"  
},
{
    id:102,
    product:"mobile"
}];
console.log("2.Order fetched for users:",userid);
callback(orders);
}, 1000 )
}
function getOrderDetails(orderId,callback)
{
   setTimeout(()=>{
const details =
{
  orderId:orderId,
  product :"laptop",
  amount:5000  
}; 
console.log("3.Order details fetched");
callback(details);
   },1000 )
}
function makePayment(details,callback)
{
setTimeout(()=>
{
    const result=
   {
        orderId: details.orderId,
        amount: details.amount,
        status:"Success"

    };
    callback(result)
},1000 )
}
//callback hell
getUser(1,function(user)
{
    console.log(user);
    getOrders(user.id,function(orders)
    {
        console.log(orders);
        getOrderDetails(orders[0].id,function(details)//if it is in array we can take to put[0]
        {
            console.log(details);
            makePayment(details,function(result)
            {
                console.log("Payment Successful",result);
            })
        })
    })
})


