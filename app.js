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
    ToBuyController.items = ShoppingListCheckOffService.getItems();
    //ToBuyController.lenght = ShoppingListCheckOffService.mylenght;
    //console.log("items to buy  now " +   ShoppingListCheckOffService.getItems());
   // console.log("items to buy  name : " +   ToBuyController.items[2].name + " items to buy quantity :" + ToBuyController.items[2].quantity);
    //console.log("items to buy ");
    console.log("items lenght " +   ShoppingListCheckOffService.mylenght());
    //ToBuyController.sayhello = ShoppingListCheckOffService.sayhello();
    //remove item from list to buy
    ToBuyController.removeItem = function(itemIndex){
      var item = {name:ToBuyController.items[itemIndex].name, quantity:ToBuyController.items[itemIndex].quantity };
      console.log("item en cours.. name :" + ToBuyController.items[itemIndex].name + " quantity : " + ToBuyController.items[itemIndex].quantity); // Ajout test
        ShoppingListCheckOffService.removeItem(itemIndex,item);
    };
}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
  var AlreadyBoughtController = this;
    // A faire
    AlreadyBoughtController.items = ShoppingListCheckOffService.getListBought();
  //  console.log("items bought  name : " +   AlreadyBoughtController.items[0].name + " items bought quantity :" + AlreadyBoughtController.items[0].quantity);
  //    console.log(" length of AlreadyBoughtController : " + AlreadyBoughtController.items.length);
}
 // service
function ShoppingListCheckOffService(){
  var service = this;
  // List of shopping items to buy (local list)
  var items = [{name: "chocolate", quantity: 1},{name: "ham", quantity: 2},{name: "cookies", quantity: 10},{name: "cheese", quantity: 1},{name: "patatoes", quantity: 10}];
  //var items = [0,1,2,3,4];
  //List of items to buy
   var tobuy_items = [];
  // list of bought items
  var bought_items = [];

  //expose items to buy
  service.getItems = function(){
    var i ;
    for(i=0; i< items.length;i++)
    {
      //console.log("items lenght " + items.lenght)
      tobuy_items.push(items[i]);
    }
    return tobuy_items;
  };

  service.mylenght = function(){
    return tobuy_items.length;
  };

  /*service.sayhello = function(){
    console.log("hello from service !");
  };*/
   // Remove item of list to buy
  service.removeItem = function (itemIdex,item){
    //var tmp = [];
    //tmp.push(tobuy_items[itemIdex]);
    //add to bought list
    //bought_items.push(tobuy_items[itemIdex]); ///test
    bought_items.push(item);
    //console.log("length bought_items "+ bought_items.length);
   // console.log("name :" + bought_items[itemIdex].name + " quantity : " + bought_items[itemIdex].quantity);
    tobuy_items.splice(itemIdex, 1);
  };

  service.getListBought = function(){
    return bought_items;
  };
}
})();
