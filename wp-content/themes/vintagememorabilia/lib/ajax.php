<?php  

// Load Items By Term
add_action("wp_ajax_load_items_by_term", "load_items_by_term");
add_action("wp_ajax_nopriv_load_items_by_term", "load_items_by_term");

function load_items_by_term() {
    // Return value
	$html = '';

    // Get term ID from query string
	$term_slug = $_GET['term_id'] ?? null;

    // If no match for the  term slug could be found, return an empty string
    if( empty($term_slug ) ) return $html;

	// Query Args
	$args = array(
		'post_type' => array('item'),
		'post_status' => 'publish',
		'orderby' => 'date title', 
		'order' => 'DESC', 
		'posts_per_page' => -1,

        'tax_query' => array(
            array(
                'taxonomy' => 'item_category',
                'field'    => 'slug',
                'terms'    => $term_slug,
            ),
        ),
	);

	$query  = new WP_Query( $args );
	
	if ( $query->have_posts() ) {

		foreach($query->posts as $item) {

            // Convert this standard WP post into a proprietary shape that we can make better use of
            $data = ItemAPI::normalize($item);
            $html .= ItemAPI::render_gallery_item($data);
        }
    }

    wp_reset_query();

    if( empty($html) ) {
        $html = '<div class="col-sm-12">Sorry, there are no gallery items for this category</div>';
    }

    header('Content-Type: text/html');
    echo $html;
}

add_action("wp_ajax_load_persons_by_term", "load_persons_by_term");
add_action("wp_ajax_nopriv_load_persons_by_term", "load_persons_by_term");

function load_persons_by_term() {
    // Return value
    $html = '';

    // Get term ID from query string
    $term_slug = $_GET['term_id'] ?? null;

    // If no match for the  term slug could be found, return an empty string
    if( empty($term_slug ) ) return $html;

    // Query Args
    $args = array(
        'post_type' => array('item'),
        'post_status' => 'publish',
        'orderby' => 'date title', 
        'order' => 'DESC', 
        'posts_per_page' => -1,

        'tax_query' => array(
            array(
                'taxonomy' => 'item_category',
                'field'    => 'slug',
                'terms'    => $term_slug,
            ),
        ),
    );
    
    $query = new WP_Query($args);
    $displayed_persons = array();
    $person_list = array();
    
    if ($query->have_posts()) {
        foreach($query->posts as $item) {
            // Get all the persons from 'main_person' and 'related_persons' taxonomy fields and remove any duplicates
            $person_terms = get_the_terms($item->ID, 'person');
            $related_persons = get_field('related_persons', $item->ID);
            
            $all_persons = array();
            if ($person_terms && !is_wp_error($person_terms)) {
                $all_persons = array_merge($all_persons, $person_terms);
            }
            if ($related_persons) {
                $all_persons = array_merge($all_persons, $related_persons);
            }
        
            foreach ($all_persons as $person) {
                if (!in_array($person->term_id, $displayed_persons)) {
                    $displayed_persons[] = $person->term_id;
                    $first_name = get_field('first_name', 'person_' . $person->term_id);
                    $last_name = get_field('last_name', 'person_' . $person->term_id);
                    $display_name = $last_name ? $last_name . ', ' . $first_name : $first_name; // Check if last name is populated
                    $person_link = get_term_link($person);
                    $person_list[] = array('display_name' => $display_name, 'person_link' => $person_link); // Add to list for sorting
                }
            }
        }
    }

    // Sort the array by display_name
    usort($person_list, function($a, $b) {
        return strcmp($a['display_name'], $b['display_name']); // Use strcmp for string comparison
    });

    // Now display the sorted list
    foreach ($person_list as $person) {
        $html .= PersonAPI::render_person($person); // This function needs to be implemented
    }
    
    wp_reset_query();

    if( empty($html) ) {
        $html = '<div class="col-sm-12">Sorry, there are no Persons for this category</div>';
    }

    header('Content-Type: text/html');
    echo $html;
}

