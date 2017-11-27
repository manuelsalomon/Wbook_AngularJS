
angular.module('bookList',[])
.component('bookList',{
  template:
    `<div class="book__list">
      <div class="book" ng-repeat="book in $ctrl.books">
          <div class="book__img">
              <img ng-src="{{book.image_url}}" alt="bookImg">
          </div>
          <a class="book__text" href="#" ui-sref="book({ bookId: book.id, book: book })">
            {{book.title}}
          </a>
          <p class="book__text">{{book.author}}</p>
      </div>
    </div>`,
    bindings: {
        books: '<'
    }
})
