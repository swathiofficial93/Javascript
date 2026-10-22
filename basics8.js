const Person = require("./basics7");

//Oops concepts -Inheritence
class Pet extends Person{
get location()
{
    return 'USA';
}
constructor(firstname,lastname)
{
    super(firstname,lastname); // call parent class constructor, here using super keyword we have used the parent class first name and last name
// super. is used for call a method from parent class
}
}
let pet = new Pet("sam","san");
pet.fullname(); // this fullname is from parent class
console.log(pet.location); // here overriding the location

