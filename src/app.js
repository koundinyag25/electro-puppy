import angular from 'angular';
import AppConfig from './config/app.config.js';


import 'angular-ui-router';
import 'angular-material';
import 'angular-animate';
import 'angular-aria';
import 'angular-sanitize';

import 'angular-material/angular-material.min.css';


//import all modules
import './home';
import './layout';
import './dashboard'
let reqModules = [
  'ngMaterial',
  'ui.router',
  'app.layout',
  'app.home',
  'app.dashboard'
];





let app = angular.module('app',reqModules);
app.config(AppConfig);
export default app;
