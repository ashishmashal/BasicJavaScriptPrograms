const readline = require("readline-sync");

let number_1 = parseInt(readline.question("Enter your number 1: "));
let number_2 = parseInt(readline.question("Enter your number 2 : "));
let number_3 = parseInt(readline.question("Enter your number 3: "));
let number_4 = parseInt(readline.question("Enter your number 4: "));
let number_5 = parseInt(readline.question("Enter your number 5: "));
console.log(number_1,number_2,number_3,number_4,number_5);
if(number_1>number_2 && number_1>number_3 && number_1>number_4 && number_1>number_5)
{
    console.log(number_1 ,"Is Greater Than All");
}
else if(number_2>number_1 && number_2>number_3 && number_2>number_4 && number_2>number_5)
{
    console.log(number_2 ,"Is Greater Than All");
}
else if(number_3>number_1 && number_3>number_2 && number_3>number_4 && number_3>number_5)
{
    console.log(number_3 ,"Is Greater Than All");
}
else if(number_4>number_1 && number_4>number_2 && number_4>number_3 && number_4>number_5)
{
    console.log(number_4 ,"Is Greater Than All");
}
else 
{
    console.log(number_5 ,"Is Greater Than All");
}

if(number_1<number_2 && number_1<number_3 && number_1<number_4 && number_1<number_5)
{
    console.log(number_1 ,"Is Less Than All");
}
else if(number_2<number_1 && number_2<number_3 && number_2<number_4 && number_2<number_5)
{
    console.log(number_2 ,"Is Less Than All");
}
else if(number_3<number_1 && number_3<number_2 && number_3<number_4 && number_3<number_5)
{
    console.log(number_3 ,"Is Less Than All");
}
else if(number_4<number_1 && number_4<number_2 && number_4<number_3 && number_4<number_5)
{
    console.log(number_4 ,"Is Less Than All");
}
else 
{
    console.log(number_5 ,"Is Greater Than All");
}