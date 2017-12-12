var myApp = angular.module('myApp').config(($stateProvider,$urlRouterProvider) => {
  $urlRouterProvider.otherwise("/")

  let states =[
    {
      name: 'main',
      url: '/',
      component: 'main'
    },
    {
      name: 'book',
      url: '/book/:bookId',
      params: {
        book: null
      },
      component: 'bookDetail'
    },
    {
      name: 'signup',
      url:'/signup',
      template: `<div  ng-controller="SignUpCtrl as $ctrl">
                  <signup  on-change="$ctrl.handleUserChanged(user)" on-submit="$ctrl.userAuthenticate()"></signup>
                </div>`
    },
    {
      name: 'login',
      url:'/login',
      template: `<div  ng-controller="LogInCtrl as $ctrl">
                  <login  on-change="$ctrl.handleUserChanged(user)" on-submit="$ctrl.userAuthenticate()"></login>
                </div>`
    },
    {
      name: 'addBook',
      url:'/addBook',
      template: `<div  ng-controller="AddBookCtrl as $ctrl">
                  <add-book  on-change="$ctrl.handleBookChanged(book)" on-submit="$ctrl.newBookPost()"></add-book>
                </div>`
  }

  ]
  states.forEach(function(state) {
    $stateProvider.state(state);
  });
});
