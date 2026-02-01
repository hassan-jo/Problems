const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);


const numberOfProblems = Number(input[0]);
const agreeWithProblems = [] ;
for (let i = 1 ; i < input.length ; i++)
{
    agreeWithProblems.push(Number(input[i]))
}
    let counter = 0 ; 
for (let i = 0 ; i < numberOfProblems ; i++)
{
        let index = i*3 ;

        if (agreeWithProblems[index] + agreeWithProblems[index+1] + agreeWithProblems[index+2] >= 2)
        {
            counter++
        }

}

console.log(counter)
