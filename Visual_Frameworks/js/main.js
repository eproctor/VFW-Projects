/* Name: Eugene Proctor :: Project 2 :: VFW 1302 */




/* ========== Obtain Unique Key ========== */

	var keyValue = document.getElementById("key");
	keyValue.innerHTML=Math.random();
	



/* ========== Storage Function ========== */

var storeData = function() {

	var today, name, eMail;
	var travelAtlanta, travelFlorida,travelCharlotte;
	var surveySocialmedia, surveyTelevision, surveyRadios, surveyFriend;
	var comment, rating, keyEntry;


	alert ("Local Storage created...");
	
	localStorage.keyEntry = keyValue.innerHTML; 
	localStorage.today = startdate.value;
	localStorage.name = fullName.value;
	localStorage.eMail = email.value;

	localStorage.travelCity = city.value;
	
	localStorage.surveySocialmedia = socialmedia.checked;
	localStorage.surveyTelevision = television.checked;
	localStorage.surveyRadios = radios.checked;
	localStorage.surveyFriend = friend.checked;
	
	localStorage.comment = description.value;
	localStorage.comfort = rating;


};


/* ========== Display Data  ========== */

var displayData = function() {
			
				/*	alert ("hello"); */
				var newUlTag = document.createElement("ul");
				var holdDiv = document.getElementById("display");
			 
			
				var displayArray = [
				
				"key:..............." +  		 localStorage.keyEntry,
				 "date:..............." + 		 localStorage.today,
				"name:..............." + 		 localStorage.name,
				"email:..............." +		 localStorage.eMail,
				"city:..............." + 		 localStorage.travelCity,
				"surveySocial:..............." + localStorage.surveySocialmedia,
				"surveyTv:..............." + 	 localStorage.surveyTelevision,
				"surveyradio:..............." +	 localStorage.surveyRadios,
				"surveyradio:..............." +	 localStorage.surveyFriend,
				"comment:..............." + 	 localStorage.comment,
				"rating:..............." + 		 localStorage.comfort
				
				];
			
			
				holdDiv.appendChild(newUlTag);
				
				for (i=0, j=displayArray.length; i<j; i++) {
					var anLiTag = document.createElement("li");
					anLiTag.innerHTML = displayArray[i];
					newUlTag.appendChild(anLiTag);
			
			}			
	var emptyScreen = document.getElementById("hide")
	emptyScreen.innerHTML = "hidden=true";

}



/* ========== Clear Data  ========== */


var clearData = function() {
		
	localStorage.clear(); 
		
}