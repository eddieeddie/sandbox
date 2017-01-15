var NumPair;//已翻出的排
var NumChoose;//兩張翻幾張
var GameSTAT;
var NowFlip;//翻開的牌號
var CardSTAT;
function SetVarFlip()
{
	LeftEdge = "100px";
	PlayerLeftEdge = "200px";
	RightEdge = "1160px";
	TopEdge = "140px";
	NumPair = 0;//已翻出的排
	NumChoose = 0;//兩張翻幾張
	GameSTAT = "PAUSE";
	NowFlip = [-1,-1];//翻開的牌號
	CardSTAT = [];
}
function Game_Flip()
{
	GameSTAT = "PAUSE";
	SetVarFlip();
	SetBaseFlip();
	$(document).ready(function(){
		document.addEventListener('keydown', GameFlipStart, true);
	});
}
function GameFlipStart(event)
{
	if(event.keyCode == 13 && GameSTAT == "PAUSE")
	{
		BGMtemp = GlobalBGMaudio.src;
		GlobalBGMaudio.pause();
		GlobalBGMaudio.src = "Game/EventFlip/03. おかえりなさい -Instrumental-.mp3";
		GlobalBGMaudio.volume=.8;
		GlobalBGMaudio.loop = true;
		GlobalBGMaudio.play();
		document.getElementById("Hint").innerHTML = "早餐吃什麼好呢?";
		GameSTAT = "PLAYING";
		CreateCardElement();
		DisplayCard();
		AllPairedDetector();
		document.removeEventListener("keydown", GameFlipStart);
	}
}
function SetBaseFlip()
{
	$(document).ready(function(){
		var Block =document.createElement("img");
		Block.setAttribute("id", "Block");
		Block.setAttribute("src", "Game/EventFlip/Block.png");
		Block.setAttribute("style", "position:absolute;left:"+LeftEdge+";top:"+TopEdge+";opacity:1;z-index:6");
		$(".EventGame").append(Block);
		var Background =document.createElement("img");
		Background.setAttribute("id", "Background");
		Background.setAttribute("src", "Game/EventFlip/Background.png");
		Background.setAttribute("style", "position:absolute;left:"+(parseInt(LeftEdge)+40)+"px;top:"+(parseInt(TopEdge)+25)+"px;opacity:1;z-index:6");
		$(".EventGame").append(Background);
		var TotalCard =document.createElement("p");
		TotalCard.setAttribute("id", "TotalCard");
		TotalCard.setAttribute("style", "position:absolute;left:1550px;top:530px;white-space:nowrap;color:#339933;font-weight:bold;font-family:微軟正黑體;font-size:46px;opacity:1;z-index:6");
		TotalCard.appendChild(document.createTextNode("／16張"));
		$(".EventGame").append(TotalCard);
		var DoneCard =document.createElement("p");
		DoneCard.setAttribute("id", "DoneCard");
		DoneCard.setAttribute("style", "position:absolute;left:1410px;top:530px;white-space:nowrap;color:#00cc66;font-weight:bold;font-family:微軟正黑體;font-size:46px;opacity:1;z-index:6");
		DoneCard.appendChild(document.createTextNode("00張"));
		$(".EventGame").append(DoneCard);
		var Hint =document.createElement("p");
		Hint.setAttribute("id", "Hint");
		Hint.setAttribute("style", "position:absolute;left:435px;top:425px;width:1280px;color:#0000cc;font-weight:bold;font-family:微軟正黑體;font-size:64px;opacity:0;z-index:7");
		Hint.appendChild(document.createTextNode(""));
		$(".EventGame").append(Hint);
		document.getElementById("Hint").innerHTML = "　 晨間腦力虐待!!<br>按下Enter鍵開始遊戲";
		
		$("#Hint").animate({opacity: 1},400).animate({opacity: 1},1500).animate({left: '1410px',top: '650px',fontSize :"24px",width: '320px',color:"#6600cc"},400,function(){document.getElementById("Hint").innerHTML = "翻牌記憶早餐<br>全部配對即可獲勝";});

	});
}
function AllPairedDetector()
{
	var refreshIntervalA = setInterval(function()
	{
		if(GameSTAT == "GAMEOVER")clearInterval(refreshIntervalA);
		if(NumPair == 16 && GameSTAT == "PLAYING")STOP();
	}, 100);
}

