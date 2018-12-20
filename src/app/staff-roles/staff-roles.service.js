angular.module("StaffRolesModule")
  .service("StaffRolesService", function($http) {
    var vm = this;

    vm.getEmployee = function(data){
      return $http({
        method: "POST",
        url: server_path + "Employee.json",
        data: {
          "emp_id": "001"
        }
      })
    };

    vm.addEmployee = function(data) {
      console.log(data);
      // return $http({
      //   method: "POST",
      //   url: server_path + "Employee.json",
      //   data: data
      // })
    }
  });