(function () {
'use strict';
angular.module('ShoppingListCheckOff',[])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// injection of ShoppingListCheckOffService
ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
//controller
function ToBuyShoppingController(ShoppingListCheckOffService){
  var ToBuyController = this;
    // A faire
    // retrieve items
   // alert("DEBUT CONTROLEUR 1");
    ToBuyController.items = ShoppingListCheckOffService.getItems();
    //ToBuyController.lenght = ShoppingListCheckOffService.mylenght;
    //console.log("items to buy  now " +   ShoppingListCheckOffService.getItems());
   // console.log("items to buy  name : " +   ToBuyController.items[2].name + " items to buy quantity :" + ToBuyController.items[2].quantity);
    //console.log("items to buy ");
    //console.log("items lenght " +   ShoppingListCheckOffService.mylenght()); //OK    
    //remove item from list to buy
    ToBuyController.removeItem = function(itemIndex){
      var item = {name:ToBuyController.items[itemIndex].name, quantity:ToBuyController.items[itemIndex].quantity };
      console.log("item en cours.. name :" + ToBuyController.items[itemIndex].name + " quantity : " + ToBuyController.items[itemIndex].quantity); // Ajout test
        ShoppingListCheckOffService.removeItem(itemIndex,item);
        //alert("INVOCATION DU SERVICE DANS CONTROLEUR 1");
        // invoke service bought_items
        //ShoppingListCheckOffService.getListBought();        
    };
    //alert("FIN CONTROLEUR 1");
}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
//controller
function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
  var AlreadyBoughtController = this;
    // test
    //alert("DEBUT CONTROLEUR 2");    
    AlreadyBoughtController.start = function(){
      AlreadyBoughtController.items = ShoppingListCheckOffService.getListBought();
         //console.log("INVOCATION DU CONTROLEUR NUM. 2");
         alert("INVOCATION DU SERVICE DANS CONTROLEUR 2");         
        var i;
        for(i=0; i<AlreadyBoughtController.items.length;i++)
        {
          console.log("Objet vendu --> name :" + AlreadyBoughtController.items[i].name + " quantity :" + AlreadyBoughtController.items[i].quantity);
        } 
    };

    //AlreadyBoughtController.items = ShoppingListCheckOffService.getListBought();  
}
 // service
function ShoppingListCheckOffService(){
  var service = this;
  var count_Iteration = 0;

  // List of shopping items to buy (local list)
  var items = [{name: "chocolate", quantity: 1},{name: "ham", quantity: 2},{name: "cookies", quantity: 10},{name: "cheese", quantity: 1},{name: "patatoes", quantity: 10}];  
  //List of items to buy
   var tobuy_items = [];
  // list of bought items
  var bought_items = [];

  //expose items to buy
  service.getItems = function(){
    var i ;
    for(i=0; i< items.length;i++)
    {      
      tobuy_items.push(items[i]);
    }
    return tobuy_items;
  };

  service.mylenght = function(){
    return tobuy_items.length;
  };

   // Remove item of list to buy
  service.removeItem = function (itemIdex,item){    
    bought_items.push(item);
    console.log("length of bought_items after iteration "+ bought_items.length);  //COMMENTE 
    console.log("value of item --> name : " + bought_items[count_Iteration].name + " quantity :" + bought_items[count_Iteration++].quantity);
    tobuy_items.splice(itemIdex, 1);
  };

   service.getListBought = function(){
    if(bought_items.length != 0)
    {
         alert("service getListBought");
         console.log("service getListBought");
        return bought_items;
       
    }
       
  };
}
})();
