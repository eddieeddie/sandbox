<?php
include 'checkInputJson.php';
chmod("chat_record.tsukihikuronagaimaganai",0777);
$text = @$_POST["text"];
$actions = @$_POST["actions"];
/*				file_put_contents("chat_record.tsukihikuronagaimaganai", "");//�M��txt
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
				file_put_contents("chat_record.tsukihikuronagaimaganai", "");//�M��txt
				file_put_contents("like_record.tsukihikuronagaimaganai", 0);//�M��txt
			    echo file_get_contents("chat_record.tsukihikuronagaimaganai");//��Xtxt���e
			}
			else
			{
			    $text = htmlspecialchars($text);//��J�r��
			    $text .= "<br>";//��J�r��[�W�Ŧ�
			    file_put_contents("chat_record.tsukihikuronagaimaganai", $text, FILE_APPEND);//�[��txt��
			    echo file_get_contents("chat_record.tsukihikuronagaimaganai");//��Xtxt���e
			}
		}
		else
		{
		    echo file_get_contents("chat_record.tsukihikuronagaimaganai");//��Xtxt���e
		}
	}
	else echo "TooManyWord";
}
else echo "InvalidError";
?>
