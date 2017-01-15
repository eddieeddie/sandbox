<?php
	header("Content-Type:text/html; charset=utf-8");
	//chmod("like_record.tsukihikuronagaimaganai",0777);
	$total = 1 + (string)file_get_contents("like_record.tsukihikuronagaimaganai");
	file_put_contents("like_record.tsukihikuronagaimaganai", $total);
	echo file_get_contents("like_record.tsukihikuronagaimaganai");/*¿é¥Xtxt¤º®e*/
?>
