export default function($scope, Sale){
  $scope.name = 'New';
  $scope.add = (sale) => {
    let s = new Sale(sale);
    s.save()
    .then(response => console.log('res', response))
    .catch(err => console.log('err', err));
  }
}
