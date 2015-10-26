export default function($http){
  class Sale {
    constructor(obj) {
      this.from = obj.from;
      this.to = obj.to;
      this.description = obj.description;
      this.amount = obj.amount;
    }
    save(){
      return $http.post('/sales', this);
    }
    static all(){
      return $http.get('/sales');
    }
  }

  return Sale;
}
