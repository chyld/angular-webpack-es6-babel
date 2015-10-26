export default function($scope, Sale, $state){
  $scope.name = 'List';
  Sale.all().then(r => $scope.sales = r.data);
}
