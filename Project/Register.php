<?php
include 'checkInputJson.php';
header("Content-Type:text/html; charset=utf-8");
mb_internal_encoding('utf-8');
$call = $_POST["call"];
$actions = $_POST["actions"];
if($actions == "register_action")register($call);
function register($Jsoninput)
{
	if(@checkValidChar($Jsoninput))
	{
		if(strlen(@json_decode($Jsoninput)->{"Account"})<=30&&strlen(@json_decode($Jsoninput)->{"Passwd"})<=30&&strlen(@json_decode($Jsoninput)->{"ID"})<=20)
		{
			$Djson = @json_decode($Jsoninput);
			$saveAccount = $Djson->{"Account"};
			$filename = "user/".$saveAccount.".tsukihikuronagaimaganai";
			if(@fopen($filename, "r"))
			{
				echo "AccountAlreadyExist";
				return 0;
			}
			//@chmod($filename,0777);
			$fp_user = @fopen($filename, "w");
			fputs($fp_user, "$Jsoninput");//Àx¦s§¹²¦
			fclose($fp_user);
		}
		else echo "TooManyWord";
	}
	else echo "InvalidError";
}
?>