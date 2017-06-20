<?php

require 'vendor/autoload.php';
use Mailgun\Mailgun;

if( !empty($_POST['email']) && 
    !empty($_POST['message']) &&
    !empty($_POST['name']) &&
    !empty($_POST['surname'])){

        try{
            $api_key_file = fopen("api_key", "r");
            $api_key = fread($api_key_file, filesize("api_key"));

            $mailgun = Mailgun::create($api_key);

            $email = $_POST['email'];
            $message = "From:&nbsp;" . $_POST['name'] . "&nbsp;" . $_POST['surname'] .
            "<br /><br />" . $_POST['message'];

            $mailgun->messages()->send('mg.alexkearns.co.uk', [
                'from' => $email,
                'to' => 'contact@alexkearns.co.uk',
                'subject' => 'Contact from website',
                'html' => $message
            ]);

            fclose($api_key_file);

            header('Location: index.php?contactSuccess=true');
            exit();
        }
        catch(Exception $ex){
            header('Location: index.php?contactSuccess=false');
            exit();
        }

}
else{
    header('Location: index.php?contactSuccess=false');
    exit();
}
?>