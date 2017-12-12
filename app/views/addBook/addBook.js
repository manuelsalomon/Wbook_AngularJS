class AddBookController {
  constructor() {
    this.title = '';
    this.author = '';
    this.genre = '';
    this.publisher = '';
    this.year = '';
    this.image_url = '';
  }

  bookObj() {
    const book = {};
    book.title = this.title;
    book.author = this.author;
    book.genre = this.genre;
    book.pusblisher = this.publisher;
    book.year = this.year;
    book.image_url = this.image_url;
    return book;
  }
}

angular.module('addBook',[])
.component('addBook',{
  controller: AddBookController,
  template:
    `<div class="register__modal content">
      <div class="register__modal__header">
        <img class="header__btn" src="../../data/assets/add_book.svg" alt="">
        <p translate="ADDBOOK" class="sectionHeader"></p>
      </div>
      <div class="register__modal__form">
        <label translate="TITLE" for="title"></label>
        <input class="reg__input" id="title" name="title" ng-model="$ctrl.title" ng-blur="$ctrl.onChange({book: $ctrl.bookObj()})">
        <label translate="AUTHOR" for="author"></label>
        <input class="reg__input" id="author" name="author" ng-model="$ctrl.author" ng-blur="$ctrl.onChange({book: $ctrl.bookObj()})">
        <label translate="GENRE" for="genre"></label>
        <input class="reg__input" id="genre" name="genre" ng-model="$ctrl.genre" ng-blur="$ctrl.onChange({book: $ctrl.bookObj()})">
        <label translate="PUBLISHER" for="publisher"></label>
        <input class="reg__input" id="publisher" name="publisher" ng-model="$ctrl.publisher" ng-blur="$ctrl.onChange({book: $ctrl.bookObj()})">
        <label translate="YEAR" for="year"></label>
        <input class="reg__input" id="year" name="year" ng-model="$ctrl.year" ng-blur="$ctrl.onChange({book: $ctrl.bookObj()})">
        <label translate="IMAGEURL" for="image_url"></label>
        <input class="reg__input" id="image_url" name="image_url" ng-model="$ctrl.image_url" ng-blur="$ctrl.onChange({book: $ctrl.bookObj()})">
        <div class="reg__btns">
          <button class="reg__btn" translate="CANCEL"></button>
          <button class="reg__btn reg__btn__succ" translate="ACCEPT" ng-click="$ctrl.onSubmit()"></button>
        </div>
      </div>
    </div>`,

  bindings: {
    onChange: '&',
    onSubmit: '&'
  }
})
