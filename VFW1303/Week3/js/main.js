/* Name: Eugene Proctor :: Project 3 :: VFW 1303 */

/* ========== Waiting on Dom to be ready  ========== */

var docGetElementBid = function(x) {

	var theId = document.getElementById(x);
	return theId; 	

}




/* ========== Define Variables ========== */

var surveyCheckBoxes = document.getElementById("checkBoxField").survey;
			
		
 

/* ========== Edit Entry  ========== */

// Grab the data out of local Storage;
var editContact = function() {



	
//Return Form Screen to Display	Form
		var emptyScreen = docGetElementBid("hide");
		emptyScreen.removeAttribute("hidden", "true");	

alert ("This is the Edit Entry Function");	
	
	var editValue = localStorage.getItem(this.key);
	var contact = JSON.parse(editValue);
	
	
		
		var parentBox = docGetElementBid("parent");
		var auntBox = docGetElementBid("aunt");
		var guardianBox = docGetElementBid("guardian");
		var brotherBox = docGetElementBid("brother");
		var sisterBox = docGetElementBid("sister");
		
		
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
	docGetElementBid("startdate").value = contact.startdate[1];
	docGetElementBid("fullName").value = contact.fullName[1];
	docGetElementBid("email").value = contact.email[1];
	docGetElementBid("city").value = contact.city[1];
	docGetElementBid("description").value = contact.description[1];
	docGetElementBid("rating").value = contact.rating[1];
 
		
}		
		
		
		
		
		
		
		
		
		
		
		
		
		/*========================================================================*/
		
		

 /* ======  Save Data to Local Storage  ====== */

var surveyCheckBoxes = document.getElementById("checkBoxField").survey; 	
 
var saveData = function() {



var newId 			= Math.random(); 

var contact 								= {};
	contact.startdate						= ["Todays Date:", docGetElementBid("startdate").value];
	contact.fullName						= ["First Name:", docGetElementBid("fullName").value];	
	contact.email							= ["Email:", docGetElementBid("email").value];
	contact.city							= ["Travel City:", docGetElementBid("city").value];
	contact.description						= ["Leave a Comment:", docGetElementBid("description").value];
	contact.rating							= ["Rate your Comfort Level:", docGetElementBid("rating").value];
	
	
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
	//createDeleteLink.addEventListener("click", deleteContact);
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


