<?php
$mongo = new MongoClient();
$db = $mongo->selectDB("blog");

$posts = $db->posts;
?>