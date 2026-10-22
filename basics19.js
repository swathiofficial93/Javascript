//async/await
function getData(){
    return new Promise((resolve,reject)=>{
        resolve("Data received successfully");
    })
}
async function displayData() {
    const result = await getData();//here returning a promise
    console.log(result);
}
displayData();

//Timeout
function getUser(){
return new Promise((resolve)=>{
    setTimeout(()=>{
        resolve({
            id:1,
            name:"mini"
        },2000)
    })
})
}
async function displayUser(){
    console.log("Fetching user");
    const user=await getUser();
    console.log("User received",user);
}
displayUser();
console.log("Other code continues");

//Multiple Asynchronous operation

function getUsers(id)
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
async function processOrder() {
    try {
        const user = await getUsers(1);
        console.log("User:", user);

        const orders = await getOrders(user.id);
        console.log("Orders:", orders);

        const details = await getOrderDetails(orders[0].id);
        console.log("Order Details:", details);

        const payment = await makePayment(details);
        console.log("Payment:", payment);

    } catch (error) {
        console.log("Error:", error);
    }
}

processOrder();