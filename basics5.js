//String functions
let day = "Tuesdaysmagic";
//length
console.log(day.length);
//slice method
let subday = day.slice(0,4);
console.log(subday);
console.log(day[1]);
//split method, here string split with "s"
let splitday = day.split("s");
console.log(splitday[0]);
console.log(splitday[1]);
console.log(splitday[2]);
//date function, using string in calculations
let date = '23'; // if it is in single quote, java script treat it as string
let nextdate ='27';
let differece = parseInt(nextdate)-parseInt(date);
console.log(differece);
//find index using index method
day = "Tuesday";
let newquote = day+ " is funday";
console.log(newquote);
let val = newquote.indexOf("day"); // d's index from Tuesday
console.log(val);
let count = 0;
let value = newquote.indexOf("day",5);// the searching again starts with 5th position
console.log(value);
while(val!==-1) //if there is no value, initial value of val = 4, first check 4 == -1, yes so count ++
{
    count ++;
    val = newquote.indexOf("day",val+1);// return -1 when there is no day
}
console.log(val);
console.log(count);


