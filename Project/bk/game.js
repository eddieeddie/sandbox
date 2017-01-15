var lang = "jpn";
if(getCookie("lang")=="cht")lang ="cht";
if(getCookie("lang")=="jpn")lang ="jpn";
setLang("Game0000",lang,"Title");
setLang("Game0001",lang,"accountWord");
setLang("Game0002",lang,"passwdWord");
setLang("Game0003",lang,"選択");
var haveload = 0;
$(document).ready(function(){
		if(userdata == undefined)
		{
			$("#save").hide();
			$("#dia0").hide();
			$("#dia1").hide();
			$("#dia2").hide();
			$("#dia3").hide();
			$("#dia3").hide();
			$("#background_image").hide();
			$("#TxtframeDiv").hide();
			$("#CharName").hide();
			$("#character").hide();
			$("#選択").hide();
			$("#sce00").hide();
			$("#sce01").hide();
		}
		setInterval(function(){
			SetFont();
		    if(userdata != undefined&&haveload==0)
		 	{
				document.getElementById("Title").remove();
				document.getElementById("account").remove();
				document.getElementById("passwd").remove();
				document.getElementById("accountWord").remove();
				document.getElementById("passwdWord").remove();
				document.getElementById("deliverbtn").remove();
				SelectScenario();
			}
	   }, 100);
	   ClickNext(1);
	   ClickNext(2);
	   ClickNext(3);
	   NextMouseAct(1);
	   NextMouseAct(2);
	   NextMouseAct(3);
	   
});
function SelectScenario()
{
	$("#選択").show();
	$("#sce00").show();
	$("#sce01").show();
	$("#sce00").click(function(){
		document.getElementById("選択").remove();
		document.getElementById("sce00").remove();
		document.getElementById("sce01").remove();
		ScenarioID = "00";
		loadgame();
	});
	$("#sce01").click(function(){
		document.getElementById("選択").remove();
		document.getElementById("sce00").remove();
		document.getElementById("sce01").remove();
		ScenarioID = "01";
		loadgame();
	});
}
function loadgame()
{
	DialogID=JSON.parse(userdata).DialogID[ScenarioID];
	$(document).ready(function(){	
		$.ajax({
	       method: "POST",//HTTP method for request
	       url: "game.php",
	       dataType: 'text',
	       data: {call: DialogID,actions: "fetchdialog"}
	       }).done(function(data){
		   if(data.charAt(0)=="{")
	       {
	       		DialogSet = data;
				UserID = JSON.parse(userdata).ID;//save會用到
				UserPasswd = JSON.parse(userdata).Passwd;//save會用到
				UserAccount = JSON.parse(userdata).Account;//save會用到
				UserLove = JSON.parse(userdata).Love;//save會用到
				UserDialogCollection = JSON.parse(userdata).DialogID;//save會用到
				/*if(lang == "cht")document.getElementById("ID").innerHTML = "名稱："+UserID;
				if(lang == "jpn")document.getElementById("ID").innerHTML = "名前："+UserID;*/
				document.getElementById("Txtframe").src = "Game/Txtframe.png";
				$("#Love").animate({opacity: 0}, 0,function(){
							if(lang == "cht")document.getElementById("Love").innerHTML = "喜歡："+UserLove[JSON.parse(DialogSet)[DialogID].CharacterName];
							if(lang == "jpn")document.getElementById("Love").innerHTML = "好き："+UserLove[JSON.parse(DialogSet)[DialogID].CharacterName];})
						.animate({opacity: 1}, 1000,function(){});
				$(".A").animate({opacity: 0}, 0,function(){})
						.animate({opacity: 1}, 1000,function(){});
				$(".B").animate({opacity: 0}, 0,function(){})
						.animate({opacity: 1}, 1000,function(){});
				$(".D").animate({opacity: 0}, 0,function(){})
						.animate({opacity: 1}, 1000,function(){});
				NewsetGame();
				$("#save").show();
				$("#background_image").show();
				$("#TxtframeDiv").show();
				$("#CharName").show();
				$("#character").show();
				$( "#dia0" ).show();
				haveload = 1;
	       }
	       else window.alert(data);
	       });
	});
}
$(document).ready(function(){	
	$("#save").click(function(){
        $.ajax({
            method: "POST",//HTTP method for request
            url: "game.php",
        	dataType: 'text',
    	data: {call: saveJson(),actions: "save"}
        }).done(function(data){
				if(lang == "cht")window.alert(UserID+"，下次見");
				if(lang == "jpn")window.alert(UserID+"，さようなら");
				setInterval(function(){
            		window.location.assign("index.html");
   				}, 1000);
        });
    });
});
function saveJson()
{
	var Lovejson = "{";
	for (var n in UserLove)
	{
   		var element = "\""+n+"\":\""+UserLove[n]+"\"";
   		if(n != "END")element += ",";
   		Lovejson += element;
	}
	Lovejson += "}";
	
	var Dialogjson = "{";
	for (var n in UserDialogCollection)
	{
   		var element = "\""+n+"\":\""+UserDialogCollection[n]+"\"";
   		if(n != "END")element += ",";
   		Dialogjson += element;
	}
	Dialogjson += "}";
	return "{\"Account\":\""+UserAccount+"\",\"Passwd\":\""+UserPasswd+"\",\"ID\":\""+UserID+"\",\"DialogID\":"+Dialogjson+",\"Love\":"+Lovejson+"}";
}
function SetFont()
{
	document.getElementById("CharName").style.fontSize = "40px";
	document.getElementById("diaContent").style.fontSize = "36px";
	document.getElementById("diastring1").style.fontSize = "36px";
	document.getElementById("diastring2").style.fontSize = "36px";
	document.getElementById("diastring3").style.fontSize = "36px";
	document.getElementById("Love").style.fontSize ="36px";
	document.getElementById("ID").style.fontSize ="36px";
	
	document.getElementById("CharName").style.fontFamily="微軟正黑體";
	document.getElementById("diaContent").style.fontFamily="微軟正黑體";
	document.getElementById("diastring1").style.fontFamily="微軟正黑體";
	document.getElementById("diastring2").style.fontFamily="微軟正黑體";
	document.getElementById("diastring3").style.fontFamily="微軟正黑體";
	document.getElementById("Love").style.fontFamily="微軟正黑體";
	document.getElementById("ID").style.fontFamily="微軟正黑體";
	
	document.getElementById("CharName").style.fontWeight ="bold";
	document.getElementById("diaContent").style.fontWeight ="bold";
	document.getElementById("diastring1").style.fontWeight ="bold";
	document.getElementById("diastring2").style.fontWeight ="bold";
	document.getElementById("diastring3").style.fontWeight ="bold";
	document.getElementById("Love").style.fontWeight ="bold";
	document.getElementById("ID").style.fontWeight ="bold";
	
	var CharNameColor = "#000000";
	switch(CharacterName)
	{
		case "野野原ゆずこ":
			CharNameColor = "#FF3CDE";break;
		case "櫟井唯":
			CharNameColor = "#EBB000";break;
		case "遠坂凜":
			CharNameColor = "#684945";break;
		case "黑雪學姊":
			CharNameColor = "#281E2B";break;
	    default:
	        CharNameColor ="#000000";
	}
	document.getElementById("CharName").style.color = CharNameColor;
}
function PlayAudio()
{
	var currentDialogID = DialogID;
	var currentBGM = BGM;
	if(BGM!="NONE"&&BGM!="CONTINUE")
	{
		var audio1 = new Audio(BGM);
		audio1.volume=.8;
		audio1.play();
		audio1.loop = true;
	}
	if(Sound!="NONE")
	{
		var audio2 = new Audio(Sound)
		audio2.volume=1.0;
		audio2.play();
	}
	$(document).ready(function()
	{
		setInterval(function()
		{
			if(DialogID!=currentDialogID&&BGM!="CONTINUE")//換對話時切音樂
			{
				audio1.pause();
				audio1.currentTime = 0;
				audio2.pause();
				audio2.currentTime = 0;
			}
   		}, 100);
	});
}
function NewsetGame()//根據對話設置場景
{
	if(DialogID=="EXIT")window.location.assign("index.html");
	UserDialogCollection[ScenarioID] = DialogID;
	CharacterName = JSON.parse(DialogSet)[DialogID].CharacterName;
	document.getElementById("background_image").src = JSON.parse(DialogSet)[DialogID].Bg;
	document.getElementById("diaContent").innerHTML = JSON.parse(DialogSet)[DialogID].Content;
	document.getElementById("character").src = JSON.parse(DialogSet)[DialogID].Character;
	if(JSON.parse(DialogSet)[DialogID].Character=="NONE")document.getElementById("character").src = "character/NONE/none.png";
	document.getElementById("CharName").innerHTML = JSON.parse(DialogSet)[DialogID].CharacterName;
	if(JSON.parse(DialogSet)[DialogID].CharacterName=="NONE")document.getElementById("CharName").innerHTML = "";
	if(lang == "cht")document.getElementById("Love").innerHTML = "喜歡："+UserLove[JSON.parse(DialogSet)[DialogID].CharacterName];
	if(lang == "jpn")document.getElementById("Love").innerHTML = "好き："+UserLove[JSON.parse(DialogSet)[DialogID].CharacterName];
	if(lang == "cht")if(UserLove[JSON.parse(DialogSet)[DialogID].CharacterName] === undefined)document.getElementById("Love").innerHTML = "喜歡：-";
	if(lang == "jpn")if(UserLove[JSON.parse(DialogSet)[DialogID].CharacterName] === undefined)document.getElementById("Love").innerHTML = "好き：-";
	
	BGM = JSON.parse(DialogSet)[DialogID].BGM;//不會save
	Sound = JSON.parse(DialogSet)[DialogID].Sound;//不會save
	
	
	if(JSON.parse(DialogSet)[DialogID].Effect != "")eventController(JSON.parse(DialogSet)[DialogID].Effect);
	
	PlayAudio();
	for(var i = 1;JSON.parse(DialogSet)[DialogID].Next["Next"+i.toString()];i++)//幾個選項就顯示幾個
	{					
		$( "#dia"+i.toString() ).show();
		document.getElementById("diastring"+i.toString()).innerHTML = ">"+JSON.parse(DialogSet)[DialogID].Next["Next"+i.toString()].Txt;
	}
	SetFont();
}
function ClickNext(index)
{
	$("#dia"+index.toString()).click(function(){
	$( "#dia1" ).hide();
	$( "#dia2" ).hide();
	$( "#dia3" ).hide();
	DialogID = JSON.parse(DialogSet)[DialogID].Next["Next"+index.toString()].ID;
	$.ajax({
		method: "POST",
		url: "game.php",
		dataType: 'text',
		data: {call: DialogID,actions: "fetchdialog"}
		}).done(function(data){
		   if(data.charAt(0)=="{")
	       {
	       		DialogSet = data;
				NewsetGame();
	       }
	       else window.alert(data);
       });
	});
}
function NextMouseAct(index)
{
	$("#diastring"+index.toString()+"Font").mouseover(function(){
		document.getElementById("diastring"+index.toString()).style.color="#00A56E";})
	$("#diastring"+index.toString()+"Font").mouseout(function(){
		document.getElementById("diastring"+index.toString()).style.color="#8EFFC1";})
			
	$("#save").mouseover(function(){
		document.getElementById("save").src = "Game/saveBtnHover.png";})
	$("#save").mouseout(function(){
		document.getElementById("save").src = "Game/saveBtnNormal.png";})
	$("#save").mouseout(function(){
		document.getElementById("save").opacity = 0.5;})
			
	$("#deliverbtn").mouseover(function(){		
		document.getElementById("deliverbtn").src = "Game/LoginBtnHover.png";})
	$("#deliverbtn").mouseout(function(){
		document.getElementById("deliverbtn").src = "Game/LoginBtnNormal.png";})
	$("#deliverbtn").mouseout(function(){
		document.getElementById("deliverbtn").opacity = 0.5;})
			
	$("#sce00").mouseover(function(){		
		document.getElementById("sce00").src = "Game/SelectScenario/Sce00Hover.png";})
	$("#sce00").mouseout(function(){
		document.getElementById("sce00").src = "Game/SelectScenario/Sce00Normal.png";})
	$("#sce00").mouseout(function(){
		document.getElementById("sce00").opacity = 0.5;})
			
	$("#sce01").mouseover(function(){		
		document.getElementById("sce01").src = "Game/SelectScenario/Sce01Hover.png";})
	$("#sce01").mouseout(function(){
		document.getElementById("sce01").src = "Game/SelectScenario/Sce01Normal.png";})
	$("#sce01").mouseout(function(){
		document.getElementById("sce01").opacity = 0.5;})
}