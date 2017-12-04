class DetailController {
    constructor($stateParams , BookService){
      this.BookService = BookService;
      this.book = $stateParams.book || BookService.getBook($stateParams.bookId);
    }
}

DetailController.$inject = ['$stateParams','BookService']

angular.module('bookDetail', [])
.component('bookDetail', {
  controller: DetailController,
  controllerAs: '$ctrl',
  template:
    `<div class="content">
      <book book="$ctrl.book"></book>
      <div class="content__divider"></div>
      <book-recomendations book="$ctrl.book"></book-recomendations>
      <div class="content__divider"></div>
      <book-comments></book-comments>
    </div>`
})
