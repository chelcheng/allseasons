angular.module("ProdPlanModule")
  .controller("ProdPlanController", function($mdDialog, ProdPlanService, RevenueService) {
    var vm = this; //ppc

    vm.minDate = new Date(Date.now());
    
    vm.datatable = tableLimitAndPage();
    console.log(vm.datatable);

    vm.init = function() {
      blabla();
    }

    function blabla() {
      RevenueService.getJson().then(function(succ) {
        console.log(succ);
      }, function(err) {
        console.log(err);

      })
    }
  });