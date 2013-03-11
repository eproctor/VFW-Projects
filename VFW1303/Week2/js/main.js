/* Name: Eugene Proctor :: Project 2 :: VFW 1303 */

/* ========== Define Variables ========== */


	var newDiv		= document.createElement("div");
	var newUlTag 	= document.createElement("ul");
	var newLiTag	= document.createElement("li");
	var holdDiv = document.getElementById("display");
	var surveyCheckBoxes = document.getElementById("checkBoxField").survey; 		

	var today = document.getElementById("startdate");
	var name = document.getElementById("fullName");
	var eMail = document.getElementById("email");
	var travelCity = document.getElementById("city");
	var surveyCheckBoxes = document.getElementById("checkBoxField").survey; 		
	var comment = document.getElementById("description");
	var rating = document.getElementById("rating");
	



/* ========== Look for blur events ========== */
/*
	fullName.addEventListener("blur", saveData);	
	startdate.addEventListener("blur", saveData);
	email.addEventListener("blur", saveData);
	city.addEventListener("blur", saveData);
	checkBoxField.addEventListener("blur", saveData);
	description.addEventListener("blur", saveData);
	rating.addEventListener("blur", saveData);
//	keyValue.addEventListener("blur", saveData); 

*/


/* ========== Obtain Unique Key ========== */

	var newKey;
	var newId;
	var store;

	var keyValue = document.getElementById("key");

	newId = Math.random();
	keyValue.innerHTML = newId;
	newKey = newId + " - Todays Date";




/* ===============  Test Check Box Test ============ */


 var testCheckBox = function() {
/* alert ("beginning test check box");*/
 	for(i=0, j=surveyCheckBoxes.length; i<j; i++) {
/* alert ("starting survey check boxes check"); */
 		if (surveyCheckBoxes[i].checked) {
 			console.log(surveyCheckBoxes[i].value);
 			localStorage.setItem(newId + "e) Relationship to Owner", surveyCheckBoxes[i].value);
 			
 		}  
 	}
alert ("Point of Contact Saved");
 };




 /* ======  Save Data to Local Storage  ====== */

 
var saveData = function() {

		 var barLine = "===========  End of Data ===========";
		 var emptyBarLine = " "; 
		 var bar;

		localStorage.setItem(newId + "a) Unique key", keyValue.innerHTML);
		localStorage.setItem(newId + "b) Todays Date", startdate.value);
		localStorage.setItem(newId + "c) Point of Contact", fullName.value); 
		localStorage.setItem(newId + "d) Email Address", email.value);
		localStorage.setItem(newId + "f) Travel City", city.value);
		localStorage.setItem(newId + "g) Leave a Comment", description.value);
		localStorage.setItem(newId + "h) Rate your Comfort Level", rating.value);
		localStorage.setItem(newId, emptyBarLine);
		localStorage.bar = barLine;
	
		testCheckBox();
		window.location.reload();
/*		alert ("");		*/

}




 
/* ========== Clear Data  ========== */


var clearData = function() {


	var confirmDelete = confirm("Are you sure you want to delete?");
	if (confirmDelete) {
		localStorage.clear();
		alert ("The Contacts have been Deleted");
		window.location.reload();
		}else{
			alert("The Contacts Are Not Deleted");
		}	
		
}



/* ========== Display Data for testing  ========== */

var displayEntries = function() {

		 
	console.log ("This is a test for Display Entries function");
	
		for (i=0, j=localStorage.length; i<j; i++) {
			
				var finalKey = localStorage.key(i);
				var finalValue = localStorage.getItem(finalKey);

/*				var finalOutPut = (finalKey + " : " + finalValue); */
				var finalOutPut = (finalKey.substring(21,45) + " : " + finalValue);

				console.log (finalKey + " : " + finalValue);
				console.log (finalKey.substring(21,45) + " : " + finalValue);
					
				var newLiTag = document.createElement("li");
				newLiTag.innerHTML = finalOutPut;
				newUlTag.appendChild(newLiTag);
	
		} 
		
		holdDiv.appendChild(newUlTag); 
		 
		var emptyScreen = document.getElementById("hide");
		
		emptyScreen.innerHTML = "hidden=true";
		
				
}	
	
	
			

/* ========== Check for Empty Storage ========== */

var emptyStorage = function() {
	
	if (localStorage.length===0) {
	
		alert ("Local Storage is Empty");
		console.log ("The storage is empty.");
		
	} else {
		displayEntries();

		} 
}


			

var addContact = function() {

	window.location.reload();

}
			
/* alert ("this is the bottom of the page");	*/		





//------------------------------------------------------------		


		
	


/* ======================  Call Functions and Buttons for Testing ====================  */

/*
//	submitButton.addEventListener("click", saveData);
//	displayButton.addEventListener("click", displayEntries); 
//	clearButton.addEventListener("click", clearData); 
	//submitButton.addEventListener("click", clearData); 
	//getInfo.addEventListener("click", recoverData)
	//removeData.addEventListener("click", deletedata)

*/

	
