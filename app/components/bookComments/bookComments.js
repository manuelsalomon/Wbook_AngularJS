angular.module('bookComments',[])
.component('bookComments',{
  template:
    `<div class="bookComments">
      <p class="sectionHeader">Comentarios</p>
      <div class="bookComments__content">
        <div class="bookComments__new">
          <img class="bookComment__avatar" src="/data/assets/add_book.svg" alt="bookImg">
          <div class="bookComments__new__field">
            <p class="bookComments__new__title"><strong>Agregar comentario</strong></p>
            <textarea class="bookComments__new__text"></textarea>
            <button class="bookComments__new__btn"><strong>Enviar</strong></button>
          </div>
        </div>
        <div class="bookComments__list">
          <div class="bookComment">
            <img class="bookComment__avatar" src="/data/assets/add_book.svg" alt="bookImg">
            <div class="bookComment__message">
              <p class="bookComment__user"><strong>User Name</strong></p>
              <p class="bookComment__date">Date time</p>
              <p class="bookComment__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
          <div class="bookComment">
            <img class="bookComment__avatar" src="/data/assets/add_book.svg" alt="bookImg">
            <div class="bookComment__message">
              <p class="bookComment__user"><strong>User Name</strong></p>
              <p class="bookComment__date">Date time</p>
              <p class="bookComment__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
          <div class="bookComment">
            <img class="bookComment__avatar" src="/data/assets/add_book.svg" alt="bookImg">
            <div class="bookComment__message">
              <p class="bookComment__user"><strong>User Name</strong></p>
              <p class="bookComment__date">Date time</p>
              <p class="bookComment__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
      </div>
    </div>`
})
