angular.module("AllSeasonsFarmApp") 
  .config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
  }) 
  
  .config(function($stateProvider, $urlRouterProvider){
    var loginState = {
      name: 'login',
      url: '/login',
      templateUrl : './app/login/login.html',
      controller: 'LoginController as lc'
    };

    var homeState = {
      name: 'home',
      url: '/asf',
      templateUrl : './app/home/home.html',
      controller: 'HomeController as hc'
    };

    var revenueState = {
      name: 'revenue',
      parent: 'home',
      url: '/revenue',
      templateUrl : './app/revenue/revenue.html',
      controller: 'RevenueController as rc'
    };

    var prodPlanState = {
      name: 'production-planning',
      parent: 'home',
      url: '/production-planning',
      templateUrl : './app/prod-plan/prod-plan.html',
      controller: 'ProdPlanController as ppc'
    };

    var cropTrendState = {
      name: 'crop-trend',
      parent: 'home',
      url: '/crop-trend',
      templateUrl : './app/crop-trend/crop-trend.html',
      controller: 'CropTrendController as ctc'
    };

    var whseInvState = {
      name: 'warehouse-&-inventory',
      parent: 'home',
      url: '/warehouse-inventory',
      templateUrl : './app/whse-inv/whse-inv.html',
      controller: 'WhseInvController as wic'
    };

    var staffRolesState = {
      name: 'staff-&-roles',
      parent: 'home',
      url: '/staff-roles',
      templateUrl : './app/staff-roles/staff-roles.html',
      controller: 'StaffRolesController as srlc'
    };

    $urlRouterProvider.otherwise('/login');
    $stateProvider.state(loginState);
    $stateProvider.state(homeState);
    $stateProvider.state(revenueState);
    $stateProvider.state(prodPlanState);
    $stateProvider.state(cropTrendState);
    $stateProvider.state(whseInvState);
    $stateProvider.state(staffRolesState);
  });

