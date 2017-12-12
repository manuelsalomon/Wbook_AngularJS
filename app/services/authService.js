class AuthService {
  constructor($http, $localStorage, $state) {
    this.$http = $http;
    this.$localStorage = $localStorage;
    this.$state = $state;
  }

  userCreate(name, email, password) {
    console.log("authhhhhhh serviceeee")
    const url = 'http://localhost:3000/signup';
    let data = {
        user:{
          name: name,
          email: email,
          password: password
        }
    }
    const config = {
            headers : {
               'Content-Type': 'application/json'
            }
        }
    console.log(data)
    this.$http.post(url, data, config)
    .then(
       (response) => {
         console.log(response)
         console.log(response.data.token)
         this.$state.go('login')
       },
       (response) => console.log(response)
    );
  }

  login(email, password) {
      const url = 'http://localhost:3000/auth/login';
      let data = {
            email: email,
            password: password
      }
      const config = {
              headers : {
                 'Content-Type': 'application/json'
              }
          }
      this.$http.post(url, data, config)
      .then(
         (response) => {
           console.log(response.data.token)
           this.$localStorage.currentUser = { email: email, token: response.data.token };
           this.$http.defaults.headers.common.Authorization = 'Bearer ' + response.data.token;
           this.$state.go('main');
         },
         (response) => console.log(response)
      );
  }

  logout() {
      delete this.$localStorage.currentUser;
      this.$http.defaults.headers.common.Authorization = '';
  }

}

AuthService.$inject = ['$http','$localStorage','$state'];
angular.module('myApp')
       .service('AuthService', AuthService)
