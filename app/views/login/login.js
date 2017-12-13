class LogInController {
  constructor() {
    this.email = '';
    this.password = '';
  }

  userObj() {
    const user = {};
    user.email = this.email;
    user.password = this.password;
    return user;
  }
}

angular.module('login',[])
.component('login',{
  controller: LogInController,
  template:
    `<div class="register__modal content">
      <div class="register__modal__header">
        <img class="header__btn" src="../../data/assets/add_book.svg" alt="">
        <p translate="LOGIN" class="sectionHeader"> translate="SIGNUP" class="sectionHeader"</p>
      </div>
      <div class="register__modal__form">
        <label translate="EMAIL" for="reg_email"></label>
        <input class="reg__input" id="reg_email" name="email" type="email" ng-model="$ctrl.email" ng-blur="$ctrl.onChange({user: $ctrl.userObj()})">
        <label translate="PASSWORD" for="reg_password"></label>
        <input class="reg__input" id="reg_password" type="password" name="password" ng-model="$ctrl.password" ng-blur="$ctrl.onChange({user: $ctrl.userObj()})">
        <div class="reg__btns">
          <button class="reg__btn" translate="CANCEL" ng-click="showModal = !showModal"></button>
          <button class="reg__btn reg__btn__succ" translate="ACCEPT" ng-click="$ctrl.onSubmit()"></button>
        </div>
      </div>
    </div>`,

  bindings: {
    onChange: '&',
    onSubmit: '&'
  }
})
