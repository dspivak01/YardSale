//import axios from "axios";
//https://unpkg.com/axios/dist/axios.min.js
//import axios from './axios.min.js';

const foo = async () => {
	console.log('TEST');
	var listings;
	var res;
    try {
	  console.log('foo');
      res = await axios.get('https://girv85kc2c.execute-api.us-east-1.amazonaws.com/Prod/listings');
	  listings = res.data;
	  console.log('foo2');
	  console.log(listings);
      
    } catch (err) {
      console.log('An error has occurred' + err);
    }
	
	console.log("TESTING.JS " + listings);
	
	
	var i;
    for (i = 0; i < listings.length; i++) {
        let dm = document.createElement("div");
		
		//temporary fix to make the divs wider
		var temporaryCSSfix = "<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
		"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
		"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
		"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
		"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
		"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
		"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
		"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
		"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
		"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
		"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
		"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
		"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
		"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
		"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
		"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
		"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
		
		dm.innerHTML =  '<div class="col-12">' + 
                                '<div class="single-product-area mb-30">' +
                                    '<div class="product_image">' + 
                                        '<!-- Product Image -->' + 
                                        '<img class="normal_img" src="' + listings[i].photo + '" alt="">' +
                                        '<!-- img class="hover_img" src="' + listings[i].photo + '" alt="" -->'+

                                        '<!-- Product Badge -->'+
                                        '<div class="product_badge">'+
                                            '<span>New</span>'+
                                        '</div>'+

                                        
                                    '</div>'+

                                    '<!-- Product Description -->'+
                                    '<div class="product_description">'+
                                        '<!-- Add to cart -->'+
                                        '<div class="product_add_to_cart">'+
                                            '<a href="#" onclick="setOrderCookie(' + listings[i].ListingID + '); return false"><i class="icofont-shopping-cart"></i> Add to Cart</a>'+
                                        '</div>'+

                                        '<!-- Quick View -->'+
                                        '<div class="product_quick_view">'+
                                            '<a href="#" onclick="modal(' + listings[i].ListingID + ', ' + "'"+listings[i].itemName+"'" + ', ' + "'"+listings[i].price+"'" + ', ' + "'"+listings[i].photo+"'" + ', ' + "'"+listings[i].description+"'" + ')" data-toggle="modal" data-target="#' + 'quickview"' + '><i class="icofont-eye-alt"></i> Quick View</a>'+
                                        '</div>'+

                                        '<p class="brand_name">Top</p>'+
                                        '<a href="#">' + listings[i].itemName + '</a>'+
                                        '<h6 class="product-price">$' + listings[i].price + '</h6>'+

                                        '<p class="product-short-desc">' + listings[i].description + temporaryCSSfix + '</p>'+
                                    '</div>'+
                                '</div>'+
                            '</div>';
							
		document.getElementById("listingdisplay").appendChild(dm);
    }
	
}

foo();