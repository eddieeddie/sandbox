<?php
include 'checkInputJson.php';
chmod("chat_record.tsukihikuronagaimaganai",0777);
$text = @$_POST["text"];
$actions = @$_POST["actions"];
/*				file_put_contents("chat_record.tsukihikuronagaimaganai", "");//清空txt
				for($i = 1; $i < 101; $i++)
				{
			    file_put_contents("chat_record.tsukihikuronagaimaganai", $i."LsuckL<br>", FILE_APPEND);
				}*/
if(@checkValidChar('{"text":"'.$text.'","actions":"'.$actions.'"}'))
{
	if(strlen($text)<=50)
	{
		$linecount = substr_count (file_get_contents("chat_record.tsukihikuronagaimaganai"),"<br>");
		if($linecount>50)
		{
			$lines = file_get_contents("chat_record.tsukihikuronagaimaganai");
			$line50pos = 0;
			$startlinenum = $linecount - 50;
			for($i = 0; $i < $startlinenum; $i++)
			{
				$line50pos = strpos ($lines ,"<br>", $line50pos+1);
			}
			$newLines = substr($lines, $line50pos+4);
			file_put_contents("chat_record.tsukihikuronagaimaganai", "");
			file_put_contents("chat_record.tsukihikuronagaimaganai", $newLines);
			echo file_get_contents("chat_record.tsukihikuronagaimaganai");
		}
		else if($text!="")
		{
			if(strcasecmp((string)$text, "MAHOUSYOUJYOCLEAR") == 0)
			{
				file_put_contents("chat_record.tsukihikuronagaimaganai", "");//清空txt
				file_put_contents("like_record.tsukihikuronagaimaganai", 0);//清空txt
			    echo file_get_contents("chat_record.tsukihikuronagaimaganai");//輸出txt內容
			}
			else
			{
			    $text = htmlspecialchars($text);//輸入字串
			    $text .= "<br>";//輸入字串加上空行
			    file_put_contents("chat_record.tsukihikuronagaimaganai", $text, FILE_APPEND);//加到txt中
			    echo file_get_contents("chat_record.tsukihikuronagaimaganai");//輸出txt內容
			}
		}
		else
		{
		    echo file_get_contents("chat_record.tsukihikuronagaimaganai");//輸出txt內容
		}
	}
	else echo "TooManyWord";
}
else echo "InvalidError";
?>
