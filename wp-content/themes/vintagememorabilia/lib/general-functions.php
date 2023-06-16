<?php
/* Get the page Slug */
function the_slug($echo=true,$id=0){
	if ($id==0) $id = get_the_ID();
	$slug = basename(get_permalink($id));
	do_action('before_slug', $slug);
	$slug = apply_filters('slug_filter', $slug);
	if( $echo ) echo $slug;
	do_action('after_slug', $slug);

	return $slug;
}


/* Get ID by Slug */
function get_ID_by_slug($page_slug) {
    $page = get_page_by_path($page_slug);
    if ($page) {
        return $page->ID;
    } else {
        return null;
    }
}


/* Get Body Class */
function get_page_body_class()
{
	$body_class = '';
	
	if (is_front_page()) {		
		$body_class = 'page-home';
	}	

	return $body_class;
}


/* Get Page Title */
function get_page_title_custom() {
	$page_title = get_the_title();
	
	/*if ( (is_page_template('tmp-get-help-detail-overview.php') || is_page_template('tmp-get-help-detail-location.php')) && empty($page_title) ) {
		$parent_pages = get_post_ancestors( $post->ID );
		if (!empty($parent_pages)) {
			$parent_id = $parent_pages[0];
			$page_title = get_the_title($parent_id);
		}
	} else if (is_404()) {
		$page_id = get_ID_by_slug('404-page-not-found');
		$page_title = get_the_title($page_id);
	} else if (is_search()) {
		$page_id = get_ID_by_slug('search');
		$page_title = get_the_title($page_id);
	}*/

	return $page_title;	
}

/**
 * Elementor Pro's custom query filter hook to include a meta_query
 * for 
 */
add_action('elementor/query/my_custom_filter', function($query) {
    $query->set('meta_query', [
        [
            'key' => 'field_648a2eb51eeb9', // replace with your ACF field key
            'value' => '1', // 1 for true, 0 for false
            'compare' => '=',
        ]
    ]);
});


/**
 * ACF Custom field for adding additional images to an Item's gallery
 */
add_action('pmxi_gallery_image', function($post_id, $attid, $image_filepath) {
    error_log("pmxi_gallery_image action triggered for post $post_id, image $attid");
}, 10, 3);

add_action('pmxi_gallery_image', 'add_images_ids_to_meta', 20, 3);
function add_images_ids_to_meta($post_id, $attid, $image_filepath) {
    error_log("add_images_ids_to_meta called for post $post_id, image $attid");
    
    // Get the current value of the 'images' custom field
    $current_images = get_post_meta($post_id, 'images', true);

    // If it's not empty, make sure it's an array (it should be if it's an ACF image gallery field)
    if (!empty($current_images)) {
        if (!is_array($current_images)) {
            $current_images = array($current_images);
        }
    } else {
        // If it's empty, initialize it as an empty array
        $current_images = array();
    }

    // Add the new image ID to the array
    $current_images[] = $attid;

    error_log("Updated 'images' custom field for post $post_id with value $current_images");

    // Update the 'additional_images' custom field
    update_post_meta($post_id, 'additional_images', $current_images);
}


function mm_get_image($image_field, $size = 'full', $icon = false, $attr = '') {
	//$size = 'full'; // (thumbnail, medium, large, full or custom size)

	if( $image_field ) {
		$image_id = $image_field['ID'];
		echo wp_get_attachment_image( $image_id, $size, $icon, $attr );
	}
}

