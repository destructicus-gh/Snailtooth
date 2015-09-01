 /*function click(e) {
	var address = document.getElementById("url").value;
	chrome.storage.local.set({'navurl':address}, function(){
		alert("message saved");		
		});

	
	chrome.tabs.create({url: "index.html"} , function(tab){
		console.log("sdfsdfsdf");
		
	});
	window.close();
}

document.addEventListener('DOMContentLoaded', function () {
	//alert("sadsad");
	var divs = document.querySelectorAll('#navigate');
	for (var i = 0; i < divs.length; i++) {
		divs[i].addEventListener('click', click);
	}
  
});
*/




chrome.app.runtime.onLaunched.addListener(function() {
  // Center window on screen.
  var screenWidth = screen.availWidth;
  var screenHeight = screen.availHeight;
  var width = 500;
  var height = 300;

  chrome.app.window.create('index.html', {
    id: "helloWorldID",
    outerBounds: {
      width: width,
      height: height,
      left: Math.round((screenWidth-width)/2),
      top: Math.round((screenHeight-height)/2)
    }
  });
});