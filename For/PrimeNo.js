const readline = require("readline-sync");
let n = parseInt(readline.question("Enter the prime number :- "))
let count=0;
for (let i = 1;i <= n;i++){
    if (n % i == 0){
        count = count + 1;      
    }
}
if(count == 2){
    console.log(n," is a Prime Number");
}
else{
    console.log(n," is not a prime number");
}