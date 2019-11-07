<?php
    if(isset($_POST['comment'])){
        $testlog = $_POST['comment'];
        $a = fopen("testlog.json", "w");
        fwrite($a, $testlog);
        fclose($a);
    }
?>