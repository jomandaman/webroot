<?php
/*
Template Name: Inventory and Gallery
*/
?>

<?php include 'header.php'; ?>

<div class="row row-offcanvas row-offcanvas-right">
    <div class="col-xs-12 col-sm-12 maincol">
        <div class="maincolContent">
            <div class="pad">
                <?php
                    $is_inventory_page = is_page('inventory');
                    $is_gallery_page = is_page('gallery');

                    if ($is_inventory_page) {
                        echo "<h3 class='pagetitle'>INVENTORY BY CATEGORY &amp; NAME</h3>";
                    } elseif ($is_gallery_page) {
                        echo "<h3 class='pagetitle'>GALLERY Testing</h3>";
                    }

                    $categories = get_terms(array(
                        'taxonomy' => 'item_category',
                        'hide_empty' => false,
                        'meta_key' => 'order_number',
                        'orderby' => 'meta_value_num',
                        'order' => 'ASC',
                    ));

                    foreach ($categories as $index => $category) { // for each category
                        if ($category->name === 'Uncategorized') {
                            continue;
                        }
                        
                        $category_slug = $category->slug;
                        $category_name = $category->name;
                        $category_description = $category->description;

                        // Display every category
                        echo "<div class='category-items clearfix' data-index='{$index}' data-key='{$category_slug}' data-type='gallery'>
                                    <div class='category-title'>
                                        <h3 title='{$category_slug}'>
                                            {$category_name}
                                            <span class='pull-right expand'><span class='togglelabel'>Expand </span><i
                                                    class='fa fa-caret-down'></i></span> <span class='pull-right collapse'><span
                                                    class='togglelabel'>Close </span><i class='fa fa-caret-up'></i></span>
                                        </h3>
                                        <h4>{$category_description}</h4>
                                    </div>
                                    <div class='category-links hidden'>
                                        <div class='category-links-columns'>";

                        if ($is_gallery_page) {
                            $args = array(
                                'post_type' => 'item',
                                'posts_per_page' => -1,
                                'tax_query' => array(
                                    array(
                                        'taxonomy' => 'item_category',
                                        'field' => 'slug',
                                        'terms' => $category_slug,
                                    ),
                                ),
                            );
                            $items = new WP_Query($args);
    
                            // Display every person
                            if ($items->have_posts()) {
                                while ($items->have_posts()) {
                                    $items->the_post();
                                    echo "Found items: <pre>" . print_r($items->posts, true) . "</pre><br>";

                                }
                            } else {
                                echo "<p>No items found in this category.</p>";
                            }  

                        } else { // assume inventory
                            $args = array(
                                'post_type' => 'item',
                                'posts_per_page' => -1,
                                'tax_query' => array(
                                    array(
                                        'taxonomy' => 'item_category',
                                        'field' => 'slug',
                                        'terms' => $category_slug,
                                    ),
                                ),
                            );
                            $items = new WP_Query($args);
    
                            // Display every person
                            if ($items->have_posts()) {
                                $displayed_persons = array();
                                while ($items->have_posts()) {
                                    $items->the_post();
                                    $person_terms = get_the_terms(get_the_ID(), 'person');
                                    $related_persons = get_field('related_persons');
                                    
                                    $all_persons = array();
                                    if ($person_terms && !is_wp_error($person_terms)) {
                                        $all_persons = array_merge($all_persons, $person_terms);
                                    }
                                    if ($related_persons) {
                                        $all_persons = array_merge($all_persons, $related_persons);
                                    }
                            
                                    foreach ($all_persons as $person) {
                                        if ($person->name != "Group Autographs" && !in_array($person->term_id, $displayed_persons)) {
                                            $displayed_persons[] = $person->term_id;
                                            $first_name = get_field('first_name', 'person_' . $person->term_id);
                                            $last_name = get_field('last_name', 'person_' . $person->term_id);
                                            $display_name = $last_name . ', ' . $first_name;
                                            $item_link = get_permalink();
                                            $person_link = get_term_link($person);
                                            echo "<a href='{$person_link}'>{$display_name}</a>";
                                        }
                                    }
                                }
                            } else {
                                echo "<p>No items found in this category.</p>";
                            }
                        }

                        echo "      </div>
                                    </div>
                                </div>";
                    }
                ?>
            </div>
        </div>
    </div>
</div>

<?php include 'footer.php'; ?>