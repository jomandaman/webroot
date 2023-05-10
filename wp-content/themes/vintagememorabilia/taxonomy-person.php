<?php
/*
Template Name: Person Taxonomy
*/
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<?php include 'header.php'; ?>

<div class="row row-offcanvas row-offcanvas-right">
    <div class="col-xs-12 col-sm-12 maincol">
        <div class="maincolContent">
            <div class="pad">
                <?php
                    $term = get_queried_object();

                    $current_url = get_permalink();
                    $display_name = $term->name;
                
                    echo "<h3 class='pagetitle'>{$display_name}</h3>
                            <p class='category-breadcrumb'>
                                <a href='/vintagememorabilia/inventory/' class='category'>All Categories</a>
                                <a href='{$current_url}' class='detailname'>{$display_name}</a>
                            </p>
                            <div class='category-links clearfix'>";
                
                    $args = array(
                        'post_type' => 'item',
                        'posts_per_page' => -1, // Show all items, or set a specific number
                        'tax_query' => array(
                            array(
                                'taxonomy' => 'person',
                                'field' => 'slug',
                                'terms' => get_queried_object()->slug,
                            ),
                        ),
                    );

                    $query = new WP_Query($args);

                    if ($query->have_posts()) {
                        while ($query->have_posts()) {
                            $query->the_post();
                            $item_title = get_the_title();
                            $item_year = get_field('year');
                            $item_permalink = get_permalink();
                            $item_image_url = get_the_post_thumbnail_url(null, 'large');
                            $item_description = get_the_excerpt();
                            $item_price = get_field('price');
                            $is_sold = get_field('sold');
                    
                            echo "<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3'>
                                <a href='{$item_permalink}' class='category-links-item'>
                                    <span class='category-links-img' style='background-image:url({$item_image_url});'>
                                    </span>
                                    <span class='category-links-caption'>
                                        <strong>{$item_title}<span> ~ {$item_year}</span></strong>
                                        {$item_description}
                                        <br><br>";
                                        if ($is_sold) {
                                            echo "<span style='color:red;'>SOLD</span>";
                                        } else {
                                            echo "<span class='price'>\${$item_price}</span>";
                                        }
                                    echo "</span>
                                </a>
                            </div>";
                        }
                        wp_reset_postdata();
                    }
                    

                    echo "</div>";
                ?>
            </div>
        </div>
    </div>
</div>

<?php include 'footer.php'; ?>
