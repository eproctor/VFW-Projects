/* Name: Eugene Proctor :: Project 3 :: VFW 1302 */






/* ========== Obtain Unique Key ========== */

	var keyValue = document.getElementById("key");
	keyValue.innerHTML=Math.random();





/* ==========  Variables  ========== */

	/*alert ("Create Variables...");*/

	var today = document.getElementById("startdate");
	var name = document.getElementById("fullName");
	var eMail = document.getElementById("email");
	var travelCity = document.getElementById("city");
	var surveyCheckBoxes = document.getElementById("checkBoxField").survey; 		
	var comment = document.getElementById("description");
	var rating = document.getElementById("rating");
	
	




/* ===============  Test Check Box Test ============ */


 var testCheckBox = function() {
 
 	for(i=0, j=surveyCheckBoxes.length; i<j; i++) {
 			
 		if (surveyCheckBoxes[i].checked) {
 			console.log(surveyCheckBoxes[i].value);
 			localStorage.setItem("Survey Question", surveyCheckBoxes[i].value);
 			

 			
 		}  
 	}

 };




 /* ======  Save Data to Local Storage  ====== */

 
var saveData = function() {

	localStorage.setItem("Unique key", keyValue.innerHTML);
	localStorage.setItem("Todays Date", startdate.value);
	localStorage.setItem("Full Name", fullName.value); 
	localStorage.setItem("Email Address", email.value);
	localStorage.setItem("Travel City", city.value);
	localStorage.setItem("Leave a Comment", description.value);
	localStorage.setItem("Rate your Comfort Level", rating.value);

	testCheckBox();

	
};



 
 /* ====================  Event Listener ===================== */
 
 
/*	
	fullName.addEventListener("blur", saveData);	
	startdate.addEventListener("blur", saveData);
	email.addEventListener("blur", saveData);
	city.addEventListener("blur", saveData);
	checkBoxField.addEventListener("blur", saveData);
	description.addEventListener("blur", saveData);
	rating.addEventListener("blur", saveData);
	keyValue.addEventListener("blur", saveData); 
	
*/
 
 
 
/* ========== Clear Data  ========== */


var clearData = function() {
		
	localStorage.clear(); 
		
}





/* ========== Display Data for testing  ========== */

var displayEntries = function() {

var newUlTag = document.createElement("ul");
var holdDiv = document.getElementById("display");



for(i=0, j=localStorage.length; i<j; i++) {
	var finalKey = localStorage.key(i);
	var finalValue = localStorage.getItem(finalKey);
	console.log (finalKey + " : " + finalValue);
	var finalOutPut = (finalKey + " : " + finalValue);
	var anLiTag = document.createElement("li");
	anLiTag.innerHTML = finalOutPut;
	newUlTag.appendChild(anLiTag);

};
 
holdDiv.appendChild(newUlTag);
 
var emptyScreen = document.getElementById("hide")
emptyScreen.innerHTML = "hidden=true";



};



/* ===================  Recover Data ================= */


				

    var recoverData = function() {
  
		startdate.value = localStorage.getItem("Todays Date");		
		keyValue.innerHTML = localStorage.getItem("Unique key");
		fullName.value = localStorage.getItem("Full Name");
		email.value = localStorage.getItem("Email Address");
		city.value = localStorage.getItem("Travel City");
		checkBoxField.survey = localStorage.getItem("Survey Question"); 		
		description.value = localStorage.getItem("Leave a Comment");
		rating.value = localStorage.getItem("Rate your Comfort Level");




						/* ======   Recover Check Box Data  ====== */
				
				
				var x;
				
				x = localStorage.getItem("Survey Question");

				if (x === "radios") {
					radios.checked = "checked";				
				};
				
				if (x === "socialmedia") {
					socialmedia.checked = "checked";	
				};
				
				if (x === "television") {
					television.checked = "checked";					
				};
				
				if (x === "friend") {
					friend.checked = "checked";				
				};
				
};




/* ===================  Delete Item Function ================ */


var deletedata = function() {

	var confirmDelete = confirm("Are you sure you want to delete?");
	if (confirmDelete) {
		localStorage.clear();
		localStorage.removeItem(this.key);
		alert("Item Deleted")
		window.location.reload();
		}else{
			alert("Item was not Deleted");
		}
	
	}

 


/* ======================  Call Functions and Buttons ====================  */

	submitButton.addEventListener("click", saveData);
	displayButton.addEventListener("click", displayEntries); 
	clearButton.addEventListener("click", clearData); 
	getInfo.addEventListener("click", recoverData)
	removeData.addEventListener("click", deletedata)


