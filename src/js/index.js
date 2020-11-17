//import axios from "axios";
//https://unpkg.com/axios/dist/axios.min.js
//import axios from './axios.min.js';

const displayIndexListings = async () => {
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
	
	console.log(listings);
	
	
	var i;
    for (i = 0; i < listings.length; i++) {
        let dm = document.createElement("div");
		dm.className = 'col-12 col-sm-6 col-lg-4';			
							
		dm.innerHTML =                     '<div class="single_top_sellers">' +
                                                '<div class="top_seller_image">' +
                                                    '<img src="' + listings[i].photo + '" alt="Top-Sellers">' +
                                                '</div>' +
                                                '<div class="top_seller_desc">' +
                                                    '<h5>' + listings[i].itemName + '</h5>' +
                                                    '<h6>' + listings[i].price + '</h6>' +
                                                    

                                                    '<!-- Info -->' +
                                                    '<div class="ts-seller-info mt-3 d-flex align-items-center justify-content-between">' +
                                                        '<!-- Add to cart -->' +
                                                        '<div class="ts_product_add_to_cart" style="padding-left:40px;">' +
                                                            '<a href="#" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i class="icofont-shopping-cart" style=></i></a>' +
                                                        '</div>' +

                                                        '<!-- Quick View -->' +
                                                        '<div class="ts_product_quick_view" style="padding-left:7px;padding-right:30px">' +
                                                            '<a href="#" data-toggle="modal" data-target="#' + 'quickview' + '"><i class="icofont-eye-alt"></i></a>' +
                                                        '</div>' +
                                                    '</div>' +
                                                '</div>' +
                                            '</div>';
							
		document.getElementById("listingdisplay").appendChild(dm);
		
		
		
		let quickview = document.createElement("div");
		quickview.innerHTML =  '<div class="modal fade" id="' + 'quickview' + '" tabindex="-1" role="dialog" aria-labelledby="quickview" aria-hidden="true">' + 
        '<div class="modal-dialog modal-lg modal-dialog-centered" role="document">' + 
            '<div class="modal-content">' + 
               '<button type="button" class="close btn" data-dismiss="modal" aria-label="Close">' + 
                    '<span aria-hidden="true">&times;</span>' + 
                '</button>' + 
                '<div class="modal-body">' + 
                    '<div class="quickview_body">' + 
                        '<div class="container">' + 
                            '<div class="row">' + 
                                '<div class="col-12 col-lg-5">' + 
                                    '<div class="quickview_pro_img">' + 
                                        '<img class="first_img" src="img/product-img/new-1-back.png" alt="">' + 
                                        '<img class="hover_img" src="img/product-img/new-1.png" alt="">' + 
                                        '<!-- Product Badge -->' + 
                                        '<div class="product_badge">' + 
                                            '<span class="badge-new">New</span>' + 
                                        '</div>' + 
                                    '</div>' + 
                                '</div>' + 
                                '<div class="col-12 col-lg-7">' + 
                                    '<div class="quickview_pro_des">' + 
                                        '<h4 class="title">' + listings[i].itemName + '</h4>' + 
                                        '<div class="top_seller_product_rating mb-15">' + 
                                            '<i class="fa fa-star" aria-hidden="true"></i>' + 
                                            '<i class="fa fa-star" aria-hidden="true"></i>' + 
                                            '<i class="fa fa-star" aria-hidden="true"></i>' + 
                                            '<i class="fa fa-star" aria-hidden="true"></i>' + 
                                            '<i class="fa fa-star" aria-hidden="true"></i>' + 
                                        '</div>' + 
                                        '<h5 class="price">$120.99 <span>$130</span></h5>' + 
                                        '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia expedita quibusdam aspernatur, sapiente consectetur accusantium perspiciatis praesentium eligendi, in fugiat?</p>' + 
                                        '<a href="#">View Full Product Details</a>' + 
                                    '</div>' + 
                                    '<!-- Add to Cart Form -->' + 
                                    '<form class="cart" method="post">' + 
                                        '<div class="quantity">' + 
                                            '<input type="number" class="qty-text" id="qty" step="1" min="1" max="12" name="quantity" value="1">' + 
                                        '</div>' + 
                                        '<button type="submit" name="addtocart" value="5" class="cart-submit">Add to cart</button>' + 
                                        '<!-- Wishlist -->' + 
                                        '<div class="modal_pro_wishlist">' + 
                                            '<a href="wishlist.html"><i class="icofont-heart"></i></a>' + 
                                        '</div>' + 
                                        '<!-- Compare -->' + 
                                        '<div class="modal_pro_compare">' + 
                                            '<a href="compare.html"><i class="icofont-exchange"></i></a>' + 
                                        '</div>' + 
                                    '</form>' + 
                                    '<!-- Share -->' + 
                                    '<div class="share_wf mt-30">' + 
                                        '<p>Share with friends</p>' + 
                                        '<div class="_icon">' + 
                                            '<a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>' + 
                                            '<a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>' + 
                                            '<a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a>' + 
                                            '<a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>' + 
                                            '<a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>' + 
                                            '<a href="#"><i class="fa fa-envelope-o" aria-hidden="true"></i></a>' + 
                                        '</div>' + 
                                    '</div>' + 
                                '</div>' + 
                            '</div>' + 
                        '</div>' + 
                    '</div>' + 
                '</div>' + 
            '</div>' + 
        '</div>' + 
    '</div>';
	
	document.getElementById('quickviews').appendChild(quickview);
	
	
    }			
}




displayIndexListings();