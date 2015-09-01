
var navurl = "";

function click(e) {
	navurl = document.getElementById("url").value;
	/*chrome.storage.local.set({'navurl':address}, function(){
		alert("message saved");		
		});
	
	
	chrome.tabs.create({url: "popup.html"} , function(tab){
		console.log("sdfsdfsdf");
	});
	*/
	
	runEverything(navurl);
	//window.close();
}

document.addEventListener('DOMContentLoaded', function () {
	//alert("sadsad");
	var divs = document.querySelectorAll('#navigate');
	for (var i = 0; i < divs.length; i++) {
		divs[i].addEventListener('click', click);
	}
  
});
/*
chrome.storage.local.get("navurl", function (ob){
	//addToMainHTML(ob);
	runEverything(ob.navurl);
});
*/
function setMainHTML(htmlContent){
	document.getElementById('groot').innerHTML = htmlContent;
}



function addToMainHTML(htmlContent){
	document.getElementById('groot').innerHTML += htmlContent;
}

function runEverything(url){
	addToMainHTML(url);
}

