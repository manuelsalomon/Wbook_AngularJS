class BookService {
  constructor($http,$localStorage) {
    this.$http = $http;
    this.$localStorage = $localStorage;
    this.books = [];
  }

  fetchBooks() {
    const url = 'http://localhost:3000/books'

    return this.$http.get(url)
    .then(
      (response) => {
        console.log(response.data)
        this.books = response.data
      },
      (response) => console.log(response)
    );
  }

  getBooks() {
    return this.books;
  }

  getBook(id) {
    let index = this.books.findIndex(x => x.id== id);
    return this.books[index];
  }

  filterBooks(field, value) {
    this.books.filter(function (el) {
      return el[field].toLowerCase().includes(value)
    });
  }

  newBook(title,author,publisher,genre,year,image_url) {
    console.log("boookkkkkk serviceeee")
    const url = 'http://localhost:3000/books';
    let data = {
      book :{
        title: title,
        author: author,
        genre: genre,
        year: year,
        pusblisher: publisher,
        image_url: image_url,
      }
    };
    const config = {
            headers : {
               'Content-Type': 'application/json',
               'Authorization': this.$localStorage.currentUser.token
            }
        }
    console.log(data)
    console.log(config)
    this.$http.post(url, data, config)
    .then(
       (response) => {
         console.log(response)
         this.$state.go('main')
       },
       (response) => console.log(response)
    );
  }
}

BookService.$inject = ['$http','$localStorage'];
angular.module('myApp')
       .service('BookService', BookService)
