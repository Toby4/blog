<?php
include("mongo.php");

header("Content-type: text/plain");

$cursor = $posts->find()->
	sort(array("_id"=>-1))->
	limit(10);

$array;

foreach($cursor as $document) {
	$post = array(
		"title"=>$document["title"],
		"content"=>$document["content"]
	);

	$array[] = $post;
}

$json = json_encode($array);
echo $json;
//echo var_dump($array);
?>