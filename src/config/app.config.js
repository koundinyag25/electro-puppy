function AppConfig($stateProvider,$urlRouterProvider,$locationProvider){


$stateProvider
.state('app',{
abstract: true,
template:require('../layout/app-view.html'),
controller:'LayoutCtrl'
});

$locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        }).hashPrefix('');

$urlRouterProvider.otherwise('/');

}

export default AppConfig;
