		function welcome(){
	    	document.getElementById("welcom_voice").play();
			$("#wel_pic").animate({opacity: 1}, 1000,function(){})
						.animate({opacity: 0}, 500,function(){});
			setTimeout("removing()", 1500);
		}
		function removing(){
			var element = document.getElementById("wel_pic");
			element.parentNode.removeChild(element);
		}