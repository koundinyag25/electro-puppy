function HomeConfig($stateProvider){
  'ngInject';
  $stateProvider
  .state('app.home',{
    url:'/',
    templateUrl:'src/home/home.html',
    controller: 'HomeController',
    controllerAs: '$ctrl'
  });
}

export default HomeConfig;
