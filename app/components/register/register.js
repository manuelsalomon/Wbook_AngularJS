class RegisterController {
  constructor() {
    this.name = '';
    this.surname = '';
    this.email = '';
    this.password = '';
    this.passwordCopy = '';
  }

  userObj() {
    const user = {};
    user.name = this.name +" "+this.surname;
    user.email = this.email;
    user.password = this.password;
    user.password_digest = this.password;
    return user;
  }
}

angular.module('register',[])
.component('register',{
  controller: RegisterController,
  template:
    `<div class="register">
        <div class="register__modal">
          <div class="register__modal__header">
            <img class="header__btn" src="../../data/assets/add_book.svg" alt="">
            <p>Registrarse</p>
          </div>
          <div class="register__modal__form">
            <form>
              <label translate="NAME" for="reg_name"></label>
              <input class="filterSearch__query" id="reg_name" name="name" ng-model="$ctrl.name" ng-blur="$ctrl.onChange({user: $ctrl.userObj()})">
              <label translate="SURNAME" for="reg_surname"></label>
              <input class="filterSearch__query" id="reg_surname" name="surname" ng-model="$ctrl.surname" ng-blur="$ctrl.onChange({user: $ctrl.userObj()})">
              <label translate="EMAIL" for="reg_email"></label>
              <input class="filterSearch__query" id="reg_email" name="email" type="email" ng-model="$ctrl.email" ng-blur="$ctrl.onChange({user: $ctrl.userObj()})">
              <label translate="PASSWORD" for="reg_password"></label>
              <input class="filterSearch__query" id="reg_password" translate translate-attr-placeholder="PASSWORD_TEXT" type="password" name="password" ng-model="$ctrl.password" ng-blur="$ctrl.onChange({user: $ctrl.userObj()})">
              <label translate="PASSWORD" for="reg_password_copy"></label>
              <input class="filterSearch__query" id="reg_password_copy" translate translate-attr-placeholder="PASSWORD_TEXT_COPY" type="password" name="password" ng-model="$ctrl.passwordCopy" ng-blur="$ctrl.onChange({user: $ctrl.userObj()})">
            </form>
            <div>
              <button translate="CANCEL" ng-click="showModal = !showModal"></button>
              <button translate="ACCEPT" ng-click="$ctrl.onSubmit()"></button>
            </div>
          </div>
        </div>
    </div>`,
  bindings: {
    onChange: '&',
    onSubmit: '&'
  }
})
