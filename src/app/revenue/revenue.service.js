angular.module("RevenueModule")
  .service("RevenueService", function($http) {
    var vm = this;

    vm.getFirstTableData = function() {
      var data = {
        trial_balance : {
          "raw_materials" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "indirect_materials" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "equipment" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "wpi" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "direct_labor" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "indirect_labor" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "salaries_expense" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "fgi" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "cgs" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "sales_revenue" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "cash" : {
            "dr": "dr value",
            "cr": "cr value",
          }
        }
      }; 
      return data;         
    }
    
    vm.getSecondTableData = function() {
      var data = {
        adjusted_tb : {
          "raw_materials" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "indirect_materials" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "equipment" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "wpi" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "direct_labor" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "indirect_labor" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "salaries_expense" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "fgi" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "cgs" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "sales_revenue" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "cash" : {
            "dr": "dr value",
            "cr": "cr value",
          }
        }
      }; 
      return data;         
    }
    
    vm.getThirdTableData = function() {
      var data = {
        statement_of_fin_pos : {
          "raw_materials" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "indirect_materials" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "equipment" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "wpi" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "direct_labor" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "indirect_labor" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "salaries_expense" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "fgi" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "cgs" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "sales_revenue" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "cash" : {
            "dr": "dr value",
            "cr": "cr value",
          }
        }
      }; 
      return data;         
    }
    
    vm.getFourthTableData = function() {
      var data = {
        statement_of_comp_inc : {
          "raw_materials" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "indirect_materials" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "equipment" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "wpi" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "direct_labor" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "indirect_labor" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "salaries_expense" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "fgi" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "cgs" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "sales_revenue" : {
            "dr": "dr value",
            "cr": "cr value",
          },
          "cash" : {
            "dr": "dr value",
            "cr": "cr value",
          }
        }
      }; 
      return data;         
    }

    vm.getJson = function(){
      console.log("asdjasdjashdjasd");
      return $http({
        method: "GET",
        url: server_path + "AccountingBooks.json"      
      })
    };


    angular.module('newseasons18')
  .factory('Users', function($firebaseArray, $firebaseObject){
    var usersRef = firebase.database().ref.child('Users');

    usersRef.push({
      Username: "owner@newseasons",
      Pass: "se@son"
    }, onComplete);
    

      var Users = {};

    return Users;
  });





    
  });