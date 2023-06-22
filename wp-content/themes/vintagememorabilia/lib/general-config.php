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
body {
    background: #131313;
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

/**
 * Adding Special Note and Featured Item checkboxes to Item listing editor
 */
add_filter('manage_posts_columns', 'my_custom_columns');
function my_custom_columns($columns) {
    $columns['main_person'] = 'Main Person'; 
    $columns['special_note'] = 'Special Note'; 
    $columns['featured_item'] = 'Featured Item'; 
    return $columns;
}

add_action('manage_posts_custom_column', 'my_custom_column_content', 10, 2);
function my_custom_column_content($column_name, $post_id) {
    if ($column_name == 'main_person') {
        $value = get_field('main_person', $post_id);
        if ($value) {
            if (is_array($value)) {
                // The field returns an array of terms. Let's join their names with commas.
                echo join(', ', array_map(function ($term) {
                    return $term->name;
                }, $value));
            } else {
                // The field returns a single term.
                echo $value->name;
            }
        } else {
            echo 'No main person';
        }
    }
    if ($column_name == 'special_note') { 
        $value = get_field('special_note', $post_id); 
        echo $value ? 'Yes' : 'No';
    }
    if ($column_name == 'featured_item') { 
        $value = get_field('featured_item', $post_id); 
        echo $value ? 'Yes' : 'No';
    }
}

// Add the fields to Quick Edit
function display_quick_edit_custom($column_name, $post_type) {
    if ($column_name == 'main_person') { 
        ?>
        <fieldset class="inline-edit-col-right inline-edit-item">
          <div class="inline-edit-col column-main-person">
            <label class="inline-edit-group">
              <span class="title">Main Person</span>
              <input type="text" name="main_person" value="" id="main_person_quick_edit">
            </label>
          </div>
        </fieldset>
        <?php
    }
    if ($column_name == 'special_note') {
        ?>
            <fieldset class="inline-edit-col-right">
                <div class="inline-edit-col">
                    <div class="inline-edit-group wp-clearfix">
                        <label class="alignleft">
                            <input type="checkbox" name="special_note" id="special_note">
                            <span class="checkbox-title">Special Note</span>
                        </label>
                    </div>
                </div>
            </fieldset>
        <?php
    }
    if ($column_name == 'featured_item') {
        ?>
            <fieldset class="inline-edit-col-right">
                <div class="inline-edit-col">
                    <div class="inline-edit-group wp-clearfix">
                        <label class="alignleft">
                            <input type="checkbox" name="featured_item" id="featured_item">
                            <span class="checkbox-title">Featured Item</span>
                        </label>
                    </div>
                </div>
            </fieldset>
        <?php
    }
}
add_action('quick_edit_custom_box', 'display_quick_edit_custom', 10, 2);

function get_post_meta_ajax_handler() {
    // Check the nonce - security first!
    check_ajax_referer('get_post_meta_nonce', 'security');

    // Get the post ID and field names from the AJAX request
    $post_id = isset($_POST['post_id']) ? intval($_POST['post_id']) : 0;
    $meta_keys = isset($_POST['meta_keys']) ? (array) $_POST['meta_keys'] : array();

    // Prepare an array for the results
    $result = array();

    // Get the field value for each field name
    foreach ($meta_keys as $meta_key) {
        $result[$meta_key] = get_field($meta_key, $post_id);
    }

    // Return the results as a JSON object
    wp_send_json($result);
}
add_action('wp_ajax_get_post_meta', 'get_post_meta_ajax_handler');


// Populate the select field in Quick Edit
function populate_quick_edit_custom() {
    ?>
    <script type="text/javascript">
        jQuery(document).ready(function($) {
            // Hook into the 'click' event for the Quick Edit button
            $('.editinline').on('click', function() {
                var inline_data = inlineEditPost.edit(this);
                var post_id = inline_data['id'];

                // Use AJAX to get the post meta
                $.ajax({
                    url: ajaxurl,
                    type: 'POST',
                    data: {
                        action: 'get_post_meta',
                        post_id: post_id,
                        meta_keys: ['main_person', 'special_note', 'featured_item'],
                        security: '<?php echo wp_create_nonce("get_post_meta_nonce"); ?>'
                    },
                    success: function(response) {
                        $('#main_person_quick_edit').val(response['main_person']);
                        $('#special_note_quick_edit').prop('checked', response['special_note'] === '1');
                        $('#featured_item_quick_edit').prop('checked', response['featured_item'] === '1');
                    }
                });
            });
        });
    </script>
    <?php
}
add_action('admin_print_footer_scripts-edit.php', 'populate_quick_edit_custom');


// Save the new values from quick edit
function save_quick_edit_custom($post_id) {
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }
    if (isset($_POST['main_person'])) {
        update_post_meta($post_id, 'main_person', $_POST['main_person']);
    }
    if (isset($_REQUEST['special_note'])) {
        update_post_meta($post_id, 'special_note', true);
    } else {
        delete_post_meta($post_id, 'special_note');
    }
    if (isset($_REQUEST['featured_item'])) {
        update_post_meta($post_id, 'featured_item', true);
    } else {
        delete_post_meta($post_id, 'featured_item');
    }
}
add_action('save_post', 'save_quick_edit_custom');


/**
 * Hide "Person" multiselect box since this 
 * isn't how we determine Main Person or Related Persons anyway
 */
function hide_quick_edit_fields() {
    echo '<style>.inline-edit-col .title:first-child {display: none;}</style>';
    echo '<style>.inline-edit-col .person-checklist {display: none;}</style>';
    echo '<style>.column-taxonomy-person {display: none;}</style>';
}
add_action('admin_head', 'hide_quick_edit_fields');

//Readjusting width of other columns to compensate
function my_admin_styles() {
    echo '<style>
        /* Adjusting the width of the title column: */
        .column-title {
            width: 30%!important;
        }
        .column-date {
            width: 16%!important;
        }
        .column-main_person {
            width: 22%!important;
        }
    </style>';
}
add_action('admin_head', 'my_admin_styles');




/* Menus: adding specific classes to top menu */
function add_current_menu_class($classes, $item) {
    // Only add class to 'Inventory' menu item
    if ($item->title !== 'Inventory') {
        return $classes;
    }

    // if viewing an "item" or "person" CPT, highlight Inventory page
    if (is_singular('item') || is_singular('person')) { 
        $classes[] = 'current-menu-item';
    }

    return $classes;
}
add_filter('nav_menu_css_class', 'add_current_menu_class', 10, 2);

?>