<?php
	mb_internal_encoding('utf-8');
	function checkValidChar($Jsoninput)
	{
		for($i = 0;$i < strlen($Jsoninput);$i++)
		{
			if ($Jsoninput[$i] == '$'  || $Jsoninput[$i] == '.' || $Jsoninput[$i] == ';' || $Jsoninput[$i] == '*')return false;
		}
		return true;
	}
?>