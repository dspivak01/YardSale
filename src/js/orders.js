var totalCost = 0;

function getCookieOrders(cname) {
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


function updateOrderOnLoad(){
	totalCost = 0;
	var cookieString = getCookieOrders('ListingID');
	if(cookieString == "") {
		return;
	}
	var ids = cookieString.split('|');
	var i;
	for(i = 0; i < ids.length; i++) {
		updateOrder(ids[i]);
	}
}

//update order display from ListingID cookie
const updateOrder = async (ListingID) => {
	var listings;
	var res;
    try {
      res = await axios.get('https://girv85kc2c.execute-api.us-east-1.amazonaws.com/Prod/listings');
	  listings = res.data;
	  //console.log(listings);
      
    } catch (err) {
      console.log('An error has occurred' + err);
    }
	
	//console.log("getListings");
	//console.log(listings);
	
	var product;
	
	var i;
	for(i = 0; i < listings.length; i++){
		if(listings[i].ListingID == ListingID) {
			product = listings[i];
			//console.log("FOUND LISTING");
			//console.log(product);
			break;
		}
	}
	
	let dm = document.createElement("tr");
	dm.id = ListingID;
	if(product) {
	dm.innerHTML = '<th scope="row">' + 
                                           '<img src="' + product.photo + '" alt="Product">' + 
                                           '</th>' +  
                                            '<td>' + 
                                               '<a href="#">' + product.itemName + '</a>' + 
                                            '</td>' + 
                                            '<td>' + product.price + '</td>';
                                        
	
	document.getElementById("ordertable").appendChild(dm);
	totalCost += parseInt(product.price);
	document.getElementById("total").innerHTML = totalCost;
	}
}




const getListingInfoFromID = async (ListingID) => {
	var listings;
	var res;
    try {
      res = await axios.get('https://girv85kc2c.execute-api.us-east-1.amazonaws.com/Prod/listings');
	  listings = res.data;
	  //console.log(listings);
      
    } catch (err) {
      console.log('An error has occurred' + err);
    }
	
	//console.log("getListings");
	//console.log(listings);
	
	var product;
	
	var i;
	for(i = 0; i < listings.length; i++){
		if(listings[i].ListingID == ListingID) {
			product = listings[i];
			//console.log("EQUALS");
			console.log(product);

			console.log("adding order to db" + product.ListingID);
			addOrder(product.ListingID, product.sellerID);

			break;
			
		}
	}
}


const placeOrder = async () => {
	var cookieString = getCookieOrders('ListingID');
	if(cookieString == "") {
		return;
	}
	var ids = cookieString.split('|');
	var i;
	for(i = 0; i < ids.length; i++) {
		getListingInfoFromID(ids[i]);
		//console.log("PLACEORDER " + test);
	}
	document.getElementById("placeorderbutton").innerHTML = "Order Placed";
	deleteCookie();
}




//add order to database
const addOrder = async (ListingID, sellerID) => {
	console.log("adding order");
	
    var randomnum = Math.floor(Math.random()*10000)//only for demo purposes
	var temporaryID = randomnum.toString();
	
	var d = new Date();
	d.setTime(d.getTime());
	var dateOrdered = d.toUTCString();
	
	var name = getUserEmail();
    // add call to AWS API Gateway add product endpoint here
    try {
      const params = {
        "OrderID": temporaryID,
        "BuyerID": name,
		"Date": dateOrdered,
		"ListingID": ListingID,
		"SellerID": sellerID
      };
	  
	  var invokeURL = 'https://tmja41h57h.execute-api.us-east-1.amazonaws.com/order/order/'+temporaryID;
      await axios.post(invokeURL, params);
	  
	  console.log("ok");

    }catch (err) {
      console.log('An error has occurred: ' + err);
    }
}



updateOrderOnLoad();
