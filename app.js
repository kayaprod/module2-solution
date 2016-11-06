(function () {
'use strict';
angular.module('ShoppingListCheckOff',[])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// Support Dependence Injection in case of minification
ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
//Controller --> injection of service ShoppingListCheckOffService
function ToBuyShoppingController(ShoppingListCheckOffService){
  var ToBuyController = this;    
    ToBuyController.items = ShoppingListCheckOffService.getItems();    
    ToBuyController.removeItem = function(itemIndex){
      var item = {name:ToBuyController.items[itemIndex].name, quantity:ToBuyController.items[itemIndex].quantity };
      //console.log("item en cours.. name :" + ToBuyController.items[itemIndex].name + " quantity : " + ToBuyController.items[itemIndex].quantity); // Ajout test
        ShoppingListCheckOffService.removeItem(itemIndex,item);                
    };
    
}

// Support Dependence Injection in case of minification
AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
//Controller --> injection of service ShoppingListCheckOffService
function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
  var AlreadyBoughtController = this;
    
    AlreadyBoughtController.items = ShoppingListCheckOffService.getListBought();  
}
 // Service
function ShoppingListCheckOffService(){
  var service = this;
  //var count_Iteration = 0;  // for test

  // List of shopping items to buy   
  var tobuy_items = [{name: "chocolate", quantity: 1},{name: "ham", quantity: 2},{name: "cookies", quantity: 10},{name: "cheese", quantity: 1},{name: "patatoes", quantity: 10}];   
  // list of bought items
  var bought_items = [];

  //Expose items to buy
  service.getItems = function(){   
    return tobuy_items;
  }; 

   // Remove item from list to buy
  service.removeItem = function (itemIdex,item){    
    bought_items.push(item);
    //console.log("length of bought_items after iteration "+ bought_items.length);   
    //console.log("value of item --> name : " + bought_items[count_Iteration].name + " quantity :" + bought_items[count_Iteration++].quantity);
    tobuy_items.splice(itemIdex, 1);
  };

   // Expose bought items
   service.getListBought = function(){          
        return bought_items;       
  };
}
})();
