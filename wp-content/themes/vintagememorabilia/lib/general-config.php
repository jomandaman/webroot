<?php
/*
* General WP settings/configs
*/

// Custom WordPress Login Logo
add_action( 'login_head', 'custom_login_logo' );
function custom_login_logo() {
?>
<style type="text/css">
#login h1 a { 
	width: 100%;
	height: 81px;
	background-image: url('<?php echo get_template_directory_uri(); ?>/images/logo.png');
	background-size: contain;
}
</style>
<?php
}

// Change WP logo to link to site
function my_login_logo_url() {
    return home_url();
}
add_filter( 'login_headerurl', 'my_login_logo_url' );
function my_login_logo_url_title() {
    return 'Vintage Memorabilia';
}
add_filter( 'login_headertext', 'my_login_logo_url_title' );


// Hide unnecessary admin menus
function remove_menus(){
  remove_menu_page( 'edit-comments.php' );
  //remove_menu_page( 'edit.php' ); 
}
add_action( 'admin_menu', 'remove_menus' );



/* Add Menus support */
add_theme_support( 'menus' );

function register_my_menu() {
	register_nav_menu('header-menu',__( 'Header Menu' ));
}
add_action( 'init', 'register_my_menu' );

class My_Walker_Nav_Menu extends Walker_Nav_Menu {
    function start_el(&$output, $item, $depth=0, $args=array(), $id = 0) {
		error_log("start_el called for menu item " . $item->title);
        $url = $item->url;
        $name = $item->title;
        // Class for li and a are separated by a space
        $output .= "<li><a href=\"$url\">$name</a></li>";
    }
}

function post_sidebar() {
    register_sidebar(
        array (
            'name' => __( 'Posts Sidebar', 'VintageMemorabilia' ),
            'id' => 'posts-sidebar',
            'description' => __( 'Posts Sidebar', 'VintageMemorabilia' ),
            'before_widget' => '<div class="widget-content">',
            'after_widget' => "</div>",
            'before_title' => '<h5 class="widget-title">',
            'after_title' => '</h5>',
        )
    );
}
add_action( 'widgets_init', 'post_sidebar' );


/* Add Post Thumbnail support */
add_theme_support( 'post-thumbnails', array( 'post', 'item') );

/* Adding new image sizes */
add_action( 'after_setup_theme', 'custom_theme_setup' );
function custom_theme_setup() {
    add_image_size( 'logo-size', 400, 400 ); 
}

// remove inline widths from wp-captions
// add_filter( 'img_caption_shortcode_width', '__return_false' );

add_theme_support( 'html5', array( 'caption' ) );

/* Enable Post Formats */
function themename_post_formats_setup() {
 add_theme_support( 'post-formats', array( 'image' ) );
}
add_action( 'after_setup_theme', 'themename_post_formats_setup' );



// Admin: TinyMCE: Enable 'styleselect' into the $buttons array
function my_mce_buttons_2( $buttons ) {
	array_unshift( $buttons, 'styleselect' );
	return $buttons;
}
add_filter( 'mce_buttons_2', 'my_mce_buttons_2' );

// Admin: TinyMCE: Add custom classes
function my_mce_before_init_insert_formats( $init_array ) {  
	$style_formats = array(  
		array(  
			'title' => '.endnote',
			'block' => 'div',
			'classes' => 'endnote',
			'wrapper' => true,
			
		),  
	);  
	// Insert the array, JSON ENCODED, into 'style_formats'
	$init_array['style_formats'] = wp_json_encode( $style_formats );  
	
	return $init_array;  
  
} 
add_filter( 'tiny_mce_before_init', 'my_mce_before_init_insert_formats' );


/* Admin: Change default page template assigment. Make Modular Template default. */
function change_default_page_template($post_type, $post) {
    $new_template = 'tpl-modular-content.php'; 
    if ($post_type === 'page'
	&& in_array($new_template, get_page_templates($post))
	&& $post->ID != get_option('page_for_posts') // Not the page for listing posts
	&& metadata_exists('post', $post->ID, '_wp_page_template') === false) {  // Only when meta _wp_page_template is not set
		add_post_meta($post->ID, '_wp_page_template', $new_template);
    }
}
add_action('add_meta_boxes', 'change_default_page_template', 10, 2);


/**
 * Disable Gutenberg by post type
 */
function mm_disable_gutenberg( $can_edit, $post_type ) {
	
	if ($post_type === 'page') {
		$can_edit = false;
	}
	
	return $can_edit;

}
add_filter( 'gutenberg_can_edit_post_type', 'mm_disable_gutenberg', 10, 2 );
add_filter( 'use_block_editor_for_post_type', 'mm_disable_gutenberg', 10, 2 );


/* Menus: adding specific classes to top menu */
function add_current_menu_class($classes, $item) {
	// if viewing an "item" CPT, highlight Inventory page
	if (is_singular('item')) { 
        global $post;
        if ($post->post_type === 'item') {
            $classes[] = 'current-menu-item';
        }
    }
    return $classes;
}
add_filter('nav_menu_css_class', 'add_current_menu_class', 10, 2);
?>