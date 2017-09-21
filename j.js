var globalArray = [];
var c;
var d;
var limit1;
var limit2;
$(document).ready(function() {
	$(".buttonclick").on("click" , function() {
		$.get("companies.json" , function(data , status) {
				var a = [];
				a.push(JSON.stringify(data));
				globalArray = JSON.parse(a);
				alert(status);
				c = 0;
				d = 4;
				$(".myTable").append("<tr><th>" +"ID"+ "</th><th onclick = nameParaCurrent()>" +"NAME"+ "</th><th>" +"COMPANY"+ "</th><th>" +"COUNTRY"+ "</th><th>" +"RESET"+ "</th></tr>")
				for(var i = c ; i <= d; i++) {
					$(".myTable").append("<tr><td>" +globalArray[i].id+ "</td> <td>" +globalArray[i].name+ "</td><td>" +globalArray[i].company+ "</td><td>" +globalArray[i].country+ "</td><td>" + "<button class = 'editButtonCurrent' >EDIT</button> <button>DELETE</button>"+ "</td></tr>")
				}
		}, "json").fail(function() {
						alert("failed");
					});
	});
	
	$(".nextpage").click(function() {
		 c = 5;
		 d = 9;
		 $(".myTable").empty();
 		 $(".myTable").append("<tr><th>" +"ID"+ "</th><th onclick = nameParaNext()>" +"NAME"+ "</th><th>" +"COMPANY"+ "</th><th>" +"COUNTRY"+ "</th><th>" +"RESET"+ "</th></tr>")
		for(var i = c ; i <= d; i++) {
			$(".myTable").append("<tr><td>" +globalArray[i].id+ "</td> <td>" +globalArray[i].name+ "</td><td>" +globalArray[i].company+ "</td><td>" +globalArray[i].country+ "</td><td>" + "<button>EDIT</button> <button>DELETE</button>"+ "</td></tr>")		
		} 
	});
	
		$(".previouspage").click(function() {
		 c = 0;
		 d = 4;
		 $(".myTable").empty();
		 $(".myTable").append("<tr><th>" +"ID"+ "</th><th onclick = nameParaPrevious()>" +"NAME"+ "</th><th>" +"COMPANY"+ "</th><th>" +"COUNTRY"+ "</th><th>" +"RESET"+ "</th></tr>")
		for(var i = c ; i <= d; i++) {
			$(".myTable").append("<tr><td>" +globalArray[i].id+ "</td> <td>" +globalArray[i].name+ "</td><td>" +globalArray[i].company+ "</td><td>" +globalArray[i].country+ "</td><td>" + "<button>EDIT</button> <button>DELETE</button>"+ "</td></tr>")		
		}
	});	
	
	$(".editButtonCurrent").click(function() {
		alert("Hi u r here");
	});
});	


function nameParaCurrent() {
	limit1 = 0;
	limit2 = 4;
alert("You clicked -currentPageSorting");
	sorted();
}
function nameParaNext() {
	limit1 = 5;
	limit2 = 9;
	alert("You clicked -NextPageSorting");
	var name = [];
	for(var i = limit1 ; i <= limit2 ; i++) {
		name[i] = globalArray[i].name;
	}
 	name[0] = "A";
	name[1] = "A";
	name[2] = "A";
	name[3] = "A";
	name[4] = "A"; 
	name.sort();		
	$(".myTable").empty();
	 $(".myTable").append("<tr><th>" +"ID"+ "</th><th>" +"NAME"+ "</th><th>" +"COMPANY"+ "</th><th>" +"COUNTRY"+ "</th><th>" +"RESET"+ "</th></tr>")
	for(var i = limit1 ; i <= limit2; i++) {
		$(".myTable").append("<tr><td>" +globalArray[i].id+ "</td> <td>" +name[i]+ "</td><td>" +globalArray[i].company+ "</td><td>" +globalArray[i].country+ "</td><td>" + "<button>EDIT</button> <button>DELETE</button>"+ "</td></tr>")		
	}
	alert("sorted");
}
function nameParaPrevious() {
alert("You clicked -NextPageSorting");
nameParaCurrent();
}


function sorted() {
	var name = [];
	for(var i = limit1 ; i <= limit2 ; i++) {
		name[i] = globalArray[i].name;
	}
	name.sort();		
	$(".myTable").empty();
	 $(".myTable").append("<tr><th>" +"ID"+ "</th><th>" +"NAME"+ "</th><th>" +"COMPANY"+ "</th><th>" +"COUNTRY"+ "</th><th>" +"RESET"+ "</th></tr>")
	for(var i = limit1 ; i <= limit2; i++) {
		$(".myTable").append("<tr><td>" +globalArray[i].id+ "</td> <td>" +name[i]+ "</td><td>" +globalArray[i].company+ "</td><td>" +globalArray[i].country+ "</td><td>" + "<button>EDIT</button> <button>DELETE</button>"+ "</td></tr>")		
	}
}





function sample() {
	globalArray.sort();
	/* $(".myTable").empty(); */
	$(".myTable").append("<tr><th>" +"ID"+ "</th><th>" +"NAME"+ "</th><th>" +"COMPANY"+ "</th><th>" +"COUNTRY"+ "</th><th>" +"RESET"+ "</th></tr>")
	for(var i = 0 ; i <= 4; i++) {
		$(".myTable").append("<tr><td>" +globalArray[i].id+ "</td> <td>" +globalArray[i].name+ "</td><td>" +globalArray[i].company+ "</td><td>" +globalArray[i].country+ "</td><td>" + "<button>EDIT</button> <button>DELETE</button>"+ "</td></tr>")		
	}


}
