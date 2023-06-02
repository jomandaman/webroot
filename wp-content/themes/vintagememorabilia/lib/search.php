<?php

/* Modify Search to only search within "Item" CPT */
function modify_search_query($query) {
	if (is_search() && !is_admin() && $query->is_main_query()) {
		$post_type = 'item'; 

		if ($query->get('post_type') === '') {
			$query->set('post_type', $post_type);
		}

		$query->set('posts_per_page', -1);
	}
}
add_action('pre_get_posts', 'modify_search_query');

?>