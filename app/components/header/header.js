angular.module('headerMenu' ,[])
.component('headerMenu', {
  template:
    `<div class="header">
      <img class="header__log" src="../../data/assets/wbooks_logo.svg" alt="">
      <div class="header__options">
        <img class="header__btn" src="../../data/assets/notifications.svg" alt="">
        <img class="header__btn" src="../../data/assets/add_book.svg" alt="">
        <img class="header__btn" src="../../data/assets/add_book.svg" alt="">
      </div>
    </div>`,
})
