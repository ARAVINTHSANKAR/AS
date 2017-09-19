var parsedObject = [];

var id =[8];
var namee =[8];
var company =[8];
var country =[8];

var ids=[8];
var namees =[8];
var age =[8];
var contact =[8];

function Jsonstorage1() {
	var control = document.getElementById("newdatabutton1");
	control.style.visibility = "visible";
	
	 var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			 localStorage.setItem("data", xhttp.responseText);	 
		}
	  };
		xhttp.open("GET", "companies.json", true);
		xhttp.send();
	 
  var retrievedObject = localStorage.getItem("data");
  parsedObject = JSON.parse(retrievedObject);
  document.getElementById("Table").innerHTML = "<tr><th>" +"ID"+ "</th><th>" +"NAME"+ "</th><th>" +"COMPANY"+ "</th><th>" +"COUNTRY"+ "</th><th>" +"RESET"+ "</th></th>";
	for (var i = 0; i < 8 ; i ++) {
		document.getElementById("Table").innerHTML += "<tr><td>" +parsedObject[i].id+ "</td><td>" +parsedObject[i].name+ "</td><td>" +parsedObject[i].company+ "</td><td>" +parsedObject[i].country+ "</td><td>" +"<button id = mybutt1 onclick = Buttonedit("+i+")>EDIT</button> <button onclick = Buttondelete("+i+") >DELETE</button> "+ "</td></tr>";
		   id[i] = parsedObject[i].id;
		   namee[i] = parsedObject[i].name;
		   company[i] = parsedObject[i].company;
		   country[i] = parsedObject[i].country;
	}
	
}


function Buttonedit(index) {
	alert("you clicked Edit Button : " +(index + 1)+"");
	document.getElementById("textid").value = id[index];
	document.getElementById("textname").value = namee[index];
	document.getElementById("textcompany").value = company[index];
	document.getElementById("textcountry").value = country[index];
	
 	var control = document.getElementById("EditingBox");
	control.style.visibility = "visible";
	
	var acontrol = document.getElementById("EditingBox2");
	acontrol.style.visibility = "hidden";
}


function Buttondelete(index) {	
	alert(index+1);
	confirm("You want to delete");
		 parsedObject.splice(index , 1);
		
		var myJSON = JSON.stringify(parsedObject);
		localStorage.setItem("data", myJSON);
		alert(myJSON);
			function Jsonstorage1() {
			  for (var i =0; i < 8 && i != index ; i ++) {
				document.getElementById("Table").innerHTML = "<tr><td>" +parsedObject[i].id+ "</td><td>" +parsedObject[i].name+ "</td><td>" +parsedObject[i].company+ "</td><td>" +parsedObject[i].country+ "</td><td>" +"<button id = mybutt1 onclick = Buttonedit("+i+")>EDIT</button> <button onclick = Buttondelete("+i+") >DELETE</button> "+ "</td></tr>";
			  }
		   }
/*  var control = document.getElementById("EditingBox");
	control.style.visibility = "visible"; */
	
	var acontrol = document.getElementById("EditingBox2");
	acontrol.style.visibility = "hidden";
}


function saveButton() {
	var id = document.getElementById("textid").value;	
	id = id-1;	
	var inputOfId = document.getElementById("textid").value;
	var inputOfName = document.getElementById("textname").value;
	var inputOfCompany = document.getElementById("textcompany").value; 
	var inputOfCountry = document.getElementById("textcountry").value;

	   parsedObject[id].id = inputOfId;
	   parsedObject[id].name = inputOfName;
	   parsedObject[id].company = inputOfCompany;
	   parsedObject[id].country = inputOfCountry;

	   
	   var myJSON = JSON.stringify(parsedObject);
	   localStorage.setItem("data", myJSON);
	   alert("You changed something");
	   
	   function Jsonstorage1() {
		  for (var i = id; i = id ; i ++) {
			document.getElementById("Table").innerHTML = "<tr><td>" +parsedObject[i].id+ "</td><td>" +parsedObject[i].name+ "</td><td>" +parsedObject[i].company+ "</td><td>" +parsedObject[i].country+ "</td><td>" +"<button id = mybutt1 onclick = Buttonedit("+i+")>EDIT</button> <button onclick = Buttondelete("+i+") >DELETE</button> "+ "</td></tr>";
		  }
	   }
}


function cancel() {
   var acontrol = document.getElementById("EditingBox");
	acontrol.style.visibility = "hidden";
}


function resetfun() {
	alert("Nothing to save");
}


function newdatacompany() {
	var acontrol = document.getElementById("newdatasection");
	acontrol.style.visibility = "visible";
}
function process() {
	var inputOfNewId = document.getElementById("newid").value;
	var inputOfNewName = document.getElementById("newname").value;
	var inputOfNewCompany = document.getElementById("newcompany").value; 
	var inputOfNewCountry = document.getElementById("newcountry").value;

	document.getElementById("newdatasection").innerHTML = "NEW DATA";
	document.getElementById("Table").innerHTML = "<tr><td>" +inputOfNewId+ "</td><td>" +inputOfNewName+ "</td><td>" +inputOfNewCompany+ "</td><td>" +inputOfNewCountry+ "</td><td>" +"<button id = mybutt1 onclick = Buttonedit()>EDIT</button> <button onclick = Buttondelete() >DELETE</button> "+ "</td></tr>"; 

}











