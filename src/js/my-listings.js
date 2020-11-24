

const displayUserListings = async () => {
	var listings;
	var res;
    try {
      res = await axios.get('https://girv85kc2c.execute-api.us-east-1.amazonaws.com/Prod/listings');
	  listings = res.data;   
    } catch (err) {
      console.log('An error has occurred' + err);
    }
	
	console.log(listings);
	
	//console.log("orders[0]: " + orders[3].BuyerID);
	
	var name = getUserEmail();
	var i;
	var userListings = [];
	for(i = 0; i < listings.length; i++) {
		//console.log(orders[i].BuyerID + " = " + name);
		console.log("my-listings.js:displayUserListings " + listings[i].sellerID + " name " + name);
		if(listings[i].sellerID == name) {
			userListings.push(listings[i]);
		}
	}
	
	console.log("userListings: " + userListings);
	
	var j;
	for(j = 0; j < userListings.length; j++) {
		
		var dm = document.createElement("tr");
		
        dm.innerHTML =                      '<th scope="row">' + 
                                                '<img src="' + userListings[j].photo + '" alt="">' + 
                                            '</th>' + 
                                            '<td>' + 
                                                userListings[j].ListingID + 
                                            '</td>' +
											'<td>' + 
                                                userListings[j].itemName +
                                            '</td>' +
                                            '<td>' + 
                                                userListings[j].price + 
                                            '</td>' + 
                                            '<td>' + 
                                                userListings[j].isSold + 
                                            '</td>' +
                                            '<td>' + 
                                                userListings[j].sellerID + 
                                            '</td>' + 
											'<td>' + 
                                                '<a href="#" id="' + userListings[j].ListingID + '" onclick="handleDeleteListing(' + userListings[j].ListingID + '); return false" class="btn btn-primary btn-sm m-2">Delete</a>' + 
                                            '</td>';
											
        document.getElementById("listingdisplay").appendChild(dm);                                
	}	
}


const handleDeleteListing = async (ListingID) => {
    // add call to AWS API Gateway delete product endpoint here
    try {
      await axios.delete('https://girv85kc2c.execute-api.us-east-1.amazonaws.com/Prod/listings/' + ListingID);
	  document.getElementById(ListingID).innerHTML = "Removed";
    }catch (err) {
      console.log('Unable to delete listing: ' + err);
    }
}

/*
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
*/

displayUserListings();