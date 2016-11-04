(function () {
'use strict';
angular.module('ShoppingListCheckOff',[])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// injection of ShoppingListCheckOffService
ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService){
  var ToBuyController = this;
    // A faire
    // retrieve items
    ToBuyController.items = ShoppingListCheckOffService.getItems;
    //ToBuyController.lenght = ShoppingListCheckOffService.mylenght;
    //console.log("items to buy " +   ToBuyController.items);
    //console.log("items to buy ");
    console.log("items lenght " +   ShoppingListCheckOffService.lenght);
}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
  var AlreadyBoughtController = this;
    // A faire

}
 // service
function ShoppingListCheckOffService(){
  var service = this;
  // List of shopping items to buy (local list)
  //var items = [{name: "chocolate", quantity: 1},{name: "ham", quantity: 2},{name: "cookie", quantity: 10},{name: "cheese", quantity: 1},{name: "patatoes", quantity: 10}];
  var items = [0,1,2,3,4];
   var tobuy_items = [];
  // list of bought items
  var bought_items = [];

  //expose items to buy
  service.getItems = function(){
    var i ;
    for(i=0; i< items.lenght;i++)
    {
      //console.log("items lenght " + items.lenght)
      tobuy_items.push(items[i]);
    }
    return tobuy_items;
  }

  service.mylenght = function(){
    return tobuy_items.lenght;
  }

}
})();
