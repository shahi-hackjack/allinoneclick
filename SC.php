<?php
include('simple_html_dom.php');

error_reporting(E_ALL);
ini_set('display_errors', 1);
$html = new simple_html_dom();

$url = "http://content.icicidirect.com/idirectcontent/basemasterpage/ContentDataHandler.ashx?pgname=getquote&ismethodcall=0&icode=";
 
$postdata = file_get_contents("php://input");
         //var_dump($postdata);      
    $request = json_decode($postdata);
       
    //echo($request->name);
$StockName=$request->name;
 $newurl=$url."".$StockName;   


$html = file_get_html($newurl);
 
$data =  $html->find('td[class="number"]');


$arr = array('open' =>trim($data[3]->innertext," "),'high' =>trim($data[5]->innertext," "), 'low' =>trim($data[7]->innertext," "), 'close' =>trim($data[8]->innertext," "));
//var_dump($data[0]->children);
 //$open=$data[3];
 //$high=$data[5];
 //$low=$data[7];
 //$close=$data[8];

//var_dump($data[3]);
 echo json_encode($arr);
 
  //echo("high "."".$data[5]);
   //echo("low "."".$data[7]);
    //echo("close "."".$data[8]);

 //$ = implode(';', $data[3]);
 //echo $string;

//if(isset($data[0]))
  //  echo $data[0]->children(1);


?>
                
                   