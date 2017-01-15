var lang = "jpn";
if(getCookie("lang")=="cht")lang ="cht";
if(getCookie("lang")=="jpn")lang ="jpn";

$(document).ready(function(){	
	$("#deliverbtn").click(function(){
		if(checkinput())
		{
	        $.ajax({
	            method: "POST",/*HTTP method for request*/
	            url: "game.php",
	        	dataType: 'text',
	    	    data: {call: login(),actions: "game_login"}
	        }).done(function(data){
	        	if(data.charAt(0)=="{")
	        	{
	        		document.getElementById("ID").setAttribute("style", "position:absolute;opacity:0;left:0px;top:-150px;font-size:36px;font-family:微軟正黑體;font-weight:bold;white-space: nowrap;");
	        		document.getElementById("Money").setAttribute("style", "position:absolute;opacity:0;left:0px;top:-50px;font-size:36px;font-family:微軟正黑體;font-weight:bold;white-space: nowrap;");
	        		userdata = data;
	        		SaveUserData = JSON.parse(userdata);
					if(lang == "cht")document.getElementById("ID").innerHTML = SaveUserData.ID+"，歡迎回來";
					if(lang == "jpn")document.getElementById("ID").innerHTML = SaveUserData.ID+"，お帰り";
					$("#ID").animate({opacity: 1}, 1000,function(){
								if(lang == "cht")document.getElementById("ID").innerHTML = "名稱："+SaveUserData.ID;
								if(lang == "jpn")document.getElementById("ID").innerHTML = "名前："+SaveUserData.ID;})
						.animate({marginTop: "-10px",marginLeft: "830px"}, 500,function(){});
					$("#Money").animate({opacity: 1}, 1000,function(){
								if(lang == "cht")document.getElementById("Money").innerHTML = "錢包："+SaveUserData.Money;
								if(lang == "jpn")document.getElementById("Money").innerHTML = "財布："+SaveUserData.Money;})
						.animate({marginTop: "-10px",marginLeft: "830px"}, 500,function(){});
	        	}
	        	else if(data=="error1")
	        	{
					var error1 = document.createElement("p");
					error1.setAttribute("id", "error1");
					error1.setAttribute("style", "position:absolute;opacity:0;z-index: 5;left:250px;top:65px;font-family:微軟正黑體;color:#ff0000;white-space:nowrap;");
					document.getElementById("accountWord").appendChild(error1);
					if(lang == "cht")document.getElementById('error1').innerHTML = "帳號不存在，可以馬上加入會員喔";
					if(lang == "jpn")document.getElementById('error1').innerHTML = "アカウントがないね、早く会員になるね";
					$("#error1").animate({opacity: 1}, 300,function(){})
									.animate({opacity: 0}, 1300,function(){document.getElementById("error1").remove();});
					$("#アカウントdiv").animate({marginTop: "000px",marginLeft: "+20px"}, 70,function(){})
								       .animate({marginTop: "000px",marginLeft: "-20px"}, 70,function(){})
								       .animate({marginTop: "000px",marginLeft: "+15px"}, 70,function(){})
								       .animate({marginTop: "000px",marginLeft: "-15px"}, 70,function(){})
								       .animate({marginTop: "000px",marginLeft: "+10px"}, 70,function(){})
								       .animate({marginTop: "000px",marginLeft: "-10px"}, 70,function(){})
								       .animate({marginTop: "000px",marginLeft: "+8px"}, 70,function(){})
						  			   .animate({marginTop: "000px",marginLeft: "-8px"}, 70,function(){})
						  			   .animate({marginTop: "000px",marginLeft: "0px"}, 70,function(){});
	        	}
	        	else if(data=="error2")
	        	{
					var error2 = document.createElement("p");
					error2.setAttribute("id", "error2");
					error2.setAttribute("style", "position:absolute;opacity:0;z-index: 5;left:250px;top:110px;font-family:微軟正黑體;color:#ff0000;white-space:nowrap;");
					document.getElementById("passwdWord").appendChild(error2);
					if(lang == "cht")document.getElementById('error2').innerHTML = "密碼錯誤";
					if(lang == "jpn")document.getElementById('error2').innerHTML = "パスワードが違う";
					$("#error2").animate({opacity: 1}, 300,function(){})
									.animate({opacity: 0}, 1300,function(){document.getElementById("error2").remove();});
					$("#パスワードdiv").animate({marginTop: "000px",marginLeft: "+20px"}, 70,function(){})
								       .animate({marginTop: "000px",marginLeft: "-20px"}, 70,function(){})
								       .animate({marginTop: "000px",marginLeft: "+15px"}, 70,function(){})
								       .animate({marginTop: "000px",marginLeft: "-15px"}, 70,function(){})
								       .animate({marginTop: "000px",marginLeft: "+10px"}, 70,function(){})
								       .animate({marginTop: "000px",marginLeft: "-10px"}, 70,function(){})
								       .animate({marginTop: "000px",marginLeft: "+8px"}, 70,function(){})
						  			   .animate({marginTop: "000px",marginLeft: "-8px"}, 70,function(){})
						  			   .animate({marginTop: "000px",marginLeft: "0px"}, 70,function(){});
	        	}
	        	else if(data=="InvalidError"||data=="TooManyWord")
	        	{
	            	window.alert("Fuck You !!");
					var error3 = document.createElement("p");
					error3.setAttribute("id", "error3");
					error3.setAttribute("style", "position:absolute;opacity:0;z-index: 5;left:250px;top:65px;font-family:微軟正黑體;color:#ff0000;white-space:nowrap;");
					document.getElementById("accountWord").appendChild(error3);
					if(lang == "cht")document.getElementById('error3').innerHTML = "輸入包含非法字元，請重新輸入";
					if(lang == "jpn")document.getElementById('error3').innerHTML = "このアカウントは既に使われたので、もう一回試してください";
					$("#error3").animate({opacity: 1}, 300,function(){})
									.animate({opacity: 0}, 1300,function(){document.getElementById("error3").remove();});
					$("#アカウントdiv").animate({marginTop: "000px",marginLeft: "+20px"}, 70,function(){})
								       .animate({marginTop: "000px",marginLeft: "-20px"}, 70,function(){})
								       .animate({marginTop: "000px",marginLeft: "+15px"}, 70,function(){})
								       .animate({marginTop: "000px",marginLeft: "-15px"}, 70,function(){})
								       .animate({marginTop: "000px",marginLeft: "+10px"}, 70,function(){})
								       .animate({marginTop: "000px",marginLeft: "-10px"}, 70,function(){})
								       .animate({marginTop: "000px",marginLeft: "+8px"}, 70,function(){})
						  			   .animate({marginTop: "000px",marginLeft: "-8px"}, 70,function(){})
						  			   .animate({marginTop: "000px",marginLeft: "0px"}, 70,function(){});
	        	}
	        });
	    }
    });
});
function login()
{
	var account = document.getElementById('account').value;
	var passwd = document.getElementById('passwd').value;
	var output = "{\"Account\":\"" +account+ "\",\"Passwd\":\"" +passwd+"\"}";
	return output;
}
function checkinput()
{
	var account = document.getElementById('account').value;
	var passwd = document.getElementById('passwd').value;
	for(var i = 0;i < account.length;i++)
	{
		if(account.charAt(i)=='\\' || account.charAt(i)=='/' || account.charAt(i)==':' || account.charAt(i)=='*' || account.charAt(i)=='?' || account.charAt(i)=='<' || account.charAt(i)=='>' || account.charAt(i)=='|' ||account.charAt(i)=='$'||account.charAt(i)=='"'||account.charAt(i)=='.'||account.charAt(i)==';')
		{
			var error4 = document.createElement("p");
			error4.setAttribute("id", "error4");
			error4.setAttribute("style", "position:absolute;opacity:0;z-index: 5;left:250px;top:65px;font-family:微軟正黑體;color:#ff0000;white-space:nowrap;");
			document.getElementById('アカウントdiv').appendChild(error4); 
			if(lang == "cht")document.getElementById('error4').innerHTML = "帳號裡面含有非法字元";
			if(lang == "jpn")document.getElementById('error4').innerHTML = "アカウントの中で、違法キャラクタがある";
			$("#error4").animate({opacity: 1}, 300,function(){})
							.animate({opacity: 0}, 1300,function(){document.getElementById("error4").remove();});
			$("#アカウントdiv").animate({marginTop: "000px",marginLeft: "+20px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "-20px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "+15px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "-15px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "+10px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "-10px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "+8px"}, 70,function(){})
			  			   .animate({marginTop: "000px",marginLeft: "-8px"}, 70,function(){})
			  			   .animate({marginTop: "000px",marginLeft: "0px"}, 70,function(){});
				return false;
		}
	}
	for(var i = 0;i < passwd.length;i++)
	{
		if(passwd.charAt(i)=='\\' || passwd.charAt(i)=='/' || passwd.charAt(i)==':' || passwd.charAt(i)=='*' || passwd.charAt(i)=='?' || passwd.charAt(i)=='<' || passwd.charAt(i)=='>' || passwd.charAt(i)=='|' ||passwd.charAt(i)=='$'||passwd.charAt(i)=='"'||passwd.charAt(i)=='.'||passwd.charAt(i)==';')
		{
			var error5 = document.createElement("p");
			error5.setAttribute("id", "error5");
			error5.setAttribute("style", "position:absolute;opacity:0;z-index: 5;left:250px;top:109px;font-family:微軟正黑體;color:#ff0000;white-space:nowrap;");
			document.getElementById('パスワードdiv').appendChild(error5); 
			if(lang == "cht")document.getElementById('error5').innerHTML = "密碼裡面含有非法字元";
			if(lang == "jpn")document.getElementById('error5').innerHTML = "パスワードの中で、違法キャラクタがある";
			$("#error5").animate({opacity: 1}, 300,function(){})
							.animate({opacity: 0}, 1300,function(){document.getElementById("error5").remove();});
			$("#パスワードdiv").animate({marginTop: "000px",marginLeft: "+20px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "-20px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "+15px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "-15px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "+10px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "-10px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "+8px"}, 70,function(){})
			  			   .animate({marginTop: "000px",marginLeft: "-8px"}, 70,function(){})
			  			   .animate({marginTop: "000px",marginLeft: "0px"}, 70,function(){});
				return false;
		}
	}
	if(account.length > 30||passwd.length > 30)
	{
			var error6 = document.createElement("p");
			error6.setAttribute("id", "error6");
			error6.setAttribute("style", "position:absolute;opacity:0;z-index: 5;left:250px;top:65px;font-family:微軟正黑體;color:#ff0000;white-space:nowrap;");
			document.getElementById('アカウントdiv').appendChild(error6); 
			if(lang == "cht")document.getElementById('error6').innerHTML = "輸入含有過多字元";
			if(lang == "jpn")document.getElementById('error6').innerHTML = "入力の中で、キャラクタが多すぎます";
			$("#error6").animate({opacity: 1}, 300,function(){})
							.animate({opacity: 0}, 1300,function(){document.getElementById("error6").remove();});
			$("#アカウントdiv").animate({marginTop: "000px",marginLeft: "+20px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "-20px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "+15px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "-15px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "+10px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "-10px"}, 70,function(){})
					       .animate({marginTop: "000px",marginLeft: "+8px"}, 70,function(){})
			  			   .animate({marginTop: "000px",marginLeft: "-8px"}, 70,function(){})
			  			   .animate({marginTop: "000px",marginLeft: "0px"}, 70,function(){});
			return false;
	}
	return true;
}