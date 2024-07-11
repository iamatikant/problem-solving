/* const searchEngine = new InMemorySearch();

searchEngine.addDocuments(
   'Movies', 
   {name: 'Avenger', rating: 8.5, year: 2017}, 
   {name: 'Black Adam', rating: 8.7, year: 2022}, 
   {name: 'Jhon Wick 4', rating: 8.2, year: 2023}, 
   {name: 'Black Panther', rating: 9.0, year: 2022}
);

console.log(
 searchEngine.search(
  'Movies', 
  (e) => e.rating > 8.5, 
  {key: 'rating', asc: false}
 )
); */

/*
[
  {
    "name": "Black Panther",
    "rating": 9,
    "year": 2022
  },
  {
    "name": "Black Adam",
    "rating": 8.7,
    "year": 2022
  }
]
*/

class InMemorySearch {
  constructor() {
    this.data = new Map();
  }
  addDocument(name, ...args) {
    this.data.set(name, args);
  }
  search(name, callback, { key, asc }) {
    const movies = this.data.get(name);
    const filteredMovies = callback(movies);
    return filteredMovies.sort((a, b) => a.key - b.key);
  }
}

const searchEngine = new InMemorySearch();

searchEngine.addDocuments(
  "Movies",
  { name: "Avenger", rating: 8.5, year: 2017 },
  { name: "Black Adam", rating: 8.7, year: 2022 },
  { name: "John Wick 4", rating: 8.2, year: 2023 },
  { name: "Black Panther", rating: 9.0, year: 2022 }
);

console.log(
  searchEngine.search("Movies", (e) => e.rating > 8.5, {
    key: "rating",
    asc: false,
  })
);
