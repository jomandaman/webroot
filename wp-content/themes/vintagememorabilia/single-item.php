
<?php include 'header.php'; ?>
<?php $current_url = get_permalink(); ?>

<div class="row row-offcanvas row-offcanvas-right">
  <div class="col-xs-12 col-sm-12 maincol">
    <div class="maincolContent">
      <div class="pad">
        <?php $persons = wp_get_post_terms(get_the_ID(), 'person');
          if (!empty($persons)) {
              $person = $persons[0];
              echo '<h3 class="pagetitle">' . esc_html($person->name) . '</h3>';
        }?>
        <p class="category-breadcrumb">
          <a class="category" href="/inventory/">
            All Categories
          </a>
          <?php  $persons = wp_get_post_terms(get_the_ID(), 'person');
            if (!empty($persons)) {
                $person = $persons[0];
                $person_link = get_term_link($person);
                echo '<a class="category" href="' . esc_url($person_link) . '">' . esc_html($person->name) . '</a>';
          }?>
          <span class="category">
            <?php the_title(); ?>
          </span>
          <?php
            $related_persons = get_field('related_persons');
            if ($related_persons) {
                echo '<span class="related">Related: ';
                $related_persons_links = [];
                foreach ($related_persons as $related_person) {
                    $person_link = get_term_link($related_person->term_id, 'person');
                    $related_persons_links[] = "<a href='{$person_link}'>{$related_person->name}</a>";
                }
                echo implode(', ', $related_persons_links);
                echo '</span>';
            }
          ?>
        </p>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <?php $persons = wp_get_post_terms(get_the_ID(), 'person');
            if (!empty($persons)) {
                $person = $persons[0];
                echo '<h1 class="hidden">' . esc_html($person->name) . '</h1>';
          }?>
          <h2>
            <!-- Signed Book: Dreams From My Father - 2004 -->
            <?php the_title(); ?>
            <?php if (get_field('year')): ?>
						- <?php the_field('year'); ?>
						<?php endif; ?>
          </h2>
        </div>
        <div class="col-sm-4">
          <div class="pad content-left sidebar-light actionBar">
            <div class="product-imgs visible-xs visible-sm visible-md visible-lg">
              <?php if (has_post_thumbnail()): ?>
                  <a class="zoomLink product-img-main" data-preview="<?php the_post_thumbnail_url(); ?>" href="<?php the_post_thumbnail_url(); ?>" target="_blank">
                      <img border="0" src="<?php the_post_thumbnail_url(); ?>" />
                  </a>
              <?php endif; ?>
              <?php 
                $images = get_field('images');
                if ($images) {
                    echo '<div class="product-imgs-links">';
                    foreach ($images as $image) {
                        echo '
                        <a href="' . $image['url'] . '" class="zoomLink product-img-sm" data-preview="' . $image['url'] . '">
                          <img src="' . $image['url'] . '" alt="' . $image['alt'] . '">
                        </a>
                        ';
                    }
                    echo '</div>';
                }
              ?>
              <div class="close-zoom">
                <a href="#">
                  <i class="fa fa-times-circle">
                  </i>
                  Close Zoom
                </a>
              </div>
            </div>
            <div class="visible-xs mobileZoom">
            </div>
            <div class="row">
              <div class="col-xs-5">
                <h4 class="price">
                  <?php 
                    $is_sold = get_field('sold');
                    if ($is_sold) {
                      echo "<span style='color:red;'>SOLD</span>";
                    } else {
                      $item_price = get_field('price');
                      echo "\${$item_price}";
                    }
                  ?>
                </h4>
              </div>
              <?php if (get_field('itemNum')): ?>
                <div class="col-xs-7">
                  <h4 class="pull-right price mdgray">
                    <small>
                      Item
                    </small>
                    # <?php the_field('itemNum'); ?>
                  </h4>
                </div>
              <?php endif; ?>
            </div>
            <a class="actionLink bright" href="#formPurchase">
              <i class="fa fa-shopping-cart">
              </i>
              Purchase
            </a>
            <!-- The link below needs to be a custom link to the contact page regarding this item. -->
            <a class="actionLink" href="/index.cfm/category/All-Categories/page/Contact-Vintage-Memorabilia/item/FAC19C31-3048-C0CE-55E2E4F225E086A2/">
              <i class="fa fa-envelope">
              </i>
              Inquire
            </a>
            <a class="actionLink" href="#formPriceReduced">
              <i class="fa fa-exclamation-circle">
              </i>
              Price Change Alerts
            </a>
            <!-- AddThis Button BEGIN -->
            <div class="addthis_toolbox">
              <a class="addthis_button_facebook action_button" title="Share On Facebook">
                <i class="fa fa-facebook">
                </i>
              </a>
              <a class="addthis_button_twitter action_button" title="Share On Twitter">
                <i class="fa fa-twitter">
                </i>
              </a>
              <a class="addthis_button_linkedin action_button" title="Share On LinkedIn">
                <i class="fa fa-linkedin">
                </i>
              </a>
              <a class="addthis_button_google_plusone_share action_button" title="Share On Google+">
                <i class="fa fa-google-plus">
                </i>
              </a>
              <a class="addthis_button_pinterest_share action_button" title="Share On Pinterest">
                <i class="fa fa-pinterest-p">
                </i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-8">
          <div class="pad content-right">
            <div id="detailText">
              <?php the_content(); ?>
            </div>
            <div class="visible-sm visible-md visible-lg">
              <div class="hidden" id="detailZoom">
                <div class="linkContainer" data-title="<?php the_title(); ?>">
                  <div class="close-zoom">
                    <a href="#">
                      <i class="fa fa-times-circle">
                      </i>
                      Close
                    </a>
                  </div>
                  <div class="instructions">
                    To zoom in on the details: Hover your mouse over the image to magnify. Click anywhere inside to
                    enlarge the whole image.
                  </div>
                  <div class="zoom-images">
                  </div>
                  <div class="close-zoom">
                    <a href="#">
                      <i class="fa fa-times-circle">
                      </i>
                      Close
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="hidden" id="formPurchase">
              <div class="formWrap formPurchase">
                <div class="formWrapInner">
                  <div class="row">
                    <div class="col-sm-12">
                      <span class="titleForm">
                        Purchase This Item
                      </span>
                      <span class="byline">
                        Please provide the information requested below to purchase the item you have selected.
                        We accept most major credit cards or wire transfer for select international orders.
                      </span>
                      <span class="byline" style="padding-bottom:1em;">
                        PLEASE NOTE: This form is
                        <i style="font-style:normal;text-decoration:underline;">
                          not
                        </i>
                        a binding purchase agreement. You incur no obligation by submitting invoice details. If the
                        invoice has not been paid within three (3) days, it will simply expire, and the item will be
                        returned to inventory.
                      </span>
                    </div>
                    <div class="col-xs-12 col-sm-7 col-md-8 col-lg-9">
                      <span class="byline">
                        All Vintage Memorabilia autographs are unconditionally guaranteed to be genuine.
                        This guarantee applies to refund of the purchase price, and is without time limit to the
                        original purchaser.
                        A written and signed unconditional guarantee to that effect accompanies each item we sell.
                      </span>
                    </div>
                    <div class="col-xs-8 col-xs-offset-2 col-sm-5 col-sm-offset-0 col-md-4 col-md-offset-0 col-lg-3 col-lg-offset-0">
                      <div style="padding-bottom:1em;">
                        <img border="0" class="img-responsive" src="<?php echo get_template_directory_uri() ?>/images/seal_authenticity.png" />
                      </div>
                    </div>
                  </div>
                  <div class="forminfo hidden">
                    <?php $persons = wp_get_post_terms(get_the_ID(), 'person');
                      if (!empty($persons)) {
                          $person = $persons[0];
                          echo '<span class="forminfo-data" rel="person">' . esc_html($person->name) . '</span>';
                    }?>
                    <span class="forminfo-data" rel="item">
                      <?php the_title(); ?>
                    </span>
                    <span class="forminfo-data" rel="sku">
                      <?php if (get_field('itemNum')): ?>
                        <?php the_field('itemNum'); ?>
                      <?php endif; ?>
                    </span>
                    <span class="forminfo-data" rel="img">
                      <?php the_post_thumbnail_url(); ?>
                    </span>
                    <span class="forminfo-data" rel="url">
                        <?php echo esc_url($current_url); ?>
                    </span>
                  </div>
                  <div class="row">
                    <div class="col-sm-12">
                      <form action="" autocomplete="off" method="post" style="">
                        <h3 style="margin-top:0;">
                          Contact Information
                        </h3>
                        <label for="name">
                          Name:
                        </label>
                        <input autocomplete="off" class="form-control" name="name" type="text" value="">
                        <label for="email">
                          Email address:
                        </label>
                        <input autocomplete="off" class="form-control" name="email" type="text" value="">
                        <label for="phone">
                          Phone number:
                        </label>
                        <input autocomplete="off" class="form-control" name="phone" type="text" value="">
                        <label for="contact">
                          How would you prefer to be contacted?
                        </label>
                        <span class="byline">
                          <input name="contact_phone" type="checkbox" value="1" />
                          Phone
                          <input name="contact_email" type="checkbox" value="1" />
                          Email
                        </span>
                        <h3>
                          Shipping Address
                        </h3>
                        <label for="address">
                          Where would you like your item shipped (someone may have to sign for it)?
                        </label>
                        <textarea class="form-control" name="address" style="resize:vertical;"></textarea>
                        <label for="instructions">
                          Do you have special shipping instructions?
                        </label>
                        <textarea class="form-control" name="instructions" style="resize:vertical;"></textarea>
                        <h3>
                          Payment
                        </h3>
                        <span class="byline">
                          An invoice will be sent to the email address indicated above for remittance of payment via
                          Square,
                          our secure payment processor. Once paid, your item will be carefully packaged and prepared
                          for shipment
                          within two business days. Pricing quoted on invoice provided is valid for three (3) days,
                          and
                          unpaid invoices will expire at that time unless other arrangements have been made.
                          <br />
                          <br />
                          We ship all items by US Postal Service Priority Mail Insured, in most cases with signature
                          required.
                          Such fees will be added to the invoice.
                        </span>
                        <input class="btn btn-rounded" name="doSubmit" type="submit" value="Submit For Purchase" />
                        <input name="person" type="hidden" value="Barack Obama" />
                        <input name="item" type="hidden" value="Signed Book: Dreams From My Father" />
                        <input name="sku" type="hidden" value="3220" />
                        <input name="img" type="hidden" value="https://www.vintagememorabilia.com/vm_site/uploads/images/thumblg_FAC19CED-3048-C0CE-5564925ABDC6A189.jpg" />
                        <input name="url" type="hidden" value="https://www.vintagememorabilia.com/index.cfm/page/barack-obama-dreams-from-my-father-signed-autographed-book/" />
                        </input>
                        </input>
                        </input>
                      </form>
                      <br />
                      <br />
                      <span class="byline">
                        <em>
                          * Our
                          <a href="/index.cfm/page/privacy-policy/" target="_blank">
                            privacy policy
                          </a>
                          ensures complete confidentiality.
                        </em>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="hidden" id="formPriceReduced">
              <div class="formWrap formPriceReduced">
                <div class="formWrapInner">
                  <div class="row">
                    <div class="col-sm-12">
                      <span class="titleForm">
                        Preferred Price Alert
                      </span>
                      <span class="byline">
                        From time to time, the price of collectible memorabilia changes — either higher if its value
                        increases, or lower when we reduce certain items to acquire new inventory. If you would like
                        to be notified
                        <strong>
                          <em>
                            in advance
                          </em>
                        </strong>
                        when the price of this item changes, simply provide your name and email address*.
                      </span>
                      <form action="" autocomplete="off" method="post" style="">
                        <label for="name">
                          My name:
                        </label>
                        <input autocomplete="off" class="form-control" name="name" type="text" value="" />
                        <label for="email">
                          My email address:
                        </label>
                        <input autocomplete="off" class="form-control" name="email" type="text" value="" />
                        <label for="newsletter">
                          Sign up for our mailings?
                        </label>
                        <span class="byline">
                          <input checked="checked" name="newsletter" type="radio" value="yes" />
                          Yes
                          <input name="newsletter" type="radio" value="no" />
                          No
                        </span>
                        <input class="btn btn-rounded" name="doSubmit" type="submit" value="Get Price Alerts" />
                        <input name="person" type="hidden" value="Barack Obama" />
                        <input name="item" type="hidden" value="Signed Book: Dreams From My Father" />
                        <input name="sku" type="hidden" value="3220" />
                        <input name="img" type="hidden" value="http://www.vintagememorabilia.com/vm_site/uploads/images/thumblg_FAC19CED-3048-C0CE-5564925ABDC6A189.jpg" />
                        <input name="url" type="hidden" value="http://www.vintagememorabilia.com/index.cfm/page/barack-obama-dreams-from-my-father-signed-autographed-book/" />
                      </form>
                      <br />
                      <br />
                      <span class="byline">
                        <em>
                          * Our
                          <a href="/index.cfm/page/privacy-policy/" target="_blank">
                            privacy policy
                          </a>
                          ensures complete confidentiality.
                        </em>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <?php include 'footer.php'; ?>