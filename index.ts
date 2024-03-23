import inquirer from "inquirer";
import chalk from "chalk";

let red = chalk.red.bold;
let blue = chalk.blue.bold.underline;

// Function to display ASCII Art of a car
function displayCarASCIIArt() {
    console.log(red( `
    DDDDDDD  EEEEE V       V  EEEEE  L      OOO   PPPP  EEEEE  DDDD       B B B  Y   Y  U   U  M   M  EEEEE RRRR  
    D     D  E      V     V   E      L     O   O  P   P E      D   D      B   B   Y Y   U   U  MM MM  E     R   R 
    D     D  EEE     V   V    EEE    L     O   O  PPPP  EEE    D    D     BBBB     Y    U   U  M M M  EEE   RRRR  
    D     D  E        V V     E      L     O   O  P     E      D   D      B   B    Y    U   U  M   M  E     R  R  
    DDDDDDD  EEEEE     V      EEEEE  LLLLL  OOO   P     EEEEE  DDDD       BBBBB    Y     UUU   M   M  EEEEE R   R 
    `));
    
}

console.log(red("Welcome to Calculator\n"));

// Display the car ASCII art at the start
displayCarASCIIArt();

// The calculator loop
while(true) {
    let FirtNumber =  await inquirer.prompt([
   {
       type: "number",
       name: "number",
       message: blue("Enter First Number?"),
   },
   ]);


   let Operand =  await inquirer.prompt([
       {
           type:"list",
           name: "operand",
            choices: ["+","-","*","/"],
           message: blue("Enter any one  Operand (+,-,*,/)?"),
       },
       ]);


       
let SecondNumber =  await inquirer.prompt([
   {
       type: "number",
       name: "number2",
       message: blue("Enter Second Number?"),
   },
   ]);

   let result = 0;

 if(Operand.operand == "+"){
   result = FirtNumber.number + SecondNumber.number2;
   console.log(`Result of  ${FirtNumber.number} + ${SecondNumber.number2} =  ${result}`);
   }
   else if(Operand.operand == "-"){
       result = FirtNumber.number - SecondNumber.number2;
       console.log(`Result of  ${FirtNumber.number} - ${SecondNumber.number2} =  ${result}`);
   }
   else if(Operand.operand == "*"){
       result = FirtNumber.number * SecondNumber.number2;
       console.log(`Result of  ${FirtNumber.number} * ${SecondNumber.number2} =  ${result}`);
   }
   else if(Operand.operand == "/"){
           
       if(SecondNumber.number2 == 0){
           console.log("Invalid Operand 0 is not allowed in division");
       }else{
           let result = FirtNumber.number / SecondNumber.number2;
           console.log(`Result of  ${FirtNumber.number} / ${SecondNumber.number2} =  ${result}`);
       }

   }
   else{
       console.log("Invalid Operand");
   }

   let answer = await inquirer.prompt([
       {
           type: "confirm",
           name: "answer",
           message: "Do you want to continue (yes/no)?",
       },
       ]);

       if(answer.answer == false){
        console.log("Thank you for using the calculator");
           break;
       }
       else if(answer.answer ==true){
           continue;
       }
       else{
           console.log("Invalid Answer");
           break;
       }

}
