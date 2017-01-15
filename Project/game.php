<?php
include 'checkInputJson.php';
mb_internal_encoding('utf-8');
$call = $_POST["call"];
$actions = $_POST["actions"];
if($actions == "game_login")login($call);
if($actions == "fetchdialog")fetchdialog($call);
if($actions == "save")save($call);
function login($Jsoninput)//登入帳號，並回傳進度
{
	if(@checkValidChar($Jsoninput))
	{
		if(strlen(@json_decode($Jsoninput)->{"Account"})<=30&&strlen(@json_decode($Jsoninput)->{"Passwd"})<=30)
		{
			$Djson = @json_decode($Jsoninput);
			$account = $Djson->{"Account"};
			$passwd = $Djson->{"Passwd"};	
			$fp_user;
			$filename = "user/".$account.".tsukihikuronagaimaganai";
			//@chmod($filename,0777);
			if($fp_user = @fopen($filename, "r+"))/*echo "帳號".$account."存在\n"*/;
			else
			{
				echo "error1";
				//echo "アカウントがないね、早く会員になるね\n";
				return 0;
			}
			//確認密碼
			$Dtxt = mb_convert_encoding(@fread($fp_user, filesize($filename)), "UTF-8");
			$Djson = @json_decode($Dtxt);
			if($Djson->{"Passwd"}!=$passwd)
			{
				echo "error2";
				//echo "パスワードが違う\n";
				return 0;
			}
			echo $Dtxt;//回傳json的string
			fclose($fp_user);//歡迎回來
		}
		else echo "TooManyWord";
	}
	else echo "InvalidError";
}
function save($Jsoninput)//儲存進度
{
	if(@checkValidChar($Jsoninput))
	{
		if(strlen(@json_decode($Jsoninput)->{"Account"})<=30&&strlen(@json_decode($Jsoninput)->{"Passwd"})<=30&&strlen(@json_decode($Jsoninput)->{"ID"})<=20)
		{
			$Djson = @json_decode($Jsoninput);
			$account = $Djson->{"Account"};
			$fp_user;
			$filename = "user/".$account.".tsukihikuronagaimaganai";
		//	@chmod($filename,0777);
			if($fp_user = @fopen($filename, "w"));
			else
			{
				echo "アカウントが無くなる\n";
				return 0;
			}
			fputs($fp_user, $Jsoninput);
			fclose($fp_user);//儲存完畢
		}
		else echo "TooManyWord";
	}
	else echo "InvalidError";
}
function fetchdialog($dialogID)//讀取對話
{
	if(checkValidChar($dialogID))
	{
		$filename = "data/dialogue.tsukihikuronagaimaganai";
		$fp_dia;
		if($fp_dia = @fopen($filename, "r"))/*print "<br>對話檔案存在<br>"*/;
		else
		{
			echo "会話が無くなる<br>";
			return 0;
		}
		$Dtxt = mb_convert_encoding(@fread($fp_dia, filesize($filename)), "UTF-8");
		echo $Dtxt;
	}
	else echo "InvalidError";
}
?>