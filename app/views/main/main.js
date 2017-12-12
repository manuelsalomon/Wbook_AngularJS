angular.module('main',[])
.component('main',{
  template:
    `<div class="content" ng-controller="BookCtrl as $ctrl">
      <filter-search on-change="$ctrl.handleFilterChanged(filter)" on-submit="$ctrl.filtersBooks()"></filter-search>
      <book-list books="$ctrl.books"></book-list>
    </div>`
})
