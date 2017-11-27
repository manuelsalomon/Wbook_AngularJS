angular.module('book',[])
.component('book',{
  template:
    `<div class="bookDetail">
      <div class="bookDetail__img">
        <img ng-src="{{$ctrl.book.image_url}}" alt="bookImg">
      </div>
      <div class="bookDetail__content">
        <p class="bookDetail__attr"><strong>{{$ctrl.book.title}}</strong></p>
        <p class="bookDetail__attr">{{$ctrl.book.author}}</p>
        <p class="bookDetail__attr">{{$ctrl.book.year}}</p>
        <p class="bookDetail__attr">{{$ctrl.book.genre}}</p>
        <p class="bookDetail__attr">{{$ctrl.book.publisher}}</p>
        <button class="bookDetail__btn" ><strong>Alquilar</strong></button>
      </div>
    </div>`,
  bindings: {
      book: '<'
    }
})
