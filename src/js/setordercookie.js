//setordercookie.js
//sets cookie with listing IDs when user clicks on "add to cart" icon

function setOrderCookie(ListingID) {
  var d = new Date();
  d.setTime(d.getTime() + (2*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  if(getCookie('ListingID') === "") {
	//alert('no cookie');
	document.cookie = "ListingID" + "=" + ListingID + "|" + ";" + expires + ";path=/";
  }
  else {
	  //alert("else");
	  var ids = getCookie('ListingID').split('|');
	  var i;
	  for(i = 0; i < ids.length; i++) {
		  if(ids[i] == ListingID) {
			  return;
		  }
	  }
	  var cookieContent = getCookie('ListingID') + ListingID + "|";
	  document.cookie = "ListingID" + "=" + cookieContent + ";" + expires + ";path=/";
  }
  alert(getCookie('ListingID'));
  console.log(getCookie('ListingID'));
  
  updateCart(ListingID);
}


function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


//updates cart display in top right corner when user clicks "add to cart" icon
const updateCart = async (ListingID) => {
	var listings;
	var res;
    try {
      res = await axios.get('https://girv85kc2c.execute-api.us-east-1.amazonaws.com/Prod/listings');
	  listings = res.data;
	  console.log(listings);
      
    } catch (err) {
      console.log('An error has occurred' + err);
    }
	
	console.log("getListings");
	console.log(listings);
	
	var product;
	
	var i;
	for(i = 0; i < listings.length; i++){
		if(listings[i].ListingID == ListingID) {
			product = listings[i];
			console.log("FOUND LISTING");
			console.log(product);
			break;
		}
	}
	
	//var total = parseInt(document.getElementById('total').innerHTML);
	//total += parseInt(product.price);
	//document.getElementById('total').innerHTML = total;
	
	let dm = document.createElement("li");
	dm.id = ListingID;
	
	if(product) {
	
		dm.innerHTML = '<div class="cart-item-desc">' + 
			'<a href="#" class="image">' + 
			'<img src="' + product.photo + '" class="cart-thumb" alt="">' + 
			'</a>' + 
			'<div>' + 
				'<a href="#">' + product.itemName + '</a>' + 
				'<p>1 x - <span class="price">' + product.price + '</span></p>' + 
			'</div>' + 
		'</div>' + 
        '<span class="dropdown-product-remove" onclick="removeProduct(' + ListingID + ')"><i class="icofont-bin"></i></span>';
	
		document.getElementById("cart-list").appendChild(dm);
	}
	
}

//updates cart display with the listings stored in the ListingID cookie
//should be called when page is refreshed
function updateCartOnLoad(){
	var cookieString = getCookie('ListingID');
	if(cookieString == "") {
		return;
	}
	var ids = cookieString.split('|');
	var i;
	for(i = 0; i < ids.length; i++) {
		updateCart(ids[i]);
	}
}

//removes product from cart
function removeProduct(ListingID) {
	var cookieString = getCookie('ListingID').replace(ListingID + '|', '');
	var d = new Date();
	d.setTime(d.getTime() + (2*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = "ListingID" + "=" + cookieString + ";" + expires + ";path=/";
	document.getElementById("cart-list").removeChild(document.getElementById(ListingID));
}

updateCartOnLoad();
