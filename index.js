let input = "Te quiero Daniel";
//let arrInput = [...input];
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];



//console.log(arrInput);

for(let i = 0; i < input.length; i++){
  if(input[i] === "e" || input[i] === "u") {
    resultArray.push(input[i])
  } 
    
  for( let j = 0; j < vowels.length; j++){
    if(input[i]===vowels[j]){
      resultArray.push(vowels[j]);
    }
  }
}

let resultString = resultArray.toString().toUpperCase().split(',').join('');
console.log(`La traducción de ${input} a cetáseo es ${resultString}`);
