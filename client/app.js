import angular from 'angular';
import router from 'angular-ui-router';
import AboutCtrl from './controllers/about.js';
import Config from './config/config.js';

let app = angular.module('myApp', ['ui.router']);

app.config(Config)
   .controller('AboutCtrl', AboutCtrl);
