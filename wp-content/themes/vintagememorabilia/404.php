<?php
/*
Template Name: 404
*/
?>

<?php include 'header.php'; ?>

<div class="row row-offcanvas row-offcanvas-right">
    <div class="col-xs-12 col-sm-12 maincol">
        <div class="maincolContent">
            <div class="pad">
                <div class="row">
                    
                    <h1>404: Page not found.</h1>
                    <p>The page you are looking for does not exist. It may have been moved, or removed altogether. Perhaps you can return back to the site's homepage and see if you can find what you are looking for.</p>
                    <p><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Back to homepage</a></p>
                    <p><a href="<?php echo esc_url( home_url( '/inventory' ) ); ?>">Go to Inventory</a></p>

                </div>
            </div>
        </div>
    </div>
</div>

<?php include 'footer.php'; ?>
