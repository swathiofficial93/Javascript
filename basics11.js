 //Oops concepts- Encapsulation -Keeps the data or variable protected and provide bundles of data and controled ways to access it
//means inside the class if we declare a variable ecapsulated, it will be only accessible inside that class.
class BankAccount
{
    #balance =0;// this variable is accessible to only this class
    deposit (amount)
    {
        if(amount>0)
        {
            this.#balance += amount;
        }
    }
    getBalance()
    {
    return this.#balance;
    }
}
const account = new BankAccount();
account.deposit(5000);
console.log(account.getBalance()); // This is an example of controlled access 

//Encapsulation means protect or bundles data and controls access
//Abstraction hides complex implementation details
//Inhertence allows one class to inherit from others
//Polymorphism allows same method or interface can have different behavior