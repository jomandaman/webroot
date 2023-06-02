<?php  
$max_num_pages = $wp_query->max_num_pages;
/*if (is_page('xxx')) {
	$max_num_pages = $xxx->max_num_pages;
}*/
$big = 999999999; // need an unlikely integer
$pagination = paginate_links( array(
	'base' => str_replace( $big, '%#%', get_pagenum_link( $big ) ),
	'format' => '?paged=%#%',
	'current' => max( 1, get_query_var('paged') ),
	'prev_text' => '< Previous',
	'next_text' => 'Next >',
	'total' => $max_num_pages
));

$pagination = str_replace( 'page-numbers', 'button', $pagination );
?>

<div class="pagination"><?php echo $pagination; ?></div>
