export default function($scope, $state, Sale){
  $scope.name = 'Show';
  Sale.find($state.params.id).then(r => $scope.sale = r.data);
}
