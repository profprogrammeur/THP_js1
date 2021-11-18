let num = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
function pyramid(n) {
  let result = 1;
  for (let i = 1; i <= n
    ; i++) {
    result = result * i
    console.log("#")
  }
  return result
}
console.log("resultat : " + pyramid(num))