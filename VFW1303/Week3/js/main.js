/* Name: Eugene Proctor :: Project 3 :: VFW 1303 */

/* ========== Waiting on Dom to be ready  ========== */

var docGetId = function(x) {

	var theId = document.getElementById(x);
	return theId; 	

}




/* ========== Define Variables ========== */

var surveyCheckBoxes = document.getElementById("checkBoxField").survey;
var  errorVal = docGetId("errorValidation");			
		
 
 

 
 
// Validate the Form Field 
 var val = function(e) {
 	var valName = docGetId("fullName");
 	var valEmail = docGetId("email");
 	
// Clear Error Messages from screen
	/*errorMsg.innerHTML = ""; */
	valName.style.border = "1px solid black";
	/*valEmail.style.border = "1px solid black";*/
 	

// Display error messages
	var errorMsg = [];
	
// Check for error
	if (valName.value == "") {
		var nameError = "Please enter your name.";
		valName.style.border = "1px solid red";
		
		errorMsg.push(nameError);
	}
		 

/* ========== Email Validation  ========== */
/*
// Validate email using exec method for exact match in string
var regexp = /^\w+([\.-])?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if (!(regexp.exec(valEmail.value))) {
		var emailError = "Please enter a valid Email Address.";
		valEmail.style.border = "1px solid red";
		errorMsg.push(emailError);
	}	 

*/		 
// If errors exist from the Validation
	if(errorMsg.length >= 1) {
		for(var i=0, j=errorMsg.length; i<j; i++) {
			var msgLi = document.createElement("li");
			msgLi.innerHTML = errorMsg[i];
			errorVal.appendChild(msgLi);
		
		}
		 
		 e.preventDefault();
		 return false;
		 	
	}else{
// Save Data if there are no errors using the key value from the val function
		saveData(this.key);
		}
		
	}		 

 

/* ========== Edit Entry to Change Information  ========== */

// Grab the data out of local Storage;
var editContact = function() {



	
//Return Form Screen to Display	Form
		var emptyScreen = docGetId("hide");
		emptyScreen.removeAttribute("hidden", "true");	
		


//alert ("This is the Edit Entry Function");	
	
	var editValue = localStorage.getItem(this.key);
	var contact = JSON.parse(editValue);
	
	
		
		var parentBox = docGetId("parent");
		var auntBox = docGetId("aunt");
		var guardianBox = docGetId("guardian");
		var brotherBox = docGetId("brother");
		var sisterBox = docGetId("sister");
		
		
		/*======================================================================*/
		
				
		
		if (contact.surveyCheckBoxes[1] === "parent") {
			parentBox.setAttribute("checked", "checked")}
			
		if (contact.surveyCheckBoxes[1] === "aunt") {
			auntBox.setAttribute("checked", "checked");
			console.log (auntBox);}
		if (contact.surveyCheckBoxes[1] === "guardian") {
			guardianBox.setAttribute("checked", "checked");}
			
		if (contact.surveyCheckBoxes[1] === "brother") {
			brotherBox.setAttribute("checked", "checked");}
			
		if (contact.surveyCheckBoxes[1] === "sister") {
			sisterBox.setAttribute("checked", "checked");}				
			
	
// Populate Screen with saved data
	docGetId("startdate").value = contact.startdate[1];
	docGetId("fullName").value = contact.fullName[1];
	docGetId("email").value = contact.email[1];
	docGetId("city").value = contact.city[1];
	docGetId("description").value = contact.description[1];
	docGetId("rating").value = contact.rating[1];
 



// Modify Save button to be an Update button

	var editButton = docGetId("submitButton")
	editButton.removeAttribute("onclick","saveData");
	editButton.setAttribute("value","Edit Data");
// Saves key value for the entry we are editing...
	editButton.addEventListener("click",val);
	editButton.key = this.key;


		
}		
		
		
		


var deleteContact = function() {
	var confirmDelete = confirm ("Please confirm to delete this contact");
	if (confirmDelete) {
		localStorage.removeItem(this.key);
		alert ("The contact has been deleted");
		window.location.reload();
	
	}else{
		alert ("The contact did not delete");
		}
}	
	

	
		
		
		/*========================================================================*/
		
		

 /* ======  Save Data to Local Storage  ====== */

var surveyCheckBoxes = document.getElementById("checkBoxField").survey; 	
 
var saveData = function(key) {
	//if there is no key.  This is a new item and needs a new key
	if (!key) {
	
		var newId 			= Math.random(); 
	
	}else{
		// This will keep the current key so we can update the entry
		newId = key;
	
	}


var contact 								= {};
	contact.startdate						= ["Todays Date:", docGetId("startdate").value];
	contact.fullName						= ["First Name:", docGetId("fullName").value];	
	contact.email							= ["Email:", docGetId("email").value];
	contact.city							= ["Travel City:", docGetId("city").value];
	contact.description						= ["Leave a Comment:", docGetId("description").value];
	contact.rating							= ["Rate your Comfort Level:", docGetId("rating").value];
	
	
	for(i=0, j=surveyCheckBoxes.length; i<j; i++) {
		if (surveyCheckBoxes[i].checked) {
			console.log(surveyCheckBoxes[i].value);
			contact.surveyCheckBoxes		= ["Relationship to Owner:", surveyCheckBoxes[i].value];
		}
	}
	


// Save data into local storage,  Use stringify to convert object to a string
localStorage.setItem(newId, JSON.stringify(contact));
window.location.reload();
alert("JSON Data has been saved");	

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




/* ========== Display Data from Object to Screen  ========== */	
var displayEntries = function() {

	

	var newDiv = document.createElement("div");
	newDiv.setAttribute("newId", "contact");
	var newUl = document.createElement("ul");
	
	newDiv.appendChild(newUl);
	document.body.appendChild(newDiv);
	

	for (var i=0, len=localStorage.length; i<len; i++) {
	
		var newLi = document.createElement("li");
		newUl.appendChild(newLi);
			
		var anotherLi = document.createElement("li");
	
		
		var key = localStorage.key(i);
		var correctContact = localStorage.getItem(key);
		
		//Take the string from local storage and convert it back to an object by using JSON.parse()
		var contact = JSON.parse(correctContact);
		var anotherUl = document.createElement("ul");
		newLi.appendChild(anotherUl);
		for (var n in contact) {
			var newSubli = document.createElement("li");
			anotherUl.appendChild(newSubli);
			
			var text = contact[n][0] + "  " +contact[n][1]
			newSubli.innerHTML = text;
			anotherUl.appendChild(anotherLi);
			
		
		}
//Call function to Create the edit and delete links
		createLinks(localStorage.key(i), anotherLi);
	
	}


}


// Make Items Link Function
// Will create the edit and delete links

var createLinks = function(key, anotherLi) {

	var createEditLink = document.createElement("a");
	createEditLink.href = "#";
	createEditLink.key = key;
	var changeText = "Edit Contact";
	createEditLink.addEventListener("click", editContact);
	createEditLink.innerHTML = changeText;
	anotherLi.appendChild(createEditLink);

	// line break for edit and delete links
	var brTag = document.createElement("br");
	anotherLi.appendChild(brTag);

	var createDeleteLink = document.createElement("a");
	createDeleteLink.href = "#";
	createDeleteLink.key = key;
	var removeText = "Delete Contact";
	createDeleteLink.addEventListener("click", deleteContact);
	createDeleteLink.innerHTML = removeText;
	anotherLi.appendChild(createDeleteLink);




/* ========== Display only Results  ========== */	


var emptyScreen = document.getElementById("hide");

emptyScreen.setAttribute("hidden", "true");


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


