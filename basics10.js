//Oops concepts - Abstraction(Internal implementation will be hidden)
class Car{
    start(){
        this.#checkEngine();
        this.#injectFuel();
        console.log("car started");
    }
    #checkEngine(){
        console.log("checking engine");
    }
    #injectFuel(){
        console.log("injecting fuel");
    }
}
const car = new Car();
car.start();

//Another example of abstraction
 
class Atm{
    withdraw(amount)
    {
        this.#verifyPin();
        this.#checkBalance();
        this.#dispenseCash(amount);
    }
    #verifyPin()
    {
        console.log("Pin Verified");
    }
    #checkBalance()
    {
        console.log("Balance Checked");
    }
    #dispenseCash(amount)
    {
        console.log(`dispensing ${amount} rupees `);//here used backticks for dispensing amount
    }
   
}
    const atm = new Atm();
    atm.withdraw(5000);

   