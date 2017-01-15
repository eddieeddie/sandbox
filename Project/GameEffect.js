
function effectController(index)
{
	switch (index)
	{
		case "screenshake":
		$(document).ready(function(){
				$(".B").animate({opacity: 1}, 0,function(){})
					.animate({marginTop: "000px",marginLeft: "-30px"}, 70,function(){})
					.animate({marginTop: "000px",marginLeft: "+30px"}, 70,function(){})
					.animate({marginTop: "000px",marginLeft: "-25px"}, 70,function(){})
					.animate({marginTop: "000px",marginLeft: "+25px"}, 70,function(){})
					.animate({marginTop: "000px",marginLeft: "-15px"}, 70,function(){})
					.animate({marginTop: "000px",marginLeft: "+15px"}, 70,function(){})
					.animate({marginTop: "000px",marginLeft: "-10px"}, 70,function(){})
					.animate({marginTop: "000px",marginLeft: "+10px"}, 70,function(){})
					.animate({marginTop: "000px",marginLeft: "-08px"}, 70,function(){})
					.animate({marginTop: "000px",marginLeft: "+08px"}, 70,function(){})
					.animate({marginTop: "000px",marginLeft: "-06px"}, 70,function(){})
					.animate({marginTop: "000px",marginLeft: "+06px"}, 70,function(){})
					.animate({marginTop: "000px",marginLeft: "-04px"}, 70,function(){})
					.animate({marginTop: "000px",marginLeft: "+04px"}, 70,function(){})
					.animate({marginTop: "000px",marginLeft: "-02px"}, 70,function(){})
					.animate({marginTop: "000px",marginLeft: "+02px"}, 70,function(){})
					.animate({opacity: 1}, 0,function(){});
		});
		break;
		case "flash":
		$(document).ready(function(){
			var white = document.createElement("img");
			white.setAttribute("id", "whiteblock");
			white.setAttribute("src", "Game/white.jpg");
			white.setAttribute("style", "position:absolute;opacity:0;z-index: 5;left:190px;top:140px");
			document.body.appendChild(white); 
			$("#whiteblock").animate({opacity: 1}, 300,function(){})
							.animate({opacity: 0}, 1300,function(){document.getElementById("whiteblock").remove();});

		});
		break;
	}
}