function Jsonstorage2() {
	var control = document.getElementById("newdatabutton2");
	control.style.visibility = "visible";
	
var parsedObject;
 var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		 localStorage.setItem("user", xhttp.responseText);
	}
 };
   xhttp.open("GET", "employees.json", true);
   xhttp.send();
  
  var retrievedObject = localStorage.getItem("user");
  var parsedObject = JSON.parse(retrievedObject);
  document.getElementById("Table").innerHTML = "<tr><th>" +"ID"+ "</th><th>" +"NAME"+ "</th><th>" +"AGE"+ "</th><th>" +"CONTACT"+ "</th><th>" +"RESET"+ "</th></th>";
  
  for (var i = 0; i < 8 ; i ++) {
	document.getElementById("Table").innerHTML += "<tr><td>" +parsedObject[i].id+ "</td><td>" +parsedObject[i].name+ "</td><td>" +parsedObject[i].age+ "</td><td>" +parsedObject[i].contact+ "</td><td>" +"<button onclick = Buttonedit2("+i+")>EDIT</button> <button onclick = Buttondelete2("+i+") >DELETE</button>"+ "</td></tr>";
	   ids[i] = parsedObject[i].id;
	   namees[i] = parsedObject[i].name;
	   age[i] = parsedObject[i].age;
	   contact[i] = parsedObject[i].contact;	
  }
}


function Buttonedit2(index) {
	alert("you clicked Edit Button : " +(index + 1)+"");
	document.getElementById("textid2").value = ids[index];
	document.getElementById("textname2").value = namees[index];
	document.getElementById("textage").value = age[index];
	document.getElementById("textcontact").value = contact[index];
	
 	var control = document.getElementById("EditingBox2");
	control.style.visibility = "visible";
	
	var acontrol = document.getElementById("EditingBox");
	acontrol.style.visibility = "hidden";
}


function saveButton2() {
	var id = document.getElementById("textid2").value;	
	id = id-1;	
	var inputOfId = document.getElementById("textid2").value;
	var inputOfName = document.getElementById("textname2").value;
	var inputOfAge = document.getElementById("textage").value; 
	var inputOfContact = document.getElementById("textcontact").value;

	   parsedObject[id].id = inputOfId;
	   parsedObject[id].name = inputOfName;
	   parsedObject[id].age = inputOfAge;
	   parsedObject[id].contact = inputOfContact;

	
	   
	   var myJSON = JSON.stringify(parsedObject);
	   localStorage.setItem("user", myJSON);
	   alert(myJSON);
	   alert("You changed something");
	   
	   function Jsonstorage2() {
		   
		  for (var i = id; i = id ; i ++) {
			document.getElementById("Table").innerHTML = "<tr><td>" +parsedObject[i].id+ "</td><td>" +parsedObject[i].name+ "</td><td>" +parsedObject[i].age+ "</td><td>" +parsedObject[i].contact+ "</td><td>" +"<button id = mybutt1 onclick = Buttonedit2("+i+")>EDIT</button> <button onclick = Buttondelete2("+i+") >DELETE</button> "+ "</td></tr>";
		  }
	   }
}


function Buttondelete2(index) {
	alert(index+1);
	confirm("You want to delete");
		 parsedObject.splice(index , 1);
		
		var myJSON = JSON.stringify(parsedObject);
		localStorage.setItem("user", myJSON);
		alert(myJSON);
			function Jsonstorage2() {
			  for (var i =0; i < 8 && i != index ; i ++) {
				document.getElementById("Table").innerHTML = "<tr><td>" +parsedObject[i].id+ "</td><td>" +parsedObject[i].name+ "</td><td>" +parsedObject[i].age+ "</td><td>" +parsedObject[i].contact+ "</td><td>" +"<button id = mybutt1 onclick = Buttonedit2("+i+")>EDIT</button> <button onclick = Buttondelete2("+i+") >DELETE</button> "+ "</td></tr>";
			  }
		   }
	
	var acontrol = document.getElementById("EditingBox");
	acontrol.style.visibility = "hidden";
}


function cancel2() {
   var acontrol = document.getElementById("EditingBox2");
	acontrol.style.visibility = "hidden";
}


function newdataemployee() {
	var acontrol = document.getElementById("newdatasection2");
	acontrol.style.visibility = "visible";
}
function process2() {
	var inputOfNewId2 = document.getElementById("newid2").value;
	var inputOfNewName2 = document.getElementById("newname2").value;
	var inputOfNewAge = document.getElementById("newage").value; 
	var inputOfNewContact = document.getElementById("newcontact").value;

	document.getElementById("newdatasection2").innerHTML = "NEW DATA";
	document.getElementById("Table").innerHTML = "<tr><td>" +inputOfNewId2+ "</td><td>" +inputOfNewName2+ "</td><td>" +inputOfNewAge+ "</td><td>" +inputOfNewContact+ "</td><td>" +"<button id = mybutt1 onclick = Buttonedit()>EDIT</button> <button onclick = Buttondelete() >DELETE</button> "+ "</td></tr>"; 
}
