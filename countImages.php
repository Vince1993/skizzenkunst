<?php
// countImages.php

header('Content-Type: application/json');

// Folder containing images
$folder = "img_small";

// Allowed extensions
$extensions = array("jpg", "jpeg", "png", "gif");

// Scan the folder
$files = scandir($folder);

// Filter files by extension
$imageFiles = array_filter($files, function($file) use ($extensions) {
    $ext = strtolower(pathinfo($file, PATHINFO_EXTENSION));
    return in_array($ext, $extensions);
});

// Return JSON response
echo json_encode(array("count" => count($imageFiles)));
?>