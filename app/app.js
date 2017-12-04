angular.module('myApp', ['pascalprecht.translate','headerMenu','filterSearch','bookList','main', 'ui.router', 'bookDetail','book','bookRecomendations','bookComments']);
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
}])
      .config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('en', {
      QUERY: 'Search...',
      FILTER: 'Select filter',
      FILTERI: 'Author',
      FILTERII: 'Title',
      ACTIONI: 'Rent',
      SECTIONI: 'Suggestions',
      SECTIONII: 'Comments',
      ADDCOMMENT: 'Add comment',
      SEND: 'Send'
    });

    $translateProvider.translations('es', {
      QUERY: 'Buscar...',
      FILTER: 'Seleccionar filtro',
      FILTERI: 'Autor',
      FILTERII: 'Titulo',
      ACTIONI: 'Alquilar',
      SECTIONI: 'Sugerencias',
      SECTIONII: 'Comentarios',
      ADDCOMMENT: 'Agregar comentario',
      SEND: 'Enviar'
    });

    $translateProvider.preferredLanguage('en');
}]);
