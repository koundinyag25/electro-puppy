import angular from 'angular';

let layout = angular.module('app.layout',[]);

import LayoutCtrl from './layout.controller.js';
layout.controller('LayoutCtrl',LayoutCtrl);


export default layout;
