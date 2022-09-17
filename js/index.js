// Iteration 1: Names and Input
let hacker1 = "rian";
console.log(`The driver's name is ${hacker1}.`);
let hacker2 = "alex";
console.log(`The driver's name is ${hacker2}.`);
// Iteration 2: Conditionals
if (hacker1.length>hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length<hacker2.length) {
    console.log(`It seemes that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {
    console.log(`Wow, your both have equally long names, ${hacker1.length} characters.`);
}
// Iteration 3: Loops
let UpperedCase = "";
for (let i=0; i<hacker1.length; i++){
    UpperedCase += hacker1[i].toUpperCase() + " ";
}
console.log(UpperedCase);

let reverseName ="";
for (let j = hacker1.length-1; j>=0; j--){
    reverseName += hacker1[j]; 
}
console.log(reverseName);

if (("hacker1".localeCompare("hacker2"))=== 1) {
    console.log("The driver's name goes first.");
}
else if (("hacker1".localeCompare("hacker2"))=== -1){
    console.log("Yo, the navigator goes first definitely.");
}
else {console.log("What?! You both have the same name?")};

    