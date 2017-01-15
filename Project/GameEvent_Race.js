var CarSTAT;
var LeftEdge;
var PlayerLeftEdge;
var RightEdge;
var TopEdge;
var GameSTAT;
var BGMtemp;
function Game_Race()
{
	GameSTAT = "PAUSE";
	SetVarRace();
	SetBaseRace();
	$(document).ready(function(){
		document.addEventListener('keydown', GameRaceStart, true);
	});
}
function GameRaceStart(event)
{
	if(event.keyCode == 13 && GameSTAT == "PAUSE")
	{
		BGMtemp = GlobalBGMaudio.src;
		GlobalBGMaudio.pause();
		GlobalBGMaudio.src = "BGM/bicycle theme.mp3";
		GlobalBGMaudio.volume=.8;
		GlobalBGMaudio.loop = true;
		GlobalBGMaudio.play();
		document.getElementById("Hint").innerHTML = "小心別碰到障礙物啊!!";
		GameSTAT = "PLAYING";
		CountDistance();
		CarGenerator();
		PlayerGenerator();
		BumpDetector();
		document.removeEventListener("keydown", GameRaceStart);
	}
}
function CountDistance()
{
	var dist = 0;
	var refreshIntervalA = setInterval(function(){
		if(GameSTAT == "GAMEOVER")clearInterval(refreshIntervalA);
		if(GameSTAT == "PLAYING")
		{
		    if(dist < 3000)
		 	{
		 		dist++;
		 		if     (dist<10)  document.getElementById("RunnedDistance").innerHTML = "000" + dist.toString()+"M";
		 		else if(dist<100) document.getElementById("RunnedDistance").innerHTML = "00" + dist.toString()+"M";
		 		else if(dist<1000)document.getElementById("RunnedDistance").innerHTML = "0" + dist.toString()+"M";
		 		else              document.getElementById("RunnedDistance").innerHTML = dist.toString()+"M";
			}
			else
			{
				GameSTAT = "GAMEOVER";
				GlobalBGMaudio.pause();
				var sound = new Audio(sound)
				sound.src = "Game/EventRace/m_pass.wav";
				sound.volume=1.0;
				sound.play();
				$("#Player").attr("src", "Game/EventRace/Player.png");
				for(var i = 0; i < 5; i++)$("#Car"+i.toString()).css('opacity', '0.2');
				$("#Player").css('opacity', '0.2');
				$("#Background").css('opacity', '0.2');
				document.getElementById("Hint").innerHTML = "　 成功抵達終點!!<br>按下Enter鍵結束遊戲";
				$("#Hint").animate({left: '435px',top: '425px',color : "#ff0000",fontSize :"64px",width: '1280px'},400);
				for(var i = 0; i < 5 ;i++)CarMoveController(i,0);
				document.addEventListener('keydown', function(event) {
					if(event.keyCode == 13)
					{
						GlobalBGMaudio.pause();
						GlobalBGMaudio.src = BGMtemp;
						GlobalBGMaudio.volume=.8;
						GlobalBGMaudio.loop = true;
						GlobalBGMaudio.play();
						for(var i = 0; i < 5 ;i++)document.getElementById("Car"+i.toString()).remove();
						document.getElementById("Player").remove();
						document.getElementById("Block").remove();
						document.getElementById("Background").remove();
						document.getElementById("TotalDistance").remove();
						document.getElementById("RunnedDistance").remove();
						document.getElementById("Hint").remove();
					}
				}, true);
			}
		}
		else
		{
		}
	}, 10);
}
function SetBaseRace()
{
	$(document).ready(function(){
		var Block =document.createElement("img");
		Block.setAttribute("id", "Block");
		Block.setAttribute("src", "Game/EventRace/Block.png");
		Block.setAttribute("style", "position:absolute;left:"+LeftEdge+";top:"+TopEdge+";opacity:1;z-index:6");
		$(".EventGame").append(Block);
		var Background =document.createElement("img");
		Background.setAttribute("id", "Background");
		Background.setAttribute("src", "Game/EventRace/Background.png");
		Background.setAttribute("style", "position:absolute;left:"+(parseInt(LeftEdge)+40)+"px;top:"+(parseInt(TopEdge)+25)+"px;opacity:1;z-index:6");
		$(".EventGame").append(Background);
		var TotalDistance =document.createElement("p");
		TotalDistance.setAttribute("id", "TotalDistance");
		TotalDistance.setAttribute("style", "position:absolute;left:1550px;top:530px;white-space:nowrap;color:#339933;font-weight:bold;font-family:微軟正黑體;font-size:46px;opacity:1;z-index:6");
		TotalDistance.appendChild(document.createTextNode("／3000M"));
		$(".EventGame").append(TotalDistance);
		var RunnedDistance =document.createElement("p");
		RunnedDistance.setAttribute("id", "RunnedDistance");
		RunnedDistance.setAttribute("style", "position:absolute;left:1410px;top:530px;white-space:nowrap;color:#00cc66;font-weight:bold;font-family:微軟正黑體;font-size:46px;opacity:1;z-index:6");
		RunnedDistance.appendChild(document.createTextNode("0000M"));
		$(".EventGame").append(RunnedDistance);
		var Hint =document.createElement("p");
		Hint.setAttribute("id", "Hint");
		Hint.setAttribute("style", "position:absolute;left:435px;top:425px;width:1280px;color:#0000cc;font-weight:bold;font-family:微軟正黑體;font-size:64px;opacity:0;z-index:7");
		Hint.appendChild(document.createTextNode(""));
		$(".EventGame").append(Hint);
		document.getElementById("Hint").innerHTML = "　 早餐店衝刺戰!!<br>按下Enter鍵開始遊戲";
		
		$("#Hint").animate({opacity: 1},400).animate({opacity: 1},1500).animate({left: '1410px',top: '650px',fontSize :"24px",width: '320px',color:"#6600cc"},400,function(){document.getElementById("Hint").innerHTML = "使用WASD閃避障礙<br>達目的地即可獲勝";});
	});
}
function SetVarRace()
{
	CarSTAT;
	LeftEdge = "100px";
	PlayerLeftEdge = "200px";
	RightEdge = "1160px";
	TopEdge = "140px";
	GameSTAT = "PAUSE";
}
function BumpDetector()
{
	$(document).ready(function()
	{
		var refreshIntervalB = setInterval(function(){
			if(GameSTAT == "GAMEOVER")clearInterval(refreshIntervalB);
			for(var i = 0; i < 5 ;i++)
			{
				if(document.getElementById("Player").style.top==document.getElementById("Car"+i.toString()).style.top && GameSTAT == "PLAYING")
				{
					if(Math.abs(parseInt(document.getElementById("Player").style.left)-parseInt(document.getElementById("Car"+i.toString()).style.left))<100)
					{
						GameSTAT = "GAMEOVER";
						GlobalBGMaudio.pause();
						var sound = new Audio(sound)
						sound.src = "Game/EventRace/bump.wav";
						sound.volume=1.0;
						sound.play();
						var fallsound = new Audio(sound)
						fallsound.src = "Game/EventRace/fall.wav";
						fallsound.volume=1.0;
						fallsound.play();
						fallsound.load();
						fallsound.play();
						var sound2 = new Audio(sound)
						sound2.src = "Game/EventRace/m_end.wav";
						sound2.volume=1.0;
						sound2.play();
						$("#Player").attr("src", "Game/EventRace/PlayerFall.png");
						for(var i = 0; i < 5; i++)$("#Car"+i.toString()).css('opacity', '0.2');
						$("#Player").css('opacity', '0.2');
						$("#Background").css('opacity', '0.2');
						document.getElementById("Hint").innerHTML = "　 路途遭遇不測!!<br>按下Enter鍵結束遊戲";
						$("#Hint").animate({left: '435px',top: '425px',color : "#ff0000",fontSize :"64px",width: '1280px'},400);
						for(var i = 0; i < 5 ;i++)CarMoveController(i,0);
						document.addEventListener('keydown', function(event) {
							if(event.keyCode == 13)
							{
								for(var i = 0; i < 5 ;i++)document.getElementById("Car"+i.toString()).remove();
								document.getElementById("Player").remove();
								document.getElementById("Block").remove();
								document.getElementById("Background").remove();
								document.getElementById("TotalDistance").remove();
								document.getElementById("RunnedDistance").remove();
								document.getElementById("Hint").remove();
								GlobalBGMaudio.src = BGMtemp;
								GlobalBGMaudio.volume=.8;
								GlobalBGMaudio.loop = true;
								GlobalBGMaudio.play();
							}
						}, true);
					}
				}
			}
		}, 10);
	});
}
function PlayerGenerator()
{
	$(document).ready(function(){
		var Player =document.createElement("img");
		Player.setAttribute("id", "Player");
		Player.setAttribute("src", "Game/EventRace/Player.gif");
		Player.setAttribute("style", "position:absolute;left:"+PlayerLeftEdge+";top:"+(parseInt(TopEdge)+20)+"px;opacity:1;z-index:6");
		$(".EventGame").append(Player);
		if(GameSTAT == "PLAYING")
		{
			document.addEventListener('keydown', function(event) {
			    if(event.keyCode == 87 && parseInt(document.getElementById("Player").style.top)-parseInt(TopEdge) >= 160 && GameSTAT == "PLAYING") {
			        document.getElementById("Player").style.top = parseInt(document.getElementById("Player").style.top)-160+"px";
			    }
			    else if(event.keyCode == 83 && parseInt(document.getElementById("Player").style.top)-parseInt(TopEdge) <= 160*4 && GameSTAT == "PLAYING") {
			        document.getElementById("Player").style.top = parseInt(document.getElementById("Player").style.top)+160+"px";
			    }
			    else if(event.keyCode == 65 && parseInt(document.getElementById("Player").style.left)-parseInt(PlayerLeftEdge) >= 50 && GameSTAT == "PLAYING") {
			        document.getElementById("Player").style.left = parseInt(document.getElementById("Player").style.left)-50+"px";
			    }
			    else if(event.keyCode == 68 && parseInt(document.getElementById("Player").style.left)-parseInt(PlayerLeftEdge) <= 50*4 && GameSTAT == "PLAYING") {
			        document.getElementById("Player").style.left = parseInt(document.getElementById("Player").style.left)+50+"px";
			    }
			}, true);
		}
	});
}
function CarGenerator()
{	
	CarSTAT = [];
	for(var i = 0; i < 5 ;i++)
	{
		var OKGO = Math.random()*2;
		if(OKGO < 1)CarSTAT.push({"State":"FINISH","Move":"Stop"});
		else        CarSTAT.push({"State":"READY","Move":"Stop"});
	}
	$(document).ready(function(){
		
		for(var i = 0; i < 5 ;i++)
		{
			var Car =document.createElement("img");
			Car.setAttribute("id", "Car"+i.toString());
			var ran = Math.random()*5;
			if(ran<1)     Car.setAttribute("src", "");
			else if(ran<2)Car.setAttribute("src", "");
			else if(ran<3)Car.setAttribute("src", "");
			else if(ran<4)Car.setAttribute("src", "");
			else          Car.setAttribute("src", "");
			Car.setAttribute("style", "position:absolute;left:"+RightEdge+";top:"+(parseInt(TopEdge)+20+160*i).toString()+"px;opacity:1;z-index:6");
			$(".EventGame").append(Car);
		}
		for(var i = 0; i < 5 ;i++)
		{
			if(GameSTAT == "PLAYING")CarMoveController(i,1+Math.random()*5);
		}
		var refreshIntervalC = setInterval(function()
		{
			if(GameSTAT == "GAMEOVER")clearInterval(refreshIntervalC);
			for(var i = 0; i < 5 ;i++)
			{
				var OKGO = Math.random()*200;
				if(OKGO < 1 && CarSTAT[i]["State"] == "FINISH")
				{
					CarSTAT[i]["State"] = "READY";
				}
			}
		}, 10);
	});
}
function CarMoveController(i,Speed)
{
	var CarID = "Car"+i.toString();
	var refreshIntervalD = setInterval(function(){//move car
		if(GameSTAT == "GAMEOVER")clearInterval(refreshIntervalD);
		if(CarSTAT[i]["State"]=="READY" && GameSTAT == "PLAYING")
		{
		    if(parseInt(document.getElementById(CarID).style.left) > parseInt(LeftEdge))
		 	{
		 		document.getElementById(CarID).style.left = parseInt(document.getElementById(CarID).style.left)-Speed+"px";
			}
			else
			{
		 		document.getElementById(CarID).style.left = RightEdge;
		 		document.getElementById(CarID).src = "";
		 		CarSTAT[i]["State"] = "FINISH";
			}
		}
		if(CarSTAT[i]["State"]=="READY" && GameSTAT == "PLAYING" && parseInt(document.getElementById(CarID).style.left)>1150)
		{
			var ran = Math.random()*5;
			if     (ran<1)document.getElementById(CarID).src = "Game/EventRace/enemy/pm024.png";
			else if(ran<2)document.getElementById(CarID).src = "Game/EventRace/enemy/pm041.png";
			else if(ran<3)document.getElementById(CarID).src = "Game/EventRace/enemy/pm069.png";
			else if(ran<4)document.getElementById(CarID).src = "Game/EventRace/enemy/pm082.png";
			else          document.getElementById(CarID).src = "Game/EventRace/enemy/pm095.png";
		}
	}, 10);
}