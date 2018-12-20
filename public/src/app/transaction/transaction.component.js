angular.module("TransactionModule")
  .controller("TransactionController", function($mdDialog, TransactionService) {
    var vm = this; //ctc
    

    vm.init = function() {
     console.log("transaction");
    }
  });