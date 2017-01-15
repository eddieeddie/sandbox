$(document).ready(function(){
    setInterval(function(){
      $.ajax({
            method: "POST",
            url: "chat.php",
	       	dataType: 'text',
	    	data: {text: "",actions: "show_action"}
        }).done(function(data){
        	if(data == "InvalidError");
        	else
       		{
        	    $("#contents").html(data);
        	}
        })
    }, 1000);
    $('button').click(function(){
    	if(checkinput())
    	{
	        $.ajax({
	            method: "POST",//HTTP method for request
	            url: "chat.php",
	        	dataType: 'text',
	      	 	data: {text: $('input').val(),actions: "reply_action"}
	        }).done(function(data){
        		if(data == "InvalidError"||data=="TooManyWord")window.alert("Fuck You !!");
        		else
        		{
		            $("#contents").html(data);
		            $('input').val("");
	      		}
	        });
	    }
    });
    $(document).keydown(function(e){
		if(e.keyCode == 13) {
			if(checkinput())
	    	{
				$.ajax({
	                method: "POST",
	                url: "chat.php",
		        	dataType: 'text',
		      	 	data: {text: $('input').val(),actions: "reply_action"}
	            }).done(function(data){
	        		if(data == "InvalidError"||data=="TooManyWord")window.alert("Fuck You !!");
	        		else
	        		{
		                $("#contents").html(data);
		                $('input').val("");
		            }
				});
			}
		}
    });
});
function checkinput()
{
	var ReplyMSG = $('input').val();
	for(var i = 0;i < ReplyMSG.length;i++)
	{
		if(ReplyMSG.charAt(i)=='$'||ReplyMSG.charAt(i)=='.'||ReplyMSG.charAt(i)==';')
		{
			var error = document.createElement("p");
			error.setAttribute("id", "error");
			error.setAttribute("style", "position:absolute;opacity:0;z-index: 5;left:0px;top:10px;font-family:微軟正黑體;color:#ff0000;white-space:nowrap;");
			document.getElementById('deliver').appendChild(error); 
			if(lang == "cht")document.getElementById('error').innerHTML = "留言裡面含有非法字元";
			if(lang == "jpn")document.getElementById('error').innerHTML = "お返信の中で、違法キャラクタがある";
			$("#error").animate({opacity: 1}, 300,function(){})
							.animate({opacity: 0}, 1300,function(){document.getElementById("error").remove();});
			$("#reply").animate({marginTop: "000px",marginLeft: "+20px"}, 70,function(){})
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
		if(ReplyMSG.length > 50)
		{
			var error = document.createElement("p");
			error.setAttribute("id", "error");
			error.setAttribute("style", "position:absolute;opacity:0;z-index: 5;left:0px;top:10px;font-family:微軟正黑體;color:#ff0000;white-space:nowrap;");
			document.getElementById('deliver').appendChild(error); 
			if(lang == "cht")document.getElementById('error').innerHTML = "留言字元過多";
			if(lang == "jpn")document.getElementById('error').innerHTML = "お返信のキャラクタが多すぎます！！";
			$("#error").animate({opacity: 1}, 300,function(){})
							.animate({opacity: 0}, 1300,function(){document.getElementById("error").remove();});
			$("#reply").animate({marginTop: "000px",marginLeft: "+20px"}, 70,function(){})
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
	return true;
}