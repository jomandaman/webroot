<?php
get_header();

$search_query = get_search_query();
?>


<div class="row row-offcanvas row-offcanvas-right">
    <div class="col-xs-12 col-sm-12 maincol">
        <div class="maincolContent">
            <div class="row">
            <?php 
			if ( have_posts() ) : 
				global $wp_query;
			?>		
                <div class="col-sm-8 col-md-9 col-lg-9">
                    <div class="pad content-left">
						<h2>Search Results</h2>
						
						<p>Your search for pages with all of the words "<?php echo $search_query; ?>" returned <?php echo $wp_query->found_posts; ?> result(s).<p>
						
						<?php while ( have_posts() ) : the_post();  ?>				
						
							 <div class="home-items-column" style="margin-bottom:5px;">
								<div class="row">
									<div class="col-sm-3">
										<?php if(has_post_thumbnail()) : ?>
											<a href="<?php echo get_permalink(); ?>"><?php the_post_thumbnail('thumbnail', array('class' => 'img-responsive')); ?></a>
										<?php endif; ?>
									</div>
									<div class="col-sm-9">
										<h4><a href="<?php echo get_permalink(); ?>" class=""><?php the_title() ?></a></h4>
										<p><?php the_excerpt(); ?></p>
									</div>
								</div>
							</div>
							
						<?php endwhile;	?>
						
						<hr />						
											
						<div class="row">
							<form action="<?php echo esc_url( home_url( '/' ) ); ?>" method="get">
							<div class="col-sm-12">
								<h4>Search again?</h4>
							</div>
							<div class="col-sm-4">
								<input type="hidden" name="view" value="search">
								<span rel="category">Keyword or phrase:</span>
								<input type="text" name="s" value="<?php the_search_query(); ?>" class="form-control">
							</div>
							<div class="col-sm-4">								
							</div>
							<div class="col-sm-12">
							</div>
							<div class="col-sm-4">
								<br>
								<input name="submit" type="submit" value="Search" class="btn btn-block submit">						
							</div>
							</form>
						</div>
						
                    </div>
                </div>
			<?php 
			else :
				echo '<p>No results found</p>';
			endif;
			?>				
            </div>
        </div>
    </div>
</div>


	
<?php get_footer( ); ?>