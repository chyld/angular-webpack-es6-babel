export default function($scope, Sale, $state){
  $scope.name = 'New';
  $scope.add = (sale) => {
    let s = new Sale(sale);
    s.save()
    .then(() => $state.go('sales_list'))
    .catch(err => console.log('err', err));
  }
}
