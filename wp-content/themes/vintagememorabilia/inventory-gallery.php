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
                            // Loaded via js

                        } else { // assume inventory
                            // Loaded via js                          
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