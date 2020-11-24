

const displayUserDeliveries = async () => {
	//console.log('TEST');
	var deliveries;
	var res;
    try {
	  //console.log('foo');
      res = await axios.get('https://mumznwzp5a.execute-api.us-east-1.amazonaws.com/delivery/delivery');
	  deliveries = JSON.parse(res.data.body);
	  //console.log('foo2');
	  //console.log(listings);
      
    } catch (err) {
      console.log('An error has occurred' + err);
    }
	
	console.log(deliveries);
	
	
	//console.log("orders[0]: " + orders[3].BuyerID);
	
	var name = getUserEmail();
	var i;
	var userDeliveries = [];
	for(i = 0; i < deliveries.length; i++) {
		console.log("deliveries[i].BuyerID: " + deliveries[i].BuyerID + " = " + name);
		if(deliveries[i].BuyerID == name) {
			userDeliveries.push(deliveries[i]);
		}
	}
	
	console.log("userDeliveries: " + userDeliveries);
	
	/*
											<th scope="col">Delivery</th>
                                            <th scope="col">Buyer</th>
											<th scope="col">Seller</th>
											<th scope="col">Pickup Address</th>
                                            <th scope="col">Delivery Address</th>
                                            <th scope="col">Pickup Time</th>
											<th scope="col">Delivery Time</th>
											<th scope="col">Fulfilled</th>
	*/

	var j;
	for(j = 0; j < userDeliveries.length; j++) {
		
		var dm = document.createElement("tr");
		
        dm.innerHTML =                      '<th scope="row">' + 
                                                userDeliveries[j].DeliveryID + 
                                            '</th>' + 
                                            '<td>' + 
                                                userDeliveries[j].BuyerID + 
                                            '</td>' +
											'<td>' + 
                                                userDeliveries[j].SellerID + 
                                            '</td>' +
                                            '<td>' + 
                                                userDeliveries[j].PickupAddress + 
                                            '</td>' + 
                                            '<td>' + 
                                                userDeliveries[j].DeliveryAddress + 
                                            '</td>' +
                                            '<td>' + 
                                                userDeliveries[j].PickupTime + 
                                            '</td>' + 
											'<td>' + 
                                                userDeliveries[j].DeliveryTime + 
                                            '</td>' + 
											'<td>' + 
                                                userDeliveries[j].ListingID + 
                                            '</td>' + 
											'<td>' + 
                                                userDeliveries[j].OrderID + 
                                            '</td>' + 
											'<td>' + 
                                                userDeliveries[j].Fulfilled + 
                                            '</td>' + 
											'<td>' + 
                                                userDeliveries[j].Status + 
                                            '</td>' + 
											'<td>' + 
                                                '<a href="#" id="' + userDeliveries[j].DeliveryID + '"onclick="chatbutton(); return false" class="btn btn-primary btn-sm m-2">Chat</a>' + 
                                            '</td>';
											
        document.getElementById("deliverydisplay").appendChild(dm);                                
	}	
}


function chatbutton(){
	alert("Chat feature coming soon!");
}


displayUserDeliveries();