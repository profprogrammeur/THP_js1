const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];



// nés dans année 70
function isSeventy(el) {
  if (el.year >= 1970 && el.year < 1980)
 return el.year
}
const seventy = entrepreneurs.filter(isSeventy);
console.log("nés dans les années 70 : ", seventy );



// Nom et prénom
const firstLast = entrepreneurs.map(x => x.first + " " + x.last)
console.log(firstLast);

//age inventeur
const ageToday = entrepreneurs.map(x => x.first + " " + x.last + " aurait " + (age = 2021 - x.year) + " ans aujourd'hui ")
console.log("ageToday : ", ageToday);


//ordre
const ordre = entrepreneurs.sort(function (a, b) {
  let lastA = a.last.toUpperCase(); // ignore upper and lowercase
  let lastB = b.last.toUpperCase(); // ignore upper and lowercase
  if (lastA < lastB) {
    return -1;
  }
  if (lastA > lastB) {
    return 1;
  }

  // names must be equal
  return 0;
});
console.log(ordre)


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
console.log("livre avec l'ID: 873495",books[ids.indexOf(873495)].title) // books[2].title

// Supprime le livre avec l'ID: 133712 ;
console.log("livre à supprimer : ",books.splice([ids.indexOf(133712)], 1))
console.log("array réduit: ",books)

