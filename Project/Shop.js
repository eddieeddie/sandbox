var lang = "jpn";
if(getCookie("lang")=="cht")lang ="cht";
if(getCookie("lang")=="jpn")lang ="jpn";
setLang("Shop0000",lang,"Title");
setLang("Shop0001",lang,"内容");
setLang("Shop0002",lang,"logid");
setLang("Shop0003",lang,"accountWord");
setLang("Shop0004",lang,"passwdWord");



$(document).ready(function(){
	setInterval(function(){
		if(userdata == undefined)
		{
			$("#Play").hide();
			$("#Digits").hide();
			$("#Checkout").hide();
		}
		if(userdata != undefined && haveload ==0)
		{
			haveload = 1;
			$("#LOG").hide();
			$("#Digits").show();
			$("#Checkout").show();
			itemList = CreateItemList();
			for(var i = 0; i < NumofItem ; i++)ShowItemList(itemList,i);
			for(var i = 0 ; i < NumofItem ; i++)SetChooseStateBtn(itemList,i);
			ShowCheckOut(itemList);
			for(var i = 0 ; i < NumofItem ; i++)CheckOwn(itemList,i);
		}
	}, 100);
});
function CheckOwn(itemList,i)
{
	if(itemList[i]["ownState"]=="NoOwn")
	{
		document.getElementById("pic"+i.toString()).style.WebkitFilter  = 'grayscale(100%)';
		document.getElementById("name"+i.toString()).style.WebkitFilter  = 'grayscale(100%)';
		document.getElementById("text"+i.toString()).style.WebkitFilter  = 'grayscale(100%)';
		document.getElementById("price"+i.toString()).style.WebkitFilter  = 'grayscale(100%)';
	}
	else
	{
		document.getElementById("chooseState"+i.toString()).src = "Shop/pic/owned.png";
		document.getElementById("pic"+i.toString()).style.WebkitFilter  = 'grayscale(0%)';
		document.getElementById("name"+i.toString()).style.WebkitFilter  = 'grayscale(0%)';
		document.getElementById("text"+i.toString()).style.WebkitFilter  = 'grayscale(0%)';
		document.getElementById("price"+i.toString()).style.WebkitFilter  = 'grayscale(0%)';
	}
}
function ShowCheckOut(itemList)
{
	setInterval(function(){
		total = 0;
		for(var i = 0;i < NumofItem;i++)if(itemList[i]["chooseState"]=="Chosen")total+=itemList[i]["price"];
		if(lang =="cht")document.getElementById("Cost").innerHTML = "總共 NT$ ";
		if(lang =="jpn")document.getElementById("Cost").innerHTML = "総額 NT$ ";
		document.getElementById("Cost").style.fontSize ="36px";
		document.getElementById("Cost").style.fontFamily="微軟正黑體";	
		document.getElementById("Cost").style.fontWeight ="bold";
		document.getElementById("Cost").style.color="#ff9933";	
		var digits = total.toString();
		if(total<10)digits = "00000"+digits;
		else if(total<100)digits = "0000"+digits;
		else if(total<1000)digits = "000"+digits;
		else if(total<10000)digits = "00"+digits;
		else if(total<100000)digits = "0"+digits;
		else digits = ""+digits;
		for(var i = 0;i < 6 ;i++)
		{
			document.getElementById("digit"+i.toString()).src = "Shop/pic/number/"+digits.charAt(i)+".png";
		}
	}, 200);
}
function ShowItemList(itemList,i)
{
	//img
	var chooseState =document.createElement("img");
	chooseState.setAttribute("id", "chooseState"+i.toString());
	if(itemList[i]["chooseState"]=="Unchosen")chooseState.setAttribute("src", "Shop/pic/unchosen.png");
	else chooseState.setAttribute("src", "Shop/pic/chosen.png");
	chooseState.setAttribute("style", "position:absolute;left:0px;top:"+(125*i+10)+"px;opacity:0");
	$("#ItemList").append(chooseState);
	
	var pic =document.createElement("img");
	pic.setAttribute("id", "pic"+i.toString());
	pic.setAttribute("src", itemList[i]["picSrc"]);
	pic.setAttribute("style", "position:absolute;left:100px;top:"+(125*i-40)+"px;opacity:0;width:192px;hight:108px");
	$("#ItemList").append(pic);
	//txt
	var name =document.createElement("p");
	name.setAttribute("id", "name"+i.toString());
	name.setAttribute("style", "position:absolute;left:350px;top:"+125*i+"px;width:640px;color:#00A56E;font-weight:bold;font-family:微軟正黑體;font-size:32px;opacity:0");
	name.appendChild(document.createTextNode(itemList[i]["name"]));
	$("#ItemList").append(name);
		
	var text =document.createElement("p");
	text.setAttribute("id", "text"+i.toString());
	text.setAttribute("style", "position:absolute;left:550px;top:"+125*i+"px;width:640px;color:#00A56E;font-weight:bold;font-family:微軟正黑體;font-size:32px;opacity:0");
	text.appendChild(document.createTextNode(itemList[i]["text"]));
	$("#ItemList").append(text);
		
	var price =document.createElement("p");
	price.setAttribute("id", "price"+i.toString());
	price.setAttribute("style", "position:absolute;left:750px;top:"+125*i+"px;width:640px;color:#00A56E;font-weight:bold;font-family:微軟正黑體;font-size:32px;opacity:0");
	price.appendChild(document.createTextNode("NT$ " + itemList[i]["price"].toString()));
	$("#ItemList").append(price);
	
	RecursionShowItem("chooseState",0,NumofItem);
	RecursionShowItem("pic",0,NumofItem);
	RecursionShowItem("name",0,NumofItem);
	RecursionShowItem("text",0,NumofItem);
	RecursionShowItem("price",0,NumofItem);
}
function RecursionShowItem(elementType,i,threshold)
{
	
	if(i<threshold)
	{
		$("#"+elementType+i.toString()).animate({marginTop: "70px",opacity: 1}, 500,function()
		{
			RecursionShowItem(elementType,i+1,threshold);
		});
	}
}
function CreateItemList()
{
	var itemList = [];
	for(var i = 0 ; i<NumofItem ; i++)
	{
		if(i == 0)
		{
			var ownState;
			if(SaveUserData.DialogID["00"]["save1"]=="UNAVAILABLE")ownState = "NoOwn";
			else ownState = "Own";
			itemList[i] = (ItemObject("Unchosen",ownState,GetXML("1","getName"),GetXML("1","getPrice"),GetXML("1","getPic"),GetXML("1","getText")));
		}
		if(i == 1)
		{
			var ownState;
			if(SaveUserData.DialogID["01"]["save1"]=="UNAVAILABLE")ownState = "NoOwn";
			else ownState = "Own";
			itemList[i] = (ItemObject("Unchosen",ownState,GetXML("2","getName"),GetXML("2","getPrice"),GetXML("2","getPic"),GetXML("2","getText")));
		}
		if(i == 2)
		{
			var ownState;
			if(SaveUserData.DialogID["02"]["save1"]=="UNAVAILABLE")ownState = "NoOwn";
			else ownState = "Own";
			itemList[i] = (ItemObject("Unchosen",ownState,GetXML("3","getName"),GetXML("3","getPrice"),GetXML("3","getPic"),GetXML("3","getText")));
		}
		if(i == 3)
		{
			var ownState;
			if(SaveUserData.DialogID["03"]["save1"]=="UNAVAILABLE")ownState = "NoOwn";
			else ownState = "Own";
			itemList[i] = (ItemObject("Unchosen",ownState,GetXML("4","getName"),GetXML("4","getPrice"),GetXML("4","getPic"),GetXML("4","getText")));
		}
	}
	return itemList;
}
function ItemObject(chooseState,ownState,name,price,picSrc,text)
{
	return {"chooseState":chooseState,"ownState":ownState,"name":name,"price":price,"picSrc":picSrc,"text":text};
}
function GetXML(itemName,act)
{
	var info;
	$.ajax({
       method: "POST",//HTTP method for request
       url: "Shop_item.php",
       dataType: 'text',
  	   async: false,
       data: {item: itemName, actions: act}
       }).done(function(data){
       	 if(act=="getPrice")info = parseInt(data);
       	 else info = data;
	});
	return info;
}