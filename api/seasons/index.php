<?php

require $_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php';

use Goutte\Client;

$client = new Client();

// Go to the symfony.com website
$crawler = $client->request('GET', 'http://www.j-archive.com/listseasons.php');

echo '<pre>';

$regex = "/(?=)(\d){1,2}/";
$crawler->filter('#content table tr a')->each(function ($node) {
    $url = $node->attr('href');
    // print_r( parse_str( ) ) . "\n";
    preg_match($regex, $url, $matches);
    print_r( $matches );
});
echo '</pre>';
// "id
// "name
// "description
// "note