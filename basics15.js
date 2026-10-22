//This keyword- Inside an object
const student = {
    Name:"Arun",
    Age:21,
    display:function()
    {
    console.log(this.Name);
    console.log(this.Age);
    }
}
student.display();

// This inside a constructor function

function Employee(name,salary)
{
this.name=name; // here this referes to the newly created object
this.salary=salary;
}
const emp1=new Employee("Anu",40000);
const emp2=new Employee("Ravi",50000);
console.log(emp1.name);
console.log(emp2.salary);

//This inside a class
//This inside a method refers to the instance when the method is called.
class Student
{
constructor(name)
{
    this.name=name;
}
display()
{
    console.log(this.name);
}
}
const s1= new Student("Anu");
s1.display(); 