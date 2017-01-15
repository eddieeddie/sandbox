var lang = "jpn";
if(getCookie("lang")=="cht")lang ="cht";
if(getCookie("lang")=="jpn")lang ="jpn";
setLang("Game0000",lang,"Title");
setLang("Game0001",lang,"accountWord");
setLang("Game0002",lang,"passwdWord");
setLang("Game0003",lang,"選択");
var haveload = 0;
var SaveID = "save1";
var SaveUserData;
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
			$("#sce02").hide();
			$("#sce03").hide();
		}
		setInterval(function(){
			SetFont();
		    if(userdata != undefined&&haveload==0)
		 	{
				$("#Title").hide();
				$("#account").hide();
				$("#passwd").hide();
				$("#accountWord").hide();
				$("#passwdWord").hide();
				$("#deliverbtn").hide();
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
	CheckOwn();
	$("#選択").show();
	$("#sce00").show();
	$("#sce01").show();
	$("#sce02").show();
	$("#sce03").show();
	$("#sce00").click(function(){
		if(SaveUserData.DialogID["00"]["save1"]!="UNAVAILABLE")
		{
			document.getElementById("選択").remove();
			document.getElementById("sce00").remove();
			document.getElementById("sce01").remove();
			document.getElementById("sce02").remove();
			document.getElementById("sce03").remove();
			ScenarioID = "00";
			SelectSave("open");
		}
		else
		{
			var error0 = document.createElement("p");
			error0.setAttribute("id", "error0");
			error0.setAttribute("style", "position:absolute;opacity:0;z-index: 5;left:195px;top:130px;font-family:微軟正黑體;color:#ff0000;white-space:nowrap;");
			document.getElementById("sce00div").appendChild(error0);
			if(lang == "cht")document.getElementById('error0').innerHTML = "請先購買";
			if(lang == "jpn")document.getElementById('error0').innerHTML = "買ってくださいね";
			$("#error0").animate({opacity: 1}, 300,function(){})
							.animate({opacity: 0}, 1300,function(){document.getElementById("error0").remove();});
		}
	});
	$("#sce01").click(function(){
		if(SaveUserData.DialogID["01"]["save1"]!="UNAVAILABLE")
		{
			document.getElementById("選択").remove();
			document.getElementById("sce00").remove();
			document.getElementById("sce01").remove();
			document.getElementById("sce02").remove();
			document.getElementById("sce03").remove();
			ScenarioID = "01";
			SelectSave("open");
		}
		else
		{
			var error1 = document.createElement("p");
			error1.setAttribute("id", "error1");
			error1.setAttribute("style", "position:absolute;opacity:0;z-index: 5;left:195px;top:230px;font-family:微軟正黑體;color:#ff0000;white-space:nowrap;");
			document.getElementById("sce01div").appendChild(error1);
			if(lang == "cht")document.getElementById('error1').innerHTML = "請先購買";
			if(lang == "jpn")document.getElementById('error1').innerHTML = "買ってくださいね";
			$("#error1").animate({opacity: 1}, 300,function(){})
							.animate({opacity: 0}, 1300,function(){document.getElementById("error1").remove();});
		}
	});
	$("#sce02").click(function(){
		if(SaveUserData.DialogID["02"]["save1"]!="UNAVAILABLE")
		{
			document.getElementById("選択").remove();
			document.getElementById("sce00").remove();
			document.getElementById("sce01").remove();
			document.getElementById("sce02").remove();
			document.getElementById("sce03").remove();
			ScenarioID = "02";
			SelectSave("open");
		}
		else
		{
			var error2 = document.createElement("p");
			error2.setAttribute("id", "error2");
			error2.setAttribute("style", "position:absolute;opacity:0;z-index: 5;left:195px;top:330px;font-family:微軟正黑體;color:#ff0000;white-space:nowrap;");
			document.getElementById("sce02div").appendChild(error2);
			if(lang == "cht")document.getElementById('error2').innerHTML = "請先購買";
			if(lang == "jpn")document.getElementById('error2').innerHTML = "買ってくださいね";
			$("#error2").animate({opacity: 1}, 300,function(){})
							.animate({opacity: 0}, 1300,function(){document.getElementById("error2").remove();});
		}
	});
	$("#sce03").click(function(){
		if(SaveUserData.DialogID["03"]["save1"]!="UNAVAILABLE")
		{
			document.getElementById("選択").remove();
			document.getElementById("sce00").remove();
			document.getElementById("sce01").remove();
			document.getElementById("sce02").remove();
			document.getElementById("sce03").remove();
			ScenarioID = "03";
			SelectSave("open");
		}
		else
		{
			var error3 = document.createElement("p");
			error3.setAttribute("id", "error3");
			error3.setAttribute("style", "position:absolute;opacity:0;z-index: 5;left:195px;top:430px;font-family:微軟正黑體;color:#ff0000;white-space:nowrap;");
			document.getElementById("sce03div").appendChild(error3);
			if(lang == "cht")document.getElementById('error3').innerHTML = "請先購買";
			if(lang == "jpn")document.getElementById('error3').innerHTML = "買ってくださいね";
			$("#error3").animate({opacity: 1}, 300,function(){})
							.animate({opacity: 0}, 1300,function(){document.getElementById("error3").remove();});
		}
	});
}
function SelectSave(action)
{
	var saveBG =document.createElement("img");
	saveBG.setAttribute("id", "saveBG");
	saveBG.setAttribute("src", "Game/SelectSave/bg.png");
	saveBG.setAttribute("style", "position:absolute;left:0px;top:0px;opacity:0");
	$(".SelectSave").append(saveBG);
	
	var saveTitle =document.createElement("p");
	saveTitle.setAttribute("id", "saveTitle");
	saveTitle.setAttribute("style", "position:absolute;left:300px;top:10px;width:1280px;color:#FF5E28;font-weight:bold;font-family:微軟正黑體;font-size:46px;opacity:0;z-index:6");
	if(lang == "cht") 
	{
		if(action== "open")saveTitle.appendChild(document.createTextNode("　　　請選擇存檔　　　"));
		if(action== "save")saveTitle.appendChild(document.createTextNode("　　　請選擇存檔　　　"));
	}
	if(lang == "jpn") 
	{
		if(action== "open")saveTitle.appendChild(document.createTextNode("セーブを選んでください"));
		if(action== "save")saveTitle.appendChild(document.createTextNode("セーブを選んでください"));
	}
	$(".SelectSave").append(saveTitle);
	
	numofSave = 5;
	for(var i = 1;i<=numofSave;i++)
	{
		var saveElementEdge =document.createElement("img");
		saveElementEdge.setAttribute("id", "saveElementEdge"+i.toString());
		saveElementEdge.setAttribute("src", "Game/SelectSave/elementEdgeNormal.png");
		saveElementEdge.setAttribute("style", "position:absolute;left:50px;top:"+(130*i-40)+"px;z-index:5;opacity:0");
		
		var saveElement =document.createElement("img");
		saveElement.setAttribute("id", "saveElement"+i.toString());
		saveElement.setAttribute("src", "Game/SelectSave/elementNormal.png");
		saveElement.setAttribute("style", "position:absolute;left:50px;top:"+(130*i-40)+"px;opacity:0");
		
		var saveString =document.createElement("p");
		saveString.setAttribute("id", "saveString"+i.toString());
		saveString.setAttribute("style", "position:absolute;left:100px;top:"+(130*i-5)+"px;width:1280px;color:#00A56E;font-weight:bold;font-family:微軟正黑體;font-size:32px;opacity:0");
		if(JSON.parse(userdata).DialogID[ScenarioID]["save"+i.toString()])saveString.appendChild(document.createTextNode(JSON.parse(userdata).DialogID[ScenarioID]["save"+i.toString()]+"　　　　　"+JSON.parse(userdata).SaveTime[ScenarioID]["save"+i.toString()]));
		else saveString.appendChild(document.createTextNode("EMPTY"));
		
		$(".SelectSave").append(saveElementEdge);
		$(".SelectSave").append(saveElement);
		$(".SelectSave").append(saveString);
		NextMouseAct_Save(i,action);
	}
	var randomKyara;
	var ranvar = Math.random()*5;
	if(ranvar<=1)randomKyara="chino";
	else if(ranvar<=2)randomKyara="kokoa";
	else if(ranvar<=3)randomKyara="chiya";
	else if(ranvar<=4)randomKyara="rise";
	else randomKyara="syaro";
	
	var kyara =document.createElement("img");
	kyara.setAttribute("id", "kyara");
	kyara.setAttribute("src", "Game/SelectSave/kyara/"+randomKyara+".png");
	kyara.setAttribute("style", "position:absolute;left:1000px;top:400px;opacity:0");
	$(".SelectSave").append(kyara);
	
	
	var kyaraDiabg =document.createElement("img");
	kyaraDiabg.setAttribute("id", "kyaraDiabg");
	kyaraDiabg.setAttribute("src", "Game/SelectSave/kyara/Diabg.png");
	kyaraDiabg.setAttribute("style", "position:absolute;left:915px;top:220px;opacity:0");
	$(".SelectSave").append(kyaraDiabg);
	
	
	var kyaraDialogue =document.createElement("div");
	kyaraDialogue.setAttribute("id", "kyaraDialogue");
	kyaraDialogue.setAttribute("style", "position:absolute;left:935px;top:250px;width:315px;color:#00A56E;font-weight:bold;font-family:微軟正黑體;font-size:36px;opacity:0");
	if(lang == "cht") 
	{
		if(action== "open")kyaraDialogue.appendChild(document.createTextNode("要從哪邊開始呢？"));
		if(action== "save")kyaraDialogue.appendChild(document.createTextNode(UserID+"，下次見"));
	}
	if(lang == "jpn") 
	{
		if(action== "open")kyaraDialogue.appendChild(document.createTextNode("どこから遊ぶの？"));
		if(action== "save")kyaraDialogue.appendChild(document.createTextNode(UserID+"，さようなら"));
	}
	$(".SelectSave").append(kyaraDialogue);
	
	
	$("#saveBG").animate({opacity: 1}, 500,function(){
		$("#saveElementEdge1").animate({marginTop: "70px",opacity: 1}, 300,function(){
			$("#saveElementEdge2").animate({marginTop: "70px",opacity: 1}, 300,function(){
				$("#saveElementEdge3").animate({marginTop: "70px",opacity: 1}, 300,function(){
					$("#saveElementEdge4").animate({marginTop: "70px",opacity: 1}, 300,function(){
						$("#saveElementEdge5").animate({marginTop: "70px",opacity: 1}, 300,function(){
						});
					});
				});
			});
		});
		$("#saveElement1").animate({marginTop: "70px",opacity: 1}, 300,function(){
			$("#saveElement2").animate({marginTop: "70px",opacity: 1}, 300,function(){
				$("#saveElement3").animate({marginTop: "70px",opacity: 1}, 300,function(){
					$("#saveElement4").animate({marginTop: "70px",opacity: 1}, 300,function(){
						$("#saveElement5").animate({marginTop: "70px",opacity: 1}, 300,function(){
						});
					});
				});
			});
		});
		$("#saveString1").animate({marginTop: "70px",opacity: 1}, 300,function(){
			$("#saveString2").animate({marginTop: "70px",opacity: 1}, 300,function(){
				$("#saveString3").animate({marginTop: "70px",opacity: 1}, 300,function(){
					$("#saveString4").animate({marginTop: "70px",opacity: 1}, 300,function(){
						$("#saveString5").animate({marginTop: "70px",opacity: 1}, 300,function(){
						});
					});
				});
			});
		});
	});
	$("#saveTitle").animate({opacity: 1}, 300,function(){});
	$("#kyaraDiabg").animate({opacity: 1}, 300,function(){});
	$("#kyaraDialogue").animate({opacity: 1}, 300,function(){});
	$("#kyara").animate({opacity: 1}, 300,function(){
		setInterval(function(){
			$("#kyara")
			.animate({marginTop: "-25px"}, 500,function(){})
			.animate({marginTop: "+50px"}, 1000,function(){})
			.animate({marginTop: "-25px"}, 500,function(){});
			$("#kyaraDiabg")
			.animate({marginTop: "-25px"}, 500,function(){})
			.animate({marginTop: "+50px"}, 1000,function(){})
			.animate({marginTop: "-25px"}, 500,function(){});
			$("#kyaraDialogue")
			.animate({marginTop: "-25px"}, 500,function(){})
			.animate({marginTop: "+50px"}, 1000,function(){})
			.animate({marginTop: "-25px"}, 500,function(){});
		}, 300);
	});
}
function loadgame()
{
	DialogID=JSON.parse(userdata).DialogID[ScenarioID][SaveID];
	$(document).ready(function(){	
		$.ajax({
	       method: "POST",//HTTP method for request
	       url: "game.php",
	       dataType: 'text',
  		   async: false,
	       data: {call: DialogID,actions: "fetchdialog"}
	       }).done(function(data){
		   if(data.charAt(0)=="{")
	       {	       	   
	       		DialogSet = data;
				UserID = JSON.parse(userdata).ID;//save會用到
				UserPasswd = JSON.parse(userdata).Passwd;//save會用到
				UserAccount = JSON.parse(userdata).Account;//save會用到
				UserMoney = JSON.parse(userdata).Money;//save會用到
				UserLove = JSON.parse(userdata).Love;//save會用到
				UserDialogCollection = JSON.parse(userdata).DialogID;//save會用到
				UserSaveTimeCollection = JSON.parse(userdata).SaveTime;//save會用到
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
		SelectSave("save");
    });
});
function saveJson()
{
	SaveUserData.Account = UserAccount;//save會用到
	SaveUserData.Passwd = UserPasswd;//save會用到
	SaveUserData.ID = UserID;//save會用到
	SaveUserData.Money = UserMoney;//save會用到
	SaveUserData.Love = UserLove;//save會用到
	SaveUserData.DialogID = UserDialogCollection;//save會用到
	SaveUserData.SaveTime = UserSaveTimeCollection;//save會用到
	var Savejson = JSON.stringify(SaveUserData);
	var pos = Savejson.indexOf(",\"SaveTime\":{");
	Savejson = Savejson.substring(0,pos) +"\n"+ Savejson.substring(pos);
	pos = Savejson.indexOf(",\"Love\":{");
	Savejson = Savejson.substring(0,pos) +"\n"+ Savejson.substring(pos);
	for(var i = 0;i <= 3; i++)
	{
		pos = Savejson.indexOf("\"0"+i.toString()+"\":{");
		Savejson = Savejson.substring(0,pos) +"\n"+ Savejson.substring(pos);
		pos = Savejson.indexOf("\"0"+i.toString()+"\":{",pos+2);
		Savejson = Savejson.substring(0,pos) +"\n"+ Savejson.substring(pos);
	}
	return Savejson;
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
	
	
	document.getElementById("diaContent").style.width = "800px";
	
	var CharNameColor = "#000000";
	switch(CharacterName)
	{
		case "野野原ゆずこ":
			CharNameColor = "#FF3CDE";break;
		case "櫟井唯":
			CharNameColor = "#EBB000";break;
		case "日向縁":
			CharNameColor = "#7665A9";break;
		case "遠坂凜":
			CharNameColor = "#684945";break;
		case "黑雪學姊":
			CharNameColor = "#281E2B";break;
		case "小琪":
			CharNameColor = "#9933ff";break;
	    default:
	        CharNameColor ="#000000";
	}
	document.getElementById("CharName").style.color = CharNameColor;
}
function PlayAudio()
{
	var currentDialogID = DialogID;
	var currentBGM = BGM;
	var htmlName = location.href.split("/").slice(-1);
	var parenURL = decodeURI(window.location.href).replace(htmlName,'');
	if(currentBGM!="NONE")//播音樂
	{
		if(decodeURI(GlobalBGMaudio.src) == parenURL+currentBGM);//持續播剛才的音樂
		else//換音樂
		{
			GlobalBGMaudio.pause();
			GlobalBGMaudio.src = currentBGM;
			GlobalBGMaudio.volume=.8;
			GlobalBGMaudio.loop = true;
			GlobalBGMaudio.play();
		}
	}
	else//終止音樂
	{
		GlobalBGMaudio.pause();
		GlobalBGMaudio.currentTime = 0;
	}
	if(Sound!="NONE")
	{
		var audio2 = new Audio(Sound)
		audio2.volume=1.0;
		audio2.play();
	}
}
/*
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
*/
function NewsetGame()//根據對話設置場景
{
	if(DialogID=="EXIT")window.location.assign("index.html");
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
	
	//console.log(JSON.parse(DialogSet)[DialogID].Event);
	if(JSON.parse(DialogSet)[DialogID].Effect != "" && JSON.parse(DialogSet)[DialogID].Effect != undefined)effectController(JSON.parse(DialogSet)[DialogID].Effect);
	if(JSON.parse(DialogSet)[DialogID].Event != "" && JSON.parse(DialogSet)[DialogID].Event != undefined)eventController(JSON.parse(DialogSet)[DialogID].Event);
	
	PlayAudio();
	for(var i = 1;JSON.parse(DialogSet)[DialogID].Next["Next"+i.toString()];i++)//幾個選項就顯示幾個
	{					
		$( "#dia"+i.toString() ).show();
		if(JSON.parse(DialogSet)[DialogID].Next["Next"+i.toString()].Txt!="CONTINUE")document.getElementById("diastring"+i.toString()).innerHTML = ">"+JSON.parse(DialogSet)[DialogID].Next["Next"+i.toString()].Txt;
		else document.getElementById("diastring"+i.toString()).innerHTML = "▼Next▼";
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
  		async: false,
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
		document.getElementById("diastring"+index.toString()).style.color="#00A56E";});
	$("#diastring"+index.toString()+"Font").mouseout(function(){
		document.getElementById("diastring"+index.toString()).style.color="#8EFFC1";});
			
	$("#save").mouseover(function(){
		document.getElementById("save").src = "Game/saveBtnHover.png";
		document.getElementById("save").style.opacity = 1;});
	$("#save").mouseout(function(){
		document.getElementById("save").src = "Game/saveBtnNormal.png";
		document.getElementById("save").style.opacity = 0.75;});
			
	$("#deliverbtn").mouseover(function(){		
		document.getElementById("deliverbtn").src = "Game/LoginBtnHover.png";
		document.getElementById("deliverbtn").style.opacity = 1;});
	$("#deliverbtn").mouseout(function(){
		document.getElementById("deliverbtn").src = "Game/LoginBtnNormal.png";
		document.getElementById("deliverbtn").style.opacity = 0.75;});
			
	$("#sce00").mouseover(function(){		
		document.getElementById("sce00").src = "Game/SelectScenario/Sce00Hover.png";
		document.getElementById("sce00").style.opacity = 1;});
	$("#sce00").mouseout(function(){
		document.getElementById("sce00").src = "Game/SelectScenario/Sce00Normal.png";
		document.getElementById("sce00").style.opacity = 0.75;});
			
	$("#sce01").mouseover(function(){		
		document.getElementById("sce01").src = "Game/SelectScenario/Sce01Hover.png";
		document.getElementById("sce01").style.opacity = 1;});
	$("#sce01").mouseout(function(){
		document.getElementById("sce01").src = "Game/SelectScenario/Sce01Normal.png";
		document.getElementById("sce01").style.opacity = 0.75;});
			
	$("#sce02").mouseover(function(){		
		document.getElementById("sce02").src = "Game/SelectScenario/Sce02Hover.png";
		document.getElementById("sce02").style.opacity = 1;});
	$("#sce02").mouseout(function(){
		document.getElementById("sce02").src = "Game/SelectScenario/Sce02Normal.png";
		document.getElementById("sce02").style.opacity = 0.75;});
			
	$("#sce03").mouseover(function(){		
		document.getElementById("sce03").src = "Game/SelectScenario/Sce03Hover.png";
		document.getElementById("sce03").style.opacity = 1;});
	$("#sce03").mouseout(function(){
		document.getElementById("sce03").src = "Game/SelectScenario/Sce03Normal.png";
		document.getElementById("sce03").style.opacity = 0.75;});
}
function NextMouseAct_Save(index,action)
{
	$("#saveElementEdge"+index.toString()).mouseover(function(){
		document.getElementById("saveElement"+index.toString()).src = "Game/SelectSave/elementHover.png";
		document.getElementById("saveElementEdge"+index.toString()).src = "Game/SelectSave/elementEdgeHover.png";
		document.getElementById("saveString"+index.toString()).style.color="#82D096";});
	$("#saveElementEdge"+index.toString()).mouseout(function(){
		document.getElementById("saveElement"+index.toString()).src = "Game/SelectSave/elementNormal.png";
		document.getElementById("saveElementEdge"+index.toString()).src = "Game/SelectSave/elementEdgeNormal.png";
		document.getElementById("saveString"+index.toString()).style.color="#00A56E";});
		
	
	$("#saveElementEdge"+index.toString()).click(function(){
		SaveID = "save"+index.toString();
		if(action=="save")
		{
			UserDialogCollection[ScenarioID]["save"+index.toString()] = DialogID;
			document.getElementById("saveString"+index.toString()).innerHTML = DialogID;			
			var currentdate = new Date();
			var NOWtime =  currentdate.getFullYear() + "/"
		                + (currentdate.getMonth()+1)  + "/" 
		                + currentdate.getDate() + "    "  
		                + currentdate.getHours() + ":"  
		                + currentdate.getMinutes() + ":" 
		                + currentdate.getSeconds();
		    UserSaveTimeCollection[ScenarioID]["save"+index.toString()] = NOWtime;
			$(document).ready(function(){
		        $.ajax({
		            method: "POST",//HTTP method for request
		            url: "game.php",
		        	dataType: 'text',
  		   			async: false,
		    	data: {call: saveJson(),actions: "save"}
		        }).done(function(data){
						setInterval(function(){
		            		window.location.assign("index.html");
		   				}, 1000);
		        });
	   		});
		}
		if((action=="open"&&JSON.parse(userdata).DialogID[ScenarioID]["save"+index.toString()])||action=="save")
		{
			for(var i = 1 ;i <= 5 ;i++)
			{
				document.getElementById("saveElement"+i.toString()).remove();
				document.getElementById("saveElementEdge"+i.toString()).remove();
				document.getElementById("saveString"+i.toString()).remove();
			}
			document.getElementById("saveBG").remove();
			document.getElementById("saveTitle").remove();
			document.getElementById("kyaraDiabg").remove();
			document.getElementById("kyaraDialogue").remove();
			document.getElementById("kyara").remove();
			if(action=="open")loadgame();
		}
	});
}



function CheckOwn()
{
	if(SaveUserData.DialogID["00"]["save1"]=="UNAVAILABLE")document.getElementById("sce00").style.WebkitFilter  = 'grayscale(100%)';
	if(SaveUserData.DialogID["01"]["save1"]=="UNAVAILABLE")document.getElementById("sce01").style.WebkitFilter  = 'grayscale(100%)';
	if(SaveUserData.DialogID["02"]["save1"]=="UNAVAILABLE")document.getElementById("sce02").style.WebkitFilter  = 'grayscale(100%)';
	if(SaveUserData.DialogID["03"]["save1"]=="UNAVAILABLE")document.getElementById("sce03").style.WebkitFilter  = 'grayscale(100%)';
}