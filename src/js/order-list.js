

const displayUserOrders = async () => {
	//console.log('TEST');
	var orders;
	var res;
    try {
	  //console.log('foo');
      res = await axios.get('https://tmja41h57h.execute-api.us-east-1.amazonaws.com/order/order');
	  orders = JSON.parse(res.data.body);
	  //console.log('foo2');
	  //console.log(listings);
      
    } catch (err) {
      console.log('An error has occurred' + err);
    }
	
	console.log(orders);
	
	//console.log("orders[0]: " + orders[3].BuyerID);
	
	var name = getUserEmail();
	var i;
	var userOrders = [];
	for(i = 0; i < orders.length; i++) {
		console.log(orders[i].BuyerID + " = " + name);
		if(orders[i].BuyerID == name) {
			userOrders.push(orders[i]);
		}
	}
	
	console.log("userOrders: " + userOrders);
	
	var j;
	for(j = 0; j < userOrders.length; j++) {
		
		var dm = document.createElement("tr");
		
        dm.innerHTML =                      '<th scope="row">' + 
                                                userOrders[j].OrderID + 
                                            '</th>' + 
                                            '<td>' + 
                                                userOrders[j].Date + 
                                            '</td>' +
											'<td>' + 
                                                "Pending" + 
                                            '</td>' +
                                            '<td>' + 
                                                await(getListingItemFromId(userOrders[j].ListingID)) + 
                                            '</td>' + 
                                            '<td>' + 
                                                userOrders[j].BuyerID + 
                                            '</td>' +
                                            '<td>' + 
                                                userOrders[j].SellerID + 
                                            '</td>' + 
											'<td>' + 
                                                '<a href="#" id="' + userOrders[j].OrderID + '" onclick="handleDeleteOrder(' + userOrders[j].OrderID + '); return false" class="btn btn-primary btn-sm m-2">Cancel</a>' + 
                                            '</td>';
											
        document.getElementById("orderdisplay").appendChild(dm);                                
	}	
}


const handleDeleteOrder = async (OrderID) => {
    // add call to AWS API Gateway delete product endpoint here
    try {
      await axios.delete('https://tmja41h57h.execute-api.us-east-1.amazonaws.com/order/order/' + OrderID);
	  document.getElementById(OrderID).innerHTML = "Removed";
    }catch (err) {
      console.log('Unable to delete order: ' + err);
    }
}


const getListingItemFromId = async (ListingID) => {
	var listings;
	var res;
    try {
      res = await axios.get('https://girv85kc2c.execute-api.us-east-1.amazonaws.com/Prod/listings');
	  listings = res.data;     
    } catch (err) {
      console.log('An error has occurred' + err);
    }
	
	console.log("order-list.js:getListingItemFromId " + listings);
	var i;
	for(i = 0; i < listings.length; i++) {
		if(listings[i].ListingID == ListingID) {
			console.log(listings[i].itemName);
			return listings[i].itemName;
		}
	}
}


displayUserOrders();