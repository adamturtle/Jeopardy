<?php

require __DIR__ . '/../vendor/autoload.php';

use Goutte\Client;

$client = new Client();

// Go to the symfony.com website
$crawler = $client->request('GET', 'http://www.j-archive.com/listseasons.php');

echo '<pre>';
$crawler->filter('#content table tr')->each(function ($node) {
    print $node->text()."\n";
});
echo '</pre>';