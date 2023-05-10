<?php
/* Registering Custom Post Types */
function vintagem_register_item_post_type() {
    $labels = array(
        'name' => 'Items',
        'singular_name' => 'Item',
        'add_new' => 'Add New Item',
        'add_new_item' => 'Add New Item',
        'edit_item' => 'Edit Item',
        'new_item' => 'New Item',
        'all_items' => 'All Items',
        'view_item' => 'View Item',
        'search_items' => 'Search Items',
        'not_found' => 'No items found',
        'not_found_in_trash' => 'No items found in Trash',
    );

    $args = array(
        'labels' => $labels,
        'exclude_from_search' => false,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        'show_in_nav_menus' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'custom-fields', 'category', 'excerpt'),
        'has_archive' => false,
        'taxonomies' => array('item_category'),
    );
    register_post_type('item', $args);
}
add_action('init', 'vintagem_register_item_post_type');

/* Registering Custom Taxonomies */
function vintagem_register_person_taxonomy() {
    $labels = array(
        'name' => 'Persons',
        'singular_name' => 'Person',
        'search_items' => 'Search Persons',
        'all_items' => 'All Persons',
        'parent_item' => 'Parent Person',
        'parent_item_colon' => 'Parent Person:',
        'edit_item' => 'Edit Person',
        'update_item' => 'Update Person',
        'add_new_item' => 'Add New Person',
        'new_item_name' => 'New Person Name',
        'menu_name' => 'Persons',
    );

    $args = array(
        'hierarchical' => true,
        'labels' => $labels,
        'show_ui' => true,
        'show_admin_column' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'person'),
    );

    register_taxonomy('person', array('item'), $args);
}
add_action('init', 'vintagem_register_person_taxonomy', 0);

function vintagememorabilia_register_item_category() {
    $labels = array(
        'name'              => 'Item Categories',
        'singular_name'     => 'Item Category',
        'search_items'      => 'Search Item Categories',
        'all_items'         => 'All Item Categories',
        'parent_item'       => 'Parent Item Category',
        'parent_item_colon' => 'Parent Item Category:',
        'edit_item'         => 'Edit Item Category',
        'update_item'       => 'Update Item Category',
        'add_new_item'      => 'Add New Item Category',
        'new_item_name'     => 'New Item Category Name',
        'menu_name'         => 'Item Categories',
    );

    $args = array(
        'hierarchical'      => true,
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'item-category'),
    );

    register_taxonomy('item_category', array('item'), $args);
}
add_action('init', 'vintagememorabilia_register_item_category');


?>
