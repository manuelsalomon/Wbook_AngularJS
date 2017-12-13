angular.module('bookRecomendations',[])
.component('bookRecomendations',{
  template:
    `<div class="bookRecomendations">
      <p class="sectionHeader" translate="SECTIONI"></p>
      <div class="bookRecomendations__items">
        <div class="bookRecomendations__img">
          <img ng-src="{{$ctrl.book.image_url}}" alt="bookImg">
        </div>
        <div class="bookRecomendations__img">
          <img ng-src="{{$ctrl.book.image_url}}" alt="bookImg">
        </div>
        <div class="bookRecomendations__img">
          <img ng-src="{{$ctrl.book.image_url}}" alt="bookImg">
        </div>
        <div class="bookRecomendations__img">
          <img ng-src="{{$ctrl.book.image_url}}" alt="bookImg">
        </div>
      </div>
    </div>`,
  bindings: {
      book: '<'
    }
})
