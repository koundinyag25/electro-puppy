function DashboardConfig($stateProvider){
  $stateProvider
  .state('app.dashboard',{
    url:'/dashboard',
    templateUrl:'src/dashboard/dashboard.html',
    controller: 'DashboardController',
    controllerAs: '$ctrl'
  });
}

export default DashboardConfig;
