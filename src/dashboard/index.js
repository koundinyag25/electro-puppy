import angular from 'angular';

let dashboard = angular.module('app.dashboard',[]);

import DashboardConfig from './dashboard.config.js';
dashboard.config(DashboardConfig);

import DashboardController from './dashboard.controller.js';
dashboard.controller('DashboardController',DashboardController);


export default dashboard;
