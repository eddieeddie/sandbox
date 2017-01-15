function setLang(index,lang,elementID)
{
	var myVar;
	$.post("stringtable.php", {"index":index ,"lang":lang,"actions": "getString"}, function (data) {
	  myVar = data;
	  document.getElementById(elementID).innerHTML = myVar;
	});
	if(myVar == "undefined")
	{
        setTimeout(function(){
            setLang(index,lang,elementID);
        },250);
    }
}