
function eventController(index)
{
	if(index == "gameRace")Game_Race();
	if(index == "gameFlip")Game_Flip();
	if(index.substring(0,index.indexOf("|"))=="AddLove")
	{
		var Lovediff = parseInt(index.substring(index.indexOf("|")+1));
		UserLove[JSON.parse(DialogSet)[DialogID].CharacterName] = (parseInt(UserLove[JSON.parse(DialogSet)[DialogID].CharacterName])+Lovediff).toString();
		if(lang == "cht")document.getElementById("Love").innerHTML = "喜歡："+UserLove[JSON.parse(DialogSet)[DialogID].CharacterName];
		if(lang == "jpn")document.getElementById("Love").innerHTML = "好き："+UserLove[JSON.parse(DialogSet)[DialogID].CharacterName];
		
		
		var Heart =document.createElement("img");
		Heart.setAttribute("id", "Heart");
		Heart.setAttribute("src", "Game/heart.png");
		Heart.setAttribute("style", "position:absolute;width:120px;left:1250px;top:650px;opacity:0;z-index:7");
		$(".EventGame").append(Heart);
		var Number =document.createElement("div");
		Number.setAttribute("id", "Number");
		Number.setAttribute("style", "position:absolute;left:1275px;top:675px;width:200px;color:#ffe5ff;font-weight:bold;font-family:微軟正黑體;font-size:46px;opacity:0;z-index:7");
		if(Lovediff>0)Number.appendChild(document.createTextNode("+"+Lovediff));
		else          Number.appendChild(document.createTextNode(Lovediff));
		$(".EventGame").append(Number);
		
		$("#Heart") .animate({marginTop: "-100px",width:"150px",opacity: 0.8}, 1500, 'linear',function(){}).animate({marginTop: "-175px",width:"180px",opacity: 0}, 1500, 'linear',function(){document.getElementById("Heart").remove();});
		$("#Number").animate({marginTop: "-100px",fontSize:"58px",opacity: 0.8}, 1500, 'linear',function(){}).animate({marginTop: "-170px",fontSize:"73px",opacity: 0}, 1500, 'linear',function(){document.getElementById("Number").remove();});
	}
}