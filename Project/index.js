var lang = "cht";
if(getCookie("lang")=="cht")lang ="cht";
if(getCookie("lang")=="jpn")lang ="jpn";
setLang("Inde0000",lang,"01");
setLang("Inde0001",lang,"02");
setLang("Inde0002",lang,"03");
setLang("Inde0003",lang,"04");
setLang("Inde0004",lang,"05");
setLang("Inde0005",lang,"06");
$(document).ready(function(){
	$("#カップ").one("click",function(){
		random_result()
	});
});
function random_result()
{
	//window.alert(5 + 6);
	var rv = 3*Math.random();
	if(rv<=1)
	{
		document.getElementById('占い結果').src = 'index/pic/占い結果/result_love.jpg';
		document.getElementById('占い結果文字').src = 'index/pic/占い結果/result_love_txt.png';
	}
	else if(rv <= 2)
	{
		document.getElementById('占い結果').src = 'index/pic/占い結果/result_tank.jpg';
		document.getElementById('占い結果文字').src = 'index/pic/占い結果/result_tank_txt.png';
	}
	else
	{
		document.getElementById('占い結果').src = 'index/pic/占い結果/result_neko.jpg';
		document.getElementById('占い結果文字').src = 'index/pic/占い結果/result_neko_txt.png';
	}	
	document.getElementById('占い結果').style.opacity = 1;
	document.getElementById('占い結果文字').style.opacity = 1;
	document.getElementById('カップ').style.opacity = 0;
}

$("#note_kokoa").ready(function(){
	$("#note_kokoa").hover(function(){
		$("#dia").animate({opacity: 1}, 0,function(){})
			.animate({marginTop: "-40px"}, 100,function(){})
			.animate({marginTop: "000px"}, 200,function(){})
			.animate({marginTop: "000px"}, 100,function(){})
			.animate({marginTop: "-20px"}, 100,function(){})
			.animate({marginTop: "000px"}, 200,function(){})
			.animate({marginTop: "000px"}, 1000,function(){})
			.animate({marginTop: "-40px"}, 100,function(){})
			.animate({marginTop: "000px"}, 200,function(){})
			.animate({marginTop: "000px"}, 100,function(){})
			.animate({marginTop: "-20px"}, 100,function(){})
			.animate({marginTop: "000px"}, 200,function(){})
			.animate({marginTop: "000px"}, 2000,function(){})
			.animate({opacity: 0}, 0,function(){});
	});
});


$(document).ready(function(){	
    setInterval(function(){
      $.ajax({
            method: "POST",
            url: "show_like.php"
        }).done(function(data){
            $("#拍手数").html(data);
        })
    }, 1000);
	$("#拍手数図").one("click",function(){
        $.ajax({
            method: "POST",/*HTTP method for request*/
            url: "like.php"
        }).done(function(data){
            $("#拍手数").html(data);
        });
    });
});
