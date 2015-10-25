export default function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {url: '/', templateUrl: '/views/general/home.html'})
  .state('about', {url: '/about', templateUrl: '/views/general/about.html', controller: 'AboutCtrl'})
  .state('sales_new', {url: '/sales/new', templateUrl: '/views/sales/new.html', controller: 'SalesNewCtrl'})
  .state('sales_list', {url: '/sales', templateUrl: '/views/sales/list.html', controller: 'SalesListCtrl'})
  .state('sales_show', {url: '/sales/{id}', templateUrl: '/views/sales/show.html', controller: 'SalesShowCtrl'});
}
