<?php
mb_internal_encoding('utf-8');
$index = $_POST["index"];
$lang = $_POST["lang"];
$actions = $_POST["actions"];
if($actions == "getString")getString($index,$lang);

function getString($index,$lang)//cht jp
{
	$filename = "data/stringtable_".$lang.".xml";
	//@chmod($filename,0777);
	$xml=simplexml_load_file($filename) or die("Error: Cannot create object");
	echo $xml->xpath('//String[@id="'.$index.'"]')[0];
}
?>