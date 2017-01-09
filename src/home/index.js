import angular from 'angular';

let home = angular.module('app.home',[]);

import HomeConfig from './home.config.js';
home.config(HomeConfig);

import HomeController from './home.controller.js';
home.controller('HomeController',HomeController);


export default home;
