<?php  

class PersonAPI {

    /**
     * Normalize a "Person" taxonomy - combines standard WP fields with ACF data attached
     * @param object $post
     * @return array $item
     */
    public static function normalize($post) {
        // $item = array();

        // if( empty($post) ) return $item;
        
        // $id = $post->ID;

        // // Get ACF data for this post
        // $fields = get_fields($id);

        // if( !empty($categories) ) {
        //     // If cats are defined, make the "main category" the first index in the array (associative array)
        //     $main_category = reset($categories);
        // }

        // $item = array_merge(array(
        //     // 'id' => $id,
        //     // 'title' => $post->post_title,
        //     // 'content' => $post->post_content,
        //     // 'year' => get_field('year', $id),
        //     // 'link' => get_the_permalink($id),
        //     // only need the person name and the link to the person page
        // ), $fields);

        // return $item;
    }

    /**
     * Renders a gallery item for detail view
     * @param object $item
     */
    public static function render_person($person) {
        // Render the person name and the link to the person page
        $html = "<a href='{$person['person_link']}'>{$person['display_name']}</a>";
    
        return $html;
    }
    
}
