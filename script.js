function domobj(){
  var self        =this;
  self.products   = [];

  self.getproducts = function(url){
    $.getJSON(url, function(response){
        for(i=0; i<response.sales.length ; i++){
          self.products.push( new productobj(response.sales[i], i)  );
        }
    });
  }
    
  self.updateproducthtml = function(){
    for( i=0; i< self.products.length ; i++){
      self.products[i].updatehtml();
    }
  }
  
  self.updatedom = function(){
    var i=0
    thishtml='';
    for( i=0; i< self.products.length ; i++){
      if (i % 3 == 0 ){  thishtml += "<div class='row'>"; console.log("START") }
      thishtml += self.products[i].htmlview;
      if ((i % 3 == 2) || i == (self.products.length-1) ){thishtml += "</div>";console.log("FINISH")}
    }
    document.getElementById('loading').style.display = "none"; // hide loader once content is set to populate
    $("#content").append(thishtml)
  }
  
}

function productobj(product, i){
  var self          = this;
  self.photo        = product.photos.medium_half
  self.title        = product.name
  self.tagline      = product.tagline
  self.overlay      = product.description
  self.url          = product.url
  self.htmlview     = ""
  self.index        = i
  self.custom_class = "col"+ ((i % 3) +1)
  
  self.updatehtml= function(){
    $.get('product-template.html', function(template){
      self.htmlview = template.replace('{overlay}', self.overlay).replace('{image}', self.photo).replace('{title}', self.title).replace('{tagline}', self.tagline).replace('{url}', self.url).replace('{custom_class}', self.custom_class);
    });
  }
}


var page=new domobj();
page.getproducts('data.json');
setTimeout("console.log('building html');page.updateproducthtml();",200);
setTimeout("page.updatedom()",2000);


// NEW FUNCTIONS

function closeProduct(target) {
  target.parentNode.className += " slideUp";
  target.parentNode.style.opacity = "0"; 
  setTimeout(function(){target.parentNode.style.display = "none";},1500);
}

function toggleOverlay(target,display,opacity) {
  target.querySelector(".overlay").style.display = display;
  target.querySelector(".overlay").style.opacity = opacity;
}


