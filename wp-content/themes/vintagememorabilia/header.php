<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php wp_title(); ?></title>
  <link href="/images/favicon.ico" rel="icon" />
  <!-- <link href="https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800" rel="stylesheet" type="text/css" />
  <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i" rel="stylesheet" type="text/css" /> -->
  <script src="https://use.fontawesome.com/a5a10d16d3.js"></script> <!-- Important for social icons -->
  <!-- Google tracking code removed here-->
  </meta>
  <?php wp_head();?>
</head>

<?php
$body_class = '';
if (is_front_page()) {
    $body_class = 'Home';
} elseif (is_page('inventory')) {
    $body_class = 'Inventory';
} elseif (is_singular('item')) {
    $body_class = 'Inventory-Item-Detail';
} elseif (is_page('gallery')) {
    $body_class = 'Gallery';
} elseif (is_page('blog')) {
    $body_class = 'Blog';
} elseif (is_page('contact')) {
    $body_class = 'Contact';
} elseif (is_page('refer')) {
    $body_class = 'Refer';
} elseif (is_tax('person')) {
    $body_class = 'Inventory-Items';
}
?>

<body class="<?php echo $body_class; ?>">
  <div class="container" id="VMSite">

    <nav class="navbar navbar-inverse navbar-fixed-top hidden">
      <div class="container-fluid">
        <div class="navbar-header clearfix">
          <button class="navbar-toggle" type="button">
            <span class="sr-only">
              Toggle navigation
            </span>
            <i class="fa fa-bars">
            </i>
            Menu
          </button>
          <div class="navbar-brand">
            <div class="input-group nav-search">
              <span class="input-group-addon sitesearch-logo">
                <a href="/index.php">
                  <img alt="Vintage Memorabilia - Fine Autographs Of Interest &amp; Distinction" src="<?php echo get_template_directory_uri() ?>/images/logo-only.png" />
                </a>
              </span>
              <form action="<?php echo esc_url( home_url( '/' ) ); ?>" method="get">
                <input aria-label="Search" class="form-control search-input" name="s" placeholder="Search" id="sitesearch1" type="text" value="<?php the_search_query(); ?>" />
              </form>
              <span class="input-group-addon sitesearch-submit" data-target="sitesearch1">
                <i class="fa fa-search"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="row" id="logobar">
      <div class="col-sm-8 col-xs-12 nav-logo">
        <img alt="Vintage Memorabilia - Fine Autographs Of Interest &amp; Distinction" class="img img-responsive" src="<?php echo get_template_directory_uri() ?>/images/logo.png" />
        <div id="tagline">
          Fine Autographs of Interest &amp; Distinction since 1998
        </div>
      </div>
      <div class="col-sm-4 hidden-xs">
      <div class="input-group nav-search">					
        <form action="<?php echo esc_url( home_url( '/' ) ); ?>" method="get">
          <input aria-label="Search" class="form-control search-input" name="s" placeholder="Search" id="sitesearch2" type="text" value="<?php the_search_query(); ?>" />
        </form>
        <span class="input-group-addon sitesearch-submit" data-target="sitesearch2">
          <i class="fa fa-search"></i>
        </span>			  
      </div>
      </div>
    </div>

    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header clearfix">
          <button aria-controls="navbar" aria-expanded="false" class="navbar-toggle collapsed hidden" data-target="#navbar" data-toggle="collapse" type="button">
            <span class="sr-only">
              Toggle navigation
            </span>
            <i class="fa fa-bars">
            </i>
            Menu
          </button>
          <button class="navbar-toggle" type="button">
            <span class="sr-only">
              Toggle navigation
            </span>
            <i class="fa fa-bars">
            </i>
            Menu
          </button>
          <div class="navbar-brand visible-xs">
            <div class="input-group nav-search">
              <form action="<?php echo esc_url( home_url( '/' ) ); ?>" method="get">
                <input aria-label="Search" class="form-control search-input" name="s" placeholder="Search" id="sitesearch3" type="text" value="<?php the_search_query(); ?>" />
              </form>
              <span class="input-group-addon sitesearch-submit" data-target="sitesearch3">
                <i class="fa fa-search"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="navbar-collapse collapse" id="navbar">
          <ul class="nav navbar-nav">
            <?php 
              wp_nav_menu( array( 
                'theme_location' => 'header-menu', 
                'container' => false,
                'items_wrap' => '<ul class="nav navbar-nav">%3$s</ul>',
                // 'walker' => new My_Walker_Nav_Menu()
            ) );            
            ?>
          </ul>
        </div>
      </div>
    </nav>