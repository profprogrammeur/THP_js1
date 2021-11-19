let nb = prompt("Combien d'étages veux-tu ?", 5);

function pyramid(nb) {
  let res = "";
  let i = 1;
  let j = 0;

  while (i <= nb) {
    j = 0;
    while (j < nb) {
      if (j < nb - i)
        res += " ";
      else
        res += "#";
      j++;
    }
    res += "\n";
    i++;
  }
  return res;
}

let res = pyramid(nb);

console.log(res);