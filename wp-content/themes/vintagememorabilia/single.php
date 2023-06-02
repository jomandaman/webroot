<?php
/*
Template Name: Post
*/
?>

<?php include 'header.php'; ?>

<div class="row row-offcanvas row-offcanvas-right">
    <div class="col-xs-12 col-sm-12 maincol">
        <div class="maincolContent">
            <div class="row">
            <?php while ( have_posts() ) : the_post(); ?>		
                <div class="col-sm-8 col-md-9 col-lg-9">
                    <div class="pad content-left">
                        <h3><a href="<?php the_permalink() ?>" class="colorSwitch text bootinfo"><?php the_title() ?></a></h3>
                        <p><strong><?php echo get_the_date('n.j.y') ?></strong> + Tags: <?php the_category(', '); ?></p>                        
                        <?php if(has_post_thumbnail()) : ?>
                            <p><a href="<?php the_permalink() ?>">
                                <?php the_post_thumbnail('full', array('class' => 'img-responsive')); ?></a></p>
                        <?php endif; ?>                        
                        <p><?php the_content() ?></p>
                        <br>
                        <hr>
                        <?php $newer_post = get_next_post();  ?>
                        <?php $older_post = get_previous_post(); ?>

                        <div class="col-sm-4 hidden-xs">
                            <?php if (!empty($newer_post)): ?><p style="color:#999;"><i class="fa fa-chevron-circle-left" aria-hidden="true"></i>&nbsp; Newer</p><?php endif; ?>
                        </div>

                        <div class="col-sm-4">
                            <p style="text-align:center;"><strong><a href="<?php echo esc_url(home_url('/')); ?>blog/">All Entries</a></strong></p>
                        </div>
                        
                        <div class="col-sm-4 hidden-xs">
                            <?php if (!empty($older_post)): ?>
                                <p style="color:#999;text-align:right;">Older &nbsp;<i class="fa fa-chevron-circle-right" aria-hidden="true"></i></p>
                            <?php endif; ?>
                        </div>

                        <div class="col-sm-6">
                            <?php if (!empty($newer_post)): ?>
                                <p><a href="<?php echo get_permalink($newer_post->ID); ?>">
                                    <?php echo wp_trim_words(get_the_title($newer_post->ID), 4, '...'); ?></a>
                                </p>
                            <?php endif; ?>
                        </div>

                        <div class="col-sm-6">
                            <?php if (!empty($older_post)): ?>
                                <p style="text-align:right;"><a href="<?php echo get_permalink($older_post->ID); ?>">
                                    <?php echo wp_trim_words(get_the_title($older_post->ID), 4, '...'); ?></a>
                                </p>
                            <?php endif; ?>
                        </div>
                        <div class="clearfix"></div>
                        <hr>
                    </div>
                </div>
                <div class="col-sm-4 col-md-3 col-lg-3">
                    <div class="pad content-right sidebar-light" >
                        <?php if ( is_active_sidebar( 'posts-sidebar' ) ) {
                            dynamic_sidebar( 'posts-sidebar' );
                        } ?>    
                        <!-- <h5 style="margin-top:0px;">Search Entries</h5>
                        <form action="/index.cfm" method="get" class="blogSidebar">
                            <div class="input-group">
                                <input type="text" name="search" value="" class="form-control">
                                <span class="input-group-addon btn"><i class="fa fa-search" aria-hidden="true"></i></span>
                            </div>
                            <input type="hidden" name="pageID" value="0E4D31F4-1517-6111-2866F61EDBC0BAED">
                            <input type="hidden" name="mcmsNoCache" value="1">
                        </form>
                        <hr>
                        <div class="twocol33p left">
                            <h5>Recent Posts</h5>
                            <select class="blogSidebar form-control">
                                <option value="">Select a post...</option>
                                <option value="" disabled="disabled">------</option>
                                <option value="/index.cfm/page/notebook-by-17th-century-shakespeare-scholar-leaves-expert-trembling/">Notebook by unknown 17th-century Shakespeare scholar leaves expert 'trembling'</option>
                                <option value="/index.cfm/page/78C625D4-1517-6111-288FB72763F4F8E0/">Personal Letters from Great Composers - Christie's</option>
                                <option value="/index.cfm/page/7-important-things-to-know-about-artist-signatures-christies/">7 Important Things to Know About Artist Signatures - Christie's</option>
                            </select>
                        </div>
                        <div class="twocol33p left">
                            <h5>Categories</h5>
                            <select class="blogSidebar form-control">
                                <option value="">Select a category...</option>
                                <option value="" disabled="disabled">------</option>
                                <option value="/index.cfm/tag/Authors/page/blog/">Authors</option>
                                <option value="/index.cfm/tag/Fine-Art-Signatures/page/blog/">Fine Art Signatures</option>
                                <option value="/index.cfm/tag/Music/page/blog/">Music</option>
                                <option value="/index.cfm/tag/Signature-Studies/page/blog/">Signature Studies</option>
                                <option value="/index.cfm/tag/Abraham-Lincoln/page/blog/">Abraham Lincoln</option>
                                <option value="/index.cfm/tag/Agatha-Christie/page/blog/">Agatha Christie</option>
                                <option value="/index.cfm/tag/Albert-Einstein/page/blog/">Albert Einstein</option>
                                <option value="/index.cfm/tag/Pablo-Picasso/page/blog/">Pablo Picasso</option>
                                <option value="/index.cfm/tag/Arts-Literature/page/blog/">Arts &amp; Literature</option>
                                <option value="/index.cfm/tag/Science-Aviation/page/blog/">Science &amp; Aviation</option>
                            </select>
                        </div>
                        <div class="twocol33p left">
                            <h5>Archives</h5>
                            <select class="blogSidebar form-control">
                                <option value="">Select a month...</option>
                                <option value="" disabled="disabled">------</option>
                                <option value="/index.cfm/archives/2017-06/page/blog/">June 2017</option>
                            </select>
                        </div>
                        <hr>
                        <a href="https://www.vintagememorabilia.com/mcms_site/incs/rss.cfm?feed=blog" target="_blank"><i class="fa fa-rss-square fa-2x" aria-hidden="true"></i></a> -->
                    </div>
                </div>
            <?php endwhile;	?>	    
            </div>
        </div>
    </div>
</div>

<?php include 'footer.php'; ?>