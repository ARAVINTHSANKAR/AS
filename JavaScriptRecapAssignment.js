function Jsonstorage1() {
/* 	      var control = document.getElementById('companyTable');
 control.style.visibility = "visible"; */
 var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		 localStorage.setItem("data", xhttp.responseText);
	}
 };
   xhttp.open("GET", "companies.json", true);
  xhttp.send();
  var retrievedObject = localStorage.getItem("data");
  var parsedObject = JSON.parse(retrievedObject);
	document.getElementById("Table").innerHTML = "<tr><th>" +"ID"+ "</th><th>" +"NAME"+ "</th><th>" +"COMPANY"+ "</th><th>" +"COUNTRY"+ "</th><th>" +"RESET"+ "</th></th>";
  for (var i = 0; i < 8 ; i ++) {
	document.getElementById("Table").innerHTML += "<tr><td>" +parsedObject[i].id+ "</td><td>" +parsedObject[i].name+ "</td><td>" +parsedObject[i].company+ "</td><td>" +parsedObject[i].country+ "</td><td>" +"<button id = mybutt1 onclick = Buttonedit("+i+")>EDIT</button> <button onclick = Buttondelete() >DELETE</button> "+ "</td></tr>";


  }
/*     var control = document.getElementById("employeeTable");
 control.style.visibility = "hidden"; */
}


function Buttonedit(id) {
	alert(id);
 	var control = document.getElementById("EditingBox");
	control.style.visibility = "visible";
	
	var x = document.getElementById("mybutt1").id;
	alert(x);
	
	document.getElementById("textid").value = "id";
	document.getElementById("textname").innerHTML = parsedobject[1].name;
	document.getElementById("textcompany").innerHTML = parsedObject[1].company;
	document.getElementById("textcountry").innerHTML = parsedObject[2].country;
	
	document.getElementById("demo").value = hello;
}
function Buttondelete() {
	

}

function Jsonstorage2() {
/* 	    var control = document.getElementById("employeeTable");
 control.style.visibility = "visible"; */
 
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
	document.getElementById("Table").innerHTML += "<tr><td>" +parsedObject[i].id+ "</td><td>" +parsedObject[i].name+ "</td><td>" +parsedObject[i].age+ "</td><td>" +parsedObject[i].contact+ "</td><td>" +"<button>EDIT</button> <button>DELETE</button>"+ "</td></tr>";
  }
      /* var control = document.getElementById("companyTable");
 control.style.visibility = "hidden"; */
}