function mm_get_srcset($image_field, $sizes='', $attr='' ) {

	// standar args for wp_get_attachment_image_src
	$size = 'full';
	$icon = false;

	$sizes_map = array(
		'accordion'      => '(min-width: 961px) 70vw, 100vw',
		'story-featured-tile'    => '(min-width: 961px) 60vw, 100vw',
		'image-strip-tall-image' => '(max-width: 670px) 360px, 60vw',
		'image-strip-wide-image' => '(max-width: 600px) 360px, 70vw',
		'caption-banner' => '(max-width: 960px) 80vw, 40vw',
		'scaling-slider' => '(max-width: 860px) 100vw, 33vw',
		'blue-slider'    => '(max-width: 960px) 75vw, 35vw',
		'column-blocks'  => '(max-width: 960px) 100vw, 50vw',
		'thirds-blocks'  => '(max-width: 500px) 100vw, (max-width: 960px) and (min-width: 501px) 50vw, 33vw',
	);

	if( !empty($sizes_map[$sizes]) )
	{
		$sizes = $sizes_map[$sizes];
	}

	if( $image_field ) {
		$attachment_id = $image_field['ID'];

		$html = '';
		$image = wp_get_attachment_image_src($attachment_id, $size, $icon);
		if ($image) {
			list($src, $width, $height) = $image;
			$hwstring = image_hwstring($width, $height);
			$size_class = $size;
			if (is_array($size_class)) {
				$size_class = join('x', $size_class);
			}
			$attachment = get_post($attachment_id);
			$default_attr = array(
				'src' => $src,
				'class' => "attachment-$size_class size-$size_class",
				'alt' => trim(strip_tags(get_post_meta($attachment_id, '_wp_attachment_image_alt', true))),
			);

            $attr = wp_parse_args($attr, $default_attr);
            
			// Generate 'srcset' and 'sizes' if not already present.
			if (empty($attr['srcset'])) {
                $image_meta = wp_get_attachment_metadata($attachment_id);
                
				if (is_array($image_meta)) {
					$size_array = array(absint($width), absint($height));
                    $srcset = wp_calculate_image_srcset($size_array, $src, $image_meta, $attachment_id);
                    
                    if( empty($sizes) )
                    {
                        $sizes = wp_calculate_image_sizes($size_array, $src, $image_meta, $attachment_id);
                    }

					if ($srcset && ($sizes || !empty($attr['sizes']))) {
						$attr['srcset'] = $srcset;

						if (empty($attr['sizes'])) {
							$attr['sizes'] = $sizes;
						}
					}
				}
            }
            
			/**
			 * Filters the list of attachment image attributes.
			 *
			 * @since 2.8.0
			 *
			 * @param array $attr Attributes for the image markup.
			 * @param WP_Post $attachment Image attachment post.
			 * @param string|array $size Requested size. Image size or array of width and height values
			 *                                 (in that order). Default 'thumbnail'.
			 */
			$attr = apply_filters('wp_get_attachment_image_attributes', $attr, $attachment, $size);
			$attr = array_map('esc_attr', $attr);
			//$html = rtrim("<img $hwstring");
			$html = "<img ";
			foreach ($attr as $name => $value) {
				$html .= " $name=" . '"' . $value . '"';
			}
			$html .= ' />';
		}

		return $html;
	}
}

function get_file_version($path) {
    return date("ymd-Gis", filemtime( get_template_directory() . $path ));
}



/* Custom version of wp_trim_excerpt(). */
function improved_trim_excerpt($text) {
	global $post;
	if ( !empty($text) ) {
		$text = apply_filters('the_content', $text);
		$text = str_replace('\]\]\>', ']]&gt;', $text);
		$text = str_replace('&nbsp;', ' ', $text);
		$text = preg_replace('@<script[^>]*?>.*?</script>@si', '', $text);
		$text = strip_tags($text, '<i><b><em><strong>');
		$excerpt_length = 40;
		$words = explode(' ', $text, $excerpt_length + 1);
		if (count($words) > $excerpt_length) {
			array_pop($words);
			//array_push($words, '...');
			$text = implode(' ', $words) . ' [...]';
		}
	}
	return $text;
}

/* Return post content with filtered tags. Used for Perspectives blog. */
function get_filtered_post_content() {
	$post_content = get_the_content(); 
	
	// add custom classes and parameters to image tags
	$images= array();
	preg_match_all('/<img[^>]+>/i', $post_content, $images);
	foreach ($images[0] as $image) {
		$updatedImage = str_replace('class="', 'data-sal="slide-up" class="image animate-slide-up ', $image);
		$post_content = str_replace($image, $updatedImage, $post_content);
	}
	
	return $post_content;
}

?>