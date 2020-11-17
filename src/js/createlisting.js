

const addListing = async (photoURL) => {
	console.log("adding listing");
	
    var randomnum = Math.floor(Math.random()*10000)//only for demo purposes
	var temporaryID = randomnum.toString();
    // add call to AWS API Gateway add product endpoint here
    try {
      const params = {
        "ListingID": temporaryID,
        "itemName": document.getElementById("itemName").value,
		"description": document.getElementById("description").value,
		"price": document.getElementById("price").value,
		"photo": photoURL,
		"isSold": false,
		"sellerID": "123"
      };
	  
	  var invokeURL = 'https://girv85kc2c.execute-api.us-east-1.amazonaws.com/Prod/listings/'+temporaryID;
      await axios.post(invokeURL, params);
	  
	  console.log("ok");

    }catch (err) {
      console.log('An error has occurred: ' + err);
    }
}

