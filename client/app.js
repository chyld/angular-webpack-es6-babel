import angular from 'angular';
import router from 'angular-ui-router';
import AboutCtrl from './controllers/general/about.js';
import SalesNewCtrl from './controllers/sales/new.js';
import SalesListCtrl from './controllers/sales/list.js';
import SalesShowCtrl from './controllers/sales/show.js';
import Sale from './models/sale.js';
import Config from './config/config.js';

let app = angular.module('myApp', ['ui.router']);

app.config(Config)
.controller('AboutCtrl', AboutCtrl)
.controller('SalesNewCtrl', SalesNewCtrl)
.controller('SalesListCtrl', SalesListCtrl)
.controller('SalesShowCtrl', SalesShowCtrl)
.factory('Sale', Sale);
