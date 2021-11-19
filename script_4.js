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
console.log("Noms et prénoms entrepreneurs :")
const firstLast = entrepreneurs.map(x => x.first + " " + x.last)
console.log(firstLast);

//age inventeur
const ageToday = entrepreneurs.map(x => x.first + " " + x.last + " aurait " + (age = 2021 - x.year) + " ans aujourd'hui ")
console.log("ageToday : ", ageToday);


//ordre
console.log("tri par ordrealphabetix :")
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


