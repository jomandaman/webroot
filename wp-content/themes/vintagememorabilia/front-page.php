<?php
/*
Template Name: Front Page
*/
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<?php include 'header.php'; ?>

<div class="row row-offcanvas row-offcanvas-right">
    <div class="col-xs-12 col-sm-12 maincol">
        <div class="maincolContent">
            <div class="pad">
                <div class="row">
                    <div class="col-sm-9">
                        <div class="masterslider-stage">
                            <h4 class="ms-featured colorSwitch text bootinfo">Featured Selections</h4>
                            <!-- masterslider template -->
                            <div class="ms-showcase1" style="position: relative;">
                                <!-- masterslider -->
                                <!-- Should this whole thing be traded out for the same plugin?? -->
                                <!-- Seems like a headache getting this working how it was -->
                                <div class="master-slider ms-skin-black-2 round-skin ms-wk ms-scroll-parallax" id="masterslider-homepage" style="visibility: visible; opacity: 1; margin: 0px;">
                                    <!-- <div class="ms-container">
                                        <div class="ms-inner-controls-cont" style="max-width: 1024px;">
                                            <div class="ms-view ms-partial-wave-view ms-grab-cursor" style="width: 463px; height: 262.246px;">
                                                <div class="ms-slide-container" style="transform-style: preserve-3d; transform: translateX(-3670.2px) translateZ(0px);"> -->
                                                    <!-- Slides start -->
                                                    <!-- <div class="ms-slide" style="width: 463px; height: 262.246px; z-index: 1; left: 0px; transform: translateZ(-2378.1px) rotateY(0.01deg) translateX(2752.65px);">
                                                        <a href="/index.cfm/page/william-fargo-signed-american-express-stock-certificate-autographed-signature/" class="ms-slide-link"></a>
                                                        <div class="ms-slide-bgcont" style="height: 100%; top: 0px; opacity: 1;"><img src="/mcms_site/uploads/images/8A77A66A-1517-6111-28248F94E41D3299.jpg" alt="William G. Fargo: American Express Stock Signed" style="height: 262px; width: 393.33px; margin-top: 0px; margin-left: 35px; opacity: -2.1708;"></div>
                                                    </div> -->
                                                    <!-- <div class="ms-slide" style="width: 463px; height: 262.246px; z-index: 2; left: 463px; transform: translateZ(-2078.1px) rotateY(0.01deg) translateX(2405.4px);">
                                                        <a href="/index.cfm/page/pope-innocent-x-papal-bull-dated-1648/" class="ms-slide-link"></a>
                                                        <div class="ms-slide-bgcont" style="height: 100%; top: 0px; opacity: 1;"><img src="/mcms_site/uploads/images/85410E49-1517-6111-2891C36B2ABB3137.png" alt="Pope Innocent X: Papal Bull" style="height: 262px; width: 387.426px; margin-top: 0px; margin-left: 38px; opacity: -1.7708;"></div>
                                                    </div> -->
                                                    <!-- Slides end -->
                                                <!-- </div>
                                            </div>
                                            <div class="ms-nav-next ms-ctrl-hide" style="opacity: 0;"></div>
                                            <div class="ms-nav-prev ms-ctrl-hide" style="opacity: 0;"></div>
                                        </div>
                                    </div> -->
                                    <div class="ms-slide-info ms-dir-h ms-align-bottom" style="margin-top: 0px; position: relative; min-height: 50px;">
                                        <div class="ms-info" data-url="/index.cfm/page/ringling-bros-barnum-bailey-stock-certificate-artist-proof-blue/" style="position: relative; opacity: 1;">
                                            <h4 style="text-align:center;"> Ringling Bros.</h4>
                                            <p style="text-align:center;">Artist Proof Stock Certificate Blue</p>
                                        </div>
                                    </div>
                                    <div class="ms-timerbar ms-align-bottom" style="height: 4px; top: auto; bottom: auto; margin-top: 0px; position: relative;">
                                        <div class="ms-time-bar" style="height: 4px; background-color: rgba(204, 204, 204, 0.1); width: 0%;"></div>
                                    </div>
                                </div>
                                <!-- end of masterslider -->
                            </div>
                        </div>
                        <!-- beginning of blog pieces (3 total) -->
                        <?php 
                            $args = array( 
                                'post_type' => 'post', 
                                'posts_per_page' => 3, 
                            );

                            // The Query
                            $the_query = new WP_Query( $args );

                            // The Loop
                            if ( $the_query->have_posts() ) {
                                while ( $the_query->have_posts() ) {
                                    $the_query->the_post();
                                    ?>
                                    <div class="home-items-column" style="margin-bottom:5px;">
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <?php if(has_post_thumbnail()) : ?>
                                                    <a href="<?php echo get_permalink(); ?>"><?php the_post_thumbnail('full', array('class' => 'img-responsive')); ?></a>
                                                <?php endif; ?>
                                            </div>
                                            <div class="col-sm-9">
                                                <h4><a href="<?php echo get_permalink(); ?>" class="colorSwitch text bootinfo"><?php the_title() ?></a></h4>
                                                <p><?php the_excerpt(); ?></p>
                                                <p><a href="<?php echo get_permalink(); ?>">Read more...</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <?php
                                }
                                /* Restore original Post Data */
                                wp_reset_postdata();
                            } else {
                                // No posts found
                            }
                        ?>

                        <!-- end of blog pieces -->
                    </div>
                    <div class="col-sm-3">
                        <!-- beginning of featured pieces -->
                        <div class="home-items-column">
                            <h4 class="home-items-title colorSwitch text bootinfo">OF SPECIAL NOTE</h4>
                            <?php 
                                $special_note = get_field('special_note');
                                foreach ($special_note as $note) {
                                    $title = get_the_title($note->ID);
                                    $author = get_field('author', $note->ID); // replace 'author' with the actual custom field key
                                    $thumbnail_url = get_the_post_thumbnail_url($note->ID);
                                    echo "
                                        <a href='" . get_permalink($note->ID) . "' class='home-items'>
                                            <img src='/vintagememorabilia/wp-content/themes/vintagememorabilia/images/pages/blank_900.png' class='img-responsive' border='0' style='background-image:url(" . $thumbnail_url . ");'>
                                            <h5>$title</h5>
                                            <p>$author</p>
                                        </a>
                                    ";
                                }
                            ?>
                        </div>
                        <!-- end of featured pieces -->
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

<?php include 'footer.php'; ?>