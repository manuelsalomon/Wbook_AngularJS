  angular.module('headerMenu' ,[])
.component('headerMenu', {
  template:
    `<div class="header">
      <a href="#" ui-sref="main">
        <img class="header__log" src="../../data/assets/wbooks_logo.svg" alt="">
      </a>
      <div class="header__options">
        <img class="header__btn" src="../../data/assets/notifications.svg" alt="">
        <a href="#" ui-sref="signup">
          <img class="header__btn" src="../../data/assets/add_book.svg" alt="">
        </a>
        <a href="#" ui-sref="addBook">
          <img class="header__btn" src="../../data/assets/add_book.svg" alt="">
        </a>
        <a href="#" ui-sref="login">
          <img class="header__btn" src="../../data/assets/add_book.svg" alt="">
        </a>
      </div>
    </div>`,
})
