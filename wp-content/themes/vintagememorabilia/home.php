<?php
/*
Template Name: Blog
*/
?>

<?php include 'header.php'; ?>

<div class="row row-offcanvas row-offcanvas-right">
    <div class="col-xs-12 col-sm-12 maincol">
        <div class="maincolContent">
            <div class="row">
                <div class="col-sm-8 col-md-9 col-lg-9">
                    <div class="pad content-left">
                        <?php if ( have_posts() ) : ?>
                            <div style="position:relative;margin-bottom:1em;padding:1em;border:3px rgba(255,255,255,.2) double;background:rgba(0,0,0,.3);">
                                <h3 class="colorSwitch text bootinfo">Curiosities<br></h3><p>Featuring news about the historical collectibles market, museum exhibitions, auctions of note, autograph exemplars and signature studies of prominent people of interest, intriguing new items we have acquired which merit special attention, and discussions of general interest to collectors worldwide. If you would like to sign up for our newsletters,&nbsp;<a href="/index.cfm/page/Contact-Vintage-Memorabilia">you can do so here</a>. Review our&nbsp;<a href="https://www.vintagememorabilia.com/index.cfm/page/privacy-policy/">Privacy Policy</a>&nbsp;for assurance that we will never share your information.</p>
                            </div>
                            <?php while ( have_posts() ) : the_post();?>
                                <h3><a href="<?php echo get_permalink(); ?>" class="colorSwitch text bootinfo"><?php the_title(); ?></a></h3>
                                <p><strong><?php echo get_the_date('n.j.y') ?></strong> + Tags: <?php the_category(', '); ?></p> 
                                <?php if(has_post_thumbnail()) : ?>
                                    <p><a href="<?php the_permalink() ?>">
                                        <?php the_post_thumbnail('full', array('class' => 'img-responsive')); ?></a></p>
                                <?php endif; ?>
                                <p><?php echo wp_trim_words(the_content(), 20, '...'); ?></p>
                                <p>&nbsp;</p>
                                <hr>
                            <?php endwhile; ?>
							
							<?php include('inc/pagination.inc.php') ?>
                        <?php endif; ?>
                    </div>
                </div>
                <div class="col-sm-4 col-md-3 col-lg-3">
                    <div class="pad content-right sidebar-light" >
                        <?php if ( is_active_sidebar( 'posts-sidebar' ) ) {
                            dynamic_sidebar( 'posts-sidebar' );
                        } ?>  
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?php include 'footer.php'; ?>