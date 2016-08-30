(function() {
  'use strict';

  angular
    .module('app.login')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$q', 'dataservice', 'logger'];
  /* @ngInject */
  function LoginController($q, dataservice, logger) {
    var vm = this;
    vm.title = 'Login';

    activate();

    function activate() {
      
    }

    function getMessageCount() {
      return dataservice.getMessageCount().then(function(data) {
        vm.messageCount = data;
        return vm.messageCount;
      });
    }
  }
})();
