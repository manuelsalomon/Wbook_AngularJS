angular.module('book',[])
.component('book',{
  template:[
    '<div class="book">',
      '<div class="book__img">',
        '<img ng-src="{{$ctrl.data.image_url}}" alt="bookImg">',
      '</div>',
      '<p class="book__text"><strong>{{$ctrl.data.title}}</strong></p>',
      '<p class="book__text">{{$ctrl.data.author}}</p>',
    '</div>',
  ].join('') ,
  bindings: {
      data: '<'
    }
})
