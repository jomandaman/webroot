<?php
/*
Template Name: Index
*/
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<?php include 'header.php'; ?>

<div class="row row-offcanvas row-offcanvas-right">
    <div class="col-xs-12 col-sm-12 maincol">
        <div class="maincolContent">
            <?php while ( have_posts() ) : the_post(); ?>		
				<h1><?php the_title(); ?></h1>
				<?php the_content(); ?>
			<?php endwhile;	?>	
			
			<?php include('inc/pagination.inc.php') ?>
        </div>
    </div>
</div>

<?php include 'footer.php'; ?>