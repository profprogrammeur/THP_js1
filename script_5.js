//Bibliothéquaire

const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Est-ce que tous les livres ont été au moins empruntés une fois ?
function rent(elem) {
  return elem.rented >= 1;
}
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ? : " +
  (books.every(rent)));

console.log("Quel est livre le plus emprunté ?")
renteds = []
books.forEach(book => renteds.push(book.rented))
console.log(books[renteds.indexOf(Math.max(...renteds))].title)

//Est-ce que tous les livres ont été au moins empruntés une fois ?
console.log("Quel est livre le moins emprunté ?")
renteds = []
books.forEach(book => renteds.push(book.rented))
console.log(books[renteds.indexOf(Math.min(...renteds))].title)

//Trouve le livre avec l'ID: 873495
ids = []  // array des id
books.forEach(book => ids.push(book.id))
// console.log(ids)
// console.log('index : ', ids.indexOf(873495))   // ids.indexOf(873495) = 2
console.log("livre avec l'ID: 873495", books[ids.indexOf(873495)].title) // books[2].title

// Supprime le livre avec l'ID: 133712 ;
console.log("livre à supprimer : ", books.splice([ids.indexOf(133712)], 1))
console.log("array réduit: ", books)

//tri livre restant
console.log("Tri livres restants :")

let titles = []

books.forEach(book => { titles.push(book.title) });

for (let index in titles.sort()) {
  console.log(`${titles[index]}`);}
