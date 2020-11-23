//updatequickview.js
//displays image/info popup on index-1.js

function modal (id, itemName, price, photo, description) {
	console.log(id);
	console.log(itemName);
	console.log(price);
	console.log(photo);
	console.log(description);
	
	document.getElementById("quickviews").innerHTML = '<div class="modal fade" id="' + 'quickview' + '" tabindex="-1" role="dialog" aria-labelledby="quickview" aria-hidden="true">' + 
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
                                        '<img class="first_img" src="' + photo + '" alt="">' + 
                                        '<!--img class="hover_img" src="img/product-img/new-1.png" alt=""-->' + 
                                        '<!-- Product Badge -->' + 
                                        '<div class="product_badge">' + 
                                            '<span class="badge-new">New</span>' + 
                                        '</div>' + 
                                    '</div>' + 
                                '</div>' + 
                                '<div class="col-12 col-lg-7">' + 
                                    '<div class="quickview_pro_des">' + 
                                        '<h4 class="title">' + itemName + '</h4>' + 
                                        '<div class="top_seller_product_rating mb-15">' + 
                                 
                                        '</div>' + 
                                        '<h5 class="price">' + price + '</h5>' + 
                                        '<p>' + description + '</p>' + 
                                        '<a href="#">View Full Product Details</a>' + 
                                    '</div>' + 
                                    '<!-- Add to Cart Form -->' + 
                                    '<form class="cart" method="post">' +  
                                        '<button type="submit" name="addtocart" value="5" class="cart-submit" onclick="setOrderCookie(' + id + '); return false">Add to cart</button>' + 
                                       
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
}