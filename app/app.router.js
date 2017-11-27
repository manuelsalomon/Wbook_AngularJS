var myApp = angular.module('myApp');
myApp.run($trace => $trace.enable());

myApp.config(($stateProvider) => {
  let states =[
    {
      name: 'main',
      url: '',
      component: 'main'
    },
    {
    name: 'book',
    url: '/book/:bookId',
    params: {
      book: null
    },
    component: 'bookDetail'
    }
  ]
  states.forEach(function(state) {
    $stateProvider.state(state);
  });
});
