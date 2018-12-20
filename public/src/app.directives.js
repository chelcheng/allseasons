angular.module("AllSeasonsFarmApp")
  .directive("appHeader", function (){
    return {
        "templateUrl": "./assets/components/app-header.tmpl.html",
        "controller": "HomeController"
    };
  })

  .directive("sidenavMenu", function (){
    return {
        "scope": {
            "model": "=",
            "hidefnc": "&",
            "logout": "&"
        },
        "templateUrl": "./assets/components/sidenav-content.tmpl.html",
        "controller": "HomeController"
    }
  });