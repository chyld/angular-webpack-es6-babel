export default function($scope, Sale, $state){
  $scope.name = 'List';
  Sale.all().then(r => {
    $scope.sales = r.data;
    let categories = r.data.map(d => d.id);
    let amounts = r.data.map(d => d.amount * 1);
    draw(categories, amounts);
  });
}

function draw(categories, data){
  debugger;
  $('#container').highcharts({
    title: {
        text: 'Sale amounts over time'
    },
    xAxis: {
        categories: categories
    },
    series: [{data: data}]
  });
}
