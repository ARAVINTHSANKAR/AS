var globalArray = [];
var limit1;
var limit2;
var id =[8];
var namee =[8];
var company =[8];
var country =[8];
var globalindex;

$(document).ready(function() {
			$(".buttonclick").on("click" , function() {
				$.get("companies.json" , function(data , status) {
				var a = [];
				a.push(JSON.stringify(data));
				globalArray = JSON.parse(a);
				/* alert(status); */
				limit1 = 0;
				limit2 = 4;
				cleanData();
				$(".myTable").append("<tr><th>" +"ID"+ "</th><th onclick = nameParaCurrent()>" +"NAME"+ "</th><th>" +"COMPANY"+ "</th><th>" +"COUNTRY"+ "</th><th>" +"RESET"+ "</th></tr>")
				for(var i = limit1 ; i <= limit2; i++) {
					$(".myTable").append("<tr><td>" +globalArray[i].id+ "</td> <td>" +globalArray[i].name+ "</td><td>" +globalArray[i].company+ "</td><td>" +globalArray[i].country+ "</td><td>" + "<button class = 'editButtonCurrent' onclick = Buttonedit("+i+")>EDIT</button> <button onclick = Buttondelete("+i+")>DELETE</button>"+ "</td></tr>")
							   id[i] = globalArray[i].id;
							   namee[i] = globalArray[i].name;
							   company[i] = globalArray[i].company;
							   country[i] = globalArray[i].country;
				}
				document.getElementById("pageIdPrevious").style.visibility = "visible";
				document.getElementById("pageIdNext").style.visibility = "visible";
				},  "json").fail(function() {
						alert("failed");
					});
			});
	
			$(".nextpage").click(function() {
				nextpage(); 
			});
	
			$(".previouspage").click(function() {
				limit1 = 0;
				limit2 = 4;
				$(".myTable").empty();
				$(".myTable").append("<tr><th>" +"ID"+ "</th><th onclick = nameParaPrevious()>" +"NAME"+ "</th><th>" +"COMPANY"+ "</th><th>" +"COUNTRY"+ "</th><th>" +"RESET"+ "</th></tr>")
				for(var i = limit1 ; i <= limit2; i++) {
				$(".myTable").append("<tr><td>" +globalArray[i].id+ "</td> <td>" +globalArray[i].name+ "</td><td>" +globalArray[i].company+ "</td><td>" +globalArray[i].country+ "</td><td>" + "<button class = 'editButtonCurrent'>EDIT</button> <button onclick = Buttondelete("+i+")>DELETE</button>"+ "</td></tr>")		
					id[i] = globalArray[i].id;
				    namee[i] = globalArray[i].name;
		  		    company[i] = globalArray[i].company;
		 	 	    country[i] = globalArray[i].country;
				}
			});
				
			$(".newDataButton").click(function() {
				document.getElementById("textFieldDivId").style.visibility = "visible";
				$("updateNewDataId").attr("disabled","disabled");
			});
			
			$("#updateNewDataId").click(function() {
				var id = $("#idTextBox").val();
				var name = $("#nameTextBox").val();
				var country = $("#countryTextBox").val();
				var company = $("#companyTextBox").val();
				var newDataArray = [];
				newDataArray[0] = id;
				newDataArray[1] = name;
				newDataArray[2] = company;
				newDataArray[3] = country;
				nextpage();
				$(".myTable").append("<tr><td>" +newDataArray[0]+ "</td> <td>" +newDataArray[1]+ "</td><td>" +newDataArray[2]+ "</td><td>" +newDataArray[3]+ "</td><td>" + "<button class = 'editButtonCurrent'>EDIT</button> <button>DELETE</button>"+ "</td></tr>")
			});
			
			
			$("#saveButton").click(function() {
				var LimitId = $("#textid").val();
				if (LimitId < 4) {
				limit1 = 0;
				limit2 = 4;
				} else {
				limit1 = 5;
				limit2 = 9;
				}
				redisplayOfTable();
			});
		
});
