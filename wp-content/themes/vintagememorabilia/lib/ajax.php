<?php  

// Load Items By Term
add_action("wp_ajax_load_items_by_term", "load_items_by_term");
add_action("wp_ajax_nopriv_load_items_by_term", "load_items_by_term");

function load_items_by_term() 
{
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
    exit;
}