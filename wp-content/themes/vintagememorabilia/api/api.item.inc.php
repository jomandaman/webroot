<?php  

class ItemAPI {

    /**
     * Normalize an "Item" post - combines standard WP fields with ACF data attached to this page
     * @param object $post
     * @return array $item
     */
    public static function normalize($post) {
        $item = array();

        if( empty($post) ) return $item;
        
        $id = $post->ID;

        // Get ACF data for this post
        $fields = get_fields($id);
        $author_name = '';

        // Get the author's name
        $persons = wp_get_post_terms($id, 'person');
        if (!empty($persons)) {
            $person = $persons[0];
            $author_name = esc_html($person->name);
        }

        $categories = ItemAPI::get_item_categories($id);

        $primary_category = null;

        if( !empty($categories) ) {
            // If cats are defined, make the "main category" the first index in the array (associative array)
            $main_category = reset($categories);
        }

        $item = array_merge(array(
            'id' => $id,
            'title' => $post->post_title,
            'content' => $post->post_content,
            'year' => get_field('year', $id),
            'categories' => $categories,
            'primary_category' => $primary_category,
            'author_name' => $author_name,
            'link' => get_the_permalink($id),
        ), $fields);

        return $item;
    }

    /**
     * Return a normalized list of categories attached to this "Item" post.
     * @param object $post
     * @return array $cats
     */
    public static function get_item_categories($post_id = null) {
        // Return value
        $cats = array();
        
        if( is_null($post_id) ) return $cats;

        $terms = get_the_terms( $post_id, 'item_category');

        if( !empty($terms) ) {
            foreach($terms as $term) {
                $cats[$term->slug] = array(
                    'term_id' => $term->ID,
                    'name' => $term->name,
                    'slug' => $term->slug,
                    'description' => $term->description,
                );
            }
        }

        return $cats;
    }

    /**
     * Renders a gallery item for detail view
     * @param array $item
     * 
     */
    public static function render_gallery_item($item) {
        $link = $item['link'];
        $category = $item['primary_category'];
        $title = $item['title'];
        $background_image = '';
        $author_name = $item['author_name'];
        
        if( !empty($item['images'][0]['url']) ) {
            $background_image = $item['images'][0]['url'];
        }

        // Turn on Output Buffering so that we can capture the results of this include
        ob_start();

        // Render the contents into memory
        include(__DIR__ . '/../inc/modules/gallery/gallery-category-link.inc.php');

        // Dump the output
        return ob_get_clean();
    }
}
