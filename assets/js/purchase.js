define(["credits", "products"], function(credits, products){
  console.log("Function : purchaseProduct");

  return {
    purchaseProduct: function(){
      var credit = credits.getCredits();
    }
  }
});
