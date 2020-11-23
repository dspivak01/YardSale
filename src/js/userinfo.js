var data = { 
		UserPoolId : _config.cognito.userPoolId,
        ClientId : _config.cognito.clientId
    };
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(data);
    var cognitoUser = userPool.getCurrentUser();
	
	var name;
	
	
	function updateUsernameDisplay() {
    if (cognitoUser != null) {
		//var name = "";
        cognitoUser.getSession(function(err, session) {
            if (err) {
                alert(err);
                return;
            }
            console.log('session validity: ' + session.isValid());
			//Set the profile info
			cognitoUser.getUserAttributes(function(err, result) {
				if (err) {
					console.log(err);
					return;
				}
				console.log(result);
				document.getElementById("usernamedropdown").innerHTML = result[2].getValue();	
				console.log("username: " + result[2].getValue());
				name = result[2].getValue();
				//return name;
			});			
			//return name;
        });
		
    }
	
	//return name;
}




	function signOut(){
	    if (cognitoUser != null) {
		  name="";
          cognitoUser.signOut();	  
        }
	}
	
	window.onload = function(){
		updateUsernameDisplay();
		if(document.getElementById("useremail")) {
			document.getElementById("useremail").innerHTML = name;
		}
	}
	
	
	//updateUsernameDisplay();