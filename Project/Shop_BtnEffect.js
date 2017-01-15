$(document).ready(function(){
	document.getElementById("deliverbtn").style.opacity = 0.75;
	$("#deliverbtn").mouseover(function(){
		document.getElementById("deliverbtn").src = "Shop/CheckoutBtnHover.png";
		document.getElementById("deliverbtn").style.opacity = 1;});
	$("#deliverbtn").mouseout(function(){
		document.getElementById("deliverbtn").src = "Shop/CheckoutBtnNormal.png";
		document.getElementById("deliverbtn").style.opacity = 0.75;});
		
		
	document.getElementById("checkoutbtn").style.opacity = 0.75;
	$("#checkoutbtn").mouseover(function(){
		document.getElementById("checkoutbtn").src = "Shop/CheckoutBtnHover.png";
		document.getElementById("checkoutbtn").style.opacity = 1;});
	$("#checkoutbtn").mouseout(function(){
		document.getElementById("checkoutbtn").src = "Shop/CheckoutBtnNormal.png";
		document.getElementById("checkoutbtn").style.opacity = 0.75;});
});

function SetChooseStateBtn(itemList,i)
{
	$("#chooseState"+i.toString()).click(function(){
		if(itemList[i]["chooseState"]=="Unchosen"&&itemList[i]["ownState"]=="NoOwn")
		{
			itemList[i]["chooseState"] = "Chosen";
			document.getElementById("chooseState"+i.toString()).src = "Shop/pic/chosen.png";
		}
		else if(itemList[i]["ownState"]=="NoOwn")
		{
			itemList[i]["chooseState"] = "Unchosen";
			document.getElementById("chooseState"+i.toString()).src = "Shop/pic/unchosen.png";
		}
	});
}
$(document).ready(function(){
	$("#checkoutbtn").click(function(){
		
		var confirmbg =document.createElement("img");
		confirmbg.setAttribute("id", "confirmbg");
		confirmbg.setAttribute("src", "Shop/pic/confirmbg.png");
		confirmbg.setAttribute("style", "position:absolute;left:-170px;top:-150px;opacity:0;");
		$("#Checkout").append(confirmbg);
		$("#confirmbg").animate({marginTop: "0px",opacity: 1}, 300,function(){});
		
		var buy =document.createElement("img");
		buy.setAttribute("id", "buy");
		buy.setAttribute("src", "Shop/pic/buy.png");
		buy.setAttribute("style", "position:absolute;left:-70px;top:60px;opacity:0;");
		$("#Checkout").append(buy);
		$("#buy").animate({marginTop: "0px",opacity: 0.75}, 300,function(){});
		
		var Nbuy =document.createElement("img");
		Nbuy.setAttribute("id", "Nbuy");
		Nbuy.setAttribute("src", "Shop/pic/Nbuy.png");
		Nbuy.setAttribute("style", "position:absolute;left:130px;top:60px;opacity:0;");
		$("#Checkout").append(Nbuy);
		$("#Nbuy").animate({marginTop: "0px",opacity: 0.75}, 300,function(){});
			
		var txt =document.createElement("p");
		txt.setAttribute("id", "txt");
		txt.setAttribute("style", "position:absolute;left:-115px;top:-70px;width:400px;color:#00A56E;font-weight:bold;font-family:微軟正黑體;font-size:32px;opacity:0");
		if(lang =="cht")txt.appendChild(document.createTextNode("確定要花費NT$ "+total+"購買嗎?"));
		if(lang =="jpn")txt.appendChild(document.createTextNode("NT$ "+total+"をかけて買っていいのか？"));
		$("#Checkout").append(txt);
		$("#txt").animate({marginTop: "0px",opacity: 1}, 300,function(){});
		CreateBuyBtn();
	});
});
function CreateBuyBtn()
{
	$(document).ready(function(){
		$("#buy").mouseover(function(){
			document.getElementById("buy").style.opacity = 1;});
		$("#buy").mouseout(function(){
			document.getElementById("buy").style.opacity = 0.75;});
			
		$("#Nbuy").mouseover(function(){
			document.getElementById("Nbuy").style.opacity = 1;});
		$("#Nbuy").mouseout(function(){
			document.getElementById("Nbuy").style.opacity = 0.75;});
		
		$("#buy").click(function()
		{
			if(parseInt(SaveUserData.Money) >= total)
			{
				SaveUserData.Money = (parseInt(SaveUserData.Money)-total).toString();
				$("#confirmbg").remove();
				$("#buy").remove();
				$("#Nbuy").remove();
				$("#txt").remove();
				if(lang == "cht")document.getElementById("Money").innerHTML = "錢包："+SaveUserData.Money;
				if(lang == "jpn")document.getElementById("Money").innerHTML = "財布："+SaveUserData.Money;
				for(var i = 0 ; i < NumofItem ; i++)ChangeOwn(itemList,i);
				for(var i = 0 ; i < NumofItem ; i++)CheckOwn(itemList,i);
				
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
				$(document).ready(function(){
			        $.ajax({
			            method: "POST",//HTTP method for request
			            url: "game.php",
			        	dataType: 'text',
			    	data: {call: Savejson,actions: "save"}
			        }).done(function(data){
			        });
		   		});
			    total = 0;
			    for(var i = 0;i < NumofItem;i++)itemList[i]["chooseState"] = "Unchosen";
			    
			    if(document.getElementById("Play").style.opacity < 0.6)
			    {
					$("#Play").show();
					$("#Play").animate({marginTop: "70px",opacity: 0.6}, 300,function(){});
					$("#Play").mouseover(function(){
						document.getElementById("Play").style.opacity = 1;});
					$("#Play").mouseout(function(){
						document.getElementById("Play").style.opacity = 0.6;});
				}
			}
			else
			{
				var error = document.createElement("p");
				error.setAttribute("id", "error");
				error.setAttribute("style", "position:absolute;opacity:0;z-index: 5;left:-100px;top:210px;font-family:微軟正黑體;color:#ff0000;white-space:nowrap;size:30px");
				document.getElementById("Checkout").appendChild(error);
				if(lang == "cht")document.getElementById('error').innerHTML = "金錢不足";
				else if(lang == "jpn")document.getElementById('error').innerHTML = "お金足りない";
				$("#error").animate({opacity: 1}, 300,function(){})
								.animate({opacity: 0}, 1300,function(){document.getElementById("error").remove();});
			}
		});
		$("#Nbuy").click(function()
		{
		    if(document.getElementById("Play").style.opacity < 0.6)
		    {
				$("#Play").show();
				$("#Play").animate({marginTop: "70px",opacity: 0.6}, 300,function(){});
				$("#Play").mouseover(function(){
					document.getElementById("Play").style.opacity = 1;});
				$("#Play").mouseout(function(){
					document.getElementById("Play").style.opacity = 0.6;});
			}
			$("#confirmbg").remove();
			$("#buy").remove();
			$("#Nbuy").remove();
			$("#txt").remove();
		});
	});
}
function ChangeOwn(itemList,i)
{
	if(itemList[i]["chooseState"]=="Chosen")
	{
		itemList[i]["ownState"]="Own";
		if(i==0)SaveUserData.DialogID["00"]["save1"] = "00_01_01";
		if(i==1)SaveUserData.DialogID["01"]["save1"] = "01_01_01";
		if(i==2)SaveUserData.DialogID["02"]["save1"] = "03_01_01";
		if(i==3)SaveUserData.DialogID["03"]["save1"] = "04_01_01";
					
		var currentdate = new Date();
		var NOWtime =  currentdate.getFullYear() + "/"
	                + (currentdate.getMonth()+1)  + "/" 
	                + currentdate.getDate() + "    "  
	                + currentdate.getHours() + ":"  
	                + currentdate.getMinutes() + ":" 
	                + currentdate.getSeconds();
		if(i==0)SaveUserData.SaveTime["00"]["save1"] = NOWtime;
		if(i==1)SaveUserData.SaveTime["01"]["save1"] = NOWtime;
		if(i==2)SaveUserData.SaveTime["02"]["save1"] = NOWtime;
		if(i==3)SaveUserData.SaveTime["03"]["save1"] = NOWtime;
	}
}