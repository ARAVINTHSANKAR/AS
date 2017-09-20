var globalArray = [];
var c = 0;
var d = 3;
$(document).ready(function() {
	$(".buttonclick").on("click" , function() {
		$.get("companies.json" , function(data , status) {
				var a = [];
				a.push(JSON.stringify(data));
				globalArray = JSON.parse(a);
				alert(status);
				alert(globalArray);
				for(var i = c ; i <= d; i++) {
					$("#myTable").append("<tr><td>" +globalArray[i].id+ "</td> <td>" +globalArray[i].name+ "</td><td>" +globalArray[i].company+ "</td><td>" +globalArray[i].country+ "</td><button>DELETE</button></tr>")
				}
		}, "json").fail(function() {
						alert("failed");
					});
	});
});	


$(".nextpage").on("click" , function() {
	var c = 3;
	var d = 3;
	for(var i = c ; i <= d; i++) {
		$("#myTable").append("<tr><td>" +globalArray[i].id+ "</td> <td>" +globalArray[i].name+ "</td><td>" +globalArray[i].company+ "</td><td>" +globalArray[i].country+ "</td><button>DELETE</button></tr>")		
	}
});


