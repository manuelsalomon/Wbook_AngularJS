/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


angular.module('myApp', ['pascalprecht.translate', 'ngStorage', 'headerMenu', 'filterSearch', 'bookList', 'main', 'ui.router', 'bookDetail', 'book', 'bookRecomendations', 'bookComments', 'signup', 'login', 'addBook']);
angular.module('myApp').controller('BookCtrl', ['BookService', function (BookService) {
  var _this = this;

  BookService.fetchBooks().then(function () {
    _this.books = BookService.getBooks();
  });

  console.log(this.books, 'app js');

  this.filter = {};

  this.handleFilterChanged = function (filter) {
    _this.filter = filter;
  };

  this.filtersBooks = function () {
    var field = Object.keys(_this.filter)[0];
    var value = _this.filter[field].toLowerCase();
    return BookService.filterBooks(field, value);
  };
}]).controller('SignUpCtrl', ['AuthService', function (AuthService) {
  var _this2 = this;

  this.user = {};

  this.handleUserChanged = function (user) {
    _this2.user = user;
  };

  this.userAuthenticate = function () {
    var name = _this2.user.name;
    var email = _this2.user.email;
    var password = _this2.user.password;
    var password_digest = _this2.user.password_digest;
    return AuthService.userCreate(name, email, password);
  };
}]).controller('LogInCtrl', ['AuthService', function (AuthService) {
  var _this3 = this;

  this.user = {};

  this.handleUserChanged = function (user) {
    _this3.user = user;
  };

  this.userAuthenticate = function () {
    var email = _this3.user.email;
    var password = _this3.user.password;
    return AuthService.login(email, password);
  };
}]).controller('AddBookCtrl', ['BookService', function (BookService) {
  var _this4 = this;

  this.book = {};

  this.handleBookChanged = function (book) {
    _this4.book = book;
  };

  this.newBookPost = function () {
    var title = _this4.book.title;
    var author = _this4.book.author;
    var publisher = _this4.book.publisher;
    var genre = _this4.book.genre;
    var year = _this4.book.year;
    var image_url = _this4.book.image_url;
    return BookService.newBook(title, author, publisher, genre, year, image_url);
  };
}]).config(['$translateProvider', function ($translateProvider) {
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

/***/ })
/******/ ]);