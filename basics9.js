//Oops concepts -Polymorphism
class Animal{
    speak()
    {
        console.log("Animal makes sound");
    }
}
class Dog extends Animal{
    speak()
    {
        console.log("Dog barks");
    }
}
class Cat extends Animal{
    speak()
    {
        console.log("Cat meows");
    }
}
const animals = [new Dog(),new Cat(),new Animal()]; //Array of objects
animals.forEach(animal=>animal.speak());

//Another Example -polymorphism
class Car {
    move(){
        console.log("car is being driven");   
    }
}
class Bird{
    move(){
        console.log("bird is flying");
    }
}
function startMoving(vehicle){
    vehicle.move();
}
startMoving(new Car());
startMoving(new Bird());

