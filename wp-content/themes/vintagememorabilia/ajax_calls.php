define('WP_USE_THEMES', false);
require_once('../../../../wp-load.php');

<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$type = isset($_GET['type']) ? $_GET['type'] : '';

switch ($type) {
    case 'typeahead':
        // Handle typeahead requests
        $typeahead_data = get_typeahead_data();
        echo json_encode($typeahead_data);
        break;

    case 'setGalleryState':
        // Handle setGalleryState requests
        break;

    case 'getGallery':
        // Handle getGallery requests
        break;

    // Add more cases for other request types

    default:
        // Handle invalid request types
        break;
}

function get_typeahead_data() {
    $args = array(
        'post_type' => 'post',
        'post_status' => 'publish',
        'posts_per_page' => 10, // Change this value as needed
    );

    $query = new WP_Query($args);
    $typeahead_items = array();

    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            $typeahead_items[] = array(
                'id' => get_the_ID(),
                'title' => get_the_title(),
            );
        }
        wp_reset_postdata();
    }

    return $typeahead_items;
}

