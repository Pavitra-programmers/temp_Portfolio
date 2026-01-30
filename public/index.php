<?php
// Redirect to clean URL if query parameters exist
if (isset($_GET['i'])) {
    $clean_url = 'https://kritensh.fwh.is/';
    header("Location: $clean_url", true, 301);
    exit();
}

// Include the main index.html
readfile('index.html');
?>