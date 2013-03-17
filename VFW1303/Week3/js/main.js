/* Name: Eugene Proctor :: Project 3 :: VFW 1303 */

/* ========== Waiting on Dom to be ready  ========== */

var docGetElementBid = function(x) {

	var theElement = document.getElementById(x);
	return theElement; 	

}



/* ========== Define Variables ========== */


/* ========== Obtain Unique Key ========== */



/* ===============  Test Check Box Test ============ */



 /* ======  Save Data to Local Storage  ====== */

 
var saveData = function() {

var newId 			= Math.random(); 

var contact 			= {};
	contact.fullName	= ["First Name:", docGetElementBid("fullName").value];	
	contact.email		= ["Email:", docGetElementBid("email").value];

// Save data into local storage,  Use stringify to convert our object to a string
localStorage.setItem(newId, JSON.stringify(contact));
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





/* ========== Display Data for testing  ========== */

/* ========== Display Data from Object to Screen  ========== */	
var displayEntries = function() {


	var newDiv = document.createElement("div");
	newDiv.setAttribute("newId", "contact");
	var newUl = document.createElement("ul");
	
	newDiv.appendChild(newUl);
	document.body.appendChild(newDiv);
	
	//docGetElementBid("contact").style.display = "block";
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
	//createEditLink.addEventListener("click", editContact);
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


