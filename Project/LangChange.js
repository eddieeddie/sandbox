	var count = 0;
$(document).ready(function(){
	var refreshIntervalLang = setInterval(function(){
		if(getCookie("lang")!="cht"&&getCookie("lang")!="jpn")setCookie("lang", "cht", 30);
		$("#CHT").click(function(){
			setCookie("lang", "cht", 30);
		});
		$("#JPN").click(function(){
			setCookie("lang", "jpn", 30);
		});
		if(count++ > 10)clearInterval(refreshIntervalLang);
		
		if(getCookie("lang")=="cht")
		{
			document.getElementById("CHT_p").style.WebkitFilter  = 'grayscale(0%)';
			document.getElementById("JPN_p").style.WebkitFilter  = 'grayscale(100%)';
			document.getElementById("Copyright_txt_img").src  = "index/pic/cht/Copyright_txt.png";
			document.getElementById("Register_txt_img").src  = "index/pic/cht/Register_txt.png";
			document.getElementById("Shop_txt_img").src  = "index/pic/cht/Shop_txt.png";
			document.getElementById("About_txt_img").src  = "index/pic/cht/About_txt.png";
			document.getElementById("Contract_txt_img").src  = "index/pic/cht/Contract_txt.png";
			document.getElementById("Help_txt_img").src  = "index/pic/cht/Help_txt.png";
			document.getElementById("Career_txt_img").src  = "index/pic/cht/Career_txt.png";
			document.getElementById("play_btn").src  = "index/pic/cht/Play_ready.png";
			document.getElementById("reg_btn").src  = "index/pic/cht/Register_ready.png";
			document.getElementById("play_btn2").src  = "index/pic/cht/Play_ready.png";
			document.getElementById("reg_btn2").src  = "index/pic/cht/Register_ready.png";
		}
		if(getCookie("lang")=="jpn")
		{
			document.getElementById("CHT_p").style.WebkitFilter  = 'grayscale(100%)';
			document.getElementById("JPN_p").style.WebkitFilter  = 'grayscale(0%)';
			document.getElementById("Copyright_txt_img").src  = "index/pic/jpn/Copyright_txt.png";
			document.getElementById("Register_txt_img").src  = "index/pic/jpn/Register_txt.png";
			document.getElementById("Shop_txt_img").src  = "index/pic/jpn/Shop_txt.png";
			document.getElementById("About_txt_img").src  = "index/pic/jpn/About_txt.png";
			document.getElementById("Contract_txt_img").src  = "index/pic/jpn/Contract_txt.png";
			document.getElementById("Help_txt_img").src  = "index/pic/jpn/Help_txt.png";
			document.getElementById("Career_txt_img").src  = "index/pic/jpn/Career_txt.png";
			document.getElementById("play_btn").src  = "index/pic/jpn/Play_ready.png";
			document.getElementById("reg_btn").src  = "index/pic/jpn/Register_ready.png";
			document.getElementById("play_btn2").src  = "index/pic/jpn/Play_ready.png";
			document.getElementById("reg_btn2").src  = "index/pic/jpn/Register_ready.png";
		}
	}, 200);
});