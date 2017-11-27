angular.module('myApp', ['headerMenu','filterSearch','bookList','main', 'ui.router', 'bookDetail','book','bookRecomendations','bookComments']);
angular.module('myApp')
       .controller('BookCtrl', ['BookService', function(BookService) {
  this.books = BookService.getBooks();
  this.filter = {};

  this.handleFilterChanged = (filter) => {
    this.filter = filter;
  };

  this.filtersBooks = () => {
    let field = Object.keys(this.filter)[0]
    let value = this.filter[field].toLowerCase();
    return BookService.filterBooks(field, value);
  };
}]);
