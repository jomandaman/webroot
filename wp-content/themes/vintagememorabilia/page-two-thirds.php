<?php
/*
Template Name: Page Two-Thirds
*/
?>

<?php include 'header.php'; ?>

<div class="row row-offcanvas row-offcanvas-right">
    <div class="col-xs-12 col-sm-12 maincol">
        <div class="maincolContent">
            <div class="row">
                <div class="col-sm-8 col-md-9 col-lg-9">
                    <div class="pad content-left">
                        <?php echo the_content() ?>
                    </div>
                </div>
                <div class="col-sm-4 col-md-3 col-lg-3">
                    <div class="pad content-right sidebar-light" >
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?php include 'footer.php'; ?>