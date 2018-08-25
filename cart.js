var numofItems = 0;
$(document).ready(function() {
  $(".cart").on('click', function(e) {
    e.preventDefault();
    var itemNum = document.getElementsByClassName('itemNum')[0];
    numofItems++;
    localStorage.setItem('cartItems', numofItems);
    let cartNum = localStorage.getItem("cartItems");
    itemNum.textContent = cartNum;
    
    
    
  });
  
  
  
                  
});
