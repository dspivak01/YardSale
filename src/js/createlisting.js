



const addListing = async (photoName) => {
	console.log("adding listing");
	//alert('test');
    var randomnum = Math.floor(Math.random()*10000)//only for demo purposes
	var temporaryID = randomnum.toString();
	var name = getUserEmail();
    // add call to AWS API Gateway add product endpoint here
    try {
      const params = {
        "ListingID": temporaryID,
        "itemName": document.getElementById("itemName").value,
		"description": document.getElementById("description").value,
		"price": document.getElementById("price").value,
		"photo": photoName,
		"isSold": false,
		"sellerID": name
      };
	  //alert('test1');
	  var invokeURL = 'https://girv85kc2c.execute-api.us-east-1.amazonaws.com/Prod/listings/'+temporaryID;
      await axios.post(invokeURL, params);
	  
	  console.log("ok");
	  
	  document.getElementById("upload-button").innerHTML = "Listing Created";

    }catch (err) {
      console.log('An error has occurred: ' + err);
    }
}


