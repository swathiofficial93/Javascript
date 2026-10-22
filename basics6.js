//Java Script Objects, Object is a collection of property
//Object creation
let person = {
    firstname:'Tim',
    lastname:'joe',
    age: 24,
    fullname: function()
    {
        console.log(this.firstname+ " " + this.lastname);
    }
}
person.fullname();
console.log(person.lastname);
console.log(person['lastname']);
console.log(person.firstname);
person.firstname = "Tim Dain"; //name changed ouside the object
console.log(person.firstname);
// Adding new property to the object
person.gender = " male";
console.log(person);
console.log('gender' in person); // search or check gender attribute in the array person
delete person.gender;// delete an attribute from object
console.log(person);
console.log('gender' in person);// output will be false
for(let key in person)
{
    console.log(person[key]); // print all elements in object one by one
}



