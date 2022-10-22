<?php

/*------------------------------------
  制御
------------------------------------*/

// バリデーション
if(!empty($_POST['type'])
	&& !empty($_POST['company'])
	&& !empty($_POST['name'])
	&& !empty($_POST['email'])
	&& !empty($_POST['tel'])
	&& !empty($_POST['body'])
	){

	// メール送信
	mb_language("Japanese");
	mb_internal_encoding("utf-8");

	$to = 'info@koekisozo.co.jp'; // 送信先のメールアドレスを設定
	$header = "From: ".$_POST['email'];
	$subject = "お問合せフォームからお問合せが届きました。";

	$body = "
お問合せフォームからお問合せが届きました。

-------------------------------------
◎お問い合わせ項目
".$_POST['type']."

◎会社名
".$_POST['company']."

◎お名前
".$_POST['name']."

◎メールアドレス
".$_POST['email']."

◎電話番号
".$_POST['tel']."

◎内容
".$_POST['body']."
-------------------------------------
";

	if(mb_send_mail($to,$subject,$body,$header)){
		echo "成功";
		return true;
	}else{
		echo "失敗";
		return false;
	}

}
?>
