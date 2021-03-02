<?php 
 
$name = $_POST['username'];
$phone = $_POST['telephoneNumber'];
 
$token = "1601782735:AAEsjcbYi7xdNov_aSjShr8ilsrkVKJjrwQ";
 
$chat_id = "-566028352";
 
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
);
 
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
 
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
 
if ($sendToTelegram) {
  echo "Thank you";
} else {
  echo "Error";
}
?>