const readline=require("readline-sync");
let number = parseInt(readline.question("Enter no to display Factors "));
let count = 2;
let primeArray=Array();
    while(1<number)
    {
        if(number % count == 0)
        {
            primeArray.push(count);
            
            
            number /= count;
        }
        else count++;
    }
    console.log( "Prime Factores are "+primeArray );