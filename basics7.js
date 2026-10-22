//Classes
module.exports= class Person //class decalaration, class exported from here to basics8.js
{
age = 25;
get location() // get function or method
{ 
    return 'canada';
}
constructor(firstname,lastname)// constructor creation, here this used so we can use these variable entire class.
{
    this.firstname=firstname;
    this.lastname=lastname;
}
fullname()// function decalartion or method
{
    console.log(this.firstname +" " + this.lastname);
}
}
/*let person = new Person();//object creation
//Default constructor
console.log(person.age);
console.log(person.location);//called get function
//parameterised constructor
let person1=new Person("Tim","Joseph");
person1.fullname();
let person2=new Person("Chris", "johns");
person2.fullname();*/

