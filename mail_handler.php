<?php 
// if(isset($_POST['submit'])){
    $to = "Cons&Eng@cebyk.com"; // this is your Email address
    $from = "noreply@cebyk.com"; // this is the sender's Email address
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    // $subject2 = "Copy of your form submission";
    $message = "คุณ " . $name . "\n\nอีเมล " . $email . " \n\nรายละเอียดเพิ่มเติม:\n\n" . $_POST['msg'];
    // $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

    $headers = 'Content-Type: text/plain; charset=utf-8' . "\r\n";
    $headers .= "From:" . $from;
    // $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    // mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "<script language=\"JavaScript\">";
    echo "alert('Mail Sent. Thank you, we will contact you shortly.');";
    echo "window.location=\"https://cebyk.com\";";
    echo "</script>";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // }
    exit();
?>