function CreateCardElement()
{
	var AllPossibleCards = [];
	AllPossibleCards.push({"Name":"粥品","STAT":"Covered","src":"Game/EventFlip/Card/粥品.jpg"});
	AllPossibleCards.push({"Name":"漢堡","STAT":"Covered","src":"Game/EventFlip/Card/漢堡.jpg"});
	AllPossibleCards.push({"Name":"三明治","STAT":"Covered","src":"Game/EventFlip/Card/三明治.jpg"});
	AllPossibleCards.push({"Name":"笑臉荷包蛋","STAT":"Covered","src":"Game/EventFlip/Card/笑臉荷包蛋.jpg"});
	AllPossibleCards.push({"Name":"水果餐","STAT":"Covered","src":"Game/EventFlip/Card/水果餐.jpg"});
	AllPossibleCards.push({"Name":"豆漿油條","STAT":"Covered","src":"Game/EventFlip/Card/豆漿油條.jpg"});
	AllPossibleCards.push({"Name":"肉包子","STAT":"Covered","src":"Game/EventFlip/Card/肉包子.jpg"});
	AllPossibleCards.push({"Name":"法式吐司","STAT":"Covered","src":"Game/EventFlip/Card/法式吐司.jpg"});
	AllPossibleCards.push({"Name":"燒賣","STAT":"Covered","src":"Game/EventFlip/Card/燒賣.jpg"});
	AllPossibleCards.push({"Name":"蘿波糕","STAT":"Covered","src":"Game/EventFlip/Card/蘿波糕.jpg"});
	AllPossibleCards.push({"Name":"饅頭","STAT":"Covered","src":"Game/EventFlip/Card/饅頭.jpg"});
	AllPossibleCards.push({"Name":"鬆餅","STAT":"Covered","src":"Game/EventFlip/Card/鬆餅.jpg"});
	AllPossibleCards.push({"Name":"麵包","STAT":"Covered","src":"Game/EventFlip/Card/麵包.jpg"});
	AllPossibleCards.sort(function() {return .5 - Math.random();});
	for(var i = 0; i < 8; i++)
	{
		CardSTAT.push({"Name":AllPossibleCards[i]["Name"],"STAT":AllPossibleCards[i]["STAT"],"src":AllPossibleCards[i]["src"]});//22成對再shuffle
		CardSTAT.push({"Name":AllPossibleCards[i]["Name"],"STAT":AllPossibleCards[i]["STAT"],"src":AllPossibleCards[i]["src"]});
	}
	CardSTAT.sort(function() {return .5 - Math.random();});
	for(var i = 0; i < 16; i++)
	{
		var cards = $('<img />', { 
			  id: 'Card'+i.toString(),
			  src: CardSTAT[i]["src"],
			  alt: 'Card'+i.toString(),
			  style:"position:absolute;left:"+(350+200*(i%4))+"px;top:"+(175+200*parseInt(i/4))+"px;opacity:1;z-index:6"
		});
		cards.appendTo($('.EventGame'));
		SetClick(i);
	}
}
function DisplayCard()
{
		if(GameSTAT == "PLAYING")
		{
			for(var i = 0; i < 16; i++)
			{
				if(CardSTAT[i]["STAT"] == "Covered")$("#Card"+i.toString()).attr("src", "Game/EventFlip/Card/covered.jpg");
				else $("#Card"+i.toString()).attr("src", CardSTAT[i]["src"]);
			}
		}
}
function SetClick(i)//設定翻牌條件
{
	$(document).ready(function(){
	    $("#Card"+i.toString()).click(function(){
	        if(NumChoose == 0 && CardSTAT[i]["STAT"] == "Covered")
	        {
	        	NumChoose++;
	        	NumPair++;
	        	NowFlip[0] = i;
	        	CardSTAT[i]["STAT"] = "Flipped";
				$("#Card"+NowFlip[0]).animate({opacity: 0}, 400,function(){	$("#Card"+NowFlip[0]).attr("src", CardSTAT[NowFlip[0]]["src"])})						
						.animate({opacity: 1}, 400,function(){});
	        	if(NumPair < 10)document.getElementById("DoneCard").innerHTML = "0"+NumPair+"張";
	        	else document.getElementById("DoneCard").innerHTML = NumPair+"張";
	        }
	        else if(NumChoose == 1 && CardSTAT[i]["STAT"] == "Covered")
	        {
	        	NumChoose++;
	        	NowFlip[1] = i;
	        	CardSTAT[i]["STAT"] = "Flipped";
				$("#Card"+NowFlip[1]).animate({opacity: 0}, 400,function(){$("#Card"+NowFlip[1]).attr("src", CardSTAT[NowFlip[1]]["src"])})						
						.animate({opacity: 1}, 400,function()
						{
				        	if(CardSTAT[NowFlip[0]]["Name"]==CardSTAT[NowFlip[1]]["Name"])//是否翻中
				        	{
								var sound = new Audio(sound)
								sound.src = "Game/EventFlip/paired.wav";
								sound.volume=1.0;
								sound.play();
				        		CardSTAT[NowFlip[0]]["STAT"] = "Done";
				        		CardSTAT[NowFlip[1]]["STAT"] = "Done";
				        		NumPair++;
				        	}
				        	else
				        	{
				        		CardSTAT[NowFlip[0]]["STAT"] = "Covered";
				        		CardSTAT[NowFlip[1]]["STAT"] = "Covered";
								$("#Card"+NowFlip[0]).animate({opacity: 0}, 400,function(){})
										.animate({opacity: 1}, 400,function(){})
										.attr("src", "Game/EventFlip/Card/covered.jpg");
								$("#Card"+NowFlip[1]).animate({opacity: 0}, 400,function(){})
										.animate({opacity: 1}, 400,function(){})
										.attr("src", "Game/EventFlip/Card/covered.jpg");
				        		NumPair--;
				        	}
				        	NumChoose = 0;
				        	NowFlip[0] = -1;
				        	NowFlip[1] = -1;
				        	if(NumPair < 10)document.getElementById("DoneCard").innerHTML = "0"+NumPair+"張";
				        	else document.getElementById("DoneCard").innerHTML = NumPair+"張";
	        			});
	        }
	    });
	});
}
function STOP()
{
	GameSTAT = "GAMEOVER";
	GlobalBGMaudio.pause();
	var sound = new Audio(sound)
	sound.src = "Game/EventRace/m_pass.wav";
	sound.volume=1.0;
	sound.play();
	for(var i = 0; i < 16; i++)$("#Card"+i.toString()).css('opacity', '0.2');
	document.getElementById("Hint").innerHTML = "　 決定全買下了!!<br>按下Enter鍵結束遊戲";
	$("#Hint").animate({left: '435px',top: '425px',color : "#ff0000",fontSize :"64px",width: '1280px'},400);
	document.addEventListener('keydown', function(event) {
		if(event.keyCode == 13)
		{
			GlobalBGMaudio.pause();
			GlobalBGMaudio.src = BGMtemp;
			GlobalBGMaudio.volume=.8;
			GlobalBGMaudio.loop = true;
			GlobalBGMaudio.play();
			for(var i = 0; i < 16; i++)$("#Card"+i.toString()).remove();
			document.getElementById("Hint").style.opacity = 0;
			$("#Hint").hide();
			document.getElementById("Hint").remove();
			document.getElementById("Block").remove();
			document.getElementById("Background").remove();
			document.getElementById("TotalCard").remove();
			document.getElementById("DoneCard").remove();
			document.getElementById("CanFlip").remove();
			document.getElementById("Hint").remove();
		}
	}, true);
}