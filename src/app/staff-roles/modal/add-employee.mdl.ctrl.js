angular.module("StaffRolesModule")
  .controller("AddEmployeeCtrl", function($mdDialog, StaffRolesService) {
    var vm = this; //aec

    vm.positions = [
      { "id": 0, "name": "Manager" },
      { "id": 1, "name": "Assistant Manager" },
      { "id": 2, "name": "Staff" }
    ]

    vm.states = [
      { "id": 0, "name": "Inactive" },
      { "id": 1, "name": "Active" }
    ]

    vm.init = function() {
      vm.employee = {
        first_name: undefined,
        middle_name: undefined,
        last_name: undefined,
        position: undefined,
        salary: undefined,
      };
    };

    vm.addaddNewEmployee = function() {
      StaffRolesService.addEmployee(vm.employee);
      // StaffRolesService.addEmployee(vm.employee).then(function(successCallback) {
      //   console.log(successCallback);
      // }, function(errorCallback) {
      //   console.log(errorCallback);

      // });
    }

    vm.closeModal = function() {
      $mdDialog.cancel();
    };
  });