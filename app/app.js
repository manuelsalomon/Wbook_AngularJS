angular.module('myApp', ['pascalprecht.translate','ngStorage','headerMenu','filterSearch','bookList','main', 'ui.router', 'bookDetail','book','bookRecomendations','bookComments','signup','login','addBook']);
angular.module('myApp')
       .controller('BookCtrl', ['BookService', function(BookService) {
  BookService.fetchBooks().then(()=>{
      this.books = BookService.getBooks();
  })

  console.log(this.books, 'app js')

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
      .controller('SignUpCtrl', ['AuthService', function(AuthService) {
  this.user = {};

  this.handleUserChanged = (user) => {
    this.user = user;
  };

  this.userAuthenticate = () => {
    let name = this.user.name
    let email = this.user.email
    let password = this.user.password
    let password_digest = this.user.password_digest
    return AuthService.userCreate(name, email ,password);
  };
}])
      .controller('LogInCtrl', ['AuthService', function(AuthService) {
  this.user = {};

  this.handleUserChanged = (user) => {
    this.user = user;
  };

  this.userAuthenticate = () => {
    let email = this.user.email
    let password = this.user.password
    return AuthService.login(email ,password);
  };
}])
      .controller('AddBookCtrl', ['BookService', function(BookService) {
  this.book = {};

  this.handleBookChanged = (book) => {
    this.book = book;
  };

  this.newBookPost = () => {
    let title = this.book.title
    let author = this.book.author
    let publisher = this.book.publisher
    let genre = this.book.genre
    let year = this.book.year
    let image_url = this.book.image_url
    return BookService.newBook(title,author,publisher,genre,year,image_url);
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
      SEND: 'Send',
      NAME: 'Name',
      SURNAME: 'Surname',
      EMAIL: 'Email',
      PASSWORD: 'Password',
      PASSWORD_TEXT: 'New Password',
      PASSWORD_TEXT_COPY: 'Repeat Password',
      ACCEPT: 'Accept',
      CANCEL: 'Cancel',
      SIGNUP: 'Sign Up',
      LOGIN: 'Log In',
      ADDBOOK: 'Add New Book',
      TITLE: 'Title',
      AUTHOR: 'Author',
      PUBLISHER: 'Publisher',
      YEAR: 'Year',
      GENRE: 'Genre',
      IMAGEURL: 'Image Url'
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
      SEND: 'Enviar',
      NAME: 'Nombre',
      SURNAME: 'Apellido',
      EMAIL: 'Correo',
      PASSWORD: 'Contraseña',
      PASSWORD_TEXT: 'Nueva Contraseña',
      PASSWORD_TEXT_COPY: 'Repite la Contraseña',
      ACCEPT: 'Aceptar',
      CANCEL: 'Cancelar',
      SIGNUP: 'Registrarse',
      LOGIN: 'Ingresar',
      ADDBOOK: 'Agregar Nuevo Libro',
      TITLE: 'Titulo',
      AUTHOR: 'Autor',
      PUBLISHER: 'Editorial',
      YEAR: 'Año',
      GENRE: 'Genero',
      IMAGEURL: 'Ruta de Imagen'
    });

    $translateProvider.preferredLanguage('en');
}]);
