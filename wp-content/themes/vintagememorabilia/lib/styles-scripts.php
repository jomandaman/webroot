<?php
/* Enqueue Scripts */
function my_enqueue_scripts() {
	// CSS
	wp_enqueue_style( 'adobe-typekit', 'https://use.typekit.net/nko6yai.css', false);
	wp_enqueue_style( 'theme-global-css', get_template_directory_uri() .'/css/global.min.css', array(), get_file_version('/css/global.min.css'));
    wp_enqueue_style( 'theme-magiczoomplus-css', get_template_directory_uri() .'/css/magiczoomplus.5.2.1.css', array(), get_file_version('/css/magiczoomplus.5.2.1.css'));

	// JS 
	wp_enqueue_script( 'theme-global-js', get_template_directory_uri() .'/js/global.min.js', array('jquery'), get_file_version('/js/global.min.js'), true );
}

add_action( 'wp_enqueue_scripts', 'my_enqueue_scripts' );

?>