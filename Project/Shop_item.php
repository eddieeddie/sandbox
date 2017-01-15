<?php
mb_internal_encoding('utf-8');
$item = $_POST["item"];
$actions = $_POST["actions"];
if($actions == "getName")get($item,"Name");
if($actions == "getPrice")get($item,"Price");
if($actions == "getPic")get($item,"Pic");
if($actions == "getText")get($item,"Text");
function get($item,$action)
{
	$filename = "data/Shop_items.xml";
//	@chmod($filename,0777);
	$xml=simplexml_load_file($filename) or die("Error: Cannot create object");
	if($action=="Name")echo $xml->xpath('//Item[@id="'.$item.'"]/Name')[0];
	if($action=="Price")echo $xml->xpath('//Item[@id="'.$item.'"]/Price')[0];
	if($action=="Pic")echo $xml->xpath('//Item[@id="'.$item.'"]/Pic')[0];
	if($action=="Text")echo $xml->xpath('//Item[@id="'.$item.'"]/Text')[0];
}
?>