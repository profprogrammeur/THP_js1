let num = prompt("De quel nombre veux-tu calculer la factorielle ?");
function factorielle(n){
  let result = 1;
  for (let i=1; i<=n
    ; i++) {
    result=result*i
    console.log(result)
  }
  return result
}
console.log("resultat : " + factorielle(num))
