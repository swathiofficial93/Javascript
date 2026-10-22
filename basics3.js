//Array declaration
var marks = Array(6); // empy array
var marks = new Array(20,40,35,10,27,100); // array with values
var marks = [20,40,35,10,27,100];//array with values
console.log(marks[2]);
marks[3] = 14;
console.log(marks);
console.log(marks.length);
marks.push(65); // add an element from the end
console.log(marks);
marks.pop(65); //remove an element from the end
console.log(marks);
marks.unshift(12);// add an element from beginning
console.log(marks);
marks.shift(); // delete an element from the beginning
console.log(marks);
marks.splice(2,0,18); // here 2nd position , 18 will be added. if we don't put 0 it will delete already existing 2nd element and add new one.
console.log(marks);
console.log(marks.indexOf(100));// to find the Index
console.log(marks.includes(120)); // Search an element in an array
let submarks = marks.slice(2,6);// gives a sub array from specific position to n-1 position(last position will not take)
console.log(submarks);
//sum of thr elements in an array
var sum = 0;
for(let i = 0;i<marks.length;i++)
{
    console.log(marks[i]);
    sum = sum + marks[i];
}
console.log("sum = " + sum);
// reduce method - sum of the elements using 
let total = marks.reduce((sum,m)=>sum+m,0); // sum is the function to do, mark is the each element in the marks array,0 is the initial value
console.log(total);
//reduce method- Find average
let average = marks.reduce((avg,mark)=>avg+mark/marks.length,0);
console.log(average);
//storing data based on some conditions
let evenscores = [];
let scores = [12,13,14,16];
for(let i=0;i<scores.length;i++)
{
    if(scores[i]%2==0){
        evenscores.push(scores[i]);
    }

}
console.log(evenscores);
//Filtering data based on some conditions
let newfilterevenscores = scores.filter(score=>score%2==0);//score is each element of scores.
console.log(newfilterevenscores);
// map based on some value
let mappedarray = newfilterevenscores.map(score=>score*3); //score is eaxh element of newfilterevenscores array
console.log(mappedarray);
// sum of mappedarray
let totalvalue = mappedarray.reduce((sum,val)=>sum+val,0);
console.log(totalvalue);
// All methods in one
var scores1 = [12,13,14,16];
let sumvalue = scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val)=>sum+val,0);
console.log(sumvalue);
// string arrays
let fruits = ["banana","mango","guava","apple"];// always use all lower case, or first letter upper. because ASCII code is different for lower and upper
console.log(fruits.sort());
console.log(fruits.reverse());
let scores2 = [12,3,19,16,14];
console.log(scores2.sort());
console.log(scores2.sort((a,b)=>a-b));//ascending order
console.log(scores2.sort((a,b)=>b-a));//descending